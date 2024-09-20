const Category = require("../models/categoriesModel");

const categories = [
  { name: "Salary", type: "income" },
  { name: "Additional Income", type: "income" },

  { name: "Food", type: "expense" },
  { name: "Alcohol", type: "expense" },
  { name: "Entertainment", type: "expense" },
  { name: "Health", type: "expense" },
  { name: "Transport", type: "expense" },
  { name: "Housing", type: "expense" },
  { name: "Technique", type: "expense" },
  { name: "Utilities and Communications", type: "expense" },
  { name: "Sports and Hobbies", type: "expense" },
  { name: "Education", type: "expense" },
  { name: "Other", type: "expense" },
];

async function initCategories() {
  try {
    const existingCategories = await Category.find();
    if (existingCategories.length === 0) {
      await Category.insertMany(categories);
      console.log("Categories have been initialized");
    } else {
      console.log("Categories are up to date, skipping initialization");
    }
  } catch (error) {
    console.error("Error during category initialization:", error);
  }
}

module.exports = initCategories;
