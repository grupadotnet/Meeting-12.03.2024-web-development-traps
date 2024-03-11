// 1
console.log(
  `0.2 + 0.1 === 0.3: ${0.2 + 0.1 === 0.3}, 0.2 + 0.1 == 0.3: ${
    0.2 + 0.1 == 0.3
  }`,
);

// 2
console.log('[] + [] =', [] + []);
console.log('{} + {} =', {} + {});
console.log('{} + [] =', {} + []);

// 3
console.log((!+[] + [] + ![]).length);

// 4
console.log(typeof NaN);

/**
 * 1. https://0.30000000000000004.com
 * 2. https://stackoverflow.com/questions/9021109/what-is-in-javascript
 * 3.   !+[] evaluates to true because +[] is 0 and !0 is true.
 *      [] evaluates to an empty string.
 *      ![] evaluates to false.
 *      "truefalse".length === 9.
 */
