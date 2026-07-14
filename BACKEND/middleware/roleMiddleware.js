const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          message: "Access Denied",
        });
      }

      next();

    } catch (error) {
      res.status(500).json({
        message: "Server Error",
      });
    }
  };
};

module.exports = roleMiddleware;