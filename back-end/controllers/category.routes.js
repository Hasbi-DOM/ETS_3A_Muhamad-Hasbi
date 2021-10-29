const { category } = require("../models/index.js");

module.exports = app => {
    const FilmCategory = require("../controllers/controller.js");

    var router = require("express").Router();

    // Create a new Category
    router.post("/", category.create);

    // Retrieve all Category
    router.get("/", category.findAll);

    // Retrieve all published Category
    router.get("/published", category.findAllPublished);

    // Retrieve a single Category with id
    router.get("/:id", category.findOne);

    // Update a Category with id
    router.put("/:id", category.update);

    // Delete a Category with id
    router.delete("/:id", category.delete);

    // Create a new Category
    router.delete("/", category.deleteAll);

    app.use('/api/category', router);
};