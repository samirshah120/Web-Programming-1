function isValidNumber(variable, variableName)
{
    if(variable < 0) 
        throw `${variableName||'provided variable'} is less than 0`
    if(variable === 0)
        throw `${variableName||'provided variable'} is equal to 0`
    if(typeof variable === undefined)
        throw `${variableName||'provided variable'} is undefined`
    if(variable === null)
        throw `${variableName||'provided variable'} is null`
    if(typeof variable !== "number")
        throw `${variableName||'provided variable'} is not a number`

}
function volumeOfRectangularPrism(length, width, height){
    isValidNumber(length,"length")
    isValidNumber(width,"width")
    isValidNumber(height,"height")
    let volume;
    volume = length * width * height;
    return volume;
}

function surfaceAreaOfRectangularPrism(length, width, height){
    isValidNumber(length,"length")
    isValidNumber(width,"width")
    isValidNumber(height,"height")
    let area;
    area = 2*(length*width + width*height + length*height);
    return area;
}

function volumeOfSphere(radius)
{
    isValidNumber(radius,"radius")
    let volume;
    volume = (4/3)*Math.PI*Math.pow(radius,3);
    return volume;
}

function surfaceAreaOfSphere(radius){
    isValidNumber(radius,"radius")
    let area;
    area = 4*Math.PI*Math.pow(radius,2);
    return area;
}
module.exports = {
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
}