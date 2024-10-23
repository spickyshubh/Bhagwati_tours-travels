import React, { useEffect, useState } from 'react'
import "./Destinations.css"
import assam from "../Destinations/assam.jpg"
import jaisalmer from "../Destinations/jaisalmer.jpg"
import kashmir from "../Destinations/kashmir.jpeg"
import kerala from "../Destinations/kerala.jpg"
import ganga from "../Destinations/ganga.jpg"
import hawa from "../Destinations/hawa-mahal.jpg"
import bridh from "../Destinations/brihadishvara.jpg"
import taj from "../Destinations/taj-mahal.jpg"
import couple from "../Destinations/couple.jpg"
import building from "../Destinations/building.jpg"

const images = [jaisalmer,kerala,kashmir,assam]
const images_a = [ganga,hawa,bridh,taj]
export const Destinations = () => {
  const[current,setCurrent] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrent((prev)=>prev===images.length - 1?0:prev+1);
    },4000);
    return () => clearInterval(interval);
  },[])
  
  return (
    <div id='destiny'>
        
        <img className='logo_image' src={images[current]} alt={`slice${current+1}`} />
        
        
        <div className='heading'>
        <h2 className='subheading'>Explore the beauty, discover the charm, and experience the magic of <b className='bold'>India</b> with our perfect <b>holiday plan</b></h2> 
        <i><h3>Curated Tour Packages for Once-in-a-Lifetime Experiences in India</h3></i>

        <div className='packages'>
        <div className='travel'>
            <h4>Adventures</h4>
            <button className='b_a'>48+ Packages</button>
            <img className='travel_img' src={couple}></img>
        </div>

        <div className='heritage'>
            <h4>Monuments</h4>
            <button className='b_a'>27+ Packages</button>
            <img className='travel_img' src={building} alt="" />
        </div>
        
        </div>
            
        
        
        </div>  
        <img className='right_img' src={images_a[current]} alt={`slice${current+1}`} />
    </div>
  )
}
