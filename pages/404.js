import Link from "next/link";
import Head from "next/head";

import Layout from "@components/Layout";

const ErrorPage = () => {
  return (
    <div>
      <Head>
        <title>404 | Page not found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="">
          <div className="mx-auto text-center max-w-4xl px-6 lg:px-0 ">
            <div>
              <h1 className="h1 mb-6 lg:mb-8">Page not found</h1>
              <p>
                We’re sorry but we can’t seem to find the page you’re looking
                for.
              </p>
              <Link href="/">
                <a>Return home</a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default ErrorPage;
