const mongoCollections = require('../config/mongoCollections');
const albums = mongoCollections.albums;
const bands1 = mongoCollections.bands;
const bands = require('./bands');
//const uuid = require('uuid/v4');
const { ObjectId } = require("mongodb").ObjectID;

const exportedMethods = {
  async getAllAlbums() {
    const albumCollection = await albums();
    return await albumCollection.find({}).toArray();
  },
  async getAlbumById(id) {
    
    const albumCollection = await albums();
    id = ObjectId(id)
    const album = await albumCollection.findOne({_id: id});

    if (!album) throw 'Album not found';
    return album;
  },
  async addAlbum(title,authorId,songs) {
    if (typeof title !== 'string') throw 'No title provided';
    if (typeof authorId !== 'string') throw 'I aint got nobody!';

    if (!Array.isArray(songs)) {
      songs = [];
    }

    const albumCollection = await albums();

    const bandInfo = await bands.getBandById(authorId);
    //authorId = ObjectId(authorId)
    const newAlbum = {
      title: title,
      author: {
        _id: authorId,
        bandname: `${bandInfo.bandName}`
      },
      songs: songs,
      //_id: uuid()
    };

    const newInsertInformation = await albumCollection.insertOne(newAlbum);
    if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';
    const newId = newInsertInformation.insertedId;

    await bands.addAlbumToBand(authorId, newId);

    return await this.getAlbumById(newId);
  },
  async removeAlbum(id) {
    const albumCollection = await albums();
    let album = null;
    try {
      album = await this.getAlbumById(id);
    } catch (e) {
      console.log(e);
      return;
    }
    id = ObjectId(id)
    const deletionInfo = await albumCollection.removeOne({_id: id});
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete post with id of ${id}`;
    }

    await bands.removeAlbumFromBand(album.author._id, id);
    return true;
  },
  async updateAlbum(id, updatedAlbum) {
    const albumCollection = await albums();
    const bandCollection = await bands1();
    const updatedAlbumData = {};

    if (updatedAlbum.title) {
      updatedAlbumData.title = updatedAlbum.title;
    }
    id = ObjectId(id)
    const updateInfo = await albumCollection.updateOne({_id: id}, {$set: updatedAlbumData});
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    //const currentAlbum = await this.getAlbumById(id)
    //authorId = ObjectId(currentAlbum.author._id)
    //authorId = currentAlbum.author._id
    //const currentband = await bands.getBandById(authorId)
    // const updateBandInfo = await bandCollection.updateOne(
    //   {_id: authorId,albums.id :id},
    //   {$set:{albums:{title:updatedAlbum.title}}}
    //);
  //if (!updateBandInfo.matchedCount && !updateBandInfo.modifiedCount) throw 'Update failed';
    // await bands.updateAlbumToBand(title);
    return await this.getAlbumById(id)
  }
};

module.exports = exportedMethods;
