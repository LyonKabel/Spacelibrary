const { Galaxy } = require('../models');

// GET /galaxies - List all galaxies
exports.index = async (req, res) => {
  try {
    const galaxies = await Galaxy.findAll();
    if (res.locals.isBrowser) {
      res.status(200).render('views/Galaxy/index.html.twig', { galaxies });
    } else {
      res.status(200).json(galaxies);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /galaxies - Create a new galaxy
exports.create = async (req, res) => {
  try {
    const { name, size, description } = req.body;
    const newGalaxy = await Galaxy.create({ name, size, description });
    res.status(201).json(newGalaxy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /galaxies/form/:id - Render galaxy form (new or edit)
exports.form = async (req, res) => {
  try {
    const { id } = req.params;
    let galaxy = new Galaxy();
    if (id !== 'undefined') {
      galaxy = await Galaxy.findByPk(id);
    }
    res.status(200).render(`views/Galaxy/${galaxy.id ? 'edit' : 'new'}.html.twig`, { galaxy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /galaxies/:id - Get a single galaxy by ID
exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const galaxy = await Galaxy.findByPk(id);
    if (!galaxy) {
      return res.status(404).json({ error: 'Galaxy not found' });
    }
    if (res.locals.isBrowser) {
      res.status(200).render('views/Galaxy/show.html.twig', { galaxy });
    } else {
      res.status(200).json(galaxy);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /galaxies/:id - Update a galaxy by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, size, description } = req.body;
    const galaxy = await Galaxy.findByPk(id);
    
    if (!galaxy) {
      return res.status(404).json({ error: 'Galaxy not found' });
    }
    
    await galaxy.update({ name, size, description });
    res.status(200).json(galaxy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /galaxies/:id - Delete a galaxy by ID
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const galaxy = await Galaxy.findByPk(id);
    if (!galaxy) {
      return res.status(404).json({ error: 'Galaxy not found' });
    }
    await galaxy.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
