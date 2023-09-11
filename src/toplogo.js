import React from "react";
import "./logo.css";
import "./logo.css";

function toplogo() {
  return (
    <>
      <body>
        <header className="header">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>

        <select className='select' id="lang" name="lang">
          <option className="label" value="English">English</option>
          <option className="label" value="Turkish">Turkish</option>
          <option className="label" value="Arabic">Arabic</option>
        </select>
        </header>
        <sction>
          <div className="bottom-paragraph">
            <p className="p1">
              Get ready to explore the world of innovative investments!<br></br>
              Are you interested in diversifying your portfolio through
              investing in real assets and entrepreneurial projects?
            </p>
            <p className="p2">
              Join us for a unique experience that offers you the opportunity to
              engage in real estate fractional ownership and benefit from
              sustainable income. We would be grateful to connect with you to
              provide more information and answer your inquiries. We are here to
              support you on your journey towards achieving exceptional
              investment goals. Build your successful financial future by
              reaching out to us today.
            </p>
          </div>
          <div class="contact-block">
            <div className="contact-inputs">
              <div className="input-row">
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Name" />
              </div>
              <div className="input-row">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="input-row">
                <label for="phone">Phone Number:</label>
                <input
                  className="inp"
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div>
              <button class="btn-sub" type="submit" value="Submit">
                <span class="c35">Submit</span>
              </button>
            </div>
          </div>
        </sction>
      </body>
    </>
  );
}

export default toplogo;
