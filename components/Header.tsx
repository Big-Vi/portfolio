import Link from 'next/link'
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
	return (
		<header>
			<nav className="desktop-nav hidden lg:block absolute-center-x top-0 mt-8" aria-label="Main">
				<ul className="flex relative">
					<li className="px-4 ">
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li className="px-4 ">
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li className="px-4 ">
						<Link href="/projects">
							<a>Projects</a>
						</Link>
					</li>
					<li className="px-4 ">
						<Link href="/blogs">
							<a>Blogs</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
  
export default Header;