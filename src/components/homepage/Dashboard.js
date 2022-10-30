import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Details from "./Details";
import Pitch from './Pitch'


const Dashboard = () => {
  const [show, setShow] = useState("2");
  return (
    <div>
      <div className="firstblock">
        <p>
          <img src="./images/logo" alt="LOGO" />
          <h2>Letzrent</h2>
          Address : Mumbai Maharashtra <br />
          E-mail | <a href="https://letzrent.com">Website</a> | PAN/TAN :
          AAJCR3294F <br />
          Online search, compare & booking platform for self-drive cars, charter
          flights, living space & more that rewards users
        </p>
      </div>
      <div className="secondblock">
        <ReactPlayer url="https://www.youtube.com/watch?v=biGcDeB2PbQ" />
      </div>
      <div className="socialicons">
        <span>
          <a href="https://www.facebook.com/LetzRent.official/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/letzrent.official/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </span>
        <span>
          <a href="https://www.youtube.com/watch?v=biGcDeB2PbQ">
            <FontAwesomeIcon icon={faYoutube} />{" "}
          </a>
        </span>
      </div>
      <hr />
      {/* _____________________________________________ */}

      <section>
        <div className="campaigndata">
          <h3> Rupees </h3> 0 % of minimum goal raised
          <h3> 0 </h3>Total Investors
          <h3> 0 Days </h3> Left to Invest
        </div>
      </section>

      {/* _______________________- */}
      <div className="thirdblock">
        <h1> Benefits you get when you invest in LetzRent </h1>

        <div className="container">
          <div className="deals">
            <h3> Rupees 2000 </h3>
            <ul>
              <li>LetzRent Premium Apparel (T-shirts & Coffee Mug)</li>

              <li>Early access to new features & promotions</li>
              <li>TNC : Limited to the first 100</li>
            </ul>
            <div className="btn">
              <button> Invest </button>
            </div>
          </div>
          <div className="deals">
            <h3> Rupees 5000 </h3>
            <ul>
              <li>
                LetzRent Premium Apparel (T-shirts, Sweatshirts & additional
                Swag)
              </li>
              <li>Early access to new features & promotions</li>
              <li>TNC : Limited to the first 200</li>
            </ul>

            <div className="btn">
              <button> Invest </button>
            </div>
          </div>
          <div className="deals">
            <h3> Rupees 10000 </h3>
            <ul>
              <li>
                Exclusive interest in owning equity with an investment of
                ₹50,000 — ₹2,00,000{" "}
              </li>
              <li>Invite to exclusive LetzRent team chat </li>
              <li>
                {" "}
                LetzRent Premium Apparel (T-shirts, Sweatshirts & additional
                Swag)
              </li>
              <li> Early access to new features & promotions</li>
              <li>
                {" "}
                TNC : Equity benefits with no voting rights. Limited to the
                first 5 Investors
              </li>
            </ul>

            <div className="btn">
              <button> Invest </button>
            </div>
          </div>
          <div className="deals">
            <h3> Rupees 25000 </h3>
            <ul>
              <li>
                {" "}
                Exclusive interest in owning equity with an investment of
                ₹3,00,000 — ₹10,00,000
              </li>
              <li>One-on-one 30 minute video call with Co-Founders </li>
              <li> Invite to exclusive LetzRent team chat</li>
              <li>
                LetzRent Premium Apparel (T-shirts, Sweatshirts & additional
                Swag){" "}
              </li>
              <li> Early access to new features & promotions</li>
              <li>
                {" "}
                TNC : Equity benefits with no voting rights. Limited to the
                first 5 Investors
              </li>
            </ul>

            <div className="btn">
              <button> Invest </button>
            </div>
          </div>
          <div className="deals">
            <h3> Rupees 50000 </h3>
            <ul>
              <li>
                Exclusive interest in owning equity with an investment of
                ₹11,00,000 — ₹30,00,000
              </li>
              <li>In-Person dinner with Co-Founder in Whitefield, Bangalore</li>
              <li> One-on-one 30 minute video call with Co-Founders</li>
              <li>Invite to exclusive LetzRent team chat </li>
              <li>
                LetzRent Premium Apparel (T-shirts, Sweatshirts & additional
                Swag
              </li>
              <li> Early access to new features & promotions</li>
              <li>
                TNC : Equity benefits with no voting rights. Limited to the
                first 5 Investors
              </li>
            </ul>
            <div className="btn">
              <button> Invest </button>
            </div>
          </div>
          <div className="deals">
            <h3> Rupees 100000 </h3>
            <ul>
              <li>
                Exclusive interest in owning equity with an investment of above
                ₹40,00,000
              </li>
              <li>LetzRent Weekend Experience: Flight & Hotel on us </li>
              <li>In-Person dinner with Co-Founder in Whitefield, Bangalore</li>
              <li>One-on-one 30 minute video call with Co-Founders </li>
              <li> Invite to exclusive LetzRent team chat </li>
              <li>
                LetzRent Premium Apparel (T-shirts, Sweatshirts & additional
                Swag)
              </li>
              <li> Early access to new features & promotions</li>
              <li>
                TNC : Equity benefits with voting rights(open for discussion of
                term sheet). Limited to the first 2 investors
              </li>
            </ul>

            <div className="btn">
              <button> Invest </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* ----------------------------------------------------------------- */}
      <div className="btnn">
        <button onClick={() => setShow("pitch")}>Pitch</button>

        <button onClick={() => setShow("details")}>Details</button>
        <button onClick={() => setShow("comments")}>Comments</button>
      </div>
      {show == "pitch" ? (
        <Pitch/>
      ) : show == "details" ? (
        <Details />
      ) : (
        <div> </div>
      )}
      
    </div>
 
  );
};
export default Dashboard;
