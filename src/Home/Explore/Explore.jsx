import React, { useEffect, useState } from 'react'
import "./Explore.css"

import himalay from "../Explore/mountains-7322524_1280.jpg"
import delhi from "../Explore/street-5703332_1280.jpg"
import banaras from "../Explore/varanasi-2371751_1280.jpg"
import rajsthan from "../Explore/rajasthan-7861018_1280.jpg"

import keral from "../Explore/water-1283199_1280.jpg"
import templ from "../Explore/mahadev-3880558_1280.jpg"
import coffee from "../Explore/coffee-1548771_1280.jpg"
import fest from "../Explore/kids-7426792_1280.jpg"

import tea from "../Explore/hill-5419527_1280.jpg"
import rath from "../Explore/rathyatra.jpg"
import chau from "../Explore/chau-mask-2645104_1280.jpg"
import sikkim from "../Explore/sikkim.png"

import mum from "../Explore/mumbai.jpg"
import raj_a from "../Explore/architecture-639103_1280.jpg"
import go from "../Explore/india-3882103_1280.jpg"
import guj from "../Explore/desert-1270345_1280.jpg"

import alpine from "../Explore/alpine-6944487_1280.jpg"
import tigr from "../Explore/tiger-7601733_1280.jpg"
import gallary from "../Explore/great-gallery-4293985_1280.jpg"
import mount from "../Explore/river-7038640_1280.jpg"

const img_a = [himalay,banaras,rajsthan,delhi]
const img_b = [keral,templ,coffee,fest]
const img_c = [tea,rath,chau,sikkim]
const img_d = [mum,raj_a,go,guj]
const img_e = [alpine,tigr,gallary,mount]

export const Explore = () => {
  const[slide,setSlide] = useState(0)

  useEffect(()=>{
    const slideshow = setInterval(()=>{
      setSlide((prev)=>prev===img_a.length-1?0:prev+1)
    },3000);
    return ()=>clearInterval(slideshow);
  },[])

  return (
    <div className='explore'>
      
      <h1>Travel with us to North India</h1>
      <div className='north'>
      <h3><h2>Explore the wonders of North India with our comprehensive travel guide. From the <b>snow-capped peaks of the Himalayas</b> to the <b>bustling streets of Delhi</b>, and from the <b>serene ghats of Varanasi </b> to the <b>royal palaces of Rajasthan</b>, North India offers a diverse blend of culture, history, and natural beauty.

Whether you seek adventure, spirituality, or heritage, our guide covers the must-see destinations, top activities, and insider tips to help you experience the very best of this enchanting region. Let us lead you on an unforgettable journey through the vibrant landscapes of North India.</h2>
</h3> <img className='img_a' src={img_a[slide]} alt={`slice${slide+1}`} />
      </div>

     
        <h1>Travel with us to South India</h1>
        <div className='north'>
        <h3><h2>Discover the charm of South India, a region known for its serene backwaters, ancient temples, lush greenery, and vibrant traditions. From the <b>tranquil beaches of Kerala</b> to the <b>grand temples of Tamil Nadu</b>, the <b>coffee plantations of Karnataka</b>, and the <b>cultural festivals of Andhra Pradesh</b>, South India offers a unique blend of relaxation and exploration.

Whether you're drawn to its spiritual heritage, scenic hill stations, or mouth-watering cuisine, our travel guide provides the best recommendations, must-visit attractions, and insider tips to make your journey unforgettable. Let South India enchant you with its warmth, diversity, and timeless beauty</h2>
</h3><img className='img_a' src={img_b[slide]} alt={`slice${slide+1}`} />
      </div>

      
        <h1>Travel with us to East India</h1>
        <div className='north'>
        <h3><h2>Uncover the hidden treasures of East India, a land rich in culture, natural beauty, and history. From the <b>tea gardens of Assam</b> to the <b>vibrant festivals of West Bengal</b>, the <b>ancient temples of Odisha</b>, and the <b>serene monasteries of Sikkim</b>, this region offers a perfect blend of tradition and tranquility.

Whether you're exploring the artistic streets of Kolkata, cruising along the Brahmaputra River, or trekking through the Eastern Himalayas, our guide highlights the must-see attractions and travel tips to enhance your experience. Let East India surprise you with its diversity and charm at every turn.</h2>
</h3><img className='img_a' src={img_c[slide]} alt={`slice${slide+1}`} />
      </div>

     
        <h1>Travel with us to West India</h1>
        <div className='north'>
      <h3><h2>Experience the vibrant spirit of West India, a region known for its colorful festivals, majestic forts, golden deserts, and serene beaches. From the <b>bustling markets of Mumbai</b> to the <b>palaces of Rajasthan</b>, the <b>white sands of Goa</b>, and the <b>unique landscapes of Gujarat</b>, West India offers a captivating blend of adventure, heritage, and relaxation.

Whether you're savoring street food in Maharashtra, exploring wildlife sanctuaries in Gujarat, or soaking in the sun along Goa’s coastline, our guide provides essential tips and must-visit attractions to make your journey unforgettable. Discover the essence of West India, where every destination tells a story of culture and tradition.</h2>
</h3>  <img className='img_a' src={img_d[slide]} alt={`slice${slide+1}`} />
      </div>

      
        <h1>Travel with us to Central India</h1>
        <div className='north'>
        <h3><h2>Embark on a journey through Central India, a region known for its rich wildlife, ancient heritage, and scenic landscapes. From the <b>dense jungles of Madhya Pradesh</b>, home to <b>majestic tigers</b>, to the <b>ancient temples of Khajuraho</b> and the <b>spiritual vibe of the Narmada River</b>, Central India offers a perfect blend of nature, history, and culture.

Whether you're exploring the UNESCO-listed monuments, experiencing the thrill of a <b>safari in Kanha or Bandhavgarh</b>, or indulging in the local cuisine, our guide provides all the tips you need for a memorable adventure. Let Central India captivate you with its wilderness, history, and warm</h2>
</h3><img className='img_a' src={img_e[slide]} alt={`slice${slide+1}`} />
      </div>

      
    </div>
  )
}
