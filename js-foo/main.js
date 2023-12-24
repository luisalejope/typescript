/* function decode(message) {
  const words = message.split(' ')
  const revertWord = (wordToRevert) => wordToRevert.split('').reverse().join('')
  
  const wordsReverted = words.map(word => {
    let revertedWord = ''
    const indexOpenParenthesis = word.indexOf('(')
    const indexClosedParenthesis = word.lastIndexOf(')')
    const slicedPart = word.substring(indexOpenParenthesis + 1, indexClosedParenthesis)
    
    // 1 palabara
    if (slicedPart.includes('(')) {
      
      if (slicedPart.includes(')(')) {
        const separatedText = slicedPart.replace(/\)\(/g, ') (').split(' ');
        const revertedTextByArray = separatedText.map(text => {
          const withoutParentheses = text.replace(/[()]/g, '');
          return revertWord(withoutParentheses)
        })
        revertedWord = revertedTextByArray.join('')
        
      } else {
        console.log('hola');
        const indexOpenParenthesisLevelTwo = slicedPart.indexOf('(')
        const indexClosedParenthesisLevelTwo = slicedPart.lastIndexOf(')')
        const slicedPartLevelTwo = slicedPart.slice(indexOpenParenthesisLevelTwo + 1, indexClosedParenthesisLevelTwo)

        revertedWord = slicedPart.replace(`(${slicedPartLevelTwo})`, revertWord(slicedPartLevelTwo))
      } 

    } else {
      revertedWord = slicedPart
    }
    return word.replace(`(${slicedPart})`, revertWord(revertedWord))
  });

  return wordsReverted.join(' ')
} */
/* 
const c = decode('(olleh) (dlrow)!') */

// const b = decode('(olleh) (dlrow)!')

/* function adjustLights(lights) {

  const red = '🔴';
  const green = '🟢';

  const changeColor = {
    '🔴': () => '🟢',
    '🟢': () => '🔴'
  }

  let numberChanges = 0;
  let newArray = [...lights]

  let nextValue = ''
debugger;
  for(let i = 0; i< newArray.length; i++) {
    nextValue = newArray[i+1]
    if(nextValue === newArray[i]) {

      if (i === 0) {
        newArray[i] = changeColor[newArray[i]]()
         numberChanges += 1;
      }else {
        newArray[i+1] = changeColor[newArray[i]]()
        numberChanges += 1;
      }
    }
  }

  /* lights.forEach((light, key) => {
    // 1. first light
    if(light === newArray[key+1]) {
      newArray.push(changeColor[light]())
      numberChanges += 1
    }    
  }) 

  return numberChanges

} */


/* function removeChar(str){
  const totalItems = str.length
 
  const replace=str.replace(str[totalItems-1], '').replace(str[0], '');
  console.log(str, totalItems, replace)
  
  
  return replace
  

};

console.log(removeChar('83zfuzf'));
 */


function decode(message) {

  function findCharsInsideParentheses(str) {
    const regex = /\(([^)]+)\)/g;
    const matches = [];
    let match;

    while ((match = regex.exec(str)) !== null) {
      matches.push(match[1]);
    }

    return matches;
  }

  //caso 1: si no existe parenstesis en todo el texto

  if(!message.includes('(')) {
    return message;
  }

  // caso 2: si existe parentesis en todo el texto

    // separacion de palabras por espacios
  const separated = message.split(' ')

  const revert = separated.map(str => {
    //caso 2.1: si no existe parenstesis en la palabra
    if(!str.includes('(')) {
      return message;
    }
    
    const firstParenthesis = str.indexOf('(')
    const lastParenthesis = str.lastIndexOf(')')
    console.log(firstParenthesis, lastParenthesis);
    // caso 2.2 si existe parentesis en la palabra

  })
}

const c = decode("sa(u(cla)atn)s")