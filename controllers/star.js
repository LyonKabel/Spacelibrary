const { Star } = require('../models');

// GET /stars - List all stars
exports.index = async (req, res) => {
  try {
    const stars = await Star.findAll();
    if (res.locals.isBrowser) {
      res.status(200).render('views/Star/index.html.twig', { stars });
    } else {
      res.status(200).json(stars);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /stars - Create a new star
exports.create = async (req, res) => {
  try {
    const { name, size, description } = req.body;
    const newStar = await Star.create({ name, size, description });
    res.status(201).json(newStar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /stars/form/:id - Render star form (new or edit)
exports.form = async (req, res) => {
  try {
    const { id } = req.params;
    let star = new Star();
    if (id !== 'undefined') {
      star = await Star.findByPk(id);
    }
    res.status(200).render(`views/Star/${star.id ? 'edit' : 'new'}.html.twig`, { star });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /stars/:id - Get a single star by ID
exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const star = await Star.findByPk(id);
    if (!star) {
      return res.status(404).json({ error: 'Star not found' });
    }
    if (res.locals.isBrowser) {
      res.status(200).render('views/Star/show.html.twig', { star });
    } else {
      res.status(200).json(star);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /stars/:id - Update a star by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, size, description } = req.body;
    const star = await Star.findByPk(id);
    
    if (!star) {
      return res.status(404).json({ error: 'Star not found' });
    }
    
    await star.update({ name, size, description });
    res.status(200).json(star);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /stars/:id - Delete a star by ID
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const star = await Star.findByPk(id);
    if (!star) {
      return res.status(404).json({ error: 'Star not found' });
    }
    await star.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
