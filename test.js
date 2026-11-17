const { isEqual } = require("./deepEquality");

function testValues(testSubject) {
    const result = isEqual(testSubject.value1, testSubject.value2);
    let isCorrect = result === testSubject.expectedOutput ? "✅" : "🚫";
    return `Title ${testSubject.title} \nexpected value = ${testSubject.expectedOutput} \n${isCorrect} result = ${result} \n`;
}

function multipleTester(combinations) {
    for (const subjects of combinations) {
        console.log(testValues(subjects));
    }
}

const test = [
    {
        title: "same numbers",
        value1: 1,
        value2: 1,
        expectedOutput: true,
    },

    {
        title: "different numbers",
        value1: 1,
        value2: 2,
        expectedOutput: false,
    },
    {
        title: "same string",
        value1: "a",
        value2: "a",
        expectedOutput: true,
    },
    {
        title: "empty arrays",
        value1: [],
        value2: [],
        expectedOutput: true,
    },
    {
        title: "same nested arrays",
        value1: [1, [1, 2]],
        value2: [1, [1, 2]],
        expectedOutput: true,
    },
    {
        title: "different array",
        value1: [1],
        value2: [1, 2],
        expectedOutput: false,
    },
    {
        title: "different datatype value     ",
        value1: 1,
        value2: "1",
        expectedOutput: false,
    },
    {
        title: "same object(object)",
        value1: { a: 1 },
        value2: { a: 1 },
        expectedOutput: true,
    },
    {
        title: "different keys(object)",
        value1: { a: 1 },
        value2: { b: 1 },
        expectedOutput: false,
    },
    {
        title: "different values(object)",
        value1: { a: 1 },
        value2: { a: 2 },
        expectedOutput: false,
    },
    {
        title: "value as an array(object)",
        value1: { a: [1] },
        value2: { a: [1] },
        expectedOutput: true,
    },
    {
        title: "value as another object(object)",
        value1: { a: { b: 1 } },
        value2: { a: { b: 1 } },
        expectedOutput: true,
    },
    {
        title: "same object with multiple keys(object)",
        value1: { a: 1, b: 1 },
        value2: { a: 1, b: 1 },
        expectedOutput: true,
    },
    {
        title: "same object but keys located differently(object)",
        value1: { a: 1, b: 1 },
        value2: { b: 1, a: 1 },
        expectedOutput: true,
    },
    {
        title: "using undefined as a value(object)",
        value1: { a: 1, b: undefined },
        value2: { b: undefined, a: 1 },
        expectedOutput: true,
    },
    {
        title: "using null as a value(object)",
        value1: { a: 1, b: null },
        value2: { b: null, a: 1 },
        expectedOutput: true,
    },
    {
        title: "using Nan as a value(object)",
        value1: { a: 1, b: NaN },
        value2: { b: NaN, a: 1 },
        expectedOutput: false,
    },
    {
        title: "using null and undefined(object)",
        value1: { a: 1, b: null },
        value2: { b: undefined, a: 1 },
        expectedOutput: false,
    },
    {
        title: "",
        value1: { a: 1, b: null },
        value2: { b: NaN, a: 1 },
        expectedOutput: false,
    },
];

multipleTester(test);
