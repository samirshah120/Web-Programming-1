const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));
const fileData = require("./fileData")
const textMetrics = require("./textMetrics")
async function fn() {
    //test for chapter 1
    let chapter1json = "./chapter1.result.json";
    if(fs.existsSync(chapter1json)){
        try{
            let test0 = await fileData.getFileAsJSON(chapter1json)
            console.log(test0)
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        try{
            let test =  await fileData.getFileAsString("./chapter1.txt");
            console.log(test);
        }
        catch(err){
            console.log(err)
        }
    }

    try{
        let test =  await fileData.getFileAsString("./chapter1.txt");
        let textmetricsoutput =  textMetrics.createMetrics(test)
        try{
        let test2 = await fileData.saveJSONToFile(chapter1json,textmetricsoutput)
        }
        catch(err){
        console.log(err)
        }
    }
    catch(err){
            console.log(err)
        }

    //test for chapter 2

    let chapter2json = "./chapter2.result.json";
    if(fs.existsSync(chapter2json)){
        try{
            let test0 = await fileData.getFileAsJSON(chapter2json)
            console.log(test0)
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        try{
            let test =  await fileData.getFileAsString("./chapter2.txt");
            console.log(test);
        }
        catch(err){
            console.log(err)
        }
    }

    try{
        let test =  await fileData.getFileAsString("./chapter2.txt");
        let textmetricsoutput =  textMetrics.createMetrics(test)
        try{
        let test2 = await fileData.saveJSONToFile(chapter2json,textmetricsoutput)
        }
        catch(err){
        console.log(err)
        }
    }
    catch(err){
            console.log(err)
    }

    //test for chapter 3
    let chapter3json = "./chapter3.result.json";
    if(fs.existsSync(chapter3json)){
        try{
            let test0 = await fileData.getFileAsJSON(chapter3json)
            console.log(test0)
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        try{
            let test =  await fileData.getFileAsString("./chapter3.txt");
            console.log(test);
        }
        catch(err){
            console.log(err)
        }
    }

    try{
        let test =  await fileData.getFileAsString("./chapter3.txt");
        let textmetricsoutput =  textMetrics.createMetrics(test)
        try{
        let test2 = await fileData.saveJSONToFile(chapter3json,textmetricsoutput)
        }
        catch(err){
        console.log(err)
        }
    }
    catch(err){
            console.log(err)
        }


}
fn();


