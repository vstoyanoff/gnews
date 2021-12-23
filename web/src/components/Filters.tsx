import React from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface IFilters {
  topics: string[];
  currentTopic: string;
  setCurrentTopic: any;
}

function Filters({ data }: { data: IFilters }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}
    >
      <Select
        label="Topic"
        value={data.currentTopic}
        onChange={(e) => data.setCurrentTopic(e.target.value)}
      >
        {data.topics.map((topic) => (
          <MenuItem value={topic}>{topic}</MenuItem>
        ))}
      </Select>
    </Box>
  );
}

export default Filters;
