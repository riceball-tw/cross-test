import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Base() {
    const location = useLocation();
    return (
        <div
            className="flex min-h-screen items-center justify-center overflow-hidden text-primary-100
        before:fixed
        before:top-0
        before:left-0
        before:-z-20
        before:h-full
        before:w-full
        before:bg-[url('/global/grain.gif')]
        before:content-['']

        after:fixed
        after:top-0
        after:left-0
        after:-z-20
        after:h-full
        after:w-full
        after:bg-gradient-to-t
        after:from-black
        after:to-accent/10
        after:content-['']
        "
        >
            <motion.div
                key={location.pathname}
                initial={{ opacity: 1, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="container mx-auto"
                onAnimationComplete={() => {
                    _jf.flush();
                }}
            >
                <Outlet />
            </motion.div>
        </div>
    );
}
