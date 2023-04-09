const asyncHandler = require("express-async-handler");

const Categories = require("../Models/CategoriesModel");
// public controllers

// get categories
// GET METHOD
const getCategories = asyncHandler(async (req, res) => {
  try {
    // final all categories in database
    const categories = await Categories.find({});
    // send all caltegories to the client
    res.json(categories);
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
});
// create a category
// POST method
const createCategory = asyncHandler(async (req, res) => {
  try {
    // get title from request body
    const { title } = req.body;
    // create new category
    const category = new Categories({
      title,
    });
    //send new category to the client
    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
});
const updateCategory = asyncHandler(async (req, res) => {
  try {
    // get category id from requesst params
    const category = await Categories.findById(req.params.id);
    if (category) {
      //update category title
      category.title = req.body.title || category.title;
      // save the updated category in database
      const updatedCategory = await category.save();
      // send the updated category to the client
      res.json(updatedCategory);
    } else {
      res.status(404).json({ massage: " Category not found " });
    }
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
});
// delete category
// DELETE
const deleteCategory = asyncHandler(async (req, res) => {
  try {
    //get category id from request params
    const category = await Categories.findById(req.params.id);
    if (category) {
      // delete the category from database
      await category.deleteOne({ _id: req.params.id });
      // send success massage to client
      res.json({ massage: "category removed" });
    } else {
      res.status(404).json({ massage: "category not found" });
    }
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
});

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
