import { isValidRequest } from "@sanity/webhook"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  message: string
}

const secret:any = process.env.SANITY_WEBHOOK_SECRET


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    console.error("Must be a POST request")
    return res.status(401).json({ message: "Must be a POST request" })
  }

  
  if (!isValidRequest(req, secret)) {
    res.status(401).json({ message: "Invalid signature" })
    return
  }

  try {
    const {
      body: { _type, slug },
    } = req

    switch (_type) {
      case "post":
        await res.unstable_revalidate(`/blogs/${slug.current}`)
        return res.json({ message: `Revalidated "${_type}" with slug "${slug.current}"` })
    }

    return res.json({ message: "No managed type" })
  } catch (err) {
    return res.status(500).send({ message: "Error revalidating" })
  }
}