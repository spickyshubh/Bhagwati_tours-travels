import React from 'react'
import handshake from "../About/handshake.png"
import "./About.css"

export const About = () => {
  return (
    <div>
       <h1>Our Journey: From Local Roots to Global Horizons</h1>
       <h3><h2>Founded in the early 2000s, our story began with a small, brick-and-mortar office in the heart of Bhopal, Madhya Pradesh, India. Back then, we focused on curating personalized travel experiences for local clients, building relationships through face-to-face interactions, and helping travelers explore the vibrant destinations across India.

Our commitment to quality service, deep local expertise, and passion for travel allowed us to steadily grow over the years. From planning pilgrimage tours to customizing adventure expeditions, we gained the trust of thousands of travelers, becoming a well-known name in the tourism industry.

As the digital world began to reshape the travel landscape, we recognized the need to adapt. In 2020, we made the leap from offline operations to online, launching a comprehensive platform to make booking tours, accommodations, and travel experiences seamless and accessible.

With this transformation, we expanded our reach across India, serving not just walk-in clients but also a global audience. Our new digital presence allows travelers to explore, customize, and book trips at their convenience—whether it’s a <b> beach getaway in Goa, a trek in the Himalayas, or a cultural tour through Rajasthan.</b>

Today, we blend the trust and personalized service of our early days with the convenience of modern technology, ensuring that every journey booked through us is smooth, memorable, and filled with meaningful experiences.</h2>
</h3> <h1>Why Travel With Us?</h1>
      <div className='about'>
      <div>
        <h3><img src={handshake} alt="" />
        <h2>Over 20 Years of Expertise</h2></h3>
        <h3>With over two decades of expertise in tourism and hospitality, Bhagwati Travels has cultivated a deep understanding of the industry, allowing us to provide exceptional services and personalized travel experiences that set us apart from the rest.</h3>
      </div>
      <div>
      <h3><img src={handshake} alt="" />
      <h2>A Team of Specialists working 24x7</h2></h3>
      <h3>At Bhagwati Travels, our team goes beyond expertise—they are true specialists in every destination across India’s captivating landscape. Their in-depth knowledge ensures an exceptional & enthusiastic travel experience for every journey you take with Us.</h3>
      </div>
      <div>
     <h3><img src={handshake} alt="" />
      <h2>Affordable Tours with Unforgettable Experiences</h2></h3> 
      <h3>At Bhagwati Travels, we offer more than just sightseeing—we create lifelong memories. Our thoughtfully curated holiday packages are hassle-free and crafted to deliver exceptional value for your money. Trust us to turn every moment of your journey into an unforgettable experience of lifetime.</h3>
      </div>
      <div>
      <h3><img src={handshake} alt="" />
      <h2>Dedicated & Trusted Travel Advisors</h2></h3>
      <h3>At the heart of our travel agency lies a commitment to being more than just a service provider—we are your trusted travel advisors. With years of expertise, in-depth destination knowledge, and a passion for creating personalized journeys, we guide you through every step of your travel planning.</h3>
      </div>
    </div>
    </div>
  )
}
