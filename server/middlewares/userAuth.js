import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({ success: false, message: "Not authorized. Login again." });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id; // 🔐 safer custom property
      return next();
    }

    return res.json({ success: false, message: "Invalid token. Please login again." });

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}

export default userAuth;