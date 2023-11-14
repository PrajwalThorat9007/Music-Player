import React from 'react'
import { loginEndpoint } from '../../spotify'
import "./login.css";

export default function Login() {
  return (
    <div className='login-page'>
      <img
      src='https://t4.ftcdn.net/jpg/06/15/53/17/360_F_615531753_bFGsGiHARcjquT17Nfn1p2jKYFPUOnxZ.webp'
      alt='logo-spotify'
      className='logo'
      />
    <a href={loginEndpoint}>
        <div className='login-btn'>LOG IN</div>
    </a>
    </div>
  );
}
