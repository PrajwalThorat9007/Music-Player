import React, { useState, useEffect } from "react";
import APIkit from "../../spotify";
import './library.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playList, setPlayList] = useState(null);

  useEffect(() => {
    APIkit.get("me/playlists").then(function(response) {
      // Handle the response data here
      setPlayList(response.data.items);
      console.log(response.data.items);
    }).catch(function(error) {
      // Handle errors here
      console.error("Error fetching playlist data:", error);
    });
  }, []);

  const navigate = useNavigate();
  
  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">  
        {playList?.map((playlist) => {
          return (
            <div className="playlist-card" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
              <img src={playlist.images[0].url} className="playlist-image" alt="Playlist-Art"/>
              <p className="playlist-title">{playlist.name}</p>
              <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
              <div className="playlist-fade">
                <IconContext.Provider value={{ size: '50px', color: "#E99D72" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
