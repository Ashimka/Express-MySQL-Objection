const Video = require("../db/models/video");

class VideoDAO {
  findById(id) {
    return Video.query().where("channelId", "=", id).select("title");
  }
}

module.exports = new VideoDAO();
