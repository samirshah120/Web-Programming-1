const mongoCollections = require("../mongoCollections")
const animals = mongoCollections.animals
const {ObjectId} = require("mongodb").ObjectID
async function create(name, animalType){
    if(!name)throw `Please provide name`
    if(!animalType) throw `Please provide Animal type`
    if(typeof name !== "string")throw `Please provide name in string format`
    if(typeof animalType !== "string")throw `Please provide type in String format`
    
    const animalCollection = await animals()
    let newAnimalObj = {
        name: name,
        animalType:animalType
    }
    const insertedInfo = await animalCollection.insertOne(newAnimalObj)
    if(insertedInfo.insertedcount === 0)throw `Data is not inserted`

    const newID = insertedInfo.insertedId;

    const result = await get(newID)
    return result;
}

async function get(id){

    if(!id)throw `Please provide id`
    if(! ObjectId.isValid(id)){
        throw "Wrong ID"
    }
    const animalCollection = await animals()
    const animal1 = await animalCollection.findOne({ _id: ObjectId(id)})
    if(animal1 === null)throw `No animal exists with this id`
    return animal1
}

async function getAll(){
    const animalCollection = await animals()
    const animalList = await animalCollection.find({}).toArray()
    return animalList
}

async function remove(id){
    if(!id)throw `Please provide id`
    if(! ObjectId.isValid(id)){
        throw "Wrong ID"
    }
    const animalCollection = await animals()
    const deleteInfo = await animalCollection.deleteOne({ _id: ObjectId(id)})
    if(deleteInfo.deletedCount === 0)throw `Cannot delete animal with id ${id}`
}
async function rename(id, newName){
    if(!id)throw `Please provide id`
    if(! ObjectId.isValid(id)){
        throw "Wrong ID"
    }
    if(!newName)throw `Please provide name`
    if(typeof newName !== "string")throw `Please provide name in string format`
    const animalCollection = await animals()
    const updated = {
        name : newName
    }
    const updatedInfo = await animalCollection.updateOne({ _id: ObjectId(id)}, { $set: updated })
    if (updatedInfo.modifiedCount === 0) {
        throw 'could not update animal successfully';
    }
    return await get(id);
}

module.exports = {
    create,
    get,
    getAll,
    remove,
    rename

}