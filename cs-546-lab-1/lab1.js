const questionOne = function questionOne(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum = sum + arr[i] * arr[i];
    }
    return sum;
}

const questionTwo = function questionTwo(num) { 
    if(num < 1)
        return 0;
    if(num == 1)
        return 1;
    else
        return questionTwo(num-1) + questionTwo(num-2);
}

const questionThree = function questionThree(text) {
    let count = 0;
    for(let i=0;i<text.length;i++)
    {
        if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' ||text[i] == 'o'||text[i] == 'u' ||text[i] == 'A' || text[i] == 'E' || text[i] == 'I' ||text[i] == 'O'||text[i] == 'U')
        {
            count++;
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    if(num < 0)
        return NaN;
    if(num == 0 || num == 1)
        return 1;
    else 
        return num * questionFour(num-1);
}

module.exports = {
    firstName: "Samir", 
    lastName: "Shah", 
    studentId: "10445681",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};