import React from 'react'
import './Footer.scss'
import './Footer_tablet.scss'
import './Footer_mobile.scss'
import TrustRating from '../../assets/images/Trustrating.png'
import Domaining from '../../assets/images/Domaining.png'
import ICANN from '../../assets/images/ICANN.png'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="support">
        <div className="container padding justify-space-between align-center">
          <div className="label">
            Legendary Customer Support
          </div>
          <div className="phones">
            <div className="phones__phone-number">
              (888) 894-9026
            </div>
            <div className="phones__phone-number">
              (425) 366-8810
            </div>
          </div>
          <div className="socials">
            <div className="socials__item">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0ZM23.1889 21.9224V33.3475H18.4617V21.9229H16.1V17.9857H18.4617V15.6219C18.4617 12.4099 19.7952 10.5 23.584 10.5H26.7383V14.4376H24.7667C23.2918 14.4376 23.1942 14.9878 23.1942 16.0147L23.1889 17.9853H26.7606L26.3427 21.9224H23.1889Z" fill="white"/>
              </svg>
            </div>

            <div className="socials__item">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0ZM20.4151 17.7957L20.3711 17.0691C20.2389 15.1857 21.3993 13.4655 23.2354 12.7982C23.9111 12.5609 25.0569 12.5312 25.806 12.7388C26.0998 12.8278 26.658 13.1244 27.0546 13.3913L27.7743 13.8807L28.5676 13.6286C29.0082 13.4951 29.5958 13.2727 29.8602 13.1244C30.1099 12.9909 30.3302 12.9168 30.3302 12.9613C30.3302 13.2134 29.7867 14.0735 29.3314 14.548C28.7144 15.2154 28.8907 15.2747 30.1393 14.8298C30.8884 14.5777 30.9031 14.5777 30.7562 14.8595C30.6681 15.0078 30.2127 15.5268 29.728 16.0013C28.9054 16.817 28.8613 16.9059 28.8613 17.5881C28.8613 18.641 28.3619 20.8358 27.8625 22.037C26.9371 24.291 24.954 26.6193 22.971 27.7908C20.1801 29.4369 16.4638 29.8521 13.335 28.8882C12.2921 28.562 10.5 27.7315 10.5 27.5832C10.5 27.5387 11.0435 27.4794 11.7045 27.4646C13.0853 27.4349 14.466 27.0493 15.6412 26.3672L16.4344 25.8926L15.5237 25.5812C14.231 25.1363 13.0706 24.1131 12.7768 23.1492C12.6887 22.8378 12.718 22.8229 13.5406 22.8229L14.3926 22.8081L13.6728 22.467C12.8209 22.037 12.0424 21.3103 11.6604 20.5688C11.3813 20.035 11.0288 18.6855 11.1316 18.5817C11.161 18.5372 11.4695 18.6262 11.822 18.7448C12.8356 19.1155 12.9678 19.0266 12.3802 18.4037C11.2785 17.2767 10.9407 15.6009 11.4695 14.0142L11.7192 13.3024L12.6887 14.2663C14.6717 16.209 17.0073 17.3657 19.6807 17.7067L20.4151 17.7957Z" fill="white"/>
              </svg>
            </div>

            <div className="socials__item">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0ZM10.0814 17.3931H14.8405V31.6921H10.0814V17.3931ZM15.1539 12.9699C15.123 11.5679 14.1204 10.5 12.4924 10.5C10.8644 10.5 9.8 11.5679 9.8 12.9699C9.8 14.3428 10.8329 15.4414 12.4306 15.4414H12.461C14.1204 15.4414 15.1539 14.3428 15.1539 12.9699ZM26.524 17.0574C29.6557 17.0574 32.0035 19.1015 32.0035 23.4935L32.0033 31.6921H27.2444V24.0422C27.2444 22.1207 26.5557 20.8095 24.8329 20.8095C23.5181 20.8095 22.735 21.6934 22.3911 22.5472C22.2652 22.8531 22.2343 23.2794 22.2343 23.7068V31.6925H17.4747C17.4747 31.6925 17.5374 18.7353 17.4747 17.3935H22.2343V19.4189C22.866 18.4452 23.9972 17.0574 26.524 17.0574Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <nav className="links">
        <div className="linksets container-col padding">
          <div className="linkset">
            <div className="linkset__label">
              MY DOMAINS
            </div>
            <ul className="linkset__list">
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Manage My Domains</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Domain Registration</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">WHOIS</a>
              </li>
            </ul>
          </div>

          <div className="linkset">
            <div className="linkset__label">
              TRANSFERS
            </div>
            <ul className="linkset__list">
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Transfer Into Portfolio</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Transfer To Another Registrar</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Get Transfer Status</a>
              </li>
            </ul>
          </div>

          <div className="policies linkset">
            <ul className="linkset__list">
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Universal TOS</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Refund Policy</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Registrant Rights</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Registration Agreement</a>
              </li>
              <li className="linkset__list-item">
                <a href="#" className="linkset__link">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="copyrights">
        <div className="recommend">
          <img src={TrustRating} alt="TrustRating" className="recommend__image" />
          <img src={Domaining} alt="Domaining" className="recommend__image" />
          <img src={ICANN} alt="ICANN" className="recommend__image" />
        </div>
        <div className="copyrights-text">
          Epik ® is a registered trademark of Epik Inc. Copyright © 2020 by Epik Inc. All rights reserved.
        </div>
        <div className="whois-provider">WHOIS Privacy services provided by Anonymize.com</div>
      </div>

    </footer>
  )
}
