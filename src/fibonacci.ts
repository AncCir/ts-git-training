export const computeFibonacciNumber = (position: number , isRecursive: boolean = false): number => {
    if (isRecursive) return recursiveFibonacci(position);
    let notNullPosition = position;
    if (notNullPosition === null) {
        notNullPosition = 1;   
    }
    let i = 1;
    let j = 1;
    if (notNullPosition === 0) {
        return 0;
    }
    if (notNullPosition < 0) {
        return computeNegativeFibonacci(notNullPosition, isRecursive);
    }
    if (notNullPosition <= 2) {
        return 1;
    }

    let currentPosition = 2;
    while (currentPosition < notNullPosition) {
        const temp = i;
        i = j;
        j += temp;
        currentPosition++;
    }
    return j;
};
const recursiveFibonacci = (initialPosition: number, left: number = 0, right: number = 1, position?: number): number => {
    const currentPosition = position ?? initialPosition;
    if (initialPosition === 0) return 0;
    if (currentPosition === 0) return left;
    if (initialPosition > 0) {
        return recursiveFibonacci(initialPosition, right, left + right, currentPosition - 1);
    } else {
        return recursiveFibonacci(initialPosition, right - left, left, currentPosition + 1);
    }
}

const computeNegativeFibonacci = (position: number , isRecursive: boolean = false): number => {
    if (position >= 0) {
        throw new Error(`Position must be less than zero! Received: ${position}.`);
    }
    const resultIsNegative = position % 2 === 0;
    const absoluteResult = computeFibonacciNumber(-position, isRecursive);
    return resultIsNegative ? absoluteResult * -1 : absoluteResult;
}


export const computeFibonacciArray = (start: number, endInclusive: number, isRecursive: boolean = false): number[] => {
    const inputArray = [...Array(endInclusive - start + 1).keys()].map(i => i + start);
    return inputArray.map(x => computeFibonacciNumber(x, isRecursive));
}
