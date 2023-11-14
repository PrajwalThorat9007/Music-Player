import React from 'react';
import './albumInfo.css';

export default function AlbumInfo({ album }) {
  if (!album || !album.artists) {
    return <div className="albumInfo-card">Album information not available.</div>;
  }

  const artists = album?.artists?.map((artist) => artist.name).join(', ');
  const albumType = album?.album_type;
  const totalTracks = album?.total_tracks;
  const releaseDate = album?.release_date;

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{album?.name} _ {artists}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${albumType} by ${artists} with ${totalTracks} track(s)`}</p>
      </div>
      <div className="album_release">
        <p>Release Date: {releaseDate}</p>
      </div>
    </div>
  );
}