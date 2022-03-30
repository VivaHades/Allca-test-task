import React from 'react'
import './SearchResults.scss'
import './range-inputs.scss'
import './select.scss'
import './input-number.scss'
import Nouislider from "nouislider-react"
import "nouislider/distribute/nouislider.css"
const cards= [];
for (let i = 0; i < 10; i++){
  cards[i] = i;
}

export default function SearchResults() {
  return (
    <div className='search-results wrapper'>
      <form action="" className="search-results__form">
        <input value='Epik Design' type="text" className="search-results__input" />
        <button className="search-results__button"
        onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
        }}>
          <svg className="search-results__button-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#323232"/>
          </svg>
          <span className="search-results__button-text">SEARCH</span>
        </button>
      </form>

      <div className="search-info container padding justify-space-between">
        <aside className="filters">
          <form className="filters__form" action="">
            <div className="filters__container">
              <div className="filters__block">
                <label className="filters__label">Domain Categories </label>
                <div className="select__wrapper">
                  <svg className='select__arrow' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.706267 2.41386L3.29627 5.00386C3.68627 5.39386 4.31627 5.39386 4.70627 5.00386L7.29627 2.41386C7.92627 1.78386 7.47627 0.703857 6.58627 0.703857H1.40627C0.516267 0.703857 0.0762672 1.78386 0.706267 2.41386Z" fill="#47484B"/>
                  </svg>
                  <select name="" id="" className="select">
                    <option className="select__option">All Categories</option>
                    <option className="select__option">All Categories</option>
                    <option className="select__option">All Categories</option>
                  </select>
                </div>
              </div>
              <div className="filters__block">
                <label className="filters__label">Added on</label>
                <div className="select__wrapper">
                  <svg className='select__arrow' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.706267 2.41386L3.29627 5.00386C3.68627 5.39386 4.31627 5.39386 4.70627 5.00386L7.29627 2.41386C7.92627 1.78386 7.47627 0.703857 6.58627 0.703857H1.40627C0.516267 0.703857 0.0762672 1.78386 0.706267 2.41386Z" fill="#47484B"/>
                  </svg>
                  <select name="" id="" className="select">
                    <option className="select__option">In the last 7 days</option>
                    <option className="select__option">In the last 7 days</option>
                    <option className="select__option">In the last 7 days</option>
                  </select>
                </div>
              </div>

              <div className="filters__block">
                <label className="filters__label">Price</label>
                <div className="price__block">
                  <div className="price__input-block price__input-block1">
                    <span className="price__dollar">$</span>
                    <input className='price__input price-input1' type="number" placeholder='1' name="" id="" />
                  </div>
                  <span className="filters__splitter">to</span>
                  <div className="price__input-block price__input-block2">
                    <span className="price__dollar">$</span>
                    <input className='price__input price-input2' type="number" placeholder='10000' name="" id="" />
                  </div>
                </div>
                  <Nouislider className='filters__range-input' range={{ min: 1, max: 10000 }} start={[1, 10000]} connect/>
              </div>
            </div>

            <div className="filters__container">
              <div className="filters__block">
                <label className="filters__label">Number of Characters </label>
                <div className="from-to__block">
                  <input className='filters__number-input' type="number" value='1' name="" id="" />
                  <span className="filters__splitter">to</span>
                  <input className='filters__number-input' type="number" value='253' name="" id="" />
                </div>
                <Nouislider className='filters__range-input' range={{ min: 1, max: 255 }} start={[1, 255]} connect/>
              </div>
              <div className="filters__block">
                <label className="filters__label">Number of Words</label>
                <div className="from-to__block">
                  <input className='filters__number-input' type="number" value='1' name="" id="" />
                  <span className="filters__splitter">to</span>
                  <input className='filters__number-input' type="number" value='16' name="" id="" />
                </div>
                <Nouislider className='filters__range-input' range={{ min: 1, max: 16 }} start={[1, 16]} connect/>
              </div>
              <div className="filters__block filters__block-spec-chars">
                <label className="filters__label">Special Characters</label>
                <div className="select__wrapper">
                  <svg className='select__arrow' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.706267 2.41386L3.29627 5.00386C3.68627 5.39386 4.31627 5.39386 4.70627 5.00386L7.29627 2.41386C7.92627 1.78386 7.47627 0.703857 6.58627 0.703857H1.40627C0.516267 0.703857 0.0762672 1.78386 0.706267 2.41386Z" fill="#47484B"/>
                  </svg>
                  <select name="" id="" className="select">
                    <option className="select__option">None</option>
                    <option className="select__option">None</option>
                    <option className="select__option">None</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="filters__container">
              <div className="filters__block">
                <label className="filters__label">Top Level TLDs</label>
                <div className="select__wrapper">
                  <svg className='select__arrow' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.706267 2.41386L3.29627 5.00386C3.68627 5.39386 4.31627 5.39386 4.70627 5.00386L7.29627 2.41386C7.92627 1.78386 7.47627 0.703857 6.58627 0.703857H1.40627C0.516267 0.703857 0.0762672 1.78386 0.706267 2.41386Z" fill="#47484B"/>
                  </svg>
                  <select name="" id="" className="select">
                    <option className="select__option">All TLDs</option>
                    <option className="select__option">All TLDs</option>
                    <option className="select__option">All TLDs</option>
                  </select>
                </div>
              </div>
              <div className="filters__block">
                <label className="filters__label">gTLDs</label>
                <div className="select__wrapper">
                  <svg className='select__arrow' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.706267 2.41386L3.29627 5.00386C3.68627 5.39386 4.31627 5.39386 4.70627 5.00386L7.29627 2.41386C7.92627 1.78386 7.47627 0.703857 6.58627 0.703857H1.40627C0.516267 0.703857 0.0762672 1.78386 0.706267 2.41386Z" fill="#47484B"/>
                  </svg>
                  <select name="" id="" className="select">
                    <option className="select__option">All gTLDs</option>
                    <option className="select__option">All gTLDs</option>
                    <option className="select__option">All gTLDs</option>
                  </select>
                </div>
              </div>
              <div className="filters__block filters__block filters__block-cctld">
                <label className="filters__label">CCTLD</label>
                <div className="select__wrapper">
                  <svg className='select__arrow' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.706267 2.41386L3.29627 5.00386C3.68627 5.39386 4.31627 5.39386 4.70627 5.00386L7.29627 2.41386C7.92627 1.78386 7.47627 0.703857 6.58627 0.703857H1.40627C0.516267 0.703857 0.0762672 1.78386 0.706267 2.41386Z" fill="#47484B"/>
                  </svg>
                  <select name="" id="" className="select">
                    <option className="select__option">All ccTLDs</option>
                    <option className="select__option">All ccTLDs</option>
                    <option className="select__option">All ccTLDs</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="reset-button"
            onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
            }}>
              Reset Filter
            </button>
          </form>
        </aside>

        <div className="search-result">
          <div className="search-result__header">
            <h1 className="search-result__header-text">sEARCH RESULTS</h1>
          </div>
        
        <div className="quantity-of-results">
          <div className="quantity-of-results__quantity">
            Displaying <span className="bold">1 to 50</span> of <span className="bold">2,186</span> Domains
          </div>
          <div className="quantity-of-results__share">
            <svg className="quantity-of-results__share-svg" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 10C10.2935 10 9.64416 10.2443 9.13156 10.653L5.92887 8.65128C6.02372 8.22226 6.02372 7.77771 5.92887 7.34869L9.13156 5.347C9.64416 5.75566 10.2935 6 11 6C12.6568 6 14 4.65684 14 3C14 1.34316 12.6568 0 11 0C9.34316 0 8 1.34316 8 3C8 3.22369 8.02469 3.44156 8.07113 3.65128L4.86844 5.65297C4.35584 5.24434 3.7065 5 3 5C1.34316 5 0 6.34316 0 8C0 9.65684 1.34316 11 3 11C3.7065 11 4.35584 10.7557 4.86844 10.347L8.07113 12.3487C8.02379 12.5626 7.99994 12.781 8 13C8 14.6568 9.34316 16 11 16C12.6568 16 14 14.6568 14 13C14 11.3432 12.6568 10 11 10Z" fill="#323232"/>
            </svg>

            <div className="quantity-of-results__share-text">Share Results</div>
          </div>
        </div>

        <div className="result">
          <label className="result__label">Domain Name</label>

          <div className="result__block">
            {cards.map(a =>
              <div className="result__card">
              <span className="result__card-label">epikdesign.co</span>
              <div className="combiner">
                <span className="result__card-price">$2.99</span>
                <button className="result__card-button"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Coming soon...")
                }}>Add to Cart</button>
              </div>
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
        </div>
      </div>
      
      <div className="payment-methods">
        <div className="container-col padding">
          <h1 className="payment-methods__header">
            Easily Pay and Buy with major payment methods
          </h1>
          <div className="methods">
            <div className="methods__method">
              <svg className="methods__svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6 12H15.5V19H20.6C22.4751 19 24 17.4303 24 15.5C24 13.5698 22.4751 12 20.6 12Z" fill="#8990A5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C0 8.97217 8.97217 0 20 0C31.0278 0 40 8.97217 40 20C40 31.0278 31.0278 40 20 40C8.97217 40 0 31.0278 0 20ZM20.8694 29.5652C23.7459 29.5652 26.0868 27.2243 26.0868 24.3478C26.0868 22.5339 25.1581 20.9357 23.7494 20C25.1581 19.0644 26.0868 17.4643 26.0868 15.6522C26.0868 12.7757 23.7459 10.4348 20.8694 10.4348V9.56522C20.8694 9.08522 20.4798 8.69565 19.9998 8.69565C19.5198 8.69565 19.1303 9.08522 19.1303 9.56522V10.4348H17.3912V9.56522C17.3912 9.08522 17.0016 8.69565 16.5216 8.69565C16.0416 8.69565 15.652 9.08522 15.652 9.56522V10.4348H14.7825C14.3025 10.4348 13.9129 10.8243 13.9129 11.3043V28.6957C13.9129 29.1757 14.3025 29.5652 14.7825 29.5652H15.652V30.4348C15.652 30.9148 16.0416 31.3043 16.5216 31.3043C17.0016 31.3043 17.3912 30.9148 17.3912 30.4348V29.5652H19.1303V30.4348C19.1303 30.9148 19.5198 31.3043 19.9998 31.3043C20.4798 31.3043 20.8694 30.9148 20.8694 30.4348V29.5652Z" fill="#8990A5"/>
                <path d="M20.6 20.5H15.5V27.5H20.6C22.4751 27.5 24 25.9303 24 24C24 22.0698 22.4751 20.5 20.6 20.5Z" fill="#8990A5"/>
              </svg>
              <span className="methods__label">Crypto</span>
            </div>

            <div className="methods__method">
              <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.5556 22.8889H46.1111C45.4389 22.8889 44.8889 23.4389 44.8889 24.1111V26.5556C44.8889 27.2278 45.4389 27.7778 46.1111 27.7778H48.5556C49.2278 27.7778 49.7778 27.2278 49.7778 26.5556V24.1111C49.7778 23.4389 49.2278 22.8889 48.5556 22.8889Z" fill="#8990A5"/>
                <path d="M60 5.55556V4.2963C60 0.825778 57.1975 -2 53.75 -2H6.25C2.805 -2 0 0.825778 0 4.2963V5.55556H60Z" fill="#8990A5"/>
                <rect y="8.22223" width="60" height="4.88889" fill="#8990A5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 31.7037V15.3333H60V31.7037C60 35.1767 57.1975 38 53.75 38H6.25C2.805 38 0 35.1767 0 31.7037ZM8.75 30.4444H23.75C24.44 30.4444 25 29.8803 25 29.1852C25 28.4901 24.44 27.9259 23.75 27.9259H8.75C8.06 27.9259 7.5 28.4901 7.5 29.1852C7.5 29.8803 8.06 30.4444 8.75 30.4444ZM23.75 25.4074H8.75C8.06 25.4074 7.5 24.8432 7.5 24.1481C7.5 23.453 8.06 22.8889 8.75 22.8889H23.75C24.44 22.8889 25 23.453 25 24.1481C25 24.8432 24.44 25.4074 23.75 25.4074ZM48.75 30.4444C50.8175 30.4444 52.5 28.7495 52.5 26.6666V24.1481C52.5 22.0653 50.8175 20.3703 48.75 20.3703H46.25C44.1825 20.3703 42.5 22.0653 42.5 24.1481V26.6666C42.5 28.7495 44.1825 30.4444 46.25 30.4444H48.75Z" fill="#8990A5"/>
              </svg>
              <span className="methods__label">Credit Cards</span>
            </div>

            <div className="methods__method">
              <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.37299 29.3305C7.84205 29.9084 8.00495 30.6511 7.82046 31.3635L7.5771 32.3109C7.3043 33.3663 6.32495 34.1052 5.19645 34.1052H2.72945L1.93263 37.1766C1.82272 37.6086 1.42235 37.8947 0.980761 37.8947C0.902256 37.8947 0.823752 37.8852 0.743285 37.8663C0.217305 37.7393 -0.100638 37.2259 0.0288939 36.7181L1.00627 32.9475C1.00824 32.9343 1.01216 32.921 1.01609 32.9078L1.99151 29.1391C2.09945 28.7166 2.49393 28.421 2.94337 28.421H5.43982C6.20131 28.421 6.90589 28.7526 7.37299 29.3305ZM5.19431 32.2105C5.42197 32.2105 5.61627 32.0627 5.67122 31.8543L5.91655 30.905C5.96758 30.7099 5.88122 30.5659 5.82823 30.4977C5.77328 30.4295 5.64964 30.3158 5.4416 30.3158H3.71057L3.21992 32.2105H5.19431Z" fill="#8990A5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4272 33.0465C12.651 32.7281 13.0536 32.5602 13.4661 32.6606C13.9943 32.7899 14.3125 33.3148 14.1809 33.83L13.199 37.6897C13.089 38.1297 12.6884 38.4211 12.2465 38.4211C12.1679 38.4211 12.0894 38.4114 12.0088 38.3921C11.9361 38.3738 11.8735 38.3383 11.8111 38.303C11.8011 38.2973 11.7911 38.2916 11.781 38.286C11.5218 38.369 11.2488 38.4211 10.964 38.4211H9.56575C8.72128 38.4211 7.94161 38.0467 7.42117 37.3905C6.90074 36.7383 6.72006 35.9007 6.92431 35.096L7.05393 34.5846C7.34655 33.4364 8.3933 32.6316 9.6011 32.6316H10.9994C11.5179 32.6316 12.0029 32.7879 12.4272 33.0465ZM8.96876 36.2056C9.11408 36.387 9.33208 36.4913 9.56578 36.4913H10.9641C11.2685 36.4913 11.5316 36.2906 11.6043 36.0011L11.7339 35.4877C11.7928 35.2639 11.7418 35.0304 11.5965 34.849C11.4511 34.6676 11.2331 34.5634 10.9994 34.5634H9.60113C9.29673 34.5634 9.03356 34.7641 8.9609 35.0535L8.83128 35.5669C8.77237 35.7907 8.82343 36.0242 8.96876 36.2056Z" fill="#8990A5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.0046 29.3305C30.4736 29.9084 30.6365 30.6511 30.4521 31.3635L30.2067 32.3109C29.9339 33.3663 28.9546 34.1052 27.8261 34.1052H25.3591L24.5642 37.1766C24.4543 37.6086 24.0539 37.8947 23.6124 37.8947C23.5338 37.8947 23.4553 37.8852 23.3749 37.8663C22.8489 37.7393 22.531 37.2259 22.6605 36.7181L23.6379 32.9475C23.6398 32.9343 23.6438 32.921 23.6477 32.9078L24.6231 29.1391C24.731 28.7166 25.1255 28.421 25.575 28.421H28.0714C28.8309 28.421 29.5355 28.7526 30.0046 29.3305ZM27.8277 32.2105C28.0534 32.2105 28.2496 32.0646 28.3026 31.8543L28.5479 30.905C28.599 30.7099 28.5126 30.5659 28.4596 30.4977C28.4047 30.4295 28.281 30.3158 28.073 30.3158H26.342L25.8513 32.2105H27.8277Z" fill="#8990A5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.583 33.0465C35.8069 32.7281 36.2095 32.5602 36.6239 32.6606C37.1522 32.7899 37.4703 33.3148 37.3388 33.83L36.3568 37.6897C36.2468 38.1297 35.8462 38.4211 35.4043 38.4211C35.3258 38.4211 35.2472 38.4114 35.1667 38.3902C35.0939 38.3719 35.0314 38.3364 34.969 38.301C34.9589 38.2953 34.9489 38.2897 34.9389 38.284C34.6796 38.367 34.4067 38.4191 34.1219 38.4191H32.7236C31.8791 38.4191 31.0994 38.0428 30.579 37.3905C30.0586 36.7383 29.8779 35.9007 30.0821 35.096L30.2118 34.5846C30.5044 33.4364 31.5511 32.6316 32.7589 32.6316H34.1572C34.6737 32.6316 35.1588 32.7879 35.583 33.0465ZM32.1267 36.2056C32.272 36.387 32.49 36.4913 32.7237 36.4913H34.122C34.4264 36.4913 34.6896 36.2906 34.7622 36.0011L34.8919 35.4877C34.9508 35.2639 34.8997 35.0304 34.7544 34.849C34.6091 34.6676 34.3911 34.5634 34.1574 34.5634H32.7591C32.4547 34.5634 32.1915 34.7641 32.1188 35.0535L31.9892 35.5669C31.9303 35.7907 31.9814 36.0242 32.1267 36.2056Z" fill="#8990A5"/>
                <path d="M20.3773 32.4598L18.5006 34.7357L17.054 32.5447C16.751 32.0907 16.1431 31.9703 15.6993 32.2704C15.2517 32.5724 15.1285 33.1843 15.4276 33.6382L17.1948 36.3148L15.4901 38.3815C15.1441 38.7999 15.2008 39.4237 15.6133 39.773C15.7971 39.925 16.0199 40 16.2408 40C16.5203 40 16.7979 39.8796 16.9915 39.6447L21.8786 33.7231C22.2246 33.3047 22.1679 32.6809 21.7554 32.3315C21.339 31.9881 20.7233 32.0394 20.3773 32.4598Z" fill="#8990A5"/>
                <path d="M41.4069 28.4502C40.9077 28.3213 40.4121 28.632 40.2905 29.1398L38.4483 36.7182C38.3267 37.2259 38.6251 37.7393 39.1188 37.8663C39.1944 37.8852 39.2681 37.8947 39.3418 37.8947C39.7563 37.8947 40.1321 37.6086 40.2353 37.1767L42.0775 29.5983C42.201 29.0924 41.9025 28.5771 41.4069 28.4502Z" fill="#8990A5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.9908 11.592L32.2879 14.4334C31.5964 17.225 29.1229 19.1729 26.2713 19.1729H22.5629L20.8436 26.1155C20.7391 26.543 20.3573 26.8421 19.9222 26.8421H15.1728C14.8802 26.8421 14.6029 26.706 14.4224 26.474C14.2419 26.242 14.1792 25.9371 14.2495 25.6515L14.9049 23.0075H10.4233C10.1422 23.0075 9.87241 22.8829 9.69383 22.6643C9.51525 22.4458 9.43926 22.1582 9.48865 21.8782L13.2882 0.788007C13.3718 0.331692 13.7651 0 14.2229 0H24.9756C26.3701 0 27.6923 0.607782 28.6061 1.67188C29.5199 2.73598 29.9303 4.14327 29.7327 5.53523L29.6966 5.78447C30.6484 5.865 31.5185 6.33474 32.1625 7.16684C33.0744 8.34598 33.3841 9.99868 32.9908 11.592ZM20.9009 17.9823C21.0054 17.5547 21.3873 17.2556 21.8223 17.2556V17.2576H26.2735C28.2493 17.2576 29.9648 15.9059 30.4435 13.9713L31.1464 11.1299C31.3972 10.1195 31.211 9.05538 30.6658 8.3479C30.4283 8.04113 30.0218 7.67493 29.4309 7.67109L29.2676 8.82339C28.7432 12.5372 25.5421 15.3383 21.8223 15.3383H18.7656L17.0463 22.2809L16.3909 24.9248H19.1797L20.9009 17.9823Z" fill="#8990A5"/>
              </svg>
              <span className="methods__label">PayPal</span>
            </div>

            <div className="methods__method">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.2426 23.9403C24.2426 22.297 22.6789 20.9225 20.6062 20.6061V27.2727C22.6789 26.9563 24.2426 25.5835 24.2426 23.9403Z" fill="#8990A5"/>
                <path d="M15.1516 15.4545C15.1516 17.0974 16.7152 18.4716 18.788 18.7879V12.1212C16.7171 12.4375 15.1516 13.8117 15.1516 15.4545Z" fill="#8990A5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C0 8.97217 8.97217 0 20 0C31.0296 0 40 8.97217 40 20C40 31.0278 31.0278 40 20 40C8.97217 40 0 31.0278 0 20ZM20.8694 29.4904C23.812 29.1252 26.0868 26.9704 26.0868 24.3478C26.0868 21.7252 23.812 19.5704 20.8694 19.2052V12.2435C22.852 12.567 24.3477 13.9722 24.3477 15.6522C24.3477 16.1322 24.7372 16.5217 25.2172 16.5217C25.6972 16.5217 26.0868 16.1322 26.0868 15.6522C26.0868 13.0296 23.812 10.8748 20.8694 10.5096V9.56522C20.8694 9.08522 20.4798 8.69565 19.9998 8.69565C19.5198 8.69565 19.1303 9.08522 19.1303 9.56522V10.5078C16.1877 10.873 13.9129 13.0278 13.9129 15.6504C13.9129 18.273 16.1877 20.4278 19.1303 20.793V27.7548C17.1477 27.4313 15.652 26.0261 15.652 24.3461C15.652 23.8661 15.2625 23.4765 14.7825 23.4765C14.3025 23.4765 13.9129 23.8661 13.9129 24.3461C13.9129 26.9687 16.1877 29.1235 19.1303 29.4887V30.4348C19.1303 30.9148 19.5198 31.3043 19.9998 31.3043C20.4798 31.3043 20.8694 30.9148 20.8694 30.4348V29.4904Z" fill="#8990A5"/>
              </svg>
              <span className="methods__label">Wire Transfer</span>
            </div>

            <div className="methods__method">
              <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.71463 0L10.9765 10.4857L0 20.9546H18.9773L20.7611 16.7588H10.2902L16.6261 10.4579L12.9252 4.19453H30.1915L15.0339 40H20.2275L37.1762 0H4.71463Z" fill="#8990A5"/>
              </svg>
              <span className="methods__label">TransferWise</span>
            </div>

            <div className="methods__method">
              <svg width="105" height="38" viewBox="0 0 105 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.8181 -2H55.909L52.6363 22.3636H52.5453L48.9544 -2H33.0908L29.4999 22.3636H29.409L26.1363 -2H12.3635L20.7272 36.7273H37.3635L40.9544 11.6364H41.0453L44.6363 36.7273H61.2726L62.0908 32.8636C59.9544 30.5909 58.8181 27.5909 58.8181 23.7273V-2Z" fill="#8990A5"/>
                <path d="M58.8181 -2V23.7273C58.8181 27.5455 59.9544 30.5909 62.0908 32.8636L69.6362 -2H58.8181V-2Z" fill="#8990A5"/>
                <path d="M80.3181 -2V23.0909C80.3181 26.1364 78.8635 27.3182 77.2726 27.3182C75.6817 27.3182 74.2272 26.1364 74.2272 23.0909V-2H70.9544L63.2272 33.8182C66.3635 36.4091 71.0908 37.7727 77.2726 37.7727C88.9544 37.7727 95.6817 33.0909 95.6817 23.7727V-1.95455H80.3181V-2Z" fill="#8990A5"/>
                <path d="M2.27261 -2H-0.00012207L8.22715 36.7273H10.4999L2.27261 -2Z" fill="#8990A5"/>
                <path d="M14.4544 36.7273H16.7272L8.4999 -2H6.22717L14.4544 36.7273Z" fill="#8990A5"/>
                <path d="M100.273 -0.136391C100.273 -0.409119 100.136 -0.500028 99.8635 -0.500028C99.6817 -0.500028 99.4544 -0.409119 99.4544 -0.181846C99.4544 0.0908813 99.6817 0.136336 99.9089 0.18179C100.273 0.2727 100.863 0.409063 100.863 0.909063C100.863 1.54543 100.318 1.7727 99.7726 1.7727C99.1817 1.7727 98.7726 1.54543 98.7726 0.909063H99.318C99.318 1.18179 99.4544 1.36361 99.7271 1.36361C99.9544 1.36361 100.227 1.31815 100.227 1.04543C100.227 0.727245 99.8635 0.727245 99.6362 0.68179C99.2726 0.590881 98.7726 0.454518 98.7726 -0.0454823C98.7726 -0.636391 99.318 -0.909119 99.8635 -0.909119C100.363 -0.909119 100.727 -0.636391 100.727 -0.136391H100.273Z" fill="#8990A5"/>
                <path d="M102.909 1.68181H102.454L101.773 -0.500011V1.68181H101.227V-0.863647H102.136L102.682 0.999989L103.273 -0.863647H104.136V1.68181H103.636V-0.500011L102.909 1.68181Z" fill="#8990A5"/>
              </svg>

              <span className="methods__label">Western Union</span>
            </div>

            <div className="methods__method">
              <svg width="114" height="40" viewBox="0 0 114 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.46773 0C2.89253 0 0 2.86813 0 6.40907V33.5917C0 37.1299 2.89253 39.9996 6.46773 39.9996H33.9091C37.4815 39.9996 40.3752 37.13 40.3752 33.5917V33.3136C40.255 33.2639 29.8821 28.9776 24.6099 26.466C21.0529 30.8025 16.4651 33.4335 11.7016 33.4335C3.64667 33.4335 0.911333 26.4495 4.72533 21.852C5.55696 20.8499 6.9716 19.8924 9.1672 19.3564C12.6019 18.5204 18.068 19.8784 23.1912 21.5533C24.1127 19.8715 24.888 18.0192 25.4655 16.0471H9.67747V14.4629H17.8184V11.6225H7.95827V10.0371H17.8184V5.98521C17.8184 5.98521 17.8184 5.30267 18.5166 5.30267H22.4963V10.0371H32.2439V11.6225H22.4963V14.4629H30.4528C29.6915 17.5531 28.5355 20.3975 27.0843 22.8944C29.4991 23.7597 31.6667 24.5805 33.2822 25.1165C38.6706 26.9028 40.1807 27.1211 40.3756 27.1439V6.4092C40.3756 2.86827 37.4818 0.000133333 33.9095 0.000133333H6.46817L6.46773 0ZM10.8953 21.672C10.5496 21.676 10.2023 21.6946 9.85236 21.7288C8.84373 21.8293 6.94996 22.2703 5.91463 23.1774C2.81143 25.8586 4.66876 30.7602 10.9496 30.7602C14.6006 30.7602 18.2486 28.4477 21.1144 24.7449C17.4198 22.9589 14.2376 21.6336 10.8953 21.672L10.8953 21.672Z" fill="#8990A5"/>
                <path d="M110.597 27.8067L108.795 31.6952L106.966 27.8067H105.179L107.962 33.1829V36.9332H109.601V33.1829L109.611 33.162L112.382 27.8067L110.597 27.8067ZM97.4013 30.1592L98.6726 33.9444H96.085L97.4013 30.1592ZM99.0631 35.0945L99.6756 36.9327H101.394L98.011 27.806H96.6975L93.326 36.9327H95.0455L95.6847 35.0945H99.0631ZM86.2413 32.1696H84.4165V29.0473H86.2413C87.1586 29.0473 87.7065 29.8443 87.7065 30.6147C87.7065 31.3684 87.1937 32.1695 86.2413 32.1695V32.1696ZM86.334 27.8064H82.7644V36.9331H84.4164V33.4243H86.3339C88.1151 33.4243 89.3597 32.2686 89.3597 30.6147C89.3597 28.9607 88.1151 27.8065 86.3339 27.8065L86.334 27.8064ZM74.4131 36.9332H76.0665V27.8065H74.4131V36.9332ZM62.7913 27.8067V36.9333H68.3528V35.6898H64.4433V27.8067L62.7913 27.8067ZM53.3798 30.1592L54.6497 33.9444H52.0635L53.3798 30.1592ZM55.0416 35.0945L55.6541 36.9327H57.3708L53.9881 27.806H52.676L49.3046 36.9327H51.0226L51.6617 35.0945H55.0416ZM66.6723 9.9652H59.5852V7.44174H67.8032V5.87014H59.5852V2.67254H55.9216C55.5199 2.67254 55.1954 3.00751 55.1954 3.41924V5.87018H47.035V7.44178H55.1954V9.96524H48.3078V11.5354H62.0264C62.0264 11.5354 61.2664 14.4846 57.5031 17.6542C54.1316 15.1182 53.005 13.0986 53.005 13.0986H49.3244C50.8135 15.6626 52.9291 17.7156 55.2076 19.3444C53.1146 20.6955 50.4004 21.9978 46.8914 23.0403V24.9218C46.8914 24.9218 52.3054 23.9071 57.5381 20.8435C62.7793 23.8834 68.0431 24.9218 68.0431 24.9218V23.1408C64.6744 21.9224 62.0053 20.5824 59.9095 19.29C62.9452 17.0555 65.6059 14.0226 66.672 9.96524L66.6723 9.9652ZM89.6933 2.98738H86.0044V6.81724H76.9113V8.35951H86.0044V22.1288C85.9721 22.4443 85.722 22.6899 85.4088 22.7067H83.5334V24.302H88.3153C89.0725 24.2713 89.6765 23.6474 89.6934 22.8741V8.35947H91.1909V6.8172H89.6934L89.6933 2.98738ZM81.9136 10.9576C81.7787 10.6841 81.5034 10.4957 81.1831 10.4929H78.1095L80.5047 17.9851H84.1403L81.9136 10.9576ZM72.8347 2.80604L68.6035 12.7506H71.8499V24.5835H75.3997V8.88751H74.113L76.7863 2.80631L72.8347 2.80604ZM113.999 24.0407L112.702 19.6888C112.615 19.4111 112.362 19.2101 112.061 19.2101H108.624L109.621 22.5529H105.58V16.0768H113.515V14.5358H105.58V11.4876H113.515V9.94664H93.7127V11.4876H101.647V14.5358H93.7127V16.0768H101.647V22.5529H93.7127V24.0938H113.999L113.983 24.0408L113.999 24.0407ZM97.8387 6.27004H109.396V8.54364H113.524V5.84991C113.523 5.84433 113.523 5.84153 113.523 5.83456C113.523 5.22881 113.045 4.73892 112.454 4.72914H105.773V2.60901H101.453V4.72914H93.7114V8.54368H97.8386L97.8387 6.27004Z" fill="#8990A5"/>
              </svg>
              <span className="methods__label">AliPay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
