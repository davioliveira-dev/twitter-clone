const Tweet = require('../models/Tweet');

module.exports = {
  async index(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt');

    return res.json(tweets);
  },

  async store(req, res) {
    const data = req.body;

    if (!data) return res.sendStatus(401);
    if (!data.author || data.content) return res.sendStatus(401);

    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);

    return res.json(tweet);
  },

};
