const express = require("express");

const cardRouter = express.Router();
const CardService = require('./cards-service')

function validateBearerToken(req, res, next) {
    const apiToken = process.env.API_TOKEN;
    const authToken = req.get("Authorization");

    if (!authToken || authToken.split(" ")[1] !== apiToken) {
        return res.status(401).json({ error: "Unauthorized request" });
    }

    next();
}

cardRouter
    .route("/")
    .all(validateBearerToken)
    .get((req, res) => {
        CardService.getAllCards(req.app.get("db"))
            .then((cards) => {
                res.json(cards);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    })
    .post((req, res) => {
        // future proofing to create a new card
    })
    .put((req, res) => {
        // future proofing to update a card
    })
    .delete((req, res) => {
        // future proofing to delete a card
    });



module.exports = cardRouter;
