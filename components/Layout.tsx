import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { motion } from 'framer-motion';

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="container mx-auto sm:w-1/2 px-4">
            <Header></Header>
                
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ 
                opacity: 0, 
                transition: { 
                    duration: .2,
                    ease: 'easeOut' }
                }}>
                <main className="pageContent">
                    {children}
                </main>
            </motion.div>

            <Footer></Footer>
                        
    </div>
    )
}

interface LayoutProps {
    children: React.ReactNode;
}

export default Layout;