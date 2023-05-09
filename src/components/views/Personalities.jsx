import ButtonSolid from '@/components/button/ButtonSolid';
import starsData from '@/data/starsData';
import StarCard from '@/components/StarCard';

export default function Personalities() {
    return (
        <>
            <h1>個性測驗</h1>

            <StarCard userName={'jack'} temperature={50} themeColor={'red'} star={starsData['adaptability']} />

            <ButtonSolid href="/">回到測驗首頁</ButtonSolid>
        </>
    );
}
