import Books from "../model/books.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const search = req.query.q || "";
    // console.log("search:", search)
    const allBooks = await Books.find({
      name: { $regex: search, $options: "i" },
    });
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books fetched Successfully",
        books: allBooks,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "No books found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching books",
      error: err.message,
    });
  }
};
