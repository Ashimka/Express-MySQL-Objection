const VideoService = require("../service/videoServise");

class VideoController {
  async getVideo(req, res, next) {
    try {
      const video = await VideoService.getVideoAll(req.params.id);

      res.json(video);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new VideoController();
