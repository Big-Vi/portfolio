import React, { useState, useEffect } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@components/Layout'
import { useForm } from "react-hook-form"
import * as Realm from "realm-web";
import {getRealmApp} from '../getRealmApp';
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  // Access the Realm App.
  const app = getRealmApp();
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false)
  const { register, reset, handleSubmit, formState: { errors }  } = useForm() 

  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const [error, setError] = useState('')

  const submit = async (e: any) => {
        setSubmitting(true)
        const { token, tokenId } = router.query;
        console.log(token);
        try {
          await app.emailPasswordAuth.resetPassword("222222", token, tokenId);
        } catch (error) {
          setError('error');
        }
    
        if (error) {
            // 4. If there was an error, update the message in state.
            setMessage("Something went wrong. Please try again later.")
            setSuccess(false)
            setSubmitting(false)
            return
        }

        // 5. Clear the input value and show a success message.
        setTimeout(() => {
            reset()
            setSubmitting(false)
            setSuccess(true)
        }, 500)
  }

  return (
    <div>
      <Head>
        <title>Vignesh Murugan | Full stack developer</title>
        <meta name="description" content="I'm Vignesh and full-stack developer currently working for Plato Creative in Christchurch New Zealand." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <form id="reset-form">

          <label className="block mb-4 xl:mb-6">
              <input autoComplete="off" {...register('password', {required: true})} type="password" name="password" placeholder="Enter password" className="border border-black w-full p-2"/>
              {errors.password && errors.password.type === "required" && <span className="validation text-error">Password field is required</span>}
          </label>

          <button onClick={handleSubmit(submit)} className={`mx-auto button cursor-pointer mt-2 mb-4 ${ submitting ? "disabled" : "" } `}>
              { submitting ? "Resetting" : "Reset" }
          </button>
          <br/>
        </form>
      </Layout>
    </div>
  )
}

export default Home
