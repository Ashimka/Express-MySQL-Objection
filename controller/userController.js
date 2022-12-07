const UserService = require("../service/userServise");

class UserController {
  async getUser(req, res, next) {
    try {
      const user = await UserService.getUser(req.params.id);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new UserController();
