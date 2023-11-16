//&& *****ZOMATO APP***** &//


import React from 'react'
import "./Global.css"
import {AiFillStar} from "react-icons/ai"
import BURGER from "./burger.avif"
import KFC from "./kfc.avif"
import LEO from "./leo.avif"
import FAA from "./faa.avif"
import PIZZA from "./pizza.avif"
import DOMINOZ from "./dominoz.png"
import ONE from "./one.avif"
import TWO from "./two.avif"
import THREE from "./three.avif"
import FOUR from "./four.avif"
import FIVE from "./five.avif"
import SIX from "./six.avif"
import SEVEN from "./seven.avif"
import EIGHT from "./eight.avif"
import NINE from "./nine.avif"
import TEN from "./ten.avif"
import ELEVEN from "./eleven.avif"
import TWELVE from "./twelve.avif"
import THIRTEEN from "./thirteen.avif"
import FOURTEEN from "./fourteen.avif"
import FIFTEEN from "./fifteen.avif"
import SIXTEEN from "./sixteen.avif"
import SEVENTEEN from "./seventeen.avif"
import EIGHTEEN from "./eighteen.avif"
import NINTENN from "./ninteen.avif"
import TWENTY from "./twenty.avif"
import TWENTYONE from "./twentyone.avif"
import TWENTYTWO from "./twentytwo.avif"
import TWENTYTHREE from "./twentythree.avif"
import TWENTYFOUR from "./twentyfour.avif"
import TWENTYFIVE from "./twentyfive.avif"
import TWENTYSIX from "./twentysix.avif"
import TWENTYSEVEN from "./twentyseven.avif"
import TWENTYEIGHT from "./twentyeight.avif"
import TWENTYNINE from "./twentynine.avif"
import THIRTY from "./thirty.avif"
import THIRTYONE from "./thirtyone.avif"
import THIRTYTWO from "./thirtytwo.avif"
import THIRTYTHREE from "./thirtythree.avif"
import THIRTYFOUR from "./thirtyfour.avif"
import THIRTYFIVE from "./thirtyfive.avif"
import THIRTYSIX from "./thirtysix.avif"
import THIRTYSEVEN from "./thirtyseven.avif"
import THIRTYEIGHT from "./thirtyeight.avif"
import THIRTYNINE from "./thirtynine.avif"
import FOURTY from "./fourty.avif"
import FOURTYONE from "./fourtyone.avif"
import FOURTYTWO from "./fourtytwo.avif"
import FOURTYTHREE from "./fourtythree.avif"
import FOURTYFOUR from "./fourtyfour.avif"
import FOURTYFIVE from "./fourtyfive.avif"
import CDOSA from "./cdosa.avif"
import CBERGER from "./cberger.avif"
import CNI from "./cni.avif"
import CCAKE from "./ccake.avif"
import CPARATA from "./cparata.avif"
import CROLLS from "./crools.avif"
import BIKE from "./bike.avif"
import SPOON from "./spoon.avif"
import BOTTLE from "./bottle3.avif"
import ZOMATO from "./zomato.avif"
import HOMELOGO from "./homelogo.avif"
import PSTORE from "./pstore.webp"
import ISTORE from "./istore.webp"
import COLL1 from "./firstimage.jpg"
import COLL2 from "./secondimage.jpg"
import COLL3 from "./thirdimage.jpg"
import COLL4 from "./fourthimage.jpg"


