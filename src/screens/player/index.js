import React, { useEffect, useState } from 'react';
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from '../../spotify';
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import AudioPlayer from '../../components/AudioPlayer';


export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (location.state && location.state.id) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);
    
  return (
    <div className="screen-container flex">
      <div className="left-player-body">
      <AudioPlayer currentTrack={currentTrack}/>
      </div>
      <div className="right-player-body">
      <SongCard album={currentTrack.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  );
}
