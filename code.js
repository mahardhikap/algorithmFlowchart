//1.Palindrom
const palindrom = (word) => {
  if (typeof word === 'string') {
    const newWord = word.split('').reverse().join('');
    if (word.toLowerCase() === newWord.toLowerCase()) {
      console.log('ini adalah palindrom');
    } else {
      console.log('ini bukan palindrom');
    }
  } else {
    console.log('tidak valid')
  }
};
palindrom('test');

// 2.Words Reverse
const wordsReverse = (words) => {
  if (typeof words === 'string') {
    const newWords = words.split(' ').reverse().join(' ');
    console.log(newWords)
  } else {
    console.log('tidak valid')
  }
};
wordsReverse('Saya belajar Javascript');
