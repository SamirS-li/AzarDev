import React from 'react';
import about_image from '../image/about.webp'

export default function About() {
  return (
    <section id='about'>
      <div className="container">
        <div className="about-main">
          <div className="about-info">
            <h2 className='about-info-header'>About Azar's Blogs</h2>
            <h2 className='about-info-title'>Exploring the Latest in Web Technologies</h2>
            <p className='about-info-text'>
              We're dedicated to sharing the most recent developments in web technologies. From front-end
              frameworks to back-end solutions, we cover it all. Join us as we
              delve into the world of the latest web technologies, keeping you informed and inspired
            </p>
            <ul className='about-counts'>
              <li>
                <span>3 K</span>
                <p>Year of experience</p></li>
              <li>
                <span>34 k</span>
                <p>People reacted</p></li>
              <li>
                <span>1 K</span>
                <p>Daily visitors</p></li>
            </ul>
          </div>
          <div className="about-image" loading="lazy" decoding="async">
            <img src={about_image} alt="about" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  )
}
