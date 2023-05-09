import ButtonSolid from '@/components/button/ButtonSolid';
import { useThemeContext } from '@/context/themeContext';
import { useEffect } from 'react';

export default function TestComplete({ color }) {
    const [themeColor, setThemeColor] = useThemeContext();

    useEffect(() => {
        _jf.flush();
    });

    useEffect(() => {
        setThemeColor(color);
    }, [color]);

    return (
        <>
            <img
                className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform-gpu animate-pulse"
                src={`stars/gradient/${themeColor}.png`}
                alt="背景裝飾漸層"
            />
            <div className="relative z-10 flex flex-col">
                <h1 className="mb-8 text-center">
                    <span className="mb-2 inline-block text-4xl font-bold text-accent">測驗完成！</span>
                    <br />
                    <span className="text-xl ">請於輸入框中輸入您的稱呼來生成結果</span>
                </h1>

                <input
                    maxLength="10"
                    autoComplete="off"
                    className="mx-auto mb-16 w-full max-w-prose rounded-full border border-accent/40 bg-transparent p-8 px-4 text-center outline-none transition-all focus:border-accent/60 focus:text-xl focus:tracking-wider focus:backdrop-blur-xl"
                    name="name"
                    type="text"
                    placeholder="我的稱呼是……"
                    required
                />
                <ButtonSolid onlyStyle="true">
                    <input className="cursor-pointer" type="submit" value="創造星星！" />
                </ButtonSolid>
            </div>
        </>
    );
}
