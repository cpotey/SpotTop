import React from 'react';
import axios from 'axios';

export function getUserDetails(token,setUser) {
    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then(response => {
      // console.log(response.data);
      setUser(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

export function getTopArtists(token,setTopArtists) {
  axios.get('https://api.spotify.com/v1/me/top/artists', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  .then(response => {
    setTopArtists(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

export function getTopTracks(token,setTopTracks,trackFilter) {

  if (!trackFilter) {
    let trackFilter = "medium_term"
  }

  axios.get('https://api.spotify.com/v1/me/top/tracks', {
    headers: {
      Authorization: 'Bearer ' + token
    },
    params: {
      // 48 so that columns of 3's and 4's are always full
      limit: 48,
      // time_range: "medium_term",
      time_range: trackFilter,
    }
  })
  .then(response => {
    setTopTracks(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}