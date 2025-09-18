import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = (req, res, next) => {
    try {
        const token = req.headers['token']; // from Postman: key = token
        if (!token) {
            return res.json({ success: false, message: "Not authorized, login again" });
        }

        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Store userId in request object
        req.userId = token_decoded.id;   // ✅ best way
        // OR req.user = token_decoded;

        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;
