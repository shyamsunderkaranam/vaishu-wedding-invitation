import React, { useEffect, useRef } from 'react';
import wedding from './data/data';
import './Invitation.css';
import confetti from 'canvas-confetti';
// import FlowersEffect from './FlowersEffect';
import AOS from 'aos';

import 'aos/dist/aos.css';
// import './typewrite.css';

const Invitation = () => {
  const mainCardsRef = useRef(null);
  // const lastScrollY = useRef(0);
  
  useEffect(() => {
    AOS.init({ once: true, offset: 200, duration: 1000, easing: 'ease-out-cubic' }); 
    AOS.refresh();
    const leftCard = document.querySelector('.left-card');
    const rightCard = document.querySelector('.right-card');
    
    setTimeout(() => {
      leftCard.style.transform = 'translateX(0)';
      rightCard.style.transform = 'translateX(0)';
    }, 500);

    setTimeout(()=>{
      confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, 3000);

  }, []);

  const {bride, groom, venue, date, invitees} = wedding;
  return (
    <div className="App">
      <header className="header">
        <h1>KULKARNI'S WEDDING INVITATION</h1>
      </header>
      <main>
        {/* <FlowersEffect /> */}
        <section className="main-cards" ref={mainCardsRef}>
          <div className="card left-card">
            <img src={bride.img} alt="Bride" />
            <h2>{bride.name}</h2>
          </div>
          <div className="card middle-card">
            <img src="hindu-wedding.png" alt="WEDS" />
            <h2>WEDS</h2>
          </div>
          {/* <div className="loader"></div> */}
          <div className="card right-card">
            <img src={groom.img} alt="Groom" />
            <h2>{groom.name}</h2>
          </div>
        </section>
        <section className="details">
        
          
          <div className="card detail-card"
          data-aos="flip-left"
          
          >
            <h3>Venue:</h3>
            <p>{venue.title}</p>
            <p>{venue.details}</p>
            <a class="btn" href={venue.map} target="_blank" rel="noreferrer">View on Map</a>
          </div>
          
          <div className="card detail-card"
          data-aos="flip-right"
          
          >
            <h3>{date.title}</h3>
            <p>{date.details}</p>
          </div>
        </section>
        <section className="invitees">
          <div  className="card invitee-card"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          >
            <h3>Invited By:</h3>
              {invitees.map((invitee, index) => (
                <p key={index}>{invitee+", "}</p>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Invitation;
