import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getPersonality } from '@/helper/getPersonality';
import { useThemeContext } from '@/context/themeContext';
import StarCard from '@/components/StarCard';
import StatusCard from '@/components/StatusCard';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/ProjectGallery';
import SolidButton from '@/components/button/ButtonSolid';

export default function Result() {
    const location = useLocation();

    if (!location.state) {
        return (
            <div className="text-center">
                <h1 className="mb-8 text-3xl">請測驗後再生成測驗結果😅</h1>
                <SolidButton href="/">回到測驗首頁</SolidButton>
            </div>
        );
    }

    const temperature = location.state.testResult.temperature;
    const personalityAnswer = (({ temperature, ...o }) => o)(location.state.testResult);
    const [themeColor, setThemeColor] = useThemeContext();

    return (
        <>
            <div className="p-4 md:p-8">
                {/* Result */}
                <section className=" relative mb-32 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
                    <img
                        className="object-fit absolute top-0 left-0 h-full w-full animate-pulse opacity-50"
                        src={`stars/gradient/${themeColor}.png`}
                        alt=""
                    />
                    <div>
                        <StarCard
                            userName={location.state.userName}
                            temperature={temperature}
                            themeColor={themeColor}
                            star={getPersonality(personalityAnswer)}
                        />
                    </div>

                    <div className="hidden flex-wrap gap-8 md:flex lg:gap-4">
                        <StatusCard themeColor={themeColor} status={personalityAnswer} />
                    </div>
                </section>
            </div>

            <ProjectGallery />

            <Footer></Footer>
        </>
    );
}
