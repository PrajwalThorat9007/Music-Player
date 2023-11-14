import React, { useEffect, useState } from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite } from "react-icons/md"
import { FaGripfire, FaPlay} from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../spotify';

export default function Sidebar() {
  const [image] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9Xa3Q3zyiZSe9xgdX_W-STdxoN0NvjQ27w&usqp=CAU' 
  );
  useEffect(() => {
    apiClient.get("me").then(response => {
      console.log(response) ;
    })
  },[])
  return (
    <div className='sidebar-container'>
      <img src={image}
      className='profile-img' 
      alt='profile' 
      />
      <div>
       <SidebarButton title="Feed" to="/feed" icon={MdSpaceDashboard} />
       <SidebarButton title="Trending" to="/trending" icon={ FaGripfire } />
       <SidebarButton title="Player" to="/player" icon={FaPlay} />
       <SidebarButton title="Favorites" to="/favorites" icon={ MdFavorite} />
       <SidebarButton title="Library" to="/" icon={IoLibrary} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={FaSignOutAlt}/>
    </div>
  )
}
