import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Base from '@/components/views/Base';
import Intro from '@/components/views/Intro';
import TestStart from '@/components/views/TestStart';
import Test from '@/components/views/Test';
import Result from '@/components/views/Result';
import Personalities from '@/components/views/Personalities';
import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Base />}>
                    <Route path="/" element={<Intro />} index />
                    <Route path="/test-start" element={<TestStart />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/personalities" element={<Personalities />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}
