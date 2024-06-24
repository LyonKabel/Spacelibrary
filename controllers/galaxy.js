const { Galaxy } = require('../models');

// Show all resources
const index = async (req, res) => {
  try {
    const galaxies = await Galaxy.findAll();
    res.status(200).json(galaxies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch galaxies' });
  }
}

// Show resource
const show = async (req, res) => {
  try {
    const galaxy = await Galaxy.findByPk(req.params.id);
    if (galaxy) {
      res.status(200).json(galaxy);
    } else {
      res.status(404).json({ error: 'Galaxy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch galaxy' });
  }
}

// Create a new resource
const create = async (req, res) => {
  try {
    const galaxy = await Galaxy.create(req.body);
    res.status(201).json(galaxy);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create galaxy' });
  }
}

// Update an existing resource
const update = async (req, res) => {
  try {
    const [updated] = await Galaxy.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedGalaxy = await Galaxy.findByPk(req.params.id);
      res.status(200).json(updatedGalaxy);
    } else {
      res.status(404).json({ error: 'Galaxy not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update galaxy' });
  }
}

// Remove a single resource
const remove = async (req, res) => {
  try {
    const deleted = await Galaxy.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ success: true });
    } else {
      res.status(404).json({ error: 'Galaxy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete galaxy' });
  }
}

// Export all controller actions
module.exports = { index, show, create, update, remove }
