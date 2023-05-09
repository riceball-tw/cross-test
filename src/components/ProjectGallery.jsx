import exhibitionData from '@/data/exhibitionData';
import ProjectCard from '@/components/ProjectCard';
import Card from '@/components/Card';
import { useState } from 'react';

export default function ProjectGallery() {
    const [currentCategory, setCurrentCategory] = useState('all');
    const categories = [...new Set(exhibitionData.map((project) => project.category))];

    return (
        <>
            <section className="flex flex-col justify-center">
                <h2 className="mb-8 text-center text-4xl font-bold">
                    <span className="mb-2 inline-block font-serif text-lg font-normal tracking-widest opacity-80">
                        ✦ CROSS Exhibition ✦
                    </span>
                    <br />
                    來看看展覽吧！
                </h2>

                <div className="mb-16">
                    <ul className="mx-auto flex w-fit cursor-pointer flex-wrap justify-center gap-4">
                        <li
                            onClick={(e) => {
                                setCurrentCategory(e.target.dataset.type);
                            }}
                            data-type="all"
                            className={` ${'all' === currentCategory ? 'opacity-100' : 'opacity-40'}`}
                        >
                            全部
                        </li>

                        {categories.map((category) => {
                            return (
                                <li
                                    onClick={(e) => {
                                        setCurrentCategory(e.target.dataset.type);
                                    }}
                                    key={category}
                                    data-type={category}
                                    className={`cursor-pointer ${
                                        category === currentCategory ? 'opacity-100' : 'opacity-40'
                                    }`}
                                >
                                    {category}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {(currentCategory === 'all' || currentCategory === '視覺傳達設計') && (
                        <li className="col-span-1 md:col-span-2">
                            <a href="https://www.instagram.com/nutccd.cross/">
                                <Card>
                                    <img
                                        width="1200"
                                        height="600"
                                        className="mb-4 w-full rounded"
                                        src="exhibition/cross.webp"
                                        alt="尋星展覽主視覺全景"
                                        loading="lazy"
                                    />

                                    <div className="flex flex-wrap items-center justify-between border-b border-accent border-opacity-20">
                                        <div className="mb-4">
                                            <div className="mb-2">CROSS Exhibition</div>
                                            <h3 className="text-4xl font-bold">尋星</h3>
                                        </div>

                                        <div>
                                            <div className="inline-block rounded-full border border-white border-opacity-30 p-2 px-4">
                                                視覺傳達設計
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-8 border-b border-accent border-opacity-20">
                                        <p className="py-8 text-2xl">探索關鍵是一生不間斷的旅程</p>
                                    </div>
                                    <div className="prose prose-invert mb-8 max-w-none columns-1 border-accent border-opacity-20 md:columns-2">
                                        <p>
                                            設計，是一個「 探索未知 」與「 匯聚關鍵 」的過程！ 而「 尋星 」代表的是「
                                            探索關鍵
                                            」的過程，在個人、團隊、甲方、市場又或者是社會，這都是一個漸進的過程 ，
                                            尋求共識的旅途，由眾多設計者的思想碰撞、融合而成，如同費波納齊數列般不斷精進、累積經驗，朝著我們共同的目標前進。
                                            在這段旅程的最後，以星體作為人生中所追尋的關鍵目標；不論未來是否被黑夜所覆蓋，仍無法遮蓋這一道耀眼的星光。
                                        </p>
                                    </div>
                                </Card>
                            </a>
                        </li>
                    )}

                    {exhibitionData.map((project) => {
                        if (currentCategory !== 'all' && project.category !== currentCategory) {
                            return;
                        }
                        return <ProjectCard key={project.name} project={project} />;
                    })}
                </ul>
            </section>
        </>
    );
}
