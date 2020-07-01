const express = require('express');
const router = express.Router();
const data = require('../data');
const bandData = data.bands;

router.get('/:id', async (req, res) => {
	try {
		let band = await bandData.getBandById(req.params.id);
		if(band === null || band === undefined)
			res.status(404).json({ error: 'Band not found' })
		else
			res.json(band);
	} catch (e) {
		res.status(404).json({ error: 'Band not found' });
	}
});

router.get('/', async (req, res) => {
	try {
		let bandList = await bandData.getAllBands();
		res.json(bandList);
	} catch (e) {
		res.sendStatus(400);
	}
});

router.post('/', async (req, res) => {
	let bandInfo = req.body;
	if (!bandInfo) {
		res.status(400).json({ error: 'You must provide data to create a band' });
		return;
	}
	if (!bandInfo.bandName) {
		res.status(400).json({ error: 'You must provide a band name' });
		return;
	}
	if (!bandInfo.bandMembers) {
		res.status(400).json({ error: 'You must provide a band members name' });
		return;
	}
	if (!bandInfo.yearFormed) {
		res.status(400).json({ error: 'You must provide a year' });
		return;
	}
	if (!bandInfo.genres) {
		res.status(400).json({ error: 'You must provide genres' });
		return;
	}
	if (!bandInfo.recordLabel) {
			res.status(400).json({ error: 'You must provide record label' });
			return;
	}
	try {
		const newBand = await bandData.addBand(bandInfo.bandName,bandInfo.bandMembers,bandInfo.yearFormed,bandInfo.genres,bandInfo.recordLabel);
		res.json(newBand);
	} catch (e) {
		res.sendStatus(400);
	}
});

router.put('/:id', async (req, res) => {
	let bandInfo = req.body;
	if (!bandInfo) {
		res.status(400).json({ error: 'You must provide data to create a band' });
		return;
	}
	if (!bandInfo.bandName) {
		res.status(400).json({ error: 'You must provide a band name' });
		return;
	}
	if (!bandInfo.bandMembers) {
		res.status(400).json({ error: 'You must provide a band members name' });
		return;
	}
	if (!bandInfo.yearFormed) {
		res.status(400).json({ error: 'You must provide a last name' });
		return;
	}
	if (!bandInfo.genres) {
		res.status(400).json({ error: 'You must provide genres' });
		return;
	}
	if (!bandInfo.recordLabel) {
			res.status(400).json({ error: 'You must provide record label' });
			return;
	}

	try {
		await bandData.getBandById(req.params.id);
	} catch (e) {
		res.status(404).json({ error: 'Band not found' });
		return;
	}
	try {
		const updatedBand = await bandData.updateBand(req.params.id, bandInfo);
		res.json(updatedBand);
	} catch (e) {
		res.status(404).json({ error: 'Band not found' })
	}
});

router.delete('/:id', async (req, res) => {
	if (!req.params.id) throw 'You must specify an ID to delete';
	try {
		let band = await bandData.getBandById(req.params.id);
	} catch (e) {
		res.status(404).json({ error: 'Band not found' });
		return;
	}

	try {
		let band = await bandData.getBandById(req.params.id);
		await bandData.removeBand(req.params.id);
		res.status(200).json(band);
	} catch (e) {
		res.status(404).json({ error: 'Band not found' })
	}
});

module.exports = router;
