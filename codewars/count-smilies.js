// https://www.codewars.com/kata/count-the-smiley-faces

function countSmileys(arr) {
  let count = 0;
  let re = /[\:\;](-|~)?[\)D]/;
  arr.forEach(str => {
    if (re.test(str)) count++;
  });
  return count;
}