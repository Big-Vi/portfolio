import React from 'react';
import Header from "./Header";
import { motion } from 'framer-motion';

const Layout = ({children}: LayoutProps) => {
    return (
        <div>
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
                        
    </div>
    )
}

interface LayoutProps {
    children: React.ReactNode;
}

export default Layout;