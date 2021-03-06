import React, {useState, useEffect} from 'react';
import socketio from 'socket.io-client';

import api from '../../services/api';

import Tweet from '../../components/Tweet';
import './Timeline.css';
import twitterLogo from '../../assets/twitter.svg';

function Timeline() {
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  async function handleNewTweet(event) {
    if (event.keyCode !== 13) return;
    const content = newTweet;
    const author = localStorage.getItem('@Twitter-clone:username');
    await api.post('tweets', {author, content});
    setNewTweet('');
  }

  useEffect(() => {
    async function loadTweets() {
      const {data} = await api.get('tweets');
      setTweets(data);
    }
    loadTweets();

    function subscribeToEvents() {
      const io = socketio('http://localhost:3333');

      io.on('tweet', (data) => {
        setTweets([data, ...tweets]);
      });
    }

    subscribeToEvents();
  }, [tweets]);

  return (

    <div className="timeline-wrapper">
      <img src={twitterLogo} alt="Twitter-clone Logo" height={24}/>
      <form>
        <textarea
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
          onKeyDown={handleNewTweet}
          placeholder="O que você está pensando?"
        />
      </form>
      <ul className="tweet-list">
        {tweets.map((tweet) =>
          <Tweet key={tweet._id} tweet={tweet} />,
        )}
      </ul>
    </div>
  );
}

export default Timeline;
