export default [
    {
        question: '當準備<em>進入一個未知的領域</em>時你會？',
        choices: [
            {
                title: '做好萬全準備後再出發',
                value: {
                    leadership: 1,
                    execution: 2,
                    communication: 1,
                    confidence: 1,
                    attraction: 1,
                    logical: 2,
                    temperature: 2,
                },
            },
            {
                title: '一切順其自然就好',
                value: {
                    adaptability: 1,
                    communication: 1,
                    confidence: 2,
                    attraction: 2,
                    creativity: 2,
                    temperature: 1,
                },
            },
            {
                title: '猶豫不決無法踏出第一步',
                value: {
                    execution: 2,
                    attraction: 2,
                    creativity: 1,
                    logical: 3,
                    temperature: -1,
                },
            },
            {
                title: '這輩子都不打算踏出舒適圈',
                value: {
                    adaptability: 1,
                    confidence: 3,
                    creativity: 1,
                    temperature: -2,
                },
            },
        ],
    },
    {
        question: '在<em>探索未知的過程中</em>出現了岔路時你會？',
        choices: [
            {
                title: '與隊友討論，並共同前往',
                value: {
                    adaptability: 1,
                    leadership: 2,
                    execution: 1,
                    communication: 3,
                    logical: 1,
                    temperature: 2,
                },
            },
            {
                title: '憑直覺前進',
                value: {
                    adaptability: 1,
                    execution: 2,
                    confidence: 3,
                    creativity: 1,
                    logical: 1,
                    temperature: -1,
                },
            },
            {
                title: '兵分二路，各自探索',
                value: {
                    adaptability: 1,
                    leadership: 2,
                    execution: 1,
                    confidence: 3,
                    creativity: 1,
                    temperature: 1,
                },
            },
            {
                title: '默默往回走',
                value: {
                    adaptability: 1,
                    execution: 1,
                    confidence: 2,
                    attraction: 3,
                    creativity: 1,
                    temperature: -2,
                },
            },
        ],
    },
    {
        question: '探索的路途中<em>出現了一條大河</em>你會如何前進？',
        choices: [
            {
                title: '與隊友一起嘗試造船前行',
                value: {
                    adaptability: 1,
                    leadership: 3,
                    execution: 1,
                    communication: 2,
                    creativity: 1,
                    temperature: 2,
                },
            },
            {
                title: '分頭尋找其他路線過河',
                value: {
                    adaptability: 3,
                    leadership: 1,
                    execution: 2,
                    communication: 1,
                    logical: 1,
                    temperature: 1,
                },
            },
            {
                title: '先停在這裡休息夠再說',
                value: {
                    adaptability: 2,
                    execution: 1,
                    confidence: 3,
                    creativity: 1,
                    logical: 1,
                    temperature: -1,
                },
            },
            {
                title: '等隊友過河後再考慮這個問題',
                value: {
                    adaptability: 1,
                    execution: 1,
                    confidence: 2,
                    creativity: 1,
                    logical: 3,
                    temperature: -2,
                },
            },
        ],
    },
    {
        question: '在河中央有座小島，只可以<em>從島上帶走一樣物品</em>，你會如何選擇？',
        choices: [
            {
                title: '漂亮的星星',
                value: {
                    adaptability: 1,
                    leadership: 3,
                    confidence: 1,
                    attraction: 3,
                    creativity: 1,
                    temperature: 2,
                },
            },
            {
                title: '一個玻璃空瓶',
                value: {
                    adaptability: 1,
                    execution: 1,
                    confidence: 1,
                    attraction: 2,
                    creativity: 3,
                    temperature: -2,
                },
            },
            {
                title: '老舊的收音機',
                value: {
                    adaptability: 1,
                    leadership: 1,
                    communication: 3,
                    attraction: 2,
                    logical: 1,
                    temperature: -1,
                },
            },
            {
                title: '一本厚重的書',
                value: {
                    leadership: 1,
                    communication: 1,
                    attraction: 1,
                    creativity: 2,
                    logical: 3,
                    temperature: 1,
                },
            },
        ],
    },
    {
        question: '上岸後的你，疲倦的昏睡了過去，在<em>睡夢中你看到</em>？',
        choices: [
            {
                title: '長著人臉的星星',
                value: {
                    adaptability: 1,
                    leadership: 1,
                    communication: 2,
                    attraction: 1,
                    creativity: 3,
                    temperature: -2,
                },
            },
            {
                title: '金銀雙色的海浪',
                value: {
                    adaptability: 1,
                    leadership: 3,
                    execution: 2,
                    communication: 1,
                    confidence: 1,
                    temperature: 2,
                },
            },
            {
                title: '漂浮在天空中的模糊光點',
                value: {
                    adaptability: 1,
                    leadership: 1,
                    attraction: 3,
                    creativity: 2,
                    logical: 1,
                    temperature: -1,
                },
            },
            {
                title: '鏡中倒映的自己',
                value: {
                    adaptability: 1,
                    leadership: 1,
                    communication: 2,
                    creativity: 1,
                    logical: 3,
                    temperature: 1,
                },
            },
        ],
    },
    {
        question: '又是新的一天，<em>準備起床</em>繼續探索時……',
        choices: [
            {
                title: '看看時間，再睡五分鐘就出發',
                value: {
                    adaptability: 1,
                    leadership: 1,
                    execution: 2,
                    communication: 3,
                    confidence: 1,
                    temperature: 1,
                },
            },
            {
                title: '立刻起床出發',
                value: {
                    adaptability: 1,
                    leadership: 2,
                    execution: 3,
                    confidence: 1,
                    logical: 1,
                    temperature: -2,
                },
            },
            {
                title: '再休息一天好了',
                value: {
                    communication: 1,
                    confidence: 1,
                    attraction: 3,
                    creativity: 2,
                    logical: 1,
                    temperature: 2,
                },
            },

            {
                title: '拖到最後一刻再出發',
                value: {
                    execution: 2,
                    communication: 1,
                    confidence: 3,
                    creativity: 1,
                    logical: 1,
                    temperature: -1,
                },
            },
        ],
    },
    {
        question: '在探索的旅程中，你認為<em>什麼才是這趟旅程最美好的關鍵</em>？',
        choices: [
            {
                title: '找到了一座世外桃源',
                value: {
                    adaptability: 1,
                    leadership: 1,
                    execution: 1,
                    creativity: 2,
                    logical: 3,
                    temperature: -2,
                },
            },
            {
                title: '見到日思夜想的人',
                value: {
                    adaptability: 2,
                    execution: 1,
                    communication: 3,
                    attraction: 1,
                    creativity: 1,
                    temperature: 2,
                },
            },
            {
                title: '旅途中留下的開心回憶',
                value: {
                    adaptability: 2,
                    leadership: 3,
                    execution: 1,
                    communication: 1,
                    attraction: 1,
                    temperature: 1,
                },
            },
            {
                title: '一路上品嘗到的在地美食',
                value: {
                    adaptability: 1,
                    leadership: 1,
                    execution: 1,
                    communication: 2,
                    attraction: 3,
                    temperature: -1,
                },
            },
        ],
    },
];
