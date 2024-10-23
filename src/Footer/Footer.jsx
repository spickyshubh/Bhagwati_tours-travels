import React from 'react'
import gmail from "../Footer/gmail.png"
import fb from "../Footer/facebook.png"
import social from "../Footer/social.png"
import tweet from "../Footer/twitter.png"
import whats from "../Footer/whatsapp.png"
import "./Footer.css"



export const Footer = () => {
  return (
    <div>
        <h2 className='contact'><b>Contact Us</b></h2>
        <div className='footer_icon'>
            <a href="https://mail.google.com/" target='_blank'><img src={gmail} alt="" /></a>
            <a href="https://www.facebook.com/" target='_blank'><img src={fb} alt="" /></a>
           <a href="https://www.instagram.com/accounts/login/" target='_blank'> <img src={social} alt="" /></a>
            <a href="https://x.com/?lang=en" target='_blank'><img src={tweet} alt="" /></a>
            <a href="https://www.whatsapp.com/" target='_blank'><img src={whats} alt="" /></a>
        </div>
        <hr />
        <h1>"Journey with us – Where every mile becomes a memory."</h1>
        </div>
  )
}
