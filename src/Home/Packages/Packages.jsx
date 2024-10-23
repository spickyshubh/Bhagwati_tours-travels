import React, { useState } from 'react'
import "./Packages.css"
import alto from "../Packages/alto.jpg"
import wagonar from "../Packages/maruti-suzuki-wagonr.jpg"
import kwid from "../Packages/renault_kwid.jpg"
import punch from "../Packages/tata-punch.jpg"

export const Packages = () => {
  const[content,setContent] = useState('content1')
  const[plan,setPlan] = useState(false)
  const[getfare,setGetFare]=useState(null)
  const[submit,setSubmit] = useState(false)
  const[farebutton,setFareButton] = useState(false)

  const planButton = () => {
    setPlan(!plan)
  }

  const buttonclick = (content) => {
    setContent(content)
  }

  const buttonFare = (fare) => {
    setGetFare(fare)
  }

  const buttonSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
  }

  const handlefareButton = () => {
    setFareButton(!farebutton)
  }

  return (
    <div>
      <h1>Select your Region to travel</h1>
      <div className='region'>
      <button className={content==='content1'?"active":''} onClick={()=>buttonclick('content1')}>North India</button>
      <button className={content==='content2'?"active":''} onClick={()=>buttonclick('content2')}>South India</button>
      <button className={content==='content3'?"active":''} onClick={()=>buttonclick('content3')}>West India</button>
      <button className={content==='content4'?"active":''} onClick={()=>buttonclick('content4')}>East India</button>
      <button className={content==='content5'?"active":''} onClick={()=>buttonclick('content5')}>Central India</button>
      </div>

      <div>
        {content === 'content1' &&    <div>
      <h3><h2>North India offers an unforgettable blend of history, nature, adventure, and food. Whether you’re exploring the architectural wonders of Rajasthan, relaxing by the lakes in Himachal, or immersing yourself in spirituality in Varanasi, North India promises a diverse and enriching experience. Don't forget to indulge in the region’s flavorful cuisine to complete your journey.</h2></h3>
      <div className='active'>
    <button onClick={planButton} className={plan===true?'active':''}>
      Plan your trip</button>
    </div>

     {
      plan && (
        <div className='s_fare'>
          <div>
            <img src={alto} alt="" />
            <div className='kwid'>
            <h1>Discover Road Trips with Maruti Alto 800</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Low Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('alto');handlefareButton()}} className={farebutton===true?'active':''} >Get Fare</button>
            {getfare === 'alto' && (
            <div className="fare">
              {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
              <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Alto 800 for your North India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/><br />
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                )}
            </div>
          )}
          </div>

          <div>
          <img src={wagonar} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Maruti Wagon R</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Medium Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('wagonar');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'wagonar' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Wagon R for your North India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/>
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>

          <div>
          <img src={kwid} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Renault KWID</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>High Budget Car</h3>
            </div>
            <button className='kwid_button' onClick={()=>{buttonFare('kwid');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>  
            {getfare === 'kwid' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Renault KWID for your North India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/>
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}                 
          </div>

          <div>
          <img src={punch} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Tata Punch SUV</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Elite Class Car</h3>
            </div>
            <button onClick={()=>{buttonFare('punch');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'punch' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Tata Punch SUV for your North India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/>
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>
 
        </div>

       
      )
     }  
      <h1>Places to Visit & Cuisine to Try in North India</h1>
      <h3>
        <h2>1. Jammu & Kashmir</h2>

            <h3><b>. Top Attractions : </b> Srinagar (Dal Lake, Mughal Gardens), Gulmarg (Skiing), Leh-Ladakh (Pangong Lake, Nubra Valley)</h3>
<h3><b>. Best For : </b> Nature lovers, adventure seekers, honeymooners</h3>
<h3><b>. Must-Try : </b> Rogan Josh, Yakhni, Kahwa (saffron tea)</h3>

<h2>2. Himachal Pradesh</h2>
<h3><b>. Top Attractions : </b> Manali (Solang Valley), Shimla (Mall Road, Jakhu Temple), Dharamshala (Monasteries)</h3>
<h3><b>. Best For : </b> Hill station retreats, trekking, and adventure activities</h3>
<h3><b>. Must-Try : </b>Siddu (steamed bread), Chana Madra, Babru</h3>

<h2>3. Uttarakhand</h2>
<h3><b>. Top Attractions : </b> Rishikesh (Yoga, River Rafting), Nainital (Lakes), Mussoorie (Waterfalls)</h3>
<h3><b>. Best For : </b> Spiritual retreats, nature enthusiasts, river rafting</h3>
<h3><b>. Must-Try : </b>Aloo Ke Gutke, Kafuli (spinach curry), Bal Mithai (sweet)</h3>

<h2>4. Delhi</h2>
<h3><b>. Top Attractions : </b> India Gate, Qutub Minar, Red Fort, Lotus Temple</h3>
<h3><b>. Best For : </b> History lovers, shopping, street food exploration</h3>
<h3><b>. Must-Try : </b>Chole Bhature, Butter Chicken, Parathas from Chandni Chowk</h3>

<h2>5. Uttar Pradesh</h2>
<h3><b>. Top Attractions : </b> Agra (Taj Mahal), Varanasi (Ganga Ghats, Kashi Vishwanath Temple), Lucknow (Bara Imambara)</h3>
<h3><b>. Best For : </b> Religious experiences, historical monuments</h3>
<h3><b>. Must-Try : </b>Galouti Kebabs, Lucknawi Biryani, Banarasi Paan</h3>

<h2>6. Punjab</h2>
<h3><b>. Top Attractions : </b> Amritsar (Golden Temple, Wagah Border), Chandigarh (Rock Garden, Sukhna Lake)</h3>
<h3><b>. Best For : </b> Spiritual visits, food lovers</h3>
<h3><b>. Must-Try : </b>Sarson Ka Saag and Makki Ki Roti, Amritsari Kulcha, Lassi</h3>

<h1>Best Time to Visit North India</h1>
<h2><b>. Winter (October to March) :</b> Ideal for sightseeing and exploring the plains, including Rajasthan, Delhi, and Agra.</h2>
<h2><b>. Summer (April to June) : </b>Perfect for hill stations like Manali, Shimla, and Nainital.</h2>
<h2><b>. Monsoon (July to September) : </b>Best for experiencing lush greenery, especially in Uttarakhand and Himachal Pradesh.</h2>
</h3>
</div>}
        {content === 'content2' && <div>
  <h3>
    <h2>South India is a land of diversity, offering a seamless blend of ancient temples, beautiful beaches, misty hill stations, and vibrant cities. Whether you’re exploring the backwaters of Kerala, tasting spicy Chettinad dishes, or wandering through Hampi’s ruins, South India promises a unique and memorable experience.</h2>
    <div className='active'>
    <button onClick={planButton} className={plan===true?'active':''}>
      Plan your trip</button>
    </div>

     {
      plan && (
        <div className='s_fare'>
          <div>
            <img src={alto} alt="" />
            <div className='kwid'>
            <h1>Discover Road Trips with Maruti Alto 800</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Low Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('alto');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'alto' && (
            <div className="fare">
              {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
              <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Alto 800 for your South India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                )}
            </div>
          )}
          </div>

          <div>
          <img src={wagonar} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Maruti Wagon R</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Medium Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('wagonar');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'wagonar' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Wagon R for your South India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>

          <div>
          <img src={kwid} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Renault KWID</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>High Budget Car</h3>
            </div>
            <button className='kwid_button' onClick={()=>{buttonFare('kwid');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button> 
            {getfare === 'kwid' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Renault KWID for your South India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/><br />
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}                  
          </div>

          <div>
          <img src={punch} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Tata Punch SUV</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Elite Class Car</h3>
            </div>
            <button onClick={()=>{buttonFare('punch');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
             {getfare === 'punch' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Tata Punch SUV for your South India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>
    
        </div>
      )
     }  
  <h1>Places to Visit & Cuisine to Try in South India</h1>

  <h2>1. Kerala</h2>
  <h3><b>. Top Attractions : </b>Alleppey (Houseboats & Backwaters), Munnar (Tea Plantations), Wayanad (Hill Stations), Kochi (Fort Kochi, Chinese Fishing Nets)</h3>
  <h3><b>. Best For : </b>Backwaters, Ayurveda, hill stations, cultural experiences</h3>
  <h3><b>. Must-Try : </b>Puttu and Kadala Curry, Appam with Stew, Kerala Sadya (Banana Leaf Meal)</h3>

  <h2>2. Tamil Nadu</h2>
  <h3><b>. Top Attractions :</b>Chennai (Marina Beach, Kapaleeshwarar Temple), Mahabalipuram (Shore Temples), Madurai (Meenakshi Temple), Ooty (Hill Station)</h3>
  <h3><b>. Best For : </b>Temples, hill stations, architecture, and heritage tours</h3>
  <h3><b>. Must-Try : </b>Idli, Dosa, Pongal, Chettinad Chicken</h3>

  <h2>3. Karnataka</h2>
  <h3><b>. Top Attractions :</b>Bengaluru (IT Hub, Gardens), Mysuru (Mysore Palace), Hampi (Ruins of Vijayanagar Empire), Coorg (Coffee Plantations)</h3>
  <h3><b>. Best For : </b>Heritage, city life, coffee tourism, and nature retreats</h3>
  <h3><b>. Must-Try : </b>Bisi Bele Bath, Mysore Pak, Mangalore Buns</h3>

  <h2>4. Andhra Pradesh & Telangana</h2>
  <h3><b>. Top Attractions : </b>Hyderabad (Charminar, Golconda Fort, Ramoji Film City), Tirupati (Tirumala Venkateswara Temple), Visakhapatnam (Beaches)</h3>
  <h3><b>. Best For : </b>Religious sites, beaches, and culinary exploration</h3>
  <h3><b>. Must-Try : </b>Hyderabadi Biryani, Pesarattu, Gongura Pachadi</h3>

  <h2>5. Pondicherry (Union Territory)</h2>
  <h3><b>. Top Attractions : </b>French Quarters, Promenade Beach, Auroville</h3>
  <h3><b>. Best For : </b>Colonial charm, spiritual retreats, and serene beaches</h3>
  <h3><b>. Must-Try : </b>French Crepes, Baguettes, and South Indian Dishes with a French Twist</h3>

  <h1>Best Time to Visit South India</h1>
<h2><b>. Winter (October to March) : </b>Ideal for all destinations, especially hill stations and beaches. </h2>
<h2><b>. Summer (April to June) : </b>Head to hill stations like Ooty, Munnar, and Coorg to escape the heat.</h2>
<h2><b>. Monsoon (July to September) : </b>Best for nature lovers seeking lush greenery and waterfalls.</h2>
  </h3>
  
</div>}
        {content === 'content3' && <div>
  <h3>
    <h2>West India offers a diverse travel experience – from the royal palaces and deserts of Rajasthan to the cosmopolitan vibe of Mumbai, the wildlife of Gujarat, and the laid-back beaches of Goa. Whether you want to explore bustling cities, immerse yourself in history, or relax by the beach, this region caters to all kinds of travelers.</h2>
    <div className='active'>
    <button onClick={planButton} className={plan===true?'active':''}>
      Plan your trip</button>
    </div>

     {
      plan && (
        <div className='s_fare'>
          <div>
            <img src={alto} alt="" />
            <div className='kwid'>
            <h1>Discover Road Trips with Maruti Alto 800</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Low Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('alto');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'alto' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Alto 800 for your West India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>

          <div>
          <img src={wagonar} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Maruti Wagon R</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Medium Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('wagonar');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'wagonar' && (
            <div className="fare">
              {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
              <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Wagon R for your West India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                )}
            </div>
          )}
          </div>

          <div>
          <img src={kwid} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Renault KWID</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>High Budget Car</h3>
            </div>
            <button className='kwid_button' onClick={()=>{buttonFare('kwid');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>    
            {getfare === 'kwid' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Renault KWID for your West India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}               
          </div>

          <div>
          <img src={punch} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Tata Punch SUV</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Elite Class Car</h3>
            </div>
            <button onClick={()=>{buttonFare('punch');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'punch' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Tata Punch SUV for your West India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/>
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>
 
        </div>
      )
     }  
  <h1>Places to Visit & Cuisine to Try in West India</h1>

  <h2>1. Rajasthan</h2>
<h3><b>. Top Attractions : </b> Jaipur (City Palace, Amber Fort), Udaipur (Lake Pichola), Jaisalmer (Thar Desert)</h3>
<h3><b>. Best For : </b> Heritage tours, desert safaris, cultural experiences</h3>
<h3><b>. Must-Try : </b>Dal Bati Churma, Laal Maas (spicy mutton), Ghevar (sweet)</h3>

  <h2>2. Maharashtra</h2>
  <h3><b>. Top Attractions :</b>Mumbai (Gateway of India, Marine Drive), Pune (Shaniwar Wada, Aga Khan Palace), Lonavala (Hill Station), Ajanta and Ellora Caves (UNESCO World Heritage Sites)</h3>
  <h3><b>. Best For : </b>Urban lifestyle, Bollywood tours, historical caves, and hill stations</h3>
  <h3><b>. Must-Try : </b>Vada Pav, Pav Bhaji, Misal Pav, Puran Poli</h3>

  <h2>3. Gujarat</h2>
  <h3><b>. Top Attractions :</b>Ahmedabad (Sabarmati Ashram), Kutch (Rann of Kutch White Desert), Somnath (Somnath Temple), Gir National Park (Asiatic Lions)</h3>
  <h3><b>. Best For : </b>Heritage tourism, wildlife, cultural festivals, and religious sites</h3>
  <h3><b>. Must-Try : </b>Dhokla, Thepla, Khandvi, Undhiyu</h3>

  <h2>4. Goa</h2>
  <h3><b>. Top Attractions : </b>Baga Beach, Anjuna Beach, Basilica of Bom Jesus, Dudhsagar Waterfalls</h3>
  <h3><b>. Best For : </b>Beaches, nightlife, water sports, and Portuguese heritage</h3>
  <h3><b>. Must-Try : </b>Goan Fish Curry, Pork Vindaloo, Bebinca (Dessert)</h3>

  <h1>Best Time to Visit West India</h1>
<h2><b>. Winter (October to March) : </b>Ideal for desert regions in Rajasthan, wildlife safaris in Gujarat, and city exploration in Maharashtra. </h2>
<h2><b>. Summer (April to June) : </b>Best to visit hill stations like Lonavala and Matheran to escape the heat.</h2>
<h2><b>. Monsoon (July to September) : </b>Perfect for Goa's lush greenery and offbeat destinations like Kutch during the Rann Utsav.</h2>
</h3>
</div>}
{content === 'content4' && (
  <div>
    <h2>East India offers a unique travel experience, from spiritual journeys in Bodh Gaya and Puri to tea estates in Darjeeling and wildlife safaris in Kaziranga. With a blend of natural beauty, ancient heritage, and cultural richness, the region promises an enriching journey.</h2>

    <div className='active'>
    <button onClick={planButton} className={plan===true?'active':''}>
      Plan your trip</button>
    </div>

     {
      plan && (
        <div className='s_fare'>
          <div>
            <img src={alto} alt="" />
            <div className='kwid'>
            <h1>Discover Road Trips with Maruti Alto 800</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Low Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('alto');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'alto' && (
            <div className="fare">
              {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
              <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Alto 800 for your East India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/><br />
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                )}
            </div>
          )}
          </div>

          <div>
          <img src={wagonar} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Maruti Wagon R</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Medium Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('wagonar');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'wagonar' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Wagon R for your East India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/><br />
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>

          <div>
          <img src={kwid} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Renault KWID</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>High Budget Car</h3>
            </div>
            <button className='kwid_button' onClick={()=>{buttonFare('kwid');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>    
            {getfare === 'kwid' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Renault KWID for your East India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/><br />
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}               
          </div>

          <div>
          <img src={punch} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Tata Punch SUV</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Elite Class Car</h3>
            </div>
            <button onClick={()=>{buttonFare('punch');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'punch' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Tata Punch SUV for your East India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/><br />
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>
          
         

      
     
      
        </div>
    )}

    <h1>Places to Visit & Cuisine to Try in East India</h1>

    <h2>1. West Bengal</h2>
    <h3><b>Top Attractions: </b>Kolkata (Victoria Memorial, Howrah Bridge), Darjeeling (Toy Train, Tea Gardens), Sundarbans (Mangrove Forest)</h3>
    <h3><b>Must-Try: </b>Fish Curry, Mishti Doi, Rasgulla</h3>

    <h2>2. Bihar</h2>
    <h3><b>Top Attractions: </b>Bodh Gaya, Nalanda, Patna</h3>
    <h3><b>Must-Try: </b>Litti Chokha, Sattu Paratha, Thekua</h3>

    <h2>3. Odisha</h2>
    <h3><b>Top Attractions: </b>Puri, Konark, Chilika Lake</h3>
    <h3><b>Must-Try: </b>Dalma, Chhena Poda, Pakhala Bhata</h3>

    <h2>4. Sikkim</h2>
    <h3><b>Top Attractions: </b>Gangtok, Tsomgo Lake, Yumthang Valley</h3>
    <h3><b>Must-Try: </b>Momos, Thukpa, Gundruk</h3>

    <h2>5. Assam</h2>
    <h3><b>Top Attractions: </b>Kaziranga National Park, Guwahati, Majuli</h3>
    <h3><b>Must-Try: </b>Assam Tea, Masor Tenga, Pitha</h3>

    <h1>Best Time to Visit East India</h1>
    <h2><b>Winter (October to March): </b>Ideal for sightseeing, trekking, and safaris</h2>
    <h2><b>Summer (April to June): </b>Great for hill stations like Darjeeling and Gangtok</h2>
    <h2><b>Monsoon (July to September): </b>Perfect for lush green landscapes</h2>
  </div>
)}

        {content === 'content5' && 
  <div>
  <h3>
    <h2>Central India offers a unique mix of ancient temples, wildlife experiences, tribal culture, and scenic landscapes. Whether you are exploring the architectural wonders of Khajuraho, going on a tiger safari in Bandhavgarh, or witnessing the mighty Chitrakote Falls, the region promises an enriching journey. The cuisine is diverse, reflecting both royal influences and rustic simplicity, making it a delight for food lovers.</h2>
    <div className='active'>
    <button onClick={planButton} className={plan===true?'active':''}>
      Plan your trip</button>
    </div>

     {
      plan && (
        <div className='s_fare'>
          <div>
            <img src={alto} alt="" />
            <div className='kwid'>
            <h1>Discover Road Trips with Maruti Alto 800</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Low Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('alto');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'alto' && (
            <div className="fare">
              {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
              <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Alto 800 for your Central India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/><br />
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                )}
            </div>
          )}
          </div>

          <div>
          <img src={wagonar} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Maruti Wagon R</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Medium Budget Car</h3>
            </div>
            <button onClick={()=>{buttonFare('wagonar');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'wagonar' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Maruti Wagon R for your Central India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/><br />
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>

          <div>
          <img src={kwid} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Renault KWID</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>High Budget Car</h3>
            </div>
            <button className='kwid_button' onClick={()=>{buttonFare('kwid');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>    
            {getfare === 'kwid' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Renault KWID for your Central India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/><br />
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}               
          </div>

          <div>
          <img src={punch} alt="" />
          <div className='kwid'>
            <h1>Discover Road Trips with Tata Punch SUV</h1>
            <h2>Starts From 15 days and 15 night</h2>
            <h3>Elite Class Car</h3>
            </div>
            <button onClick={()=>{buttonFare('punch');handlefareButton()}} className={farebutton===true?'active':''}>Get Fare</button>
            {getfare === 'punch' && (
        <div className="fare">
          {submit?<div className='submit_msg'>
                <h1>Thankyou for choosing Bhagwati travel as your travel Partner</h1>
                  <h2>Our customer care executive will reach you soon!</h2></div>:(
          <form onSubmit={buttonSubmit} className='form_cars'>
              <h1>Thank you for selecting Tata Punch SUV for your Central India journey!</h1>
            <h2>Full Name <input type="text" placeholder='type ur good Name'/>
               Age <input type="text" placeholder='type ur Age'/> 
               Residence<input type="text" placeholder='type ur Address'/> <br />
               No of persons you travel with<input type="number" placeholder='whom u want to travel with'/><br />
               Date of Journey<input type="date" /><br />
               Your Contact Number <input type="number" placeholder='ur Phone Number please'/><br />
               Select Your Package<select name="journey" id="">
                <option value="15daze">15 days and 15 nights, including meals and travel</option>
                <option value="20daze">20 days and 20 nights, including meals and travel</option>
                <option value="30daze">30 days and 30 nights, including meals and travel</option>
                <option value="45daze">45 days and 45 nights, including meals and travel</option>
                </select></h2>
                <button type='submit'>SUBMIT</button>
                </form>
                  )}
        </div>
      )}
          </div>
          
         

     
      
      
        </div>
      )
     }  
  <h1>Places to Visit & Cuisine to Try in Central India</h1>

  <h2>1. Madhya Pradesh</h2>
  <h3><i>Top Attractions : </i></h3>
  <h3><b>. Khajuraho : </b>Famous for its erotic sculptures and UNESCO-listed temples</h3>
  <h3><b>. Orchha : </b>Historic town with palaces and temples</h3>
  <h3><b>. Ujjain : </b>One of the oldest cities and a major pilgrimage center (Mahakaleshwar Temple)</h3>
  <h3><b>. Bhopal : </b>Upper Lake, Van Vihar National Park, and Sanchi Stupa (Buddhist heritage)</h3>
  <h3><b>. Bandhavgarh & Kanha National Parks : </b>Wildlife safaris and tiger reserves</h3>
  <h3><i>Best For : </i><b>Temple tourism, historical sightseeing, wildlife safaris, and river ghats</b></h3>
  <h3><i>Must-Try : </i></h3>
  <h3><b>. Indori Poha-Jalebi : </b>A popular breakfast dish</h3>
  <h3><b>. Bhutte ka Kees : </b>Spiced grated corn</h3>
  <h3><b>. Biryani from Bhopal : </b>Rich and aromatic Mughlai biryani</h3>
  <h3><b>. Dal Bafla : </b>A traditional dish similar to Dal Baati from Rajasthan</h3>
  

  <h2>2. Chhattisgarh</h2>
  <h3><i>Top Attractions :</i></h3>
  <h3><b>. Chitrakote Falls : </b>Known as the "Niagara of India"</h3>
  <h3><b>. Jagdalpur : </b>Historic town with palaces and temples</h3>
  <h3><b>. Raipur: </b>One of the oldest cities and a major pilgrimage center (Mahakaleshwar Temple)</h3>
  <h3><b>. Amarkantak : </b>UThe source of the Narmada River</h3>
  
  <h3><i> Best For : </i><b>Tribal experiences, nature lovers, and waterfalls</b></h3>
  <h3><i>Must-Try : </i></h3>
  <h3><b>. Chila : </b>Savory pancakes made from rice flour</h3>
  <h3><b>. Faraa : </b>Steamed rice dumplings</h3>
  <h3><b>. Bafauri : </b>Healthy gram flour snack</h3>
  <h3><b>. Dehrori : </b>Sweet dish made with rice and curd</h3>
  

  <h1>Best Time to Visit Central India</h1>
<h2><b>. Winter (October to March) : </b>Perfect for exploring temples, wildlife safaris, and heritage sites. </h2>
<h2><b>. Summer (April to June) : </b>Recommended only for hill stations like Pachmarhi and Amarkantak to escape the heat.</h2>
<h2><b>. Monsoon (July to September) : </b>Ideal for visiting waterfalls like Chitrakote and experiencing lush greenery.</h2>
  </h3>
 </div>}
      </div>

    </div>
  )
}
