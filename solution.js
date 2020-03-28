function checkSumInArray(sum, numbers) {
    const parsedNumbers = {};
    for (let i = 0; i < numbers.length; i ++) {
        const diff = sum - numbers[i];
        if (parsedNumbers[diff]) {
            return true;
        } else {
            parsedNumbers[numbers[i]] = true;
        }
    };
    return false;
}