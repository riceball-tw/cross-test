import ButtonSolid from '@/components/button/ButtonSolid';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Intro() {
    const fadeInAndJump = {
        visible: { opacity: 1, scale: [1, 1.1, 1] },
        hidden: { opacity: 1, scale: 1 },
    };

    const fadeIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 1, staggerChildren: 0.3 } },
    };
    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative mb-12 flex flex-col justify-center p-8"
            >
                <motion.div variants={fadeIn} style={{ filter: 'drop-shadow(0px 0px 4px rgba(255,255,255,0.5))' }}>
                    <svg
                        className="glow mx-auto mb-8 "
                        width="90"
                        height="310"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        viewBox="0 0 90 310"
                    >
                        <linearGradient
                            id="a"
                            x1="33.0879"
                            x2="39.9995"
                            y1="143.0635"
                            y2="136.1519"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity="0" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#a)"
                            d="M43.9 139.1c-3.8 0-6.8-3.1-6.8-6.8 0 3.8-3.1 6.8-6.8 6.8 3.8 0 6.8 3.1 6.8 6.8-.1-3.7 3-6.8 6.8-6.8z"
                        />
                        <linearGradient
                            id="b"
                            x1=".6414"
                            x2="48.6769"
                            y1="163.3576"
                            y2="128.0056"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity="0" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#b)"
                            d="M73.4 127.5h-55c.8 0 1.5.7 1.5 1.5h49.8c-7.2 3.3-13.2 8.5-19 13.6-8.2 7.2-16.2 14.1-26.9 14.3-2.9 0-5.9-.4-9.2-1.5 8.1 5.3 15.1 6.5 21.8 3.6 6.2-2.7 11.5-8.4 17.1-14.5 6.8-7.4 13.7-14.9 23.1-17.9-1.1.2-2.2.6-3.2.9z"
                        />
                        <linearGradient
                            id="c"
                            x1="12.3166"
                            x2="66.559"
                            y1="148.1629"
                            y2="108.2232"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity="0" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#c)"
                            d="M63.7 107.3H48.1v19.2c0-3 2.4-5.4 5.4-5.5H69v-19.1c.1 2.9-2.3 5.4-5.3 5.4zm-.1 9.4c0 1.5-1.2 2.8-2.8 2.8h.1-7.4v-7.9c0-1.5 1.2-2.7 2.7-2.8h7.4v7.9z"
                        />
                        <linearGradient
                            id="d"
                            x1="-4.8984"
                            x2="49.3438"
                            y1="124.7829"
                            y2="84.8433"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity="0" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#d)"
                            d="M71 86.1h-9.9V70.9c0 3.5-2.8 6.3-6.3 6.3h.1-24.3c.8 0 1.5.7 1.5 1.5h22.7v4.7c0 1.5-1.2 2.7-2.7 2.7H22c.8 0 1.5.7 1.5 1.5h31.3v5.3c0 1.5-1.2 2.7-2.7 2.7H30.5c.8 0 1.5.7 1.5 1.5h22.4c-4.2 2.1-7.9 5-11.4 8H23.7c.8 0 1.5.7 1.5 1.5h16.1c-.4.4-.9.8-1.3 1.2-6.9 6-13.5 11.8-22.5 11.9-2.4 0-4.9-.4-7.7-1.2 6.8 4.5 12.6 5.4 18.3 3 5.2-2.2 9.6-7 14.3-12.1 3.9-4.2 7.8-8.5 12.4-11.6v4.1c0-3.5 2.8-6.3 6.3-6.3v-5.3c0-1.5 1.2-2.7 2.7-2.7h-.1 5.8c0-.9.7-1.5 1.5-1.5z"
                        />
                        <linearGradient
                            id="e"
                            x1="-7.1069"
                            x2="61.1845"
                            y1="252.0664"
                            y2="209.1698"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity="0" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#e)"
                            d="M66.1 242.5H48.6v-10.7c0-1.7 1.4-3 3-3h-.1H66c0-.8.7-1.5 1.5-1.5H48.6v-15.7c1.7-1.3 3.5-2.5 5.4-3.5h2.7v5.9c0-3.3 2.6-5.9 5.9-5.9h-.1.1v-28.7c0 3.1-2.5 5.7-5.6 5.9H34.9v-5.9c0 3.2-2.6 5.9-5.9 5.9h.1-.1V214c0-3.2 2.5-5.8 5.7-5.9H53c-6.5 2.7-11.6 7.5-16.7 11.9-6.7 5.9-13.2 11.5-22 11.7-2.3 0-4.8-.7-7.5-1.6 6.6 4.4 12.3 5.3 17.9 3 2.3-1 4.5-2.5 6.6-4.4h11.4v10.7c0 1.7-1.4 3-3 3h.1-17.3c.8 0 1.5.7 1.5 1.5h18.7V261c-5.2 3.7-10.7 6.4-17.2 6.5-2.8 0-5.8-.4-9.1-1.4 8 5.3 14.9 6.4 21.5 3.6 6.2-2.6 11.3-8.3 16.8-14.3 6.7-7.3 13.5-14.7 22.8-17.7-4.1 1.1-7.9 2.8-11.4 4.8zm-31.2-52.9c0-1.6 1.3-2.8 2.8-2.8h-.1 19v6.4c0 1.6-1.3 2.8-2.8 2.8h.1-19v-6.4zm0 17v-6.3c0-1.6 1.3-2.8 2.8-2.8h-.1 19v6.3c0 1.6-1.3 2.8-2.8 2.8h.1-19zm7.8 20.7h-9.8c1.9-1.8 3.8-3.9 5.7-6 1.3-1.4 2.7-2.9 4-4.3v10.3zm9.2 26.2c-1.1 1-2.2 1.9-3.3 2.9v-9.3c0-1.7 1.4-3 3-3h-.1 12.2c-4.1 2.7-8 6.1-11.8 9.4z"
                        />
                        <linearGradient
                            id="f"
                            x1="3.4517"
                            x2="12.2513"
                            y1="304.5786"
                            y2="295.779"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity=".2" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#f)"
                            d="M10.9 296.9v-1.1h1.4v3.2h-1.4c-.4-.6-.9-1.1-1.5-1.5-.7-.4-1.4-.5-2.1-.5-.7 0-1.4.2-1.9.5-.6.3-1 .8-1.3 1.4-.3.6-.5 1.2-.5 1.9s.2 1.3.5 1.9c.3.6.8 1 1.4 1.4.6.3 1.2.5 1.9.5.9 0 1.7-.2 2.3-.7.7-.5 1.2-1.2 1.5-2.1l1.4.7c-.4 1.1-1.1 2-2 2.6-1 .6-2.1.9-3.4.9-1.1 0-2-.2-2.8-.7-.8-.5-1.5-1.1-1.9-1.8-.5-.8-.7-1.6-.7-2.5 0-1 .2-1.9.7-2.7.5-.8 1.1-1.4 1.9-1.8.8-.4 1.8-.6 2.8-.6.7 0 1.4.1 2 .3.6 0 1.2.3 1.7.7z"
                        />
                        <linearGradient
                            id="g"
                            x1="22.3751"
                            x2="30.8616"
                            y1="305.6293"
                            y2="297.1429"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity=".2" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#g)"
                            d="M31 298.4c0 .6-.2 1.2-.6 1.6-.4.4-1 .7-1.7.9l1.9 3.6H32v1.2h-2.5l-2.4-4.6h-1.5v3.4H27v1.2h-4.6v-1.2h1.5V297h-1.5v-1.2H27c1.4 0 2.4.2 3.1.6.6.4.9 1.1.9 2zm-1.7 0c0-.5-.2-.8-.5-1-.3-.2-.8-.3-1.5-.3h-1.7v2.8h1.6c.7 0 1.2-.1 1.6-.3.3-.3.5-.7.5-1.2z"
                        />
                        <linearGradient
                            id="h"
                            x1="43.2738"
                            x2="51.0519"
                            y1="304.6411"
                            y2="296.8629"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity=".2" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#h)"
                            d="M52.9 300.7c0 1-.2 1.9-.7 2.7-.5.8-1.2 1.4-2 1.8-.9.4-1.9.6-3 .6s-2.1-.2-2.9-.7c-.9-.4-1.5-1.1-2-1.8-.5-.8-.7-1.7-.7-2.7 0-1 .2-1.8.7-2.6.5-.8 1.2-1.4 2-1.8.9-.4 1.8-.6 2.9-.6 1.1 0 2.1.2 3 .7.9.4 1.5 1.1 2 1.8.4.8.7 1.7.7 2.6zm-5.7 3.9c.8 0 1.4-.2 2-.5.6-.4 1.1-.8 1.4-1.4.3-.6.5-1.2.5-1.9s-.2-1.3-.5-1.9c-.3-.6-.8-1-1.4-1.4-.6-.3-1.3-.5-2-.5s-1.4.2-2 .5c-.6.3-1 .8-1.3 1.4-.3.6-.5 1.2-.5 1.9s.2 1.4.5 2c.3.6.8 1 1.4 1.4.4.2 1.1.4 1.9.4z"
                        />
                        <linearGradient
                            id="i"
                            x1="62.5069"
                            x2="70.9763"
                            y1="305.0676"
                            y2="296.5983"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity=".2" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#i)"
                            d="M68.8 296.4v-.7h1.3v3h-1.3v-.7c-.6-.8-1.3-1.2-2.3-1.2-.6 0-1.1.1-1.4.3-.3.2-.5.5-.5.9s.2.7.5.9c.3.2.8.4 1.4.5l1.3.3c.8.2 1.5.5 1.9.8.4.3.7.7.9 1 .1.4.2.8.2 1.2 0 .9-.3 1.6-.9 2.1-.6.5-1.5.8-2.5.8s-1.9-.3-2.7-1v.8h-1.4v-3.6h1.4v.9c.7 1.1 1.5 1.6 2.6 1.6.6 0 1.1-.1 1.4-.4.3-.3.5-.7.5-1.2 0-.7-.6-1.2-1.7-1.5l-1.4-.3c-1-.3-1.7-.6-2.2-1-.5-.4-.7-1-.7-1.7 0-.9.3-1.5.9-2 .6-.5 1.4-.7 2.4-.7.7.1 1.5.4 2.3.9z"
                        />
                        <linearGradient
                            id="j"
                            x1="80.0907"
                            x2="88.56"
                            y1="305.0676"
                            y2="296.5983"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff" stopOpacity=".2" />
                            <stop offset="1" stopColor="#fff" />
                        </linearGradient>
                        <path
                            fill="url(#j)"
                            d="M86.4 296.4v-.7h1.3v3h-1.3v-.7c-.6-.8-1.3-1.2-2.3-1.2-.6 0-1.1.1-1.4.3-.3.2-.5.5-.5.9s.2.7.5.9.8.4 1.4.5l1.3.3c.8.2 1.5.5 1.9.8.4.3.7.7.9 1 .1.4.2.8.2 1.2 0 .9-.3 1.6-.9 2.1-.6.5-1.5.8-2.5.8s-1.9-.3-2.7-1v.8h-1.4v-3.6h1.4v.9c.7 1.1 1.5 1.6 2.6 1.6.6 0 1.1-.1 1.4-.4.3-.3.5-.7.5-1.2 0-.7-.6-1.2-1.7-1.5l-1.4-.3c-1-.3-1.7-.6-2.2-1-.5-.4-.7-1-.7-1.7 0-.9.3-1.5.9-2 .6-.5 1.4-.7 2.4-.7.7.1 1.5.4 2.3.9z"
                        />
                        <linearGradient
                            id="k"
                            x1="33.8254"
                            x2="51.1097"
                            y1="824.1816"
                            y2="841.4658"
                            gradientTransform="matrix(1 0 0 -1 0 861.5252)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#dda990" stopOpacity="0" />
                            <stop offset="1" stopColor="#dda990" />
                        </linearGradient>
                        <path
                            fill="url(#k)"
                            d="M23 26.2c12.2 0 22 9.9 22 22 0-12.2 9.9-22 22-22-12.2 0-22-9.9-22-22 0 12.1-9.9 22-22 22z"
                        />
                    </svg>
                </motion.div>

                <motion.h1 variants={fadeIn} className="glow relative z-10 mb-16 text-center">
                    <span className="mb-2 inline-block text-4xl font-medium">測驗出屬於你的</span>
                    <br />
                    <span className="text-5xl font-bold text-accent">璀璨星光</span>
                </motion.h1>

                <picture>
                    <source srcSet="global/gate.webp" type="image/webp" />
                    <source srcSet="global/gate.png" type="image/png" />
                    <img
                        className="absolute top-0 left-1/2 mx-auto h-full w-full -translate-x-1/2 transform-gpu select-none object-contain"
                        src="global/gate.png"
                        alt="一個用展覽標語寫成的裝飾拱門"
                    />
                </picture>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInAndJump}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 0.1,
                    }}
                    className="mx-auto"
                >
                    <ButtonSolid href="/test-start">開始測驗</ButtonSolid>
                </motion.div>
            </motion.div>
            <Footer />
        </>
    );
}
