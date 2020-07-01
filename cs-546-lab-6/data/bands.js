const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const albums = mongoCollections.albums;
const { ObjectId } = require("mongodb").ObjectID;
//const uuid = require('uuid/v4');

let exportedMethods = {
  async getAllBands() {
    const bandCollection = await bands();
    const bandList = await bandCollection.find({}).toArray();

    if (!bandList) throw 'No bands in system!';
    return bandList
    // let result = []
    // for (let i = 0; i < bandList.length; i++) {
    //     const data = await this.getBandById(bandList[i]._id)
    //     result[i] = data
    // }
    // return result;
  },
  // This is a fun new syntax that was brought forth in ES6, where we can define
  // methods on an object with this shorthand!
  async getBandById(id) {
    id = ObjectId(id)
    const bandCollection = await bands();
    const albumCollection = await albums();
    const band = await bandCollection.findOne({_id: id});
    return band
  //   let newBandDetails = {
  //     _id : id,
  //     bandName : band.bandName,
  //     bandMembers : band.bandMembers,
  //     yearFormed : band.yearFormed,
  //     genres : band.genres,
  //     albums: [],
  //     recordLabel : band.recordLabel
  //   }
  //   for (let i = 0; i < band.albums.length; i++) {
  //     const albumData = await albumCollection.findOne({ _id: ObjectId(band.albums[i])});
  //     albumTitle = albumData.title;
  //     albumid = albumData._id.toString();
  //     albumAuthor = albumData.author.bandname
  //     albumSongs = albumData.songs
      
  //     let pushalbumContent = {
  //         "_id": albumid,
  //         "title": albumTitle,
  //         "author": albumAuthor,
  //         "songs": albumSongs
  //     }
  //     newBandDetails.albums.push(pushalbumContent)
  // }
  //   if (!newBandDetails) throw 'band not found';
  //   return newBandDetails;
  },
  async addBand(bandName,bandMembers,yearFormed,genres,recordLabel) {
    const bandCollection = await bands();

    let newBand = {
      bandName : bandName,
      bandMembers : bandMembers,
      yearFormed : yearFormed,
      genres : genres,
      albums: [],
      recordLabel : recordLabel    
      //_id: uuid(),
     
    };

    const newInsertInformation = await bandCollection.insertOne(newBand);
    if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';
    return await this.getBandById(newInsertInformation.insertedId);
  },
  async removeBand(id) {
    id = ObjectId(id)
    const bandCollection = await bands();
    const deletionInfo = await bandCollection.removeOne({_id: id});
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete user with id of ${id}`;
    }
    return true;
  },
  async updateBand(id, updatedBand) {
    id = ObjectId(id)
    const band = await this.getBandById(id);
    console.log(band);

    let bandUpdateInfo = {
      bandName: updatedBand.bandName,
      bandMembers: updatedBand.bandMembers,
      yearFormed : updatedBand.yearFormed,
      genres : updatedBand.genres,
      recordLabel : updatedBand.recordLabel
    };

    const bandCollection = await bands();
    const updateInfo = await bandCollection.updateOne({_id: id}, {$set: bandUpdateInfo});
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getBandById(id);
  },
  async addAlbumToBand(authorId, newAlbumId) {
    let currentBand = await this.getBandById(authorId);
    console.log(currentBand);
    const bandCollection = await bands();
    //const authorId1 = authorId
    authorId = ObjectId(authorId)
    //newAlbumId = ObjectId(newAlbumId)
    newAlbumId = newAlbumId.toString()
    const updateInfo = await bandCollection.updateOne(
      {_id: authorId},
      {$addToSet: {albums:newAlbumId}}
    );

    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getBandById(authorId);
  },
  
  async removeAlbumFromBand(authorId, albumId) {
    let currentBand = await this.getBandById(authorId);
    console.log(currentBand);
    authorId = ObjectId(authorId)
    albumId = albumId.toString()
    const bandCollection = await bands();
    const updateInfo = await bandCollection.updateOne({_id: authorId}, {$pull: {albums:albumId}});
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Delete failed';

    return await this.getBandById(authorId);
  }
};

module.exports = exportedMethods;
