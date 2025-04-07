// const express = require("express");
// const mysql = require("mysql2");
// const bodyParser = require("body-parser");
// const path = require("path");
// const crypto = require("crypto"); // Import Node.js crypto module

// const app = express();

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname)));

// // Connect to MySQL
// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",  // Change if needed
//     password: "system",  // Change if needed
//     database: "candidates"
// });

// // Check MySQL connection
// db.query("SELECT 1", (err) => {
//     if (err) {
//         console.error("Database connection failed:", err);
//     } else {
//         console.log("✅ Connected to MySQL Database!");
//     }
// });

// // Serve the HTML form
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// // Password Encryption Function
// function encryptPassword(password) {
//     return crypto.createHash("sha256").update(password).digest("hex");
// }

// // Handle form submission
// app.post("/submit", (req, res) => {
//     const { c_name, c_mail, c_pass } = req.body;

//     if (!c_mail || !c_pass) {
//         return res.status(400).send("⚠️ Email and password are required!");
//     }

//     const encryptedPass = encryptPassword(c_pass);

//     if (c_name) {
//         // Sign Up (Insert new user)
//         const query = "INSERT INTO candid (c_mail, c_name, c_pass) VALUES (?, ?, ?)";
//         db.query(query, [c_mail, c_name, encryptedPass], (err) => {
//             if (err) {
//                 console.error("❌ Signup Error:", err);
//                 return res.status(500).send("⚠️ Error signing up!");
//             }
//             res.send("✅ Account created successfully!");
//         });
//     } else {
//         // Login (Check if user exists)
//         const query = "SELECT * FROM candid WHERE c_mail = ? AND c_pass = ?";
//         db.query(query, [c_mail, encryptedPass], (err, result) => {
//             if (err) {
//                 console.error("❌ Login Error:", err);
//                 return res.status(500).send("⚠️ Error logging in!");
//             }

//             if (result.length > 0) {
//                 res.send("✅ Login successful!");
//             } else {
//                 res.send("❌ Invalid credentials!");
//                 document.getElementById("text").innerText = "Updated text!";
//             }
//         });
//     }
// });

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Connect to MySQL
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "system",
    database: "candidates"
});

// Check MySQL connection
db.query("SELECT 1", (err) => {
    if (err) console.error("❌ Database connection failed:", err);
    else console.log("✅ Connected to MySQL Database!");
});

// Serve the HTML form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Password Encryption Function
function encryptPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
}

// Handle Login/Signup
app.post("/submit", (req, res) => {
    const { c_name, c_mail, c_pass } = req.body;

    if (!c_mail || !c_pass) {
        return res.json({ success: false, message: "⚠️ Email and password are required!" });
    }

    const encryptedPass = encryptPassword(c_pass);

    if (c_name) {
        // Sign Up
        const query = "INSERT INTO candid (c_mail, c_name, c_pass) VALUES (?, ?, ?)";
        db.query(query, [c_mail, c_name, encryptedPass], (err) => {
            if (err) {
                console.error("❌ Signup Error:", err);
                return res.json({ success: false, message: "⚠️ Email already exists!" });
            }
            res.json({ success: true, message: "✅ Account created successfully!" });
        });
    } else {
        // Login
        const query = "SELECT * FROM candid WHERE c_mail = ? AND c_pass = ?";
        db.query(query, [c_mail, encryptedPass], (err, result) => {
            if (err) {
                console.error("❌ Login Error:", err);
                return res.json({ success: false, message: "⚠️ Error logging in!" });
            }

            if (result.length > 0) {
                res.json({ success: true, message: "✅ Login successful!", redirect: "/dashboard.html" });
            } else {
                res.json({ success: false, message: "❌ Invalid email or password!" });
            }
        });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
