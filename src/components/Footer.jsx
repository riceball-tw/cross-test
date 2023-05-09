import { motion } from 'framer-motion';
export default function Footer() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    function handleShare() {
        if (navigator.share) {
            navigator
                .share({
                    title: '尋星心理測驗',
                    text: '來尋找你的本命星吧！',
                    url: 'https://www.webdong.dev',
                })
                .then(() => console.log('成功！'))
                .catch((error) => console.log('發生錯誤', error));
        } else {
            alert('你的瀏覽器不支援分享功能 :(');
        }
    }
    return (
        <motion.footer
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ ease: 'easeInOut', duration: 1, staggerChildren: 1 }}
            className="flex flex-col p-4 text-center md:p-8 "
        >
            <motion.ul variants={fadeIn} className="mx-auto mb-4 flex gap-4">
                <li className="opacity-40 transition-opacity hover:opacity-100">
                    <a href="https://www.behance.net/triangledongdong2020">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                            <path
                                fill="currentColor"
                                d="M16.9 18.9S20 18.7 20 15c0-3.6-2.5-5.4-5.7-5.4H3.7v20.2h10.5s6.4.2 6.4-6c0 .1.3-4.9-3.7-4.9zm-3.4-5.6h.8s1.4 0 1.4 2.1-.8 2.4-1.8 2.4H8.3v-4.5h5.2zm.4 13H8.3v-5.4h5.9s2.1 0 2.1 2.8c0 2.3-1.5 2.6-2.4 2.6zm15.3-11.5c-7.8 0-7.8 7.8-7.8 7.8s-.5 7.7 7.8 7.7c0 0 6.9.4 6.9-5.4h-3.6s.1 2.2-3.2 2.2c0 0-3.6.2-3.6-3.5h10.5c.1 0 1.2-8.8-7-8.8zm-3.5 6.1s.4-3.1 3.6-3.1c3.1 0 3.1 3.1 3.1 3.1h-6.7zm7.5-7.5h-8.3v-2.5h8.3v2.5z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li className="opacity-40 transition-opacity hover:opacity-100">
                    <a href="https://www.instagram.com/nutccd.cross/">
                        <svg
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 40 40"
                            viewBox="0 0 40 40"
                        >
                            <path
                                fill="currentColor"
                                d="M13.2 3.6c-1.8.1-3 .4-4 .8-1.1.4-2 1-2.9 1.9s-1.6 1.8-2 2.9c-.4 1.1-.7 2.3-.8 4V20l.1 6.8c.1 1.8.4 3 .8 4 .4 1.1 1 2 1.9 2.9.9.9 1.8 1.5 2.9 1.9 1.1.4 2.3.7 4 .8 1.8.1 2.3.1 6.8.1l6.8-.1c1.8-.1 3-.4 4-.8 1.1-.4 2-1 2.9-1.9.9-.9 1.5-1.8 1.9-2.9.4-1.1.7-2.3.8-4 .1-1.8.1-2.3.1-6.8l-.1-6.8c-.1-1.8-.4-3-.8-4-.4-1.1-1-2-1.9-2.9-.9-.9-1.8-1.5-2.9-1.9-1.1-.4-2.3-.7-4-.8-1.8-.1-2.3-.1-6.8-.1l-6.8.1m.2 29.9c-1.6-.1-2.5-.3-3.1-.6-.8-.3-1.3-.7-1.9-1.2-.6-.6-.9-1.1-1.2-1.9-.2-.6-.5-1.5-.6-3.1-.1-1.7-.1-2.3-.1-6.7l.1-6.7c.1-1.6.3-2.5.6-3.1.2-.7.6-1.2 1.1-1.8.6-.6 1.1-.9 1.9-1.2.6-.2 1.5-.5 3.1-.6 1.7-.1 2.3-.1 6.7-.1l6.7.1c1.6.1 2.5.3 3.1.6.8.3 1.3.7 1.9 1.2.6.6.9 1.1 1.2 1.9.2.6.5 1.5.6 3.1.1 1.7.1 2.3.1 6.7l-.1 6.7c-.1 1.6-.3 2.5-.6 3.1-.3.8-.7 1.3-1.2 1.9-.6.6-1.1.9-1.9 1.2-.6.2-1.5.5-3.1.6-1.7.1-2.3.1-6.7.1-4.4-.2-4.9-.2-6.6-.2m13.4-22.3c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2M11.5 20c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5-8.5 3.8-8.5 8.5m3 0c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5-5.5-2.4-5.5-5.5"
                            ></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <button
                        title="分享網頁按鈕"
                        className="opacity-40 hover:opacity-100"
                        type="button"
                        onClick={handleShare}
                    >
                        <svg
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 96 960 960"
                            width="20"
                        >
                            <path d="M696 960q-50 0-85-35t-35-85q0-8 1-14.5t3-14.5L342 666q-15 16-35.354 23T264 696q-50 0-85-35t-35-85q0-50 35-85t85-35q22 0 42.5 7.5T342 486l238-145q-2-8-3-14.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-22.292 0-42.646-7T618 402L380 547q2 8 3 14.5t1 14.5q0 8-1 14.5t-3 14.5l238 145q15-17 35.354-23.5T696 720q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-600q20.4 0 34.2-13.8Q744 332.4 744 312q0-20.4-13.8-34.2Q716.4 264 696 264q-20.4 0-34.2 13.8Q648 291.6 648 312q0 20.4 13.8 34.2Q675.6 360 696 360ZM264 624q20.4 0 34.2-13.8Q312 596.4 312 576q0-20.4-13.8-34.2Q284.4 528 264 528q-20.4 0-34.2 13.8Q216 555.6 216 576q0 20.4 13.8 34.2Q243.6 624 264 624Zm432 264q20.4 0 34.2-13.8Q744 860.4 744 840q0-20.4-13.8-34.2Q716.4 792 696 792q-20.4 0-34.2 13.8Q648 819.6 648 840q0 20.4 13.8 34.2Q675.6 888 696 888Zm0-576ZM264 576Zm432 264Z" />
                        </svg>
                    </button>
                </li>
            </motion.ul>
            <motion.div variants={fadeIn} className="text-[.5rem] font-thin tracking-widest md:text-xs">
                <div className="opacity-40">
                    <p>
                        <a href="https://cd.nutc.edu.tw/">國立臺中科技大學商業設計系</a>畢業展活動測驗網站
                    </p>
                    <p>
                        NATIONAL TAICHUNG UNIVERSITY OF SCIENCE AND TECHNOLOGY THE DEPARTMENT OF COMMERCIAL ALL RIGHT
                        RESERVED
                    </p>
                    <p>免責聲明：本測驗以娛樂性為主，請勿將結果用於正式評估測驗者的能力與個性之用途</p>
                    <a className="underline" href="https://forms.gle/tgSw6AokCGHE2DYQ6">
                        -- 發現測驗上有問題嗎？點擊這裡提交問題回報 --
                    </a>
                </div>
            </motion.div>
        </motion.footer>
    );
}
