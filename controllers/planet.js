// controllers/planet.js

const { Planet } = require('../models');

// GET /planets - List all planets
exports.index = async (req, res) => {
  try {
    const planets = await Planet.findAll();
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /planets - Create a new planet
exports.create = async (req, res) => {
  try {
    const { name, size, description } = req.body;
    const newPlanet = await Planet.create({ name, size, description });
    res.status(201).json(newPlanet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /planets/:id - Get a single planet by ID
exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findByPk(id);
    if (!planet) {
      return res.status(404).json({ error: 'Planet not found' });
    }
    res.status(200).json(planet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /planets/:id - Update a planet by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, size, description } = req.body;
    const planet = await Planet.findByPk(id);
    if (!planet) {
      return res.status(404).json({ error: 'Planet not found' });
    }
    await planet.update({ name, size, description });
    res.status(200).json(planet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /planets/:id - Delete a planet by ID
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findByPk(id);
    if (!planet) {
      return res.status(404).json({ error: 'Planet not found' });
    }
    await planet.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
