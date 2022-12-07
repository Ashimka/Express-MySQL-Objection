const videoDAO = require("../dao/video");

class VideoService {
  getVideoAll(id) {
    return videoDAO.findById(id);
  }
}

module.exports = new VideoService();
