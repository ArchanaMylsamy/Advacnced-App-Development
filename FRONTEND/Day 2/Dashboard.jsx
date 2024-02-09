import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import logo from '../assets/logo.png';
import why from '../assets/why.jpg';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';
import icon4 from '../assets/icon-4.png';
import stories1 from '../assets/stories-1.jpg';
import stories2 from '../assets/stories-2.jpg';
import stories3 from '../assets/stories-3.jpg';
import photos1 from '../assets/photos-1.jpg';
import photos2 from '../assets/photos-2.jpg';
import photos3 from '../assets/photos-3.jpg';
import photos4 from '../assets/photos-4.jpg';
import posts1 from '../assets/posts-1.jpg';
import posts2 from '../assets/posts-2.jpg';
import posts3 from '../assets/posts-3.jpg';



import classes1 from '../assets/classes-1.jpg';
import classes2 from '../assets/classes-2.jpg';
import classes3 from '../assets/classes-3.jpg';
import classes4 from '../assets/classes-4.jpg';
import classes5 from '../assets/classes-5.jpg';
import classes6 from '../assets/classes-6.jpg';


import { RiTwitterFill, RiFacebookFill, RiInstagramLine } from 'react-icons/ri';





import header from '../assets/header.jpg';

import './Dashboard.css'
// Make sure to adjust the path based on your project structure
const YogalaxComponent = () => {
  
    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };
    
      useEffect(() => {
        // header container
        ScrollReveal().reveal(".header__container h1", {
          ...scrollRevealOption,
          delay: 500,
        });
    
        ScrollReveal().reveal(".header__container h2", {
          ...scrollRevealOption,
          delay: 1000,
        });
    
        ScrollReveal().reveal(".header__container .btn", {
          ...scrollRevealOption,
          delay: 1500,
        });
    
        ScrollReveal().reveal(".header__container img", {
          ...scrollRevealOption,
          origin: "right",
        });
    
        // why container
        ScrollReveal().reveal(".why__container .section__header", {
          ...scrollRevealOption,
          delay: 500,
        });
    
        ScrollReveal().reveal(".why__container p", {
          ...scrollRevealOption,
          delay: 1000,
        });
    
        ScrollReveal().reveal(".why__container li", {
          ...scrollRevealOption,
          delay: 1500,
          interval: 500,
        });
    
        ScrollReveal().reveal(".why__container img", {
          ...scrollRevealOption,
          origin: "left",
        });
    
        // hero container
        ScrollReveal().reveal(".hero__card", {
          ...scrollRevealOption,
          interval: 500,
        });
    
        // classes container
        ScrollReveal().reveal(".classes__image", {
          duration: 1000,
          interval: 500,
        });
    
        // membership container
        ScrollReveal().reveal(".membership__card", {
          ...scrollRevealOption,
          interval: 500,
        });
    
        // stories container
        ScrollReveal().reveal(".stories__card", {
          ...scrollRevealOption,
          interval: 500,
        });
    
        // posts container
        ScrollReveal().reveal(".posts__card", {
          ...scrollRevealOption,
          interval: 500,
        });
    
        // photos container
        ScrollReveal().reveal(".photos__card", {
          duration: 1000,
          interval: 500,
        });
      }, []);
  return (
    <div className='das'>
      <nav>
        <div className="nav__logo">
          <img src={logo} alt="logo" />
          <span>SATTVA CONNECT</span>
        </div>
        <ul className="nav__links">
          <li className="link"><a href="#home">Home</a></li>
          <li className="link"><a href="#classes">Classes</a></li>
          <li className="link"><a href="#membership">Membership</a></li>
          <li className="link"><a href="#stories">About</a></li>
          <li className="link"><a href="#posts">Blog</a></li>
          <br></br>
          <li className="link2"><a href="#contact">Login</a></li>
        </ul>
      </nav>
      <header id="home">
        <div className="section__container header__container">
          <div className="header__content">
            <h1>Effective YOGA</h1>
            <h2>Do yoga today for better tomorrow</h2>
            <button className="btn">15 Days free trial</button>
          </div>
          <div className="header__image">
            <img src={header} alt="header" />
          </div>
        </div>
      </header>
      <section className="section__container why__container">
      <div className="why__image">
        <img src={why} alt="why yoga" />
      </div>
      <div className="why__content">
        <h2 className="section__header">Why You Should Go To Yoga</h2>
        <p>
          Engaging in yoga offers a holistic approach to wellness, encompassing
          both physical and mental benefits. Through a series of poses,
          stretches, and muscle strength. Its meditative aspects encourage
          mindfulness, reducing stress and anxiety while promoting a sense of
          inner peace.
        </p>
        <ul>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga boosts brain power
          </li>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga helps you to breathe better
          </li>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga improves your strength
          </li>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga helps you to focus
          </li>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga helps give meaning to your day
          </li>
        </ul>
      </div>
    </section>

    <section className="hero" id="hero">
      <div className="section__container hero__container">
        <div className="hero__card">
          <span><img src={icon1} alt="hero" /></span>
          <h4>Healthy Lifestyle</h4>
          <p>
            Embrace a healthy lifestyle through the transformative power of yoga
            and cultivate physical vitality and inner peace.
          </p>
        </div>
        <div className="hero__card">
          <span><img src={icon2} alt="hero" /></span>
          <h4>Body & Mind Balance</h4>
          <p>
            Through purposeful poses and mindful breathing, yoga cultivates a
            strong, flexible body while nurturing inner calm.
          </p>
        </div>
        <div className="hero__card">
          <span><img src={icon3} alt="hero" /></span>
          <h4>Meditation Practice</h4>
          <p>
            Discover inner serenity and mindfulness as you cultivate a profound
            connection with the present moment.
          </p>
        </div>
        <div className="hero__card">
          <span><img src={icon4} alt="hero" /></span>
          <h4>Self-Care</h4>
          <p>
            Discover the transformative power of self-care through yoga and
            embrace moments of tranquility and mindfulness.
          </p>
        </div>
      </div>
    </section>

    <section className="section__container classes__container" id="classes">
      <p className="section__subheader">YOGA CLASSES</p>
      <h2 className="section__header">Choose Your Level & Focus</h2>
      <div className="classes__grid">
        <div className="classes__image">
          <img src={classes1} alt="classes" />
          <div className="classes__content">
            <button className="btn classes__btn">View More</button>
          </div>
        </div>
        <div className="classes__image">
          <img src={classes2} alt="classes" />
          <div className="classes__content">
            <button className="btn classes__btn">View More</button>
          </div>
        </div>
        <div className="classes__image">
          <img src={classes3} alt="classes" />
          <div className="classes__content">
            <button className="btn classes__btn">View More</button>
          </div>
        </div>
        <div className="classes__image">
          <img src={classes4} alt="classes" />
          <div className="classes__content">
            <button className="btn classes__btn">View More</button>
          </div>
        </div>
        <div className="classes__image">
          <img src={classes5} alt="classes" />
          <div className="classes__content">
            <button className="btn classes__btn">View More</button>
          </div>
        </div>
        <div className="classes__image">
          <img src={classes6} alt="classes" />
          <div className="classes__content">
            <button className="btn classes__btn">View More</button>
          </div>
        </div>
      </div>
    </section>

    <section className="membership" id="membership">
      <div className="section__container membership__container">
        <p className="section__subheader">PRICING TABLE</p>
        <h2 className="section__header">Membership Cards</h2>
        <div className="membership__grid">
          <div className="membership__card">
            <h4>YEAR CARD</h4>
            <h2><sup>$</sup>499</h2>
            <h3>For 1 Year</h3>
            <h4>ENJOY ALL THE FEATURES</h4>
            <p>Onetime access to all club</p>
            <p>Group trainer</p>
            <p>Book a group class</p>
            <p>Fitness orientation</p>
            <button className="btn membership__btn">GET STARTED</button>
          </div>
          <div className="membership__card">
            <h4>MONTHLY CARD</h4>
            <h2><sup>$</sup>200</h2>
            <h3>For 1 Month</h3>
            <h4>ENJOY ALL THE FEATURES</h4>
            <p>Group classes</p>
            <p>Discuss fitness goals</p>
            <p>Group trainer</p>
            <p>Fitness orientation</p>
            <button className="btn membership__btn">GET STARTED</button>
          </div>
          <div className="membership__card">
            <h4>WEEKLY CARD</h4>
            <h2><sup>$</sup>85</h2>
            <h3>For 1 Week</h3>
            <h4>ENJOY ALL THE FEATURES</h4>
            <p>Access to yoga area</p>
            <p>Group trainer</p>
            <p>Group classes</p>
            <p>Fitness orientation</p>
            <button className="btn membership__btn">GET STARTED</button>
          </div>
        </div>
      </div>
    </section>

    <section className="section__container stories__container" id="stories">
      <p className="section__subheader">TESTIMONY</p>
      <h2 className="section__header">Successful Stories</h2>
      <div className="stories__grid">
        <div className="stories__card">
          <div className="stories__content">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
              This yoga website has been a game-changer for me. The variety of
              classes and guided sessions have not only improved my flexibility
              but also brought a sense of calm to my hectic days.
            </p>
          </div>
          <div className="stories__author">
            <img src={stories1} alt="author" />
            <div className="stories__author__details">
              <h4>Emily Williams</h4>
              <h6>Trainer</h6>
            </div>
          </div>
        </div>
        <div className="stories__card">
          <div className="stories__content">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
              The tailored sessions and expert guidance have not only eased my
              discomfort but also boosted my overall well-being. A fantastic
              resource for both beginners and experienced yogis.
            </p>
          </div>
          <div className="stories__author">
            <img src={stories2} alt="author" />
            <div className="stories__author__details">
              <h4>Ava Johnson</h4>
              <h6>Member</h6>
            </div>
          </div>
        </div>
        <div className="stories__card">
          <div className="stories__content">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
              The on-demand classes allow me to practice whenever I can, and the
              mindfulness exercises have brought a new level of clarity to my
              life.A must-visit for anyone seeking holistic wellness.
            </p>
          </div>
          <div className="stories__author">
            <img src={stories3} alt="author" />
            <div className="stories__author__details">
              <h4>Sophia Smith</h4>
              <h6>Member</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="banner">
      <div className="section__container banner__container">
        <div className="banner__card">
          <h4>5,000</h4>
          <p>Happy Customers</p>
        </div>
        <div className="banner__card">
          <h4>4,560</h4>
          <p>Yoga Workshops</p>
        </div>
        <div className="banner__card">
          <h4>570</h4>
          <p>Years of Experience</p>
        </div>
        <div className="banner__card">
          <h4>900</h4>
          <p>Lesson Conducted</p>
        </div>
      </div>
    </section>

    <section className="posts" id="posts">
      <div className="section__container posts__container">
        <p className="section__subheader">BLOG</p>
        <h2 className="section__header">Recent Posts</h2>
        <div className="posts__grid">
          <div className="posts__card">
            <img src={posts1} alt="post" />
            <div className="posts__content">
              <div className="posts__date">
                <span>31</span>
                <div>
                  <p>2021</p>
                  <p>December</p>
                </div>
              </div>
              <h4>Unlocking Inner Peace</h4>
              <p>
                Dive into the practices that help you cultivate inner peace,
                reduce stress, and enhance your overall well-being.
              </p>
            </div>
          </div>
          <div className="posts__card">
            <img src={posts2} alt="post" />
            <div className="posts__content">
              <div className="posts__date">
                <span>25</span>
                <div>
                  <p>2022</p>
                  <p>March</p>
                </div>
              </div>
              <h4>From Desk to Mat</h4>
              <p>
                Learn incorporating simple yoga stretches and breathing
                techniques to counter effects of sedentary lifestyle.
              </p>
            </div>
          </div>
          <div className="posts__card">
            <img src={posts3} alt="post" />
            <div className="posts__content">
              <div className="posts__date">
                <span>06</span>
                <div>
                  <p>2022</p>
                  <p>August</p>
                </div>
              </div>
              <h4>Yoga Through the Ages</h4>
              <p>
                From prenatal yoga to gentle senior yoga, discover enhance
                flexibility and foster a lifelong love for well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section__container photos__container">
      <p className="section__subheader">GALLERY</p>
      <h2 className="section__header">See The Latest Photos</h2>
      <div className="photos__grid">
        <div className="photos__card">
          <img src={photos1} alt="photo" />
        </div>
        <div className="photos__card">
          <img src={photos2} alt="photo" />
        </div>
        <div className="photos__card">
          <img src={photos3} alt="photo" />
        </div>
        <div className="photos__card">
          <img src={photos4} alt="photo" />
        </div>
      </div>
    </section>
      

      <footer className="footer" id="contact">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="footer__logo"><a href="#">SATTVA CONNECT</a></div>
          </div>
          <div className="footer__col">
            <p>203 Lal Streets Mountain View, San Francisco, California, USA</p>
          </div>
          <div className="footer__col">
            <div className="footer__socials">
            <a href="#"><RiTwitterFill /></a>
         <a href="#"><RiFacebookFill /></a>
         <a href="#"><RiInstagramLine /></a>
            </div>
          </div>
        </div>
        <div className="section__container footer__bar">
          Copyright © 2023 Web Design Mastery. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default YogalaxComponent;
