const bcrypt = require('bcrypt');

function login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Champs manquants");
    }

    // En réalité, tu devrais chercher l’utilisateur en base et comparer avec bcrypt
    if (username === "admin") {
        const motDePasseStocké = "$2b$10$U8u8.qTjkG1M8xsnNGHaC.ylRo/tvcvIFVKnFeKephZHw8QF0AaKu"; // hash de 'admin123'

        bcrypt.compare(password, motDePasseStocké, (err, isMatch) => {
            if (err) return res.status(500).send("Erreur serveur");
            if (isMatch) {
                return res.send("Bienvenue admin");
            } else {
                return res.status(401).send("Mot de passe incorrect");
            }
        });
    } else {
        res.status(403).send("Utilisateur inconnu");
    }
}

module.exports = { login };
