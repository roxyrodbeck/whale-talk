var input = 'Hello out there!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const letters = input[i];
    
    for (let j = 0; j < vowels.length; j++) {
    const whale = vowels[j];

        if (letters === whale) {
        resultArray.push(whale);

        if (input[i] === 'e') {
            resultArray.push(input[i]); 
    }

    if (input[i] === 'u') {
        resultArray.push(input[i]); 
        
}
  
    } 

} 
}
var resultString = resultArray.join('').toUpperCase();
console.log(resultString)
