export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();
      response.send({ items });
    } catch (error) {
      console.log(error);
    }
  };

  const getOne = async (req, res) => {
    try {
      const item = await db.Item.findOne({ where: { id: req.params.id } });
      res.send({ item });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index, getOne,
  };
}
