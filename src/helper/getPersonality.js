import starsData from '@/data/starsData';

function getBestAbility(testResult) {
    const sortedTestResult = Object.entries(testResult).sort(([, a], [, b]) => a - b);
    const getBestAbility = sortedTestResult[sortedTestResult.length - 1][0];
    return getBestAbility;
}

export function getPersonality(testResult) {
    return starsData[getBestAbility(testResult)];
}
