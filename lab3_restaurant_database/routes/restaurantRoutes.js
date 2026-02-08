const express = require("express");
const Restaurant = require("../models/Restaurant");

const router = express.Router();

/**
 * GET /restaurants
 * Default: return all details
 * If sortBy=ASC|DESC: return selected fields and sort by restaurant_id
 */
router.get("/", async (req, res) => {
  try {
    const { sortBy } = req.query;

    if (sortBy) {
      const order = String(sortBy).toUpperCase() === "DESC" ? -1 : 1;

      const data = await Restaurant.find({})
        .select("_id cuisine name city restaurant_id")   // ✅ city
        .sort({ restaurant_id: order });

      return res.json(data);
    }

    const all = await Restaurant.find({});
    return res.json(all);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/**
 * GET /restaurants/cuisine/:cuisine
 * Return all restaurant details by cuisine
 */
router.get("/cuisine/:cuisine", async (req, res) => {
  try {
    const { cuisine } = req.params;
    const data = await Restaurant.find({ cuisine });
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/**
 * GET /restaurants/Delicatessen
 * cuisine = Delicatessen
 * city != Brooklyn
 * select: cuisine, name, city (exclude _id)
 * sort by name asc
 */
router.get("/Delicatessen", async (req, res) => {
  try {
    const data = await Restaurant.find({
      cuisine: "Delicatessen",
      city: { $ne: "Brooklyn" },   // ✅ city, not borough
    })
      .select("cuisine name city -_id")
      .sort({ name: 1 });

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