const App = () => {
  return (
   <>
<section className='main'>

<nav className='main_nav'>
   
      <div className='img1'><img src={ZOMATO} alt={ZOMATO} /></div>
      <div className='div'>
      <p className='i1'><i class="fa-solid fa-location-dot"></i></p> <input type="text"  placeholder='Bengaluru' />
      <p className='i2'><i class="fa-solid fa-caret-down"></i></p>
      <p className='i3'><i class="fa-solid fa-magnifying-glass"></i></p>
     <input type="text" placeholder='Search for restaurant, cuisine or a dish'/>
     </div>
     
     <div className='button'>
     <button>Log in</button>
     <button>Sign up</button>
     </div>
    
  
</nav>


<div className='home'>Home / India / Bengaluru restaurants</div>
<nav className='secondline1'>
  <div><div><img src={BIKE} alt={BIKE} /></div><h1>Delivery</h1></div>
  <div><div><img src={SPOON} alt={SPOON} /></div><h1>Dining Out</h1></div>
  <div><div><img src={BOTTLE} alt={BOTTLE} /></div><h1>Nightlife</h1></div>
  
</nav>
<hr />



<nav className='thirdline'>
  <button>Filters</button>
  <button>Rating:4.0+</button>
  <select><option>Cusine</option></select>
</nav>



<section className='ordercont'>

<div className='threeline'>Inspiration for your first order</div>

<section className='container'>
 
    <div>
    <div><img src={CDOSA} alt={CDOSA} /></div>
    <p>DOSA</p>
    </div>

    <div>
    <div><img src={CBERGER} alt={CBERGER} /></div>
    <p>Burger</p>
    </div>

    <div>
    <div><img src={CNI} alt={CNI} /></div>
    <p>North Indian</p>
    </div>

    <div>
    <div><img src={CCAKE} alt={CCAKE} /></div>
    <p>Cake</p>
    </div>

    <div>
    <div><img src={CPARATA} alt={CPARATA} /></div>
    <p>Paratha</p>
    </div>

    <div>
    <div><img src={CROLLS} alt={CROLLS} /></div>
    <p>Rolls</p>
    </div>
</section>

</section>


<div className='twoline'>Top brands for you</div>
<section className='second'>
<div><div><img src={BURGER} alt={BURGER} /></div>
<p>Burger King</p>
<p>46 min</p>
</div>
<div><div><img src={KFC} alt={KFC} /></div><p>KFC</p>
<p>41 min</p></div>
<div><div><img src={LEO} alt={LEO} /></div><p>Leon's Burgers</p>
<p>35 min</p></div>
<div><div><img src={FAA} alt={FAA}  /></div><p>Fasos Wraps-Rolls</p>
<p>36 min</p></div>
<div><div><img src={PIZZA} alt={PIZZA} /></div><p>Pizza Hut</p>
<p>45 min</p></div>
<div><div><img src={DOMINOZ} alt={DOMINOZ} /></div>
<p>Dominoz Pizza</p>
<p>30 min</p></div>
</section>

  
    <div className='oneline'>Delivery Restaurants in Bengaluru</div>
  <section className='one'>
    <aside>
      <img src={ONE} alt={ONE} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>California Burrito</h4>
          <button>4.4 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Mexican, Healthy Food, American...</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>44 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
    <aside>
    <img src={TWO} alt={TWO} />
      <p className='fly'>₹50 OFF </p>
        <div className='top'>
          <h4>Truffles Burger...</h4>
          <button>4.2 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Italian Special,Desert,American...</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>30 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={THREE} alt={THREE}  />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>Lunch box meals</h4>
          <button>4.2 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>North Indian Special Healthy Food</p>
        <p>₹100 for one</p>
        </div>
        <div className='third'>
          <p>36 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
  </section>






  <section className='one'>
  <aside>
      <img src={FOUR} alt={FOUR} />
      <p className='fly'>₹20 OFF </p>
        <div className='top'>
          <h4>KFC,Berger,Chi..</h4>
          <button>4.0 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Fast Food, Burger,Biriyani,eat........</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>31 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
    <aside>
    <img src={FIVE} alt={FIVE}  />
      <p className='fly'>₹20 OFF </p>
        <div className='top'>
          <h4>Armous  Biriyani</h4>
          <button>4.2 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Biriyani South Indian and North In..</p>
        <p>₹100 for one</p>
        </div>
        <div className='third'>
          <p>57 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={SIX} alt={SIX} />
      <p className='fly'>₹150 OFF </p>
        <div className='top'>
          <h4>Quality Deserts</h4>
          <button>4.3 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Ice Cream Deserts and many more...</p>
        <p>₹100 for one</p>
        </div>
        <div className='third'>
          <p>29 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
  </section>








  <section className='one'>
  <aside>
      <img src={SEVEN} alt={SEVEN} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>Kanti Sweets</h4>
          <button>4.4 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Special Sweets And Many More.....</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>44 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
    <aside>
    <img src={EIGHT} alt={EIGHT} />
      <p className='fly'>₹100 OFF </p>
        <div className='top'>
          <h4>Meghana Foods</h4>
          <button>4.4 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Biriyani,Andra,North Indian And.....</p>
        <p>₹550 for one</p>
        </div>
        <div className='third'>
          <p>26 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={NINE} alt={NINE} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>La Pion's Pizza...</h4>
          <button>3.9 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Mexican, Healthy Food, American...</p>
        <p>₹114 for one</p>
        </div>
        <div className='third'>
          <p>36 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
  </section>





  <section className='one'>
  <aside>
      <img src={TEN} alt={TEN} />
      <p className='fly'>40% OFF </p>
        <div className='top'>
          <h4>McDonald's Pia...</h4>
          <button>3.8 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Berger Fast Food Deserts And......</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>30 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={ELEVEN} alt={ELEVEN} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>EasyBites  Empire</h4>
          <button>4.3 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Berger Fast Food And Many More...</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>30 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
    <aside>
    <img src={TWELVE} alt={TWELVE} />
      <p className='fly'>10% OFF </p>
        <div className='top'>
          <h4>Nandana Palace</h4>
          <button>4.1 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Biriyani,Andra,North Indian And....</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>44 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
  </section>





  <section className='one'>
  <aside>
      <img src={THIRTEEN} alt={THIRTEEN} />
      <p className='fly'>₹50 OFF </p>
        <div className='top'>
          <h4>Kannur  Kitchen</h4>
          <button>4.1 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Kerala Biriyani South Indian.......</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>78 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
    <aside>
    <img src={FOURTEEN} alt={FOURTEEN} />
      <p className='fly'>10% OFF </p>
        <div className='top'>
          <h4>Donne Biriyani... </h4>
          <button>3.4 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Special Biriyani South Indian......</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>54 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={FIFTEEN} alt={FIFTEEN} />
      <p className='fly'>60% OFF </p>
        <div className='top'>
          <h4>CakeZone Center</h4>
          <button>4.2 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Berger Fast Food Deserts And........</p>
        <p>₹100 for one</p>
        </div>
        <div className='third'>
          <p>57 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
  </section>



  <section className='one'>
  <aside>
      <img src={SIXTEEN} alt={SIXTEEN} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>Fasoswraps Rolls</h4>
          <button>4.3 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Rols - Wraps - North Indian.........</p>
        <p>₹100 for one</p>
        </div>
        <div className='third'>
          <p>30 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={SEVENTEEN} alt={SEVENTEEN} />
      <p className='fly'>10% OFF </p>
        <div className='top'>
          <h4>Five Star Chicken</h4>
          <button>3.7 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>FastFood,Burger,Rolls And Many....</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>44 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
    <aside>
    <img src={EIGHTEEN} alt={EIGHTEEN} />
      <p className='fly'>15% OFF </p>
        <div className='top'>
          <h4>The Biriyani Life</h4>
          <button>3.9 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Biriyani,Kebab,North Indian.......</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>25 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
  </section>



  <section className='one'>
  <aside>
      <img src={NINTENN} alt={NINTENN} />
      <p className='fly'>20% OFF </p>
        <div className='top'>
          <h4>Nandini Deluxe</h4>
          <button>4.1 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Andra Biriyani North Indian.......</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>22 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={TWENTY} alt={TWENTY} />
      <p className='fly'>10% OFF </p>
        <div className='top'>
          <h4>Ande Ka Funda</h4>
          <button>3.8 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>North Indian Rools,Chinese........</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>36 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={TWENTYONE} alt={TWENTYONE} />
      <p className='fly'>₹150 OFF </p>
        <div className='top'>
          <h4>Madurai Idly Shop</h4>
          <button>3.8 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>South Indian Special Biriyani.......</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>41 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
  </section>



  <section className='one'>
  <aside>
      <img src={TWENTYTWO} alt={TWENTYTWO} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>Punjabi Dhaba</h4>
          <button>3.3 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>North Indian Chinese Special.....</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>62 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={TWENTYTHREE} alt={TWENTYTHREE} />
      <p className='fly'>₹50 OFF </p>
        <div className='top'>
          <h4>The Babai Tiffins</h4>
          <button>4.3 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>South Indian,Andra Special........</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>68 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={TWENTYFOUR} alt={TWENTYFOUR} />
      <p className='fly'>30% OFF </p>
        <div className='top'>
          <h4>Pheonix  - Pizza</h4>
          <button>4.1 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Pizza Fast Food Chinese Special</p>
        <p>₹250 for one</p>
        </div>
        <div className='third'>
          <p>55 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
  </section>



  <section className='one'>
  <aside>
      <img src={TWENTYFIVE} alt={TWENTYFIVE} />
      <p className='fly'>30% OFF </p>
        <div className='top'>
          <h4>Biriyani Addaaa</h4>
          <button>3.4 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Biriyani South Indian Special....</p>
        <p>₹250 for one</p>
        </div>
        <div className='third'>
          <p>47 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={TWENTYSIX} alt={TWENTYSIX} />
      <p className='fly'>₹150 OFF </p>
        <div className='top'>
          <h4>The Good Bowl</h4>
          <button>4.0 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>North Indian Pasta Italian And....</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>29 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={TWENTYSEVEN} alt={TWENTYSEVEN} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4> Bhavani Dhaba</h4>
          <button>3.8 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p> Biriyani North Indian Chinesee</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>41 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
  </section>



  <section className='one'>
  <aside>
      <img src={TWENTYEIGHT} alt={TWENTYEIGHT} />
      <p className='fly'>₹50 OFF </p>
        <div className='top'>
          <h4> Biriyani Corner</h4>
          <button>3.7 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>South Indian chinese North Indian</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>30 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={TWENTYNINE} alt={TWENTYNINE} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>ArabianShawarma</h4>
          <button>3.9 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Shawarma Fast Food And Many </p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>43 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={THIRTY} alt={THIRTY} />
      <p className='fly'>60% OFF </p>
        <div className='top'>
          <h4>Sri spana Dhaba</h4>
          <button>3.4 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>North Indian Mughlai Chinese......</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>67 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
  </section>



  <section className='one'>
  <aside>
      <img src={THIRTYONE} alt={THIRTYONE} />
      <p className='fly'>₹50 OFF </p>
        <div className='top'>
          <h4>HSR High Streets</h4>
          <button>4.1 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Chinese,Oriental North Indian.....</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>61 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={THIRTYTWO} alt={THIRTYTWO} />
      <p className='fly'>₹100 OFF </p>
        <div className='top'>
          <h4>Agrawal's Kitchen</h4>
          <button>4.0 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>North Indian Chinese Biriyani.....</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>51 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={THIRTYTHREE} alt={THIRTYTHREE} />
      <p className='fly'>₹125 OFF </p>
        <div className='top'>
          <h4>Shettie's Home</h4>
          <button>3.9 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Mangalorean,North Indian........</p>
        <p>₹50 for one</p>
        </div>
        <div className='third'>
          <p>46 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
  </section>




  <section className='one'>
  <aside>
      <img src={THIRTYFOUR} alt={THIRTYFOUR} />
      <p className='fly'>₹50 OFF </p>
        <div className='top'>
          <h4>Royal resturant</h4>
          <button>3.9<AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>North Indian, Chinese Italian......</p>
        <p>₹100 for one</p>
        </div>
        <div className='third'>
          <p>31 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
    <aside>
    <img src={THIRTYFIVE} alt={THIRTYFIVE} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>Meat And Hub</h4>
          <button>3.8 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Burger Sandwitch Fast Food.....</p>
        <p>₹100 for one</p>
        </div>
        <div className='third'>
          <p>46 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={THIRTYSIX} alt={THIRTYSIX} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>Dum Biriyani Hub</h4>
          <button>4.4 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Biriyani North indian chinese......</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>44 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
  </section>





  <section className='one'>
  <aside>
      <img src={THIRTYSEVEN} alt={THIRTYSEVEN} />
      <p className='fly'>₹200 OFF </p>
        <div className='top'>
          <h4>Kutumba Kitchen</h4>
          <button>4.1 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Biriyani North indian South Indian...</p>
        <p>₹350 for one</p>
        </div>
        <div className='third'>
          <p>46 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
    <aside>
    <img src={THIRTYEIGHT} alt={THIRTYEIGHT} />
      <p className='fly'>10% OFF </p>
        <div className='top'>
          <h4>Empire Resturant</h4>
          <button>4.1 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>North Indian Biriyani kebab..</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>30 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={THIRTYNINE} alt={THIRTYNINE} />
      <p className='fly'>10% OFF </p>
        <div className='top'>
          <h4>Meat And Eat</h4>
          <button>4.0 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Berger SandWitch Fast food........</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>34 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
  </section>




  <section className='one'>
  <aside>
      <img src={FOURTY} alt={FOURTY} />
      <p className='fly'>₹200 OFF </p>
        <div className='top'>
          <h4>Wendy's Burgers</h4>
          <button>4.3 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Berger Fast Food, American.......</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>41 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={FOURTYONE} alt={FOURTYONE} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>Kerala Mess</h4>
          <button>3.5 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Kerala North Indian Biriyai...</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>57 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={FOURTYTWO} alt={FOURTYTWO} />
      <p className='fly'>₹75 OFF </p>
        <div className='top'>
          <h4>Punjabi Chulhaa</h4>
          <button>3.4 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Punjabi,North Indian Mughlai......</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>56 min</p>
        </div>
        <hr />
        <div className='last'>
        <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
  </section>



  
  <section className='one'>
  <aside>
      <img src={FOURTYTHREE} alt={FOURTYTHREE} />
      <p className='fly'>₹100 OFF </p>
        <div className='top'>
          <h4>Behrouz Biriyani</h4>
          <button>4.3 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Mexican, Healthy Food, American...</p>
        <p>₹200 for one</p>
        </div>
        <div className='third'>
          <p>44 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={FOURTYFOUR} alt={FOURTYFOUR} />
      <p className='fly'>20% OFF </p>
        <div className='top'>
          <h4>Burger And Pizza</h4>
          <button>3.4 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Burger , sandwitchb Fast Food...</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>75 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt=""  />
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </aside>
    <aside>
    <img src={FOURTYFIVE} alt={FOURTYFIVE} />
      <p className='fly'>50% OFF </p>
        <div className='top'>
          <h4>Texas Burgers</h4>
          <button>3.9 <AiFillStar/> </button>
        </div>
        <div className='sec'>
        <p>Burger , sandwitchb Fast Food.....</p>
        <p>₹150 for one</p>
        </div>
        <div className='third'>
          <p>43 min</p>
        </div>
        <hr />
        <div className='last'>
            <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png" alt=""  />
            <p>Restaurant partner follows WHO protocol</p>
        </div>
    </aside>
  </section>


  <section className='endrs'>
  <div className='endofresult'><p>End of search result</p></div>
  <div className='homelogo'><img src={HOMELOGO} alt={HOMELOGO} /></div>
  </section>
 
 <section className='collection'>
<div className='coll_header'><h1>Collections</h1></div>
<div className='coll_det'>
  <div className='long'><p>Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</p></div>
  <div className='red'><p>All collections in Bengaluru</p></div><i class="fa-solid fa-angle-right"></i>
</div>

<section className='cimg'>
  <div><img src={COLL1} alt={COLL1} />
  <p>9 Newly Opened Restaurant</p><i class="fa-solid fa-angle-right"></i><p>22 Places</p></div>
 
  <div><img src={COLL2} alt={COLL2} />
  <p>25 Serene Rooftop Places</p><i class="fa-solid fa-angle-right"></i><p>7 Places</p></div>
  
  <div><img src={COLL3} alt={COLL3} />
  <p>11 Must Visit Restaurants</p>
  <p>22 Places</p><i class="fa-solid fa-angle-right"></i></div>

  <div><img src={COLL4} alt={COLL4} />
  <p>20 Live Cricket Screenings</p>
  <p>22 Places</p><i class="fa-solid fa-angle-right"></i></div>
</section>

<section className='popular'>
  <div className='p_line'><p>Popular localities in and around Bengaluru</p></div>
  <div className='grid'>
<div><select><option>Indiranagar</option></select></div>
<div><select><option>Marathahalli</option></select></div>
<div><select><option>Whitefield</option></select></div>
<div><select><option>Koramangala 5th block</option></select></div>
<div><select><option>HSR</option></select></div>
<div><select><option>Jayanagar</option></select></div>
<div><select><option>JP Nagar</option></select></div>
<div><select><option>Sarjapur Road</option></select></div>
<div><select><option className='see'>See more</option></select></div>
  </div>
</section>

<section className='explore'>
  <div className='eline'><p>Explore options near me</p></div>
  <div className='lastline'>
  <div><select><option><p>Popular cusines near me</p></option></select></div>
  <div><select><option><p>Popular restaurant types near me</p></option></select></div>
  <div><select><option><p>Top Restaurants Chains</p></option></select></div>
  <div><select><option><p>Cities We Deliver To</p></option></select></div>
  </div>
</section>
 </section>
 <footer className='footer'>
    <section className='footer_section'>
      <div className='fline'>
        <div className='f2line'>
        <div><img src={ZOMATO} alt={ZOMATO}/></div>
        </div>
        <div className='india'><select><option>India</option></select><select><option>English</option></select></div>
      </div>
      <i class="fa-solid fa-globe"></i>
    </section>
   <section className='list'>
    <div>
    <p>ABOUT ZOMATO</p>
    <li>Who We Are</li>
    <li>Blog</li>
    <li>Work With Us</li>
    <li>Investor Relations</li>
    <li>Report Froud</li>
    <li>Press Kit</li>
    <li>Contact Us</li>
    </div>

    <div>
    <p>ZOMAVERSE</p>
    <li>Zomato</li>
    <li>Blinkit</li>
    <li>Feeding India</li>
    <li>hyperpure</li>
    <li>Zomaland</li>
    </div>

    <div>
    <p>FOR RESTAURANTS</p>
    <li>Partner With Us</li>
    <li>Apps For You</li>
    <p>FOR ENTERPRISES</p>
    <li>Zomato For Enterprises</li>
    </div>

    <div>
    <p>LEARN MORE</p>
    <li>Privacy</li>
    <li>Security</li>
    <li>Terms</li>
    <li>Sitemap</li>
    </div>

    <div>
    <p>SOCIAL LINKS</p>
    <div className='i'><i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-youtube"></i><i class="fa-brands fa-facebook"></i></div>
    <div className='m'><img src={PSTORE} alt={PSTORE} />
    <img src={ISTORE} alt={ISTORE} /></div>
    </div>
   </section>
   <hr />
   <div className='conclusion'><p><p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
     2008-2023 © Zomato™ Ltd. All rights reserved.</p></p></div>
</footer>

  </section>

   </>
  )
}

export default App
