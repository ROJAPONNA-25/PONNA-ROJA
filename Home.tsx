import React from 'react';
import peter from '../assets/img/hero-bg.jpg';

import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import '../assets/css/main.css';

export default function Home() {
  return (
    <div>
      <section id="hero" className="hero bg-dark section">
        <img src={peter} alt="Scenic view of nature background" />

        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <h2>Welcome to Our Website</h2>
              <p>We are a team of talented designers making websites with Bootstrap</p>
            </div>
            <div className="col-lg-5">
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="sign-up-form">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading...</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

