import Link from 'next/link'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();
    const uri = router.asPath

	function isActiveLink(linkUri, isHome = false) {
        if (!isHome && uri.includes(linkUri)) {
            return " active "
        } else if (isHome && uri == linkUri) {
            return " active "
        }
    }
	return (
		<>
		<Head>
			<link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=DM+Sans&display=swap" rel="stylesheet"></link>
		</Head>
		<header>
			<nav className="my-8 text-center flex header-nav items-center" aria-label="Main">
				<Link href="/">
					<a className="font-bold text-2xl">
						<Image
							className="module__full-img rounded-full" 
							src="/img/profile.jpeg"
							alt="profile-photo"
							width={60}
							height={60}
						/>	
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
	</>
	)
}
  
export default Header;