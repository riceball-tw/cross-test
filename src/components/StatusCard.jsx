import Card from '@/components/Card';
import colorData from '@/data/colorData';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function StatusCard({ status, themeColor }) {
    const personalitiesData = {
        adaptability: {
            nameTC: '應變力',
        },
        leadership: {
            nameTC: '領導力',
        },
        execution: {
            nameTC: '執行力',
        },
        communication: {
            nameTC: '溝通力',
        },
        confidence: {
            nameTC: '自信心',
        },
        attraction: {
            nameTC: '吸引力',
        },
        creativity: {
            nameTC: '創造力',
        },
        logical: {
            nameTC: '邏輯力',
        },
    };

    const resultKeys = Object.keys(status);
    const resultProperty = Object.values(status);
    const abilitySum = resultProperty.reduce((partialSum, a) => partialSum + a, 0);

    const translatedResultKeys = resultKeys.map((key) => {
        return Object.values(personalitiesData[key]);
    });

    return (
        <>
            <Card className="aspect-square w-full">
                <Radar
                    fallbackContent={<div>NO Canvas</div>}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            r: {
                                beginAtZero: true,
                                pointLabels: {
                                    font: {
                                        size: 16,
                                    },
                                },
                            },
                        },
                        // https://stackoverflow.com/questions/29973533/chart-js-turn-labels-into-links
                        onClick: (evt, activeEls, chart) => {
                            const { x, y } = evt;
                            let index = -1;

                            for (let i = 0; i < chart.scales.r._pointLabelItems.length; i++) {
                                const { bottom, top, left, right } = chart.scales.r._pointLabelItems[i];

                                if (x >= left && x <= right && y >= top && y <= bottom) {
                                    index = i;
                                    break;
                                }
                            }

                            if (index === -1) {
                                return;
                            }

                            const clickedLabel = chart.scales.r._pointLabels[index];

                            console.log(clickedLabel);
                        },
                    }}
                    data={{
                        labels: translatedResultKeys,
                        datasets: [
                            {
                                label: '我的尋星結果',
                                data: resultProperty,
                                fill: true,
                                backgroundColor: `${colorData[themeColor].hex}80`,
                                borderColor: colorData[themeColor].hex,
                                pointBackgroundColor: colorData[themeColor].hex,
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgb(255, 99, 132)',
                            },
                        ],
                    }}
                />
            </Card>
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
                {resultProperty.map((ability, index) => {
                    return (
                        <Card key={index} className="flex flex-col items-center justify-center">
                            <div className="mb-4 opacity-60">{translatedResultKeys[index]}</div>
                            <div className="font-serif">
                                <span className="text-5xl md:text-7xl">{resultProperty[index]}</span>
                                <span className="opacity-60">/{abilitySum}</span>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}
