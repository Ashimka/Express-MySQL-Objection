const allUsersDAO = require("../dao/allUsers");

class AllUsersService {
  getUser(id) {
    return allUsersDAO.findById(id);
  }
}

module.exports = new AllUsersService();
