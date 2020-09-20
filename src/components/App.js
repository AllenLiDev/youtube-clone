import React, { useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

const App = () => {

  const [videos, setVideos] = useState([]);

  const onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: 'video',
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_KEY
      }
    });
    setVideos(response.data.items);
  };

  return (
    <div>
      <SearchBar onFormSubmit={onTermSubmit} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
