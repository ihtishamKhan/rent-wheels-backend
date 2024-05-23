const auth = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send({
            message: "Unauthorized access"
        });
    }

    if (token !== "abcd1234") {
        return res.status(401).send({
            message: "Unauthorized access"
        });
    }

    next();
};

module.exports = {
    auth
}