
exports.validateProductCreate = (req, res, next) => {
    const { name, description, price, quantity } = req.body;
  
    if (!name || !description || !price || !quantity) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
  
    next();
  };
  