import Link from 'next/link'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();
    const uri = router.asPath

	function isActiveLink(linkUri:any, isHome = false) {
        if (!isHome && uri.includes(linkUri)) {
            return " active "
        } else if (isHome && uri == linkUri) {
            return " active "
        }
    }
	return (
		<header>
			<nav className="my-8 text-center flex header-nav items-center" aria-label="Main">
				<Link href="/">
					<a className="">
						<div className="rounded-full w-16 h-16 shadow-lg bg-gradient-to-tl from-purple-700/60 to-rose-400/60  p-[3px] group transform ease-out transition hover:scale-105 hover:from-purple-700 hover:to-rose-600 hover:shadow-rose-500/25">
							<Image
								className="module__full-img rounded-full" 
								src="/img/profile.jpeg"
								alt="profile-photo"
								sizes="100vw"
								quality={100}
								layout="fill"
								objectFit="cover"
								objectPosition="center center"
							/>	
						</div>
					</a>
				</Link>
				
				<ul className="flex relative">
					<li className="px-4 ">
						<Link href="/projects">
							<a className={isActiveLink('projects')}>Projects</a>
						</Link>
					</li>
					<li className="px-4 ">
						<Link href="/blogs">
							<a className={isActiveLink('blogs')}>Blogs</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
  
export default Header;