const User = require("../db/models/user");

class AllUsersDAO {
  findById(id) {
    return User.query().select("name");
  }
}

module.exports = new AllUsersDAO();
