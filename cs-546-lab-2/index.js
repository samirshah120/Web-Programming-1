let geometry = require('./geometry')
let utilities = require('./utilities')

// try{
//     console.log(geometry.volumeOfRectangularPrism(1,2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfRectangularPrism")
// }

// try{
//     console.log(geometry.volumeOfRectangularPrism(0,2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfRectangularPrism")
// }

// try{
//     console.log(geometry.volumeOfRectangularPrism(-1,2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfRectangularPrism")
// }

// try{
//     console.log(geometry.volumeOfRectangularPrism(null,2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfRectangularPrism")
// }

// try{
//     console.log(geometry.volumeOfRectangularPrism("a",2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfRectangularPrism")
// }

// try{
//     console.log(geometry.surfaceAreaOfRectangularPrism(1,2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfRectangularPrism")
// }
// try{
//     console.log(geometry.surfaceAreaOfRectangularPrism(0,2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfRectangularPrism")
// }
// try{
//     console.log(geometry.surfaceAreaOfRectangularPrism(-1,2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfRectangularPrism")
// }
// try{
//     console.log(geometry.surfaceAreaOfRectangularPrism(null,2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfRectangularPrism")
// }
// try{
//     console.log(geometry.surfaceAreaOfRectangularPrism("a",2,3))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfRectangularPrism")
// }

// try{
//     console.log(geometry.volumeOfSphere(5))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfSphere")
// }
// try{
//     console.log(geometry.volumeOfSphere(0))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfSphere")
// }
// try{
//     console.log(geometry.volumeOfSphere(-5))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfSphere")
// }
// try{
//     console.log(geometry.volumeOfSphere(null))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfSphere")
// }
// try{
//     console.log(geometry.volumeOfSphere("a"))
// }
// catch(err)
// {
//     console.log("Error while calculating volumeOfSphere")
// }

// try{
//     console.log(geometry.surfaceAreaOfSphere(5))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfSphere")
// }

// try{
//     console.log(geometry.surfaceAreaOfSphere(0))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfSphere")
// }

// try{
//     console.log(geometry.surfaceAreaOfSphere(-5))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfSphere")
// }

// try{
//     console.log(geometry.surfaceAreaOfSphere(null))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfSphere")
// }

// try{
//     console.log(geometry.surfaceAreaOfSphere("a"))
// }
// catch(err)
// {
//     console.log("Error while calculating surfaceAreaOfSphere")
// }

const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const fourth = {a:{b:1}}
const fifth = {a:{b:1}}
const sixth = {a:{b:2}}
const seventh = {a:{b:2,c:3}}
const eighth = {a:{b:2,c:3}}
try{
    const utl = utilities.deepEquality();
    // console.log(utilities.deepEquality()); // false
}catch(err)
{
    console.log(err)
    console.log("Error while calculating deepEquality")
}
// try{
//     //console.log(utilities.deepEquality(first, third)); // true
// }
// catch(err)
// {
//     //console.log("Error while calculating deepEquality")
// }
// try{
//     //console.log(utilities.deepEquality(fourth, fifth)); //true
// }
// catch(err)
// {
//     //console.log("Error while calculating deepEquality")
// }
// try{
//     //console.log(utilities.deepEquality(fourth, sixth)); //false
// }
// catch(err)
// {
//     //console.log("Error while calculating deepEquality")
// }
// try{
//     //console.log(utilities.deepEquality(seventh,eighth)); //true
// }
// catch(err)
// {
//     //console.log("Error while calculating deepEquality")
// }


// const testArr = ["a", "a", "b", "a", "b", "c"];
// const testArr1 = [];
// const testArr2 = null;
// const testArr3 = 12345;
// const testArr4 = [undefined];
// try{
//     console.log(utilities.uniqueElements(testArr)); // outputs 3
// }
// catch(err){
//     console.log("Error while calculating uniqueElements")
// }
// try{
//     console.log(utilities.uniqueElements(testArr1)); // outputs 
// }
// catch(err){
//     console.log("Error while calculating uniqueElements")
// }
// try{
//     console.log(utilities.uniqueElements(testArr2)); // outputs 
// }
// catch(err){
//     console.log("Error while calculating uniqueElements")
// }
// try{
//     console.log(utilities.uniqueElements(testArr3)); // outputs 
// }
// catch(err){
//     console.log("Error while calculating uniqueElements")
// }
// try{
//     console.log(utilities.uniqueElements(testArr4)); // outputs 
// }
// catch(err){
//     console.log("Error while calculating uniqueElements")
// }


// const test = "Hello, the pie is in the oven";
// const test1 = null;
// const test2 = undefined;
// const test3 = 1234;
// const test4 = "";
// try{
//     const charMap = utilities.countOfEachCharacterInString(test)
//     console.log(charMap)
// }
// catch(err)
// {
//     console.log("Error while calculating countOfEachCharacterInString")
// }

// try{
//     const charMap = utilities.countOfEachCharacterInString(test1)
//     console.log(charMap)
// }
// catch(err)
// {
//     console.log("Error while calculating countOfEachCharacterInString")
// }

// try{
//     const charMap = utilities.countOfEachCharacterInString(test2)
//     console.log(charMap)
// }
// catch(err)
// {
//     console.log("Error while calculating countOfEachCharacterInString")
// }

// try{
//     const charMap = utilities.countOfEachCharacterInString(test3)
//     console.log(charMap)
// }
// catch(err)
// {
//     console.log("Error while calculating countOfEachCharacterInString")
// }

// try{
//     const charMap = utilities.countOfEachCharacterInString(test4)
//     console.log(charMap)
// }
// catch(err)
// {
//     console.log("Error while calculating countOfEachCharacterInString")
// }
