const bluebird = require("bluebird");
//const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));
async function getFileAsString(path) {
    if(!path){
        throw "Please provide a file path";   
    }
    else{
        let result = await fs.readFileAsync(path, "utf-8");//file output is of type string
        return result;
        }
    }
async function getFileAsJSON(path){
    if(!path){
        throw "Please provide a file path";   
    }
    else{
        const result = await fs.readFileAsync(path,"utf-8")
        const obj = JSON.parse(result)
        return obj
    }
    
}
async function saveStringToFile(path, text){
    if(!path){
        throw "Please provide a file path";   
    }
    else{
        const result = await fs.writeFileAsync(path,text)
        return result;
        
    }
    
}

 async function saveJSONToFile(path, obj){
    if(!path){
        throw "Please provide a file path";   
    }
    else{
        const obj1 = JSON.stringify(obj)
        const result =  await fs.writeFileAsync(path,obj1)
        return result;
    }
    
 }

module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
}










