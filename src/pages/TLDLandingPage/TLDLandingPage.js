import React from 'react'
import './TLDLandingPage.scss'

const cards=[]
for (let i=0; i < 10; i++) {
  cards[i] = i
}
export default function TLDLandingPage() {
  return (
    <div className='tld-landing wrapper'>
      <div className="tld-landing__header-and-search container-col padding">
        <h1 className="tld-landing__header">All.Ca Domain Name Extensions</h1>
        <label className="tld-landing__label">
          Need help finding the right domain extension for your idea?
        </label>
        <form action="" className="tld-landing__form">
          <input type="text" className="tld-landing__input" placeholder='Start here by typing a keyword' />
          <button className="tld-landing__button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7812 13.8344L12.6656 10.7188C12.525 10.5781 12.3344 10.5 12.1344 10.5H11.625C12.4875 9.39688 13 8.00937 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.00937 13 9.39688 12.4875 10.5 11.625V12.1344C10.5 12.3344 10.5781 12.525 10.7188 12.6656L13.8344 15.7812C14.1281 16.075 14.6031 16.075 14.8938 15.7812L15.7781 14.8969C16.0719 14.6031 16.0719 14.1281 15.7812 13.8344ZM6.5 10.5C4.29063 10.5 2.5 8.7125 2.5 6.5C2.5 4.29063 4.2875 2.5 6.5 2.5C8.70938 2.5 10.5 4.2875 10.5 6.5C10.5 8.70938 8.7125 10.5 6.5 10.5Z" fill="white"/>
            </svg>
            <span className="tld-landing__button-text">Search Extensions</span>
          </button>
        </form>
      </div>

      <div className="tld-landing__content-block container padding">
        <div className="tlds">
          <div className="tlds__labels">
            <label className="tlds__label tld-label">tld</label>
            <label className="tlds__label registration-label">REGISTRATION</label>
            <label className="tlds__label renew-label">Renew</label>
          </div>
          <div className="tlds__cards">
            {cards.map(card => 
              <div className="tlds__card">
                <span className="tlds__card-name">.com</span>
                <span className="tlds__card-registration">$8.49* /1st yr</span>
                <span className="tlds__card-renew">$8.49 / yr</span>
                <button className="tlds__card-button">Register</button>
              </div>
            )}
          </div>
          <div className="pagintaion">
            <div className="select__wrapper pagintaion__select">
              <svg className='select__arrow' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.706267 2.41386L3.29627 5.00386C3.68627 5.39386 4.31627 5.39386 4.70627 5.00386L7.29627 2.41386C7.92627 1.78386 7.47627 0.703857 6.58627 0.703857H1.40627C0.516267 0.703857 0.0762672 1.78386 0.706267 2.41386Z" fill="#47484B"/>
              </svg>
              <select name="" id="" className="select">
                <option className="select__option">Display: 20 Domains per page</option>
                <option className="select__option">Display: 10 Domains per page</option>
                <option className="select__option">Display: 5 Domains per page</option>
              </select>
            </div>

            <div className="pagintaion__pages">
              <button className="pagintaion__page-button pagintaion__page-button-prev"
              onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
                }}>
                <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="39" height="38" fill="white" fill-opacity="0.01"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 15V23L15 19L22 15Z" fill="white" fill-opacity="0.01"/>
                  <mask id="mask0_2024_661" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="15" y="15" width="7" height="8">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 15V23L15 19L22 15Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_2024_661)">
                  <rect x="8" y="8" width="22" height="22" fill="#9EA0A5"/>
                  </g>
                  <rect x="38" y="4" width="1" height="30" rx="0.5" fill="#EAEDF3"/>
                </svg>
              </button>
              <button className="pagintaion__page-button"
              onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
              }}>3</button>
              <button className="pagintaion__page-button"
              onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
              }}>4</button>
              <button className="pagintaion__page-button"
              onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
              }}><span className="active">5</span></button>
              <button className="pagintaion__page-button"
              onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
              }}>6</button>
              <button className="pagintaion__page-button"
              onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
              }}>7</button>
              <button className="pagintaion__page-button pagintaion__page-button-next"
              onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
              }}>
                <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="39" height="38" fill="white" fill-opacity="0.01"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 15V23L24 19L17 15Z" fill="white" fill-opacity="0.01"/>
                  <mask id="mask0_2024_669" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="17" y="15" width="7" height="8">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 15V23L24 19L17 15Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_2024_669)">
                  <rect x="9" y="8" width="22" height="22" fill="#9EA0A5"/>
                  </g>
                  <rect y="4" width="1" height="30" rx="0.5" fill="#EAEDF3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="popular-domain-names">
          <span className="popular-domain-names__header">
            Popular Domain Name Promos & Offers
          </span>
          
          <div className="popular-domain-names__cards">
            <div className="popular-domain-names__card">
              <div className="popular-domain-names__label">Popular</div>
              <div className="popular-domain-names__name">.com</div>
              <div className="popular-domain-names__price">$8.49</div>
            </div>
            <div className="popular-domain-names__card">
              <div className="popular-domain-names__label">New</div>
              <div className="popular-domain-names__name">.net</div>
              <div className="popular-domain-names__price">$8.49</div>
            </div>
            <div className="popular-domain-names__card">
              <div className="popular-domain-names__name">.org</div>
              <div className="popular-domain-names__price">$8.49</div>
            </div>
            <div className="popular-domain-names__card">
              <div className="popular-domain-names__name">.art</div>
              <div className="popular-domain-names__price">$8.49</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
