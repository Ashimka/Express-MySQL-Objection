const allUserService = require("../service/allUsersService");

class AllUsersController {
  async getAllUsers(req, res, next) {
    try {
      const user = await allUserService.getUser(req.params.id);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new AllUsersController();
