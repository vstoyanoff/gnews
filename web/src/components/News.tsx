import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface NewsItem {
  title: string;
  link: string;
  media: string | null;
}

function News({ data }: { data: NewsItem[] }) {
  return (
    <>
      {data.map((item) => (
        <Box
          sx={{
            padding: '16px',
            margin: '16px 0',
            border: '1px solid black',
            borderRadius: '5px',
          }}
        >
          <Typography variant="h5">
            <a href={item.link} target="_blank" rel="noreferrer noopenner">
              {item.title}
            </a>
          </Typography>

          {item.media && (
            <img src={item.media} alt={item.title} width={100} height={100} />
          )}
        </Box>
      ))}
    </>
  );
}

export default News;
