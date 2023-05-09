export default function getMyStarRatio(starCounter, myStar) {
    const totalStars = Object.values(starCounter).reduce((a, b) => a + b, 0);
    return Math.round((starCounter[myStar] / totalStars || 1) * 100);
}
