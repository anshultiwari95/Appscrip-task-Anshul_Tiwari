import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__top}>
        <div className={styles.footer__left}>
          <h4 className={styles.footer__heading}>BE THE FIRST TO KNOW</h4>
          <span className={styles.footer__text}>Sign up for updates from mettā muse.</span>
          <div className={styles.footer__subscribe}>
            <input type="email" placeholder="Enter your e-mail" className={styles.footer__input} />
            <button className={styles.footer__button}>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.footer__right}>
          <div className={styles.footer__contact}>
            <h4 className={styles.footer__heading}>CONTACT US</h4>
            <span className={styles.footer__text}>+44 221 133 5360</span>
            <span className={styles.footer__text}>customercare@mettamuse.com</span>
          </div>

          <div className={styles.footer__currencyBlock}>
            <h4 className={styles.footer__heading}>CURRENCY</h4>
            <div className={styles.footer__currency}>
              <img src="us-flag-icon.svg" alt="Flag" />
              <img src="diamond-icon.svg" alt="Diamond" />
              <h4>USD</h4>
            </div>
            <span className={styles.footer__note}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </span>
          </div>
        </div>
      </section>

      <section className={styles.footer_partition}></section>

      <section className={styles.footer__middle}>
        <div className={styles.footer__column}>
          <h4 className={styles.footer__heading}>mettā muse</h4>
          <ul className={styles.footer__list}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliances Docs</a></li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h4 className={styles.footer__heading}>Quick Links</h4>
          <ul className={styles.footer__list}>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQS</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h4 className={styles.footer__heading}>FOLLOW US</h4>
          <div className={styles.footer__socials}>
            <a href="#"><img src="instagram-icon.svg" alt="Instagram" /></a>
            <a href="#"><img src="linkedin-icon.svg" alt="LinkedIn" /></a>
          </div>

          <div className={styles.footer__payments}>
            <h4 className={styles.footer__heading}>mettā muse ACCEPTS</h4>
            <div className={styles.footer__paymentIcons}>
              <img src="googlepay-icon.svg" alt="Google Pay" />
              <img src="mastercard-icon.svg" alt="Mastercard" />
              <img src="paypal-icon.svg" alt="PayPal" />
              <img src="amex-icon.svg" alt="Amex" />
              <img src="applepay-icon.svg" alt="Apple Pay" />
              <img src="opelpay-icon.svg" alt="Opel Pay" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footer__bottom}>
        <span>Copyright © 2023 mettamuse. All rights reserved.</span>
      </section>
    </footer>
  );
};

export default Footer;
