import styles from './Header.module.css';

export default function Header() {
  return (

    <header className={styles.headercontainer}>

      <section className={styles.header__highlights}>

        <div className={styles['highlight-card']}>
          <img src="fast-delivery-icon.svg" alt="Free Shipping" className={styles['highlight-card__icon']} />
          <p className={styles['highlight-card__text']}>Lorem ipsum dolor</p>
        </div>

        <div className={styles['highlight-card']}>
          <img src="fast-delivery-icon.svg" alt="Support" className={styles['highlight-card__icon']} />
          <p className={styles['highlight-card__text']}>Lorem ipsum dolor</p>
        </div>

        <div className={styles['highlight-card']}>
          <img src="fast-delivery-icon.svg" alt="Quality Guarantee" className={styles['highlight-card__icon']} />
          <p className={styles['highlight-card__text']}>Lorem ipsum dolor</p>
        </div>

      </section>


      <section className={styles.header__main}>
        
        <div className={styles.header__topRow}>
             <div className={styles['header__logo-container']}>
                <img src="brand-main-logo.svg" alt="FakeStore Logo" className={styles.header__logo} />
              </div>

        <div className={styles['header__brand-name']}>
          <h3 className={styles.header__title}>LOGO</h3>
        </div>

        <div className={styles.header__icons}>
          <img src="search-icon.svg" alt="Search" className={styles.header__icon} />
          <img src="shopping-bag-icon.svg" alt="Wishlist" className={styles.header__icon} />
          <img src="wishlist-icon.svg" alt="Cart" className={styles.header__icon} />
          <img src="user-profile-icon.svg" alt="Profile" className={styles.header__icon} />

         <div className={styles.header_lang}>
          <span className={styles.header_language}>ENG</span>
          <img src="dropdown-icon.svg" alt="Down" className={styles.header__icon} />
          </div>
          
        </div>
        </div>

       

        <div className={styles.header__nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>Shop</li>
            <li className={styles.nav__item}>Skills</li>
            <li className={styles.nav__item}>Stories</li>
            <li className={styles.nav__item}>About</li>
            <li className={styles.nav__item}>Contact Us</li>
          </ul>
        </div>
      </section>
    </header>
  );
}
