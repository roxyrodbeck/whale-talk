var input = 'Hello out there!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const letters = input[i].toLowerCase();

    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]); 
    
}
    
    for (let j = 0; j < vowels.length; j++) {
    const whale = vowels[j];

        if (letters === whale) {
        resultArray.push(whale);
  
    } 

} 
}
var resultString = resultArray.join('').toUpperCase();
console.log(resultString)
