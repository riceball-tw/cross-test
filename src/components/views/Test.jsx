import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonOutline from '@/components/button/ButtonOutline';
import testData from '@/data/testData.js';
import TestComplete from '@/components/TestComplete';
import { getTemperatureResult } from '@/helper/getTemperatureResult';
import { useThemeContext } from '@/context/themeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Test() {
    const [themeColor, setThemeColor] = useThemeContext();
    const [answerData, setAnswerData] = useState([]);
    const [currenttest, setCurrenttest] = useState(0);
    const navigate = useNavigate();
    const formRef = useRef();

    const fadeIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 1, staggerChildren: 0.3 } },
        exit: { opacity: 0, scale: 0.98 },
    };

    const optionFadeIn = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 1, staggerChildren: 0.3 } },
        exit: { opacity: 0 },
    };

    function submitTest(e) {
        const userName = e.target.name.value;
        e.preventDefault();
        const testResult = answerData.reduce((acc, cur) => combineObjects(acc, cur.answer), {});
        navigate('/result', {
            state: { userName, testResult },
        });
    }

    function combineObjects(...objects) {
        const result = {};
        for (const object of objects) {
            for (const key in object) {
                if (key in result) {
                    result[key] += object[key];
                } else {
                    result[key] = object[key];
                }
            }
        }
        return result;
    }

    function submitAnswer(answer) {
        const newAnswer = {
            id: currenttest,
            answer,
        };

        setAnswerData(updateOrAppend(answerData, newAnswer));
        setCurrenttest((currenttest) => currenttest + 1);

        optionFadeIn.initial = 'true';
        formRef.current.reset();
    }

    function updateOrAppend(arr, newItem) {
        if (arr.some((item) => item.id === newItem.id)) {
            return arr.map((item) => (item.id === newItem.id ? newItem : item));
        } else {
            return [...arr, newItem];
        }
    }

    function prevTest() {
        setCurrenttest(currenttest - 1);
    }

    function nextTest() {
        setCurrenttest(currenttest + 1);
    }

    function jumpTest(targetTestIndex) {
        if (targetTestIndex <= answerData.length) {
            setCurrenttest(targetTestIndex);
        }
    }

    function getResultColor() {
        const resultTemperature = answerData.reduce((acc, cur) => combineObjects(acc, cur.answer), {}).temperature;
        const color = getTemperatureResult(resultTemperature);
        setThemeColor(color);
        return color;
    }

    return (
        <form className="p-8" onSubmit={(e) => submitTest(e)} ref={formRef}>
            {currenttest === testData.length ? (
                <TestComplete color={getResultColor} />
            ) : (
                <AnimatePresence mode="wait">
                    <motion.div key={currenttest} initial="hidden" exit="exit" animate="visible" variants={fadeIn}>
                        <motion.div variants={fadeIn} className="mb-4 flex flex-col items-center md:mb-8">
                            <div className="before:display- mb-2 text-2xl ">
                                第 <span className="inline-block p-2 text-3xl text-accent">{currenttest + 1}</span> 題
                            </div>

                            <div className="flex gap-3">
                                {currenttest === 0 ? (
                                    ''
                                ) : (
                                    <button
                                        className="opacity-40 transition-opacity hover:opacity-100"
                                        type="button"
                                        onClick={prevTest}
                                    >
                                        <svg
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="40"
                                            viewBox="0 96 960 960"
                                            width="40"
                                        >
                                            <path d="M560.667 816 320 575.333l240.667-240.666L608 382 414.666 575.333 608 768.667 560.667 816Z" />
                                        </svg>
                                    </button>
                                )}
                                <ol className="mx-auto flex items-center gap-4">
                                    {Array(testData.length)
                                        .fill(null)
                                        .map((step, index) =>
                                            index === currenttest ? (
                                                <motion.li
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    key={`${index}`}
                                                >
                                                    <svg
                                                        width="40"
                                                        height="40"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        enableBackground="new 0 0 40 40"
                                                        viewBox="0 0 40 40"
                                                    >
                                                        <linearGradient
                                                            id="a"
                                                            x1="11.609"
                                                            x2="24.606"
                                                            y1="-203.134"
                                                            y2="-216.131"
                                                            gradientTransform="translate(0 231.525)"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop offset="0" stopColor="#dda990" stopOpacity="0"></stop>
                                                            <stop offset="1" stopColor="#dda990"></stop>
                                                        </linearGradient>
                                                        <path
                                                            fill="url(#a)"
                                                            d="M3.5 20C12.6 20 20 27.4 20 36.5 20 27.4 27.4 20 36.5 20 27.4 20 20 12.6 20 3.5 20 12.6 12.6 20 3.5 20z"
                                                        ></path>
                                                    </svg>
                                                </motion.li>
                                            ) : (
                                                <li
                                                    onClick={() => {
                                                        jumpTest(index);
                                                    }}
                                                    key={`${index}`}
                                                    className={`h-2 w-2 rounded-full bg-white transition-all ${
                                                        index <= answerData.length
                                                            ? 'cursor-pointer opacity-100 hover:h-4 hover:w-4 hover:bg-accent'
                                                            : 'opacity-40'
                                                    }`}
                                                ></li>
                                            ),
                                        )}
                                </ol>

                                {currenttest >= answerData.length ? (
                                    ''
                                ) : (
                                    <button
                                        className="opacity-40 transition-opacity hover:opacity-100"
                                        type="button"
                                        onClick={nextTest}
                                    >
                                        <svg
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="40"
                                            viewBox="0 96 960 960"
                                            width="40"
                                        >
                                            <path d="M375.333 816 328 768.667l193.334-193.334L328 382l47.333-47.333L616 575.333 375.333 816Z" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-8">
                            <img
                                className="mx-auto w-auto flex-1 rounded-lg md:w-full"
                                width="300"
                                height="200"
                                src={`/test/${currenttest + 1}.svg`}
                                alt={`第 ${currenttest + 1} 題測驗圖`}
                            />
                            <div className="flex-1">
                                <h1
                                    className="mb-16 text-3xl font-bold md:text-4xl"
                                    dangerouslySetInnerHTML={{ __html: testData[currenttest].question }}
                                ></h1>

                                <motion.ol
                                    key={currenttest}
                                    initial="hidden"
                                    animate="visible"
                                    variants={optionFadeIn}
                                    onAnimationStart={() => {
                                        _jf.flush();
                                    }}
                                    className="flex list-inside list-[upper-alpha] flex-col flex-wrap gap-4 font-serif "
                                >
                                    {testData[currenttest].choices.map((choices, index) => (
                                        <motion.li variants={optionFadeIn} key={choices.title}>
                                            <ButtonOutline onlyStyle={true} className="ml-4">
                                                <label className="cursor-pointer font-sans text-xs ">
                                                    <input
                                                        className="hidden"
                                                        onClick={(e) => {
                                                            submitAnswer(JSON.parse(e.target.value));
                                                        }}
                                                        name="answer"
                                                        value={JSON.stringify(choices.value)}
                                                        type="radio"
                                                    />
                                                    {choices.title}
                                                </label>
                                            </ButtonOutline>
                                        </motion.li>
                                    ))}
                                </motion.ol>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
        </form>
    );
}
