import React from 'react';

import api from '../services/api';

import './Tweet.css';
import likeImg from '../like.svg';

function Tweet(props) {

  const { tweet } = props;

  async function handleLike() {
    await api.post(`likes/${tweet._id}`);
  }

  return(
    <li className="tweet">
      <strong>{tweet.author}</strong>
      <p>{tweet.content}</p>
      <button onClick={handleLike}>
        <img src={likeImg} alt="Like"/>
        {tweet.likes}
      </button>
    </li>
  );
}

export default Tweet;