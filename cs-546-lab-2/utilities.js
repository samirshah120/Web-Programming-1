function isValidArray(variable,variableName)
{
    if(!Array.isArray(variable))
        throw `${variableName||'provided variable'} is not an array`
    for(let i=0;i<variable.length;i++)
    {
        if(typeof variable[i] === "undefined")
            throw `${variableName||'provided variable'} undefined values`
    }
}
function isValidString(variable,variableName)
{
    if(typeof variable !== "string")
        throw `${variableName||'provided variable'} is not a string`
     if(typeof variable === "undefined")
        throw `${variableName||'provided variable'} is undefined`
     if(variable === null)
        throw `${variableName||'provided variable'} is null`
}

function isValidObject(variable,variableName)
{
    if(typeof variable === "undefined")
        //throw "jfsjf"
        throw `${variableName ||'provided variable'} is undefined`
    if(variable === null)
        throw `${variableName||'provided variable'} is null`
    if(typeof variable !== "object")
        throw `${variableName||'provided variable'} is not an object`
}
let flag = 0;
function deepEquality(obj1, obj2){ //Reference : https://stackoverflow.com/questions/25456013/javascript-deepequal-comparison/25456134
    if(flag === 0)
    {
        isValidObject(obj1,"Object 1")
        isValidObject(obj2,"Object 2")
        flag = 1;
    }
    if (obj1 === obj2) {
      return true;
    }
    else if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
      if (Object.keys(obj1).length != Object.keys(obj2).length)
        return false;
  
      for (let key in obj1) {
        if (obj2.hasOwnProperty(key))
        {  
          if (! deepEquality(obj1[key], obj2[key]))
            return false;
        }
        else
          return false;
      }
  
      return true;
    }
    else 
      return false;
  }


function uniqueElements(arr){ 
    isValidArray(arr, "arr")
    let map = new Map();
    for(let i=0;i<arr.length;i++)
    {
        if(map.has(arr[i]))
        {
            map.set(arr[i],map.get(arr[i])+1)
        }
        else
        {
            map.set(arr[i],1)
        }
    }
    return map.size; 

}

function countOfEachCharacterInString(test){ //no maps 
    isValidString(test,"string")
    let charMap = {}
    for(let i=0;i<test.length;i++){
        if(charMap[test[i]])
        {
            charMap[test[i]]++;
        }
        else
        {
            charMap[test[i]] = 1; 
        }
    }
    return charMap;
}

module.exports = {
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
}