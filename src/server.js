require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const User = require("./users/model");
const Book = require("./books/model");

const userRoutes = require("./users/routes");
const bookRoutes = require("./books/routes");

const port = process.env.PORT || 5173;
const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

const syncTables = async () => {
    User.hasMany(Book);
    Book.belongsTo(User);

    await User.sync();
    await Book.sync();
};
app.get("/health", (req, res) => {
    res.status(200).json({ success: true, message: "API is healthy" });
});

app.use("/users", userRoutes);
app.use("/books", bookRoutes);

app.listen(port, () => {
    syncTables();
    console.log(`Server is running on port ${port}`);
});
