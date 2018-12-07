// https://www.codewars.com/kata/simple-encryption-number-1-alternating-split

// ENCRYPTOMATIC

const getEncryptedString = string => {
  let evens = '';
  let odds = '';
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if ((i + 1) % 2 === 0) {
      evens += char
    } else {
      odds += char;
    }
  }
  
  return evens + odds;
};

function encrypt(text, n) {
  let string = text;
  
  if (string && string !== '' && n > 0) {
    for (let i = 0; i < n; i++) {
      string = getEncryptedString(string);
    }
  }
  
  return string;
}

// DECRYPTOMATIC

const getDecryptedString = string => {
  let mid = ~~(string.length / 2);
  let evens = string.slice(0, mid);
  let odds = string.slice(mid);
  let combined = '';
  
  for (let i = 0; i < odds.length; i++) {
    combined += odds[i];
    if (evens[i]) combined += evens[i];
  }
  
  return combined;
};

function decrypt(text, n) {
  let string = text;
  
  if (string && string !== '' && n > 0) {
    for (let i = 0; i < n; i++) {
      string = getDecryptedString(string);
    }
  }
  
  return string;
}