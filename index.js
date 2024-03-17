// index.js

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  const text = 'racecar';
  if (isPalindrome(text)) {
    console.log(`${text} is a palindrome.`);
  } else {
    console.log(`${text} is not a palindrome.`);
  }
  