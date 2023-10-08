import React, { useRef, useState } from 'react';
import './Newsletter.css';
import News from '../../assets/images/news.svg';
import sendEmail from '../../utils/sendEmail';

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const form = useRef();

  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = form.current.value;
    console.log('Subscribe with email:', email);

    sendEmail(form.current)
      .then((result) => {
        console.log(result.text);
        setSubscribed(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="news-container">
      <div className="card-container">
        <div className="news-detail">
          <div className="inner-container">
            <h1>Hey, wait...</h1>
            <h3>Subscribe to our newsletter!</h3>
            <p>
              You will never miss our podcasts, latest news, etc. Our newsletter
              is once a week, every wednesday.
            </p>
            <form ref={form} onSubmit={handleSubscribe} className="form">
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            <div className="thank">
              {subscribed && <p>Thank you for subscribing!</p>}
            </div>
          </div>
        </div>
        <div className="news-image">
          <img src={News} alt="News" className="news-img" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
