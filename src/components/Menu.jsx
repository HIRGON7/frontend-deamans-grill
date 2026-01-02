import React, { useRef } from "react";
import "../styles/menu.css";
import { addToCart } from "../utils/cart.js";


import brisketImg from "../images/b4.jpg";
import ribsImg from "../images/r1.jpg";
import steakImg from "../images/s8.jpg";
import sidesImg from "../images/g1.jpg";
import dessertImg from "../images/des1.jpg";
import drinksImg from "../images/drin1.jpg";
import woodySnake from "../images/woodysnake.png";
import snakeBootSound from "../images/snakeboot.mp3";
import blondie from "../images/blondie.png"
export default function Menu() {
  const audioRef = useRef(null);

  const playSnakeSound = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 130,
        behavior: "smooth",
      });
    }
  };

const Item = ({ id, name, desc, price }) => (
  <div className="menu-item">
    <h3 className="item-name">{name}</h3>
    <p className="item-desc">{desc}</p>
    <span className="item-price">{price}</span>

    <button
      className="add-to-cart"
      onClick={() =>
        addToCart({
          id,
          name,
          price: Number(price.replace("$", "")) 
        })
      }
    >
      Add to Checkout
    </button>
  </div>
);


  return (
    <div className="menu-page">
     

      <div className="woody-snake-wrapper">
        <img
          src={woodySnake}
          alt="Woody Snake"
          className="woody-snake"
          onClick={playSnakeSound}
        />
      </div>

      <audio ref={audioRef} src={snakeBootSound} preload="auto" />



      <div className="menu-mini-nav">
        <button onClick={() => scrollToSection("brisket")}>Brisket</button>
        <button onClick={() => scrollToSection("ribs")}>Ribs</button>
        <button onClick={() => scrollToSection("steak")}>Steaks</button>
        <button onClick={() => scrollToSection("sides")}>Sides</button>
        <button onClick={() => scrollToSection("dessert")}>Dessert</button>
        <button onClick={() => scrollToSection("drinks")}>Drinks</button>
      </div>
      
      <section className="menu-section" id="brisket">
     

     
        <h2 className="menu-title">BRISKET</h2>
        <div className="menu-image-box"><img src={brisketImg} alt="Brisket" /></div>
        <div className="menu-grid more-than-6">
          <Item id={1} name="Classic Smoked Brisket" desc="Beef brisket, coarse black pepper, sea salt, oak wood smoke." price="$9.50" />
          <Item id={2}name="Pepper Crust Brisket" desc="Beef brisket, cracked black pepper, garlic powder." price="$10.50" />
          <Item id={3} name="Honey Glazed Brisket" desc="Smoked brisket, natural honey glaze, butter, mild spices." price="$11.25" />
          <Item id={4} name="Garlic Butter Brisket" desc="Brisket, roasted garlic, melted butter, herbs." price="$11.75" />
          <Item id={5} name="Texas Style Brisket" desc="Beef brisket, salt, pepper, pure hardwood smoke." price="$13.00" />
          <Item id={6} name="Oak Pit Brisket" desc="Brisket smoked over oak, dry rub, natural juices." price="$12.50" />
          <Item id={7} name="🔥 Coal Miner Brisket" desc="So dark and smoky it looks like it came from underground." price="$13.75" />
          <Item id={8} name="💀 Funeral Brisket" desc="This brisket ends conversations and starts memories." price="$14.25" />
          <Item id={9} name="👑 King’s Last Brisket" desc="Legend says no one finishes it alone." price="$15.00" />
        </div>
      </section>

      <section className="menu-section" id="ribs">
        <h2 className="menu-title">RIBS</h2>
        <div className="menu-image-box"><img src={ribsImg} alt="Ribs" /></div>
        <div className="menu-grid more-than-6">
          <Item id={10} name="Oxtail Ribs" desc="Oxtail, onion, garlic, slow braise, rich beef sauce." price="$12.50" />
          <Item id={11} name="Dino Ribs" desc="Beef ribs, dry rub, hardwood smoke, coarse salt." price="$17.00" />
          <Item id={12} name="BBQ Glazed Ribs" desc="Beef ribs, house BBQ sauce, brown sugar, spices." price="$13.25" />
          <Item id={13} name="Dry Rub Ribs" desc="Beef ribs, paprika, pepper, garlic, smoked dry." price="$13.75" />
          <Item id={14} name="Applewood Ribs" desc="Beef ribs, applewood smoke, mild seasoning." price="$14.25" />
          <Item id={15} name="Slow Pit Ribs" desc="Ribs cooked low & slow, natural juices retained." price="$14.75" />
          <Item id={16} name="🔥 Bondfire Ribs" desc="every bite is a kick to the face from norris." price="$15.50" />
          <Item id={17} name="⚠️ Lawsuit Ribs" desc="Our lawyers have told us to warn you ." price="$16.00" />
          <Item id={18} name="☠️ Last Meal Ribs" desc="If this was your last meal, you’d be satisfied." price="$17.50" />
        </div>
      </section>

      <section className="menu-section" id="steak">
        <h2 className="menu-title">STEAKS</h2>
        <div className="menu-image-box"><img src={steakImg} alt="Steak" /></div>
        <div className="menu-grid more-than-6">
          <Item id={19} name="Ribeye" desc="Ribeye steak, salt, black pepper, open flame grill." price="$16.00" />
          <Item id={20} name="Sirloin" desc="Sirloin cut, garlic butter, fresh herbs." price="$13.50" />
          <Item id={21} name="New York Strip" desc="Strip steak, sea salt, pepper, high heat sear." price="$17.00" />
          <Item id={22} name="Butter Basted Steak" desc="Beef steak, butter, thyme, garlic,olive oil." price="$18.50" />
          <Item id={23} name="T-Bone Steak" desc="T-bone cut, salt, pepper, charcoal grill." price="$19.00" />
          <Item id={24} name="Grill Master Steak" desc="House-cut steak, secret uncle sam seasoning, heavy char." price="$19.50" />
          <Item id={25} name="🔥 Outlaw Steak" desc="No rules. No mercy." price="$20.00" />
          <Item id={26} name="💀 Midlife Crisis Steak" desc="Bought impulsively. No regrets." price="$21.00" />
          <Item id={27} name="👑 Boss Fight Steak" desc="Final boss unlocked." price="$22.50" />
        </div>
      </section>

      <section className="menu-section" id="sides">
        <h2 className="menu-title">SIDES</h2>
        <div className="menu-image-box"><img src={sidesImg} alt="Sides" /></div>
        <div className="menu-grid more-than-6">
          <Item id={28} name="Sweet Potatoes & Gravy" desc="Roasted sweet potatoes, beef gravy, butter." price="$4.50" />
          <Item id={29} name="Mac & Cheese" desc="Pasta, cheddar cheese, cream, baked top." price="$4.00" />
          <Item id={30} name="Grilled Corn" desc="Corn on the cob, butter, salt,seasoning." price="$3.75" />
          <Item id={31} name="Mashed Potatoes" desc="Potatoes, butter, milk, seasoning." price="$3.75" />
          <Item id={32} name="Coleslaw" desc="Cabbage, carrot, creamy dressing." price="$3.25" />
          <Item id={33} name="Baked Beans" desc="Beans, tomato sauce, brown sugar." price="$3.50" />
          <Item id={34} name="🔥 Heart Attack Fries" desc="Your cardiologist felt a disturbance." price="$4.50" />
          <Item id={35} name="📶 WiFi Down Beans" desc="Best enjoyed while waiting for the router." price="$4.00" />
          <Item id={36} name="🚨 Regret Coleslaw" desc="You said you wouldn’t order it again." price="$3.75" />
        </div>
      </section>

      <section className="menu-section" id="dessert">
        <h2 className="menu-title">DESSERT</h2>
        <div className="menu-image-box"><img src={dessertImg} alt="Dessert" /></div>
        <div className="menu-grid more-than-6">
          <Item id={37} name="Chocolate Skillet Cake" desc="Chocolate cake, cocoa, butter, sugar." price="$5.50" />
          <Item id={38} name="Apple Pie" desc="Apples, cinnamon, sugar, baked crust." price="$4.75" />
          <Item id={39} name="Cheesecake" desc="Cream cheese, eggs, sugar, biscuit base." price="$4.50" />
          <Item id={40} name="Brownie" desc="Chocolate, cocoa, butter, sugar." price="$4.00" />
          <Item id={41} name="Ice Cream" desc="Milk, cream, sugar, vanilla." price="$3.50" />
          <Item id={42} name="Milkshake" desc="Milk, ice cream, flavor syrup." price="$4.25" />
          <Item id={43} name="🍰 Emotional Support Cake" desc="Guaranteed to listen without judging." price="$4.75" />
          <Item id={44} name="💔 Breakup Brownie" desc="for all you heartbroken wimps out there." price="$4.25" />
          <Item id={45} name="👻 Ghosted Sundae" desc="this drink will haunt you afterwords." price="$4.50" />
        </div>
      </section>

      <section className="menu-section" id="drinks">
        <h2 className="menu-title">DRINKS</h2>
        <div className="menu-image-box"><img src={drinksImg} alt="Drinks" /></div>
        <div className="menu-grid more-than-6">
          <Item id={46} name="Cola" desc="made the OLD WAY." price="$1.50" />
          <Item id={47} name="Iced Tea" desc="Brewed tea, ice, light sweetness." price="$1.75" />
          <Item id={48} name="Lemonade" desc="Fresh lemon juice, water, sugar." price="$2.00" />
          <Item id={49} name="Water" desc="Filtered drinking water." price="$1.00" />
          <Item id={50} name="Root Beer" desc="Carbonated soda with root flavor." price="$2.25" />
          <Item id={51} name="Milkshake" desc="Milk, ice cream, flavor syrup." price="$3.00" />
          <Item id={52} name="🔥Anger Management Juice" desc="Does not actually manage anger." price="$2.75" />
          <Item id={53} name="⚡ Generator Fuel" desc="May power small villages for days or weeks." price="$3.00" />
          <Item id={54} name="👻 Midnight Regret Mix" desc="Tastes like tomorrow’s headache dont worry you will regret it." price="$2.75" />
        </div>
      </section>

    </div>
  );
}
