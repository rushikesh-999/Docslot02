import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdmin = (req, res, next) => {
    try {
        const {atoken} = req.headers// from Postman: key = token
        if (!atoken) {
            return res.json({ success: false, message: "Not authorized, login again" });
        }

        const token_decoded = jwt.verify(atoken, process.env.JWT_SECRET);

        // Save userId in request
        req.userId = token_decoded.id;  

        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authAdmin;
