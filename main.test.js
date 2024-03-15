import { alphabetIndex } from "./main";
import { expect, test } from "vitest";

// Test single letter

// A = 1
test("A Should Equal [1]", () => {
  // arrange
  const word = "A";
  const expected = [1];

  // act
  const actual = alphabetIndex(word);

  // assert
  expect(actual).toStrictEqual(expected);
});

test("B Should Equal [2]", () => {
  // arrange
  const word = "B";
  const expected = [2];

  // act
  const actual = alphabetIndex(word);

  // assert
  expect(actual).toStrictEqual(expected);
});

// Test multi letter words

// test 'dog'
test("'Dog' should equal [4, 15, 7]", () => {
  // arrange
  const word = "DOG";
  const expected = [4, 15, 7];

  // act
  const actual = alphabetIndex(word);

  // assert
  expect(actual).toStrictEqual(expected);
});

// Test 'hello'
test("'Hello' should equal [8, 5, 12, 12, 15]", () => {
  // arrange
  const word = "Hello";
  const expected = [8, 5, 12, 12, 15];

  // act
  const actual = alphabetIndex(word);

  // assert
  expect(actual).toStrictEqual(expected);
});

// Test mix casing
test("'HElLo' should equal [8, 5, 12, 12, 15]", () => {
  // arrange
  const word = "HElLo";
  const expected = [8, 5, 12, 12, 15];

  // act
  const actual = alphabetIndex(word);

  // assert
  expect(actual).toStrictEqual(expected);
});

// test for error cases

// test to check non alpha characters
test("Entering Non-Alpha Characters fails", () => {
  //arrange
  const word = "hell4";

  const expected = "Unexpected character in word";

  //assert
  expect(() => alphabetIndex(word)).toThrowError(expected);
});

// handle empty string
test("Empty String returns empty array", () => {
  // arrange
  const word = "";
  const expected = [];

  // act
  const actual = alphabetIndex(word);

  // assert
  expect(actual).toStrictEqual(expected);
});
