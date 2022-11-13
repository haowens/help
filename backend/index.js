import express from "express"
import mysql, { createConnection } from "mysql"
import cors from "cors"

const app = express()

const db = createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

app.use(express.json());
app.use(cors());

//writing
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q,(err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `author`, `url`, `cover`) VALUES (?)"
    const values = [
        req.body.title, 
        req.body.author,
        req.body.url,
        req.body.cover
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Book has been created successfully.")
    });
});

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully.");
    });
});

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `author`=?, `url`=?, `cover` = ? WHERE id = ?";
    const values = [
        req.body.title, 
        req.body.author,
        req.body.url,
        req.body.cover
    ];
    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been updated successfully.");
    });
});

//music
app.get("/music", (req, res) => {
    const q = "SELECT * FROM music"
    db.query(q,(err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/music", (req, res) => {
    const q = "INSERT INTO music (`title`, `url`, `image`) VALUES (?)"
    const values = [
        req.body.title, 
        req.body.url,
        req.body.image
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Mix has been created successfully.")
    });
});

app.delete("/music/:id", (req, res) => {
    const mixId = req.params.id;
    const q = "DELETE FROM music WHERE id = ?"
    db.query(q, [mixId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Mix has been deleted successfully.");
    });
});

app.put("/music/:id", (req, res) => {
    const mixId = req.params.id;
    const q = "UPDATE music SET `title` = ?, `url`=?, `image`=? WHERE id = ?";
    const values = [
        req.body.title, 
        req.body.url,
        req.body.image,
    ];
    db.query(q, [...values, mixId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Mix has been updated successfully.");
    });
});

// fave music
app.get("/musicfave", (req, res) => {
    const q = "SELECT * FROM musicfave"
    db.query(q,(err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/musicfave", (req, res) => {
    const q = "INSERT INTO musicfave (`title`, `url`, `image`) VALUES (?)"
    const values = [
        req.body.title, 
        req.body.url,
        req.body.image
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Mix has been created successfully.")
    });
});

app.delete("/musicfave/:id", (req, res) => {
    const mixId = req.params.id;
    const q = "DELETE FROM musicfave WHERE id = ?"
    db.query(q, [mixId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Mix has been deleted successfully.");
    });
});

app.put("/musicfave/:id", (req, res) => {
    const mixId = req.params.id;
    const q = "UPDATE musicfave SET `title` = ?, `url`=?, `image`=? WHERE id = ?";
    const values = [
        req.body.title, 
        req.body.url,
        req.body.image,
    ];
    db.query(q, [...values, mixId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Mix has been updated successfully.");
    });
});

//fave writing
app.get("/booksfave", (req, res) => {
    const q = "SELECT * FROM booksfave"
    db.query(q,(err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/booksfave", (req, res) => {
    const q = "INSERT INTO booksfave (`title`, `author`, `url`, `cover`) VALUES (?)"
    const values = [
        req.body.title, 
        req.body.author,
        req.body.url,
        req.body.cover
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Book has been created successfully.")
    });
});

app.delete("/booksfave/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM booksfave WHERE id = ?"
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully.");
    });
});

app.put("/booksfave/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE booksfave SET `title` = ?, `author`=?, `url`=?, `cover` = ? WHERE id = ?";
    const values = [
        req.body.title, 
        req.body.author,
        req.body.url,
        req.body.cover
    ];
    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been updated successfully.");
    });
});

app.listen(8800, () => {
    console.log("connected to backend")
});