const express = require('express');
const router = express.Router();
const data = require('../data');
const albumData = data.albums;

router.get('/:id', async (req, res) => {
	try {
		const album = await albumData.getAlbumById(req.params.id);
		res.json(album);
	} catch (e) {
		res.status(404).json({ error: 'Album not found' });
	}
});

router.get('/', async (req, res) => {
	try {
		const albumList = await albumData.getAllAlbums();
		res.json(albumList);
	} catch (e) {
		res.status(404).json({ error: 'Album not found' });
	}
});

router.post('/', async (req, res) => {
	const albumPostData = req.body;
	if (!albumPostData.title) {
		res.status(400).json({ error: 'You must provide title' });
		return;
	}
	if (!albumPostData.author) {
		res.status(400).json({ error: 'You must provide author ID' });
		return;
	}
	if (!albumPostData.songs) {
		res.status(400).json({ error: 'You must provide songs' });
		return;
	}
	try {
		const { title,author,songs} = albumPostData;
		const newAlbum = await albumData.addAlbum(title, author,songs);
		res.json(newAlbum);
	} catch (e) {
		res.status(404).json({ error: 'Not added' });
	}
});

router.patch('/:id', async (req, res) => {
	const requestBody = req.body;
	let updatedObject = {};
	try {
		const oldAlbum = await albumData.getAlbumById(req.params.id);
		if (requestBody.title && requestBody.title !== oldAlbum.title) updatedObject.title = requestBody.title;
	} catch (e) {
		res.status(404).json({ error: 'Album not found' });
		return;
	}

	try {
		const updatedAlbum = await albumData.updateAlbum(req.params.id, updatedObject);
		res.json(updatedAlbum);
	} catch (e) {
		res.status(400).json({ error: e });
	}
});

router.delete('/:id', async (req, res) => {
	if (!req.params.id) {
		res.status(400).json({ error: 'You must Supply and ID to delete' });
		return;
	}
	try {
		await albumData.getAlbumById(req.params.id);
	} catch (e) {
		res.status(404).json({ error: 'Album not found' });
		return;
	}
	try {
		let album = await albumData.getAlbumById(req.params.id) 
		await albumData.removeAlbum(req.params.id);
		res.status(200).json(album);
	} catch (e) {
		res.status(400).json({ error: e });
	}
});

module.exports = router;
