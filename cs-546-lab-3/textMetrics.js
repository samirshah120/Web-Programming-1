function createMetrics(text)
{
    if(typeof text !== "string")
        throw `Input should be string`
    text = text.toLowerCase();
    let letters = 0;
    let nonletters = 0;
    let vowels = 0;
    let consonants = 0;
    for(let i=0;i<text.length;i++)
    {
        if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122)
        {
            letters++;
            if(text[i] === 'a' || text[i] === 'i' || text[i] === 'e' || text[i] === 'o' || text[i] === 'u')
            {
                vowels++; 
            }
            else
            {
                consonants++;
            }
        }
        else
        {
            nonletters++;
        }
    }
    let characterOneSpace = text.replace(/\s+/g," ")
    let words1 = characterOneSpace.replace(/[^a-z]/g,' ')
    words1 = words1.trim()
    let words = words1.replace(/\s+/g," ").split(" ")
    let charMap = {}
    for(let i=0;i<words.length;i++){
        if(charMap[words[i]])
        {
            charMap[words[i]]++;
        }
        else
        {
            charMap[words[i]] = 1; 
        }
    }

    let map = new Map();
    for(let i=0;i<words.length;i++)
    {
        if(map.has(words[i]))
        {
            map.set(words[i],map.get(words[i])+1)
        }
        else
        {
            map.set(words[i],1)
        }
    }
    let longwords = 0;
    for(let i=0;i<words.length;i++)
    {
        if(words[i].length >= 6)
            longwords++;

    }
    let avgWordLen = 0;
    for(let i=0;i<words.length;i++)
    {
        avgWordLen = avgWordLen + words[i].length;

    }
    avgWordLen = avgWordLen / words.length;
    

    let object1 = {
        "totalLetters" : letters,
        "totalNonLetters" : nonletters,
        "totalWords" : words.length,
        "totalVowels" : vowels,
        "totalConsonants" : consonants,
        "uniqueWords" : map.size,
        "longWords" : longwords,
        "averageWordLength" : avgWordLen,
        "wordOccourances" : charMap
    }

    return object1
    
}
console.log(createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"))
module.exports={
    createMetrics
}