const Tweet = require('../models/Tweet');

module.exports = {
  async store(req, res) {
    const id = req.params.id;

    if (!id) return res.sendStatus(401);

    const tweet = await Tweet.findById(req.params.id);
    tweet.set({likes: tweet.likes + 1});
    await tweet.save();

    req.io.emit('like', tweet);

    return res.json(tweet);
  },
};
