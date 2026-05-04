
import categoryModel from "../model/category.model.js"
const AddCategoryController = async (req, res) => {
  try {
    const { name, icon, category } = req.body;

    if (!name || !icon || !category) {
      return res.status(400).json({
        message: "Please enter all required fields",
        error: true,
        success: false,
      });
    }

    const newCategory = new categoryModel({ name, icon, category });
    const saved = await newCategory.save();

    return res.json({
      message: "Category Added Successfully",
      data: saved,
      error: false,
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

export default AddCategoryController