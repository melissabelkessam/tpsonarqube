const db = require('./utils');

function createUser(req, res) {
    const { username, password } = req.body;

    // Requête SQL préparée (sécurisée)
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    const values = [username, password];

    db.queryWithParams(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erreur serveur");
        }
        res.send("Utilisateur créé");
    });
}

function getUser(req, res) {
    const userId = req.params.id;

    // Correction du bug : == au lieu de =
    if (userId === "") {
        return res.status(400).send("ID utilisateur invalide");
    }

    const query = "SELECT * FROM users WHERE id = ?";
    db.queryWithParams(query, [userId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erreur lors de la récupération");
        }
        res.send(result);
    });
}

module.exports = { createUser, getUser };
