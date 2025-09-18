import jwt from "jsonwebtoken";

// doctor authentication middleware
const authDoctor = (req, res, next) => {
    try {
        const dtoken = req.headers['dtoken']; // from Postman: key = token
        if (!dtoken) {
            return res.json({ success: false, message: "Not authorized, login again" });
        }

        const token_decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

        // Store userId in request object
        req.docId = token_decoded.id;   // ✅ best way
        // OR req.user = token_decoded;

        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authDoctor;
