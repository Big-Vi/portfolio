import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="mt-20 pb-20">
        <div className="text-gray-500">
          <div className="flex flex-col justify-between lg:flex-row">
            <p>
              Built with{" "}
              <a
                href="https://nextjs.org" target="_blank" rel="noreferrer"
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://sanity.io" target="_blank" rel="noreferrer"
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
              >
                Sanity.io
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com" target="_blank" rel="noreferrer"
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
              >
                Tailwind
              </a>{" "}
              &{" "}
              <a
                href="https://vercel.com" target="_blank" rel="noreferrer"
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
              >
                Vercel
              </a>
            </p>
            <div className="pt-2 space-x-6 font-medium lg:pt-0">
              <a
                href="https://www.linkedin.com/in/vigneshmurugan/" target="_blank" rel="noreferrer"
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
              >
                Linkedin
              </a>
              <a
                href="https://codepen.io/vignesh511989/" target="_blank" rel="noreferrer"
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
              >
                Codepen
              </a>
              <a
                href="https://github.com/Big-Vi/" target="_blank" rel="noreferrer"
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
