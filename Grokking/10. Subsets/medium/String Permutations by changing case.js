const find_letter_case_string_permutations = function (str) {
  if (str.length === 0 || !isNaN(str)) return [str];
  if (str.length === 1) return [str.toLowerCase(), str.toUpperCase()];

  const nextPerms = find_letter_case_string_permutations(str.slice(1));
  const perms = [];
  nextPerms.forEach((perm) => {
    if (isNaN(str[0])) {
      perms.push(str[0].toLowerCase() + perm, str[0].toUpperCase() + perm);
    } else {
      perms.push(str[0] + perm);
    }
  });

  return perms;
};

// console.log(`String permutations are: ${find_letter_case_string_permutations('ad52')}`);
console.log(`String permutations are: ${find_letter_case_string_permutations('ab7c')}`);
