const longRun = [1, 2, 3, 4, 6, 4, 2, 1, 2, 3];
// const longRun = [9, 8, 7, 6, 6, 5, 4, 3, 2, 1];

function relationBtw(value1, value2, relation) {
    if (value1 > value2) return "greater";
    if (value1 < value2) return "less";
    if (value1 === value2) return relation;
}

function findRuns(array) {
    const runs = [];
    let relation = relationBtw(array[0], array[1]);
    let currentRun = [];
    currentRun[0] = array[0];
    for (let i = 0; i < array.length; i++) {
        const currentRelation = relationBtw(array[i], array[i + 1], relation);

        if (currentRelation === relation) {
            currentRun.push(array[i + 1]);
        } else {
            runs.push(currentRun);
            currentRun = [];
            currentRun[0] = array[i + 1];
            relation = currentRelation;
        }
    }
    return runs;
}

// console.log(findRuns(longRun));

function areArraysEqual(value1, value2) {
    if (!isLengthSame(value1, value2)) return false;

    for (let i = 0; i < value1.length; i++) {
        if (type(value1[i]) !== type(value2[i])) return false;
        if (!isEqual(value1[i], value2[i])) return false;
    }
    return true;
}

function test(sentence, array, expected) {
    const isCorrect = areArraysEqual(findRuns(array), expected) ? "✅" : "🚫";
    console.log(`${isCorrect} | ${sentence}`);
}

function main() {
    test("arrays in increasing order", [1, 2, 3], [[1, 2, 3]]);
}

main();
