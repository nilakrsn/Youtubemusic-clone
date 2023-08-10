import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const InputWithIcon = () => {
  return (
    <div>
      <TextField
        className="font-roboto"
        placeholder="Search songs, albums, artists, podcasts"
        variant="standard"
        InputProps={{
          style: {
            border: '1px solid #454545',
            borderColor: '#454545', 
            borderRadius: '7px',
            color: '#B4B4B4',
            height: '40px',
            width: '30rem',
            padding: 10,
            paddingLeft: 60,
            backgroundColor: '#292929',
          },
          startAdornment: (
            <span className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <SearchIcon />
            </span>
          ),
        }}
      />
    </div>
  );
};

export default InputWithIcon;
