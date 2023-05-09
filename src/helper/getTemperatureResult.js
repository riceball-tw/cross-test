import colorData from '@/data/colorData';

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function getTemperatureResult(temperature) {
    const colors = Object.keys(colorData);

    return colors[Math.round(scale(temperature, -14, 14, 1, colors.length) - 1)];
}
