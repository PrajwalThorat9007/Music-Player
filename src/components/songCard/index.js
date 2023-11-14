import React from 'react';
import "./songCard.css";
import AlbumInfo from './albumInfo';
import AlbumImage from './albumImage';

export default function SongCard({ album, user }) {
  return (
    <div className='songCard-body flex'>
      <div className="user-info">        
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
      </div>
    </div>
  );
}
