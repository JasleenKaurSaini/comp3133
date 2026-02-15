require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");

const app = express();
app.use(express.json());

const geoSchema = new mongoose.Schema(
  {
    lat: { type: String, required: true },
    lng: { type: String, required: true },
  },
  { _id: false }
);

const addressSchema = new mongoose.Schema(
  {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      match: [/^[A-Za-z ]+$/, "City must contain only alphabets and spaces"],
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{5}-\d{4}$/, "Zipcode must be like 12345-1234"],
    },
    geo: { type: geoSchema, required: true },
  },
  { _id: false }
);

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    username: {
      type: String,
      required: true,
      minlength: [4, "Username must be at least 4 characters"],
      maxlength: [100, "Username must be at most 100 characters"],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: "Email must be valid",
      },
    },

    address: { type: addressSchema, required: true },

    phone: {
      type: String,
      required: true,
      match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone must be like 1-123-123-1234"],
    },

    website: {
      type: String,
      required: true,
      validate: {
        validator: (v) =>
          validator.isURL(v, {
            require_protocol: true,
            protocols: ["http", "https"],
          }),
        message: "Website must be a valid http/https URL",
      },
    },

    company: { type: companySchema, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User inserted successfully", user });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ message: "Validation failed", errors });
    }

    if (err.code === 11000) {
      return res.status(400).json({
        message: "Validation failed",
        errors: ["Email already exists (must be unique)"],
      });
    }

    res.status(500).json({ message: "Server error", error: err.message });
  }
});

const PORT = process.env.PORT || 8081;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("MongoDB connection error:", err.message));