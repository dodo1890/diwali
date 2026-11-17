function type(value) {
    if (value === null) return "null";
    if (Number.isNaN(value)) return "NaN";
    if (Array.isArray(value)) return "array";
    return typeof value;
}

function isLengthSame(value1, value2) {
    return value1.length === value2.length;
}

function areObjectsEqual(value1, value2) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);
    if (!isLengthSame(keys1, keys2)) return false;

    for (const key of keys1) {
        if (!(key in value2)) return false;
        if (!isEqual(value1[key], value2[key])) return false;
    }

    return true;
}

function areArraysEqual(value1, value2) {
    if (!isLengthSame(value1, value2)) return false;

    for (let i = 0; i < value1.length; i++) {
        if (type(value1[i]) !== type(value2[i])) return false;
        if (!isEqual(value1[i], value2[i])) return false;
    }
    return true;
}

function isEqual(value1, value2) {
    if (type(value1) !== type(value2)) return false;

    switch (type(value1)) {
        case "array":
            return areArraysEqual(value1, value2);
        case "object":
            return areObjectsEqual(value1, value2);
        case "NaN":
            return true;
        default:
            return value1 === value2;
    }
}

function test(sentence, expected, value1, value2) {
    const isCorrect = isEqual(value1, value2) === expected ? "✅" : "🚫";
    console.log(`${isCorrect} | ${sentence}`);
}

function testingNumbers() {
    console.log("\nNUMBERS");
    test("two numbers are equal", true, 1, 1);
    test("two numbers are not equal", false, 1, 2);
    test("A number and undefined are not equal", false, 1, undefined);
    test("A number and null are not equal", false, 1, null);
}

function testingStrings() {
    console.log("\nSTRINGS");
    test("two strings are equal", true, "a", "a");
    test("two strings are not equal", false, "a", "b");
}

function testingBooleans() {
    console.log("\nBOOLEANS");
    test("two 'true' are equal", true, true, true);
    test("two 'false' are equal", true, false, false);
    test("'false and true' are not equal", false, false, true);
}

function testingArrays() {
    console.log("\nARRAYS");
    test("two empty arrays are equal", true, [], []);
    test("two same arrays should be equal", true, [1], [1]);
    test("two diff arrays should be not equal", false, [2], [1]);
    test(
        "two same nested arrays should be equal",
        true,
        [1, [1, 2], 3],
        [1, [1, 2], 3],
    );
    test(
        "two same nested arrays should be not equal",
        false,
        [1, [1, 2]],
        [1, [1, 1]],
    );
}

function testingObjects() {
    console.log("\nOBJECTS");
    test("two objects are equal", true, { a: 1 }, { a: 1 });
    test("two objects are not equal", false, { a: 1 }, { a: 2 });
    test(
        "same keys and value are same array should be equal",
        true,
        { a: [1] },
        { a: [1] },
    );
    test(
        "two nested objects are equal",
        true,
        { a: { b: 1 } },
        { a: { b: 1 } },
    );
    test(
        "two nested objects are not equal",
        false,
        { a: { b: 2 } },
        { a: { b: 1 } },
    );
    test(
        "two objects with same keys and values should be equal",
        true,
        { a: 1, b: 2 },
        { a: 1, b: 2 },
    );
}

function testingNullUndefinedNaN() {
    console.log("\nNull_Undefined_NaN");
    test("two NaN are equal", true, NaN, NaN);
    test("two undefined are equal", true, undefined, undefined);
    test("two null are equal", true, null, null);
    test("null and undefined are not equal", false, null, undefined);
}

function main() {
    testingNumbers();
    testingBooleans();
    testingStrings();
    testingArrays();
    testingObjects();
    testingNullUndefinedNaN();
}

main();
