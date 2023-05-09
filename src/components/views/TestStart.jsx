import ButtonSolid from '@/components/button/ButtonSolid';
import Card from '@/components/Card';
import { motion } from 'framer-motion';

export default function TestStart() {
    const fadeIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 1, staggerChildren: 0.3 } },
    };

    const fadeInAndJump = {
        visible: { opacity: 1, scale: [1, 1.1, 1] },
        hidden: { opacity: 1, scale: 1 },
    };

    return (
        <div className="mx-4">
            <Card className=" mx-auto flex w-fit flex-col items-center justify-center">
                <h2 className="mb-8 text-center text-4xl font-bold">
                    <span className="mb-2 inline-block font-serif text-lg font-normal tracking-widest opacity-80">
                        ✦ Find Your Star ✦
                    </span>
                    <br />
                    跟著測驗一起
                    <br />
                    找尋你的<em>本命星</em>！
                </h2>

                <picture>
                    <source srcSet="test/test-explain.webp" type="image/webp" />
                    <source srcSet="test/test-explain.png" type="image/png" />
                    <motion.img
                        width="600"
                        height="400"
                        transition={{ duration: 3, repeat: Infinity }}
                        animate={{ y: [0, -5, 0] }}
                        className="mb-8 w-full"
                        src="test/test-explain.png"
                        alt="測驗前的說明圖片"
                    />
                </picture>

                <p className="prose prose-invert mb-16 max-w-md text-center">
                    《尋星》 展覽探討人與人之間合作尋求共識的旅途，藉由這個測驗幫助你
                    <em>了解自己在團隊中可能的定位與能力趨勢</em>！
                </p>

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
                >
                    <ButtonSolid href="/test">來尋找我的本命星！</ButtonSolid>
                </motion.div>
            </Card>
        </div>
    );
}
