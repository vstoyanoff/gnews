import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { getNews, getTopics } from './apiClient';

import News from './components/News';
import Filters from './components/Filters';

function App() {
  const [news, setNews] = useState([]);
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the available topic filters and fetch news
    (async () => {
      const topicsResponse = await getTopics();
      const newsResponse = await getNews(topicsResponse[1]);

      setNews(newsResponse);
      setTopics(topicsResponse);
      setCurrentTopic(topicsResponse[1]);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    // Update articles on filter change
    if (currentTopic) {
      (async () => {
        setLoading(true);
        const newsResponse = await getNews(currentTopic);
        setNews(newsResponse);
        setLoading(false);
      })();
    }
  }, [currentTopic]);

  return (
    <div>
      {loading && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}

      {!loading && currentTopic && !!topics.length && (
        <Filters data={{ topics, currentTopic, setCurrentTopic }} />
      )}

      {!loading && !news.length && (
        <Typography variant="h6" textAlign="center" sx={{ margin: '20px 0' }}>
          No results
        </Typography>
      )}

      {!loading && !!news.length && <News data={news} />}
    </div>
  );
}

export default App;
