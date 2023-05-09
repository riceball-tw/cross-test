import Card from '@/components/Card.jsx';
import colorData from '@/data/colorData';

export default function StarCard({ userName, star, temperature, themeColor }) {
    const randomTemperature = Math.floor(Math.random() * 1000);

    const measuredTemperature =
        temperature > 0
            ? (temperature + 14) * 100 + randomTemperature
            : Math.abs(temperature) * 100 + randomTemperature;

    return (
        <Card className="pt-0">
            {/* Header */}
            <div className="flex items-center rounded-br-full rounded-bl-full border-b border-accent border-opacity-20 py-3 text-center">
                <h1 className="mx-auto tracking-widest">
                    <span style={{ color: colorData[themeColor].hex }} className="text-2xl">
                        {userName ?? '無名星星'}
                    </span>

                    <span className="ml-4 tracking-widest"> 的尋星之旅結果是……</span>
                </h1>
            </div>

            {/* Image */}
            <div className="mb-6 border-b border-accent border-opacity-20 pb-6">
                <img
                    className="inline-block w-1/2"
                    width={300}
                    height={300}
                    src={`/stars/title/${star.slug}.png`}
                    alt={star.nameTC}
                />
                <img
                    className="inline-block w-1/2"
                    style={{ filter: `drop-shadow(0 0 1.3rem ${colorData[themeColor].hex}85)` }}
                    src={`/stars/${star.slug}-${themeColor}.png`}
                    alt={star.nameTC}
                />
            </div>

            {/* Short Info */}
            <div className="mb-6 flex justify-center  gap-6 border-b border-accent border-opacity-20 pb-6">
                {/* Temperature */}
                <div className="border-r border-accent border-opacity-20 text-center">
                    <div className="rounded  backdrop-blur-lg">
                        <div className="mb-4 mr-4 whitespace-nowrap tracking-widest md:mr-8">觀測溫度</div>
                        <div className="relative mr-4 border-t border-accent border-opacity-20 font-serif font-medium md:mr-8">
                            <div className="pr-6 pt-6 text-5xl md:text-7xl">
                                {measuredTemperature}
                                <sub className="absolute bottom-0 right-0 mr-2 text-base">℃</sub>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Info */}
                <div>
                    <p
                        style={colorData[themeColor].style}
                        className={`mx-auto items-center justify-center whitespace-nowrap rounded-full border border-white border-opacity-30 p-2 px-4 text-center text-base tracking-widest md:text-xl`}
                    >
                        {colorData[themeColor].title}
                    </p>
                    <p className="py-6 text-base tracking-wider md:text-xl">
                        {star.feature}，{star.featureDescription}
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert mb-6 max-w-none border-b border-accent border-opacity-20 pb-6">
                <div className="flex">
                    <svg
                        className="mr-4 inline-block"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 16C8.83692 16 16 23.1631 16 32C16 23.1631 23.1631 16 32 16C23.1631 16 16 8.83692 16 0C16 8.83692 8.83692 16 0 16Z"
                            fill="url(#paint0_linear_88_112)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_88_112"
                                x1="7.88923"
                                y1="24.1138"
                                x2="20.4369"
                                y2="11.5662"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor={colorData[themeColor].hex} stopOpacity="0" />
                                <stop offset="1" stopColor={colorData[themeColor].hex} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h2 className="m-0 ">
                        <span style={{ color: colorData[themeColor].hex }}>{star.shortDescription} </span>
                        是您所散發的光芒
                    </h2>
                </div>

                <p>{star.description}</p>
            </div>
            <div className="prose prose-invert mb-6 max-w-none border-b border-accent border-opacity-20 pb-6">
                <div className="flex">
                    <svg
                        className="mr-4 inline-block"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 16C8.83692 16 16 23.1631 16 32C16 23.1631 23.1631 16 32 16C23.1631 16 16 8.83692 16 0C16 8.83692 8.83692 16 0 16Z"
                            fill="url(#paint0_linear_88_112)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_88_112"
                                x1="7.88923"
                                y1="24.1138"
                                x2="20.4369"
                                y2="11.5662"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor={colorData[themeColor].hex} stopOpacity="0" />
                                <stop offset="1" stopColor={colorData[themeColor].hex} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h2 className="m-0">
                        <span style={{ color: colorData[themeColor].hex }}>{star.nameTC}</span> 的天文小百科
                    </h2>
                </div>

                <p>{star.starInfo}</p>
            </div>

            {/* Recommendation Area */}
            <div className="flex flex-wrap justify-between gap-6 md:flex-nowrap">
                {/* Friend */}
                <div className="w-full border-b border-accent border-opacity-20 pb-6 md:border-r md:border-b-0">
                    <h2 className="mb-4 text-xl font-bold">適合相伴的星友</h2>
                    <ul className="flex justify-around divide-x-2 divide-accent divide-opacity-20 md:divide-x-0">
                        {star.friends.map((friend) => (
                            <li key={friend.name} className="w-full text-center">
                                <img
                                    style={{ maxWidth: '80px' }}
                                    className="mx-auto w-full"
                                    width="80"
                                    height="80"
                                    src={`stars/icon/${friend.imageUrl}`}
                                    alt={friend.name}
                                />
                                {friend.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Not-Friend */}
                <div className="w-full">
                    <h2 className="mb-4 text-xl font-bold">不可觀測的掩星</h2>
                    <ul className="flex justify-around divide-x-2 divide-accent divide-opacity-20 md:divide-x-0">
                        {star.notFriends.map((notFriend) => (
                            <li key={notFriend.name} className="w-full text-center">
                                <img
                                    style={{ maxWidth: '80px' }}
                                    className="mx-auto w-full"
                                    width="80"
                                    height="80"
                                    src={`stars/icon/${notFriend.imageUrl}`}
                                    alt={notFriend.name}
                                />
                                {notFriend.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
}
