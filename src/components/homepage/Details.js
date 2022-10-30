import React, { useState } from 'react';
import FAQ from './FAQ';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faLinkedin
   
  } from "@fortawesome/free-brands-svg-icons";

function Details () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What does your company do ?',
      answer: 'LetzRent is an online search, compare & booking platform for self-drive car rental that rewards users for renting. We aggregate rental deals from multiple service providers and present them to users with prices, reviews & facts to make an informed decision. Currently running a pilot in Bangalore by aggregating Zoomcar, Avis, Mychoize & Wowcarz.',
      open: true
    },
    {
      question: 'Where do you want to be in 5 years ?',
      answer: 'Uber for Self Drive Car Rental',
      open: false
    },
    {
      question: 'Why did you choose this idea, what/s your biggest Obstacle?',
      answer: 'Customers want low Prices: And to get low prices 85% of the consumers check at least 2 data points (Source: BCG Consumer Trends). In various sectors information-centred buying has been made more efficient by companies like MMT for Travel, Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle products. However, for rental products, there is no one & to fill this need and make the process efficient we launched Letzrent, hoping to have a first-mover advantage and dominate the market.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
   <div className='details'>
    <h3>
Meet our strong and visionary team members
</h3>
<div className='images'>

<div>
<img src='./images/cofounderOne.jpg' width='100%'/>
<span>
          <a href="https://twitter.com/manishpratik">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/manishpratik/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </span>
</div>
<div>
<img src='./images/cofounderTwo.jpg' width='100%'/> 
<span>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/gautam-menon-040379208/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </span>
</div>
</div>


<span > Funds Utilization : Sales & Marketing - 50% | Human Resource-30% | Technology -10% | OPEX-10%</span>
   
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      </div>
  );
}

export default Details;