const router = require("express").Router();

const Card = require("./model");

router
  .route("/cards")
  .get(async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })
  .post(async (req, res) => {
    try {
      if (!req.body.title || !req.body.description) {
        return res
          .status(400)
          .json({ message: "Title and description are required" });
      }

      const card = new Card(req.body);

      const existingCard = await Card.findOne({ title: req.body.title });

      if (existingCard) {
        return res.status(400).json({ message: "Card already exists" });
      }

      await card.save();
      res.json(card);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

router.get("/cards/:title", async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.json(card);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
