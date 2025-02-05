import db from './models/index.mjs';
import initItemsController from './controllers/items.mjs';

export default function bindRoutes(app) {
  const ItemsController = initItemsController(db);
  app.get('/items', ItemsController.index);
  app.get('/items/:id', ItemsController.getOne);
  app.get('/', (req, res) => {
    res.render('home');
  });
}
