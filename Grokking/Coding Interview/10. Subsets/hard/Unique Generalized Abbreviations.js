const generate = (word, index) => {
  if (index === 0) return [word[0], '1'];

  let prevAbbrs = generate(word, index - 1);

  let result = [];

  for (let i = 0; i < prevAbbrs.length; i++) {
    const abbr = prevAbbrs[i];

    result.push(abbr + word[index]);

    let lastChar = abbr[abbr.length - 1];

    if (!isNaN(lastChar)) {
      let firstPart = abbr.slice(0, abbr.length - 1);

      result.push(firstPart + (parseInt(lastChar, 10) + 1).toString());
    } else {
      result.push(abbr + '1');
    }
  }

  return result;
};

const generate_generalized_abbreviation = function (word) {
  return generate(word, word.length - 1);
};

console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('BAT')}`);
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('code')}`);
