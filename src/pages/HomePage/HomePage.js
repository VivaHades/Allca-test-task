import React from "react"
import "./HomePage.scss"
import "./HomePage_tablet.scss"
import "./HomePage_mobile.scss"
import DomainCard from "../../components/DomainCard/DomainCard"
import Scrollable from "../../components/Scrollable/Scrollable"

let domainCards = [
  {
    label: "POPULAR",
    domainName: ".com",
    price: "$8.49",
  },
  {
    label: "NEW",
    domainName: ".net",
    price: "$8.49",
  },
  {
    label: "ENDING SOON",
    domainName: ".xyz",
    price: "$8.49",
  },
  {
    label: "POPULAR",
    domainName: ".org",
    price: "$8.49",
  },
  {
    label: "POPULAR",
    domainName: ".art",
    price: "$8.49",
  },
  {
    label: "POPULAR",
    domainName: ".info",
    price: "$8.49",
  },
  {
    label: "POPULAR",
    domainName: ".fund",
    price: "$8.49",
  },
  {
    label: "POPULAR",
    domainName: ".zone",
    price: "$8.49",
  },
  {
    label: "POPULAR",
    domainName: ".today",
    price: "$8.49",
  },
  {
    label: "POPULAR",
    domainName: ".rocks",
    price: "$8.49",
  },
  {
    label: "POPULAR",
    domainName: ".expert",
    price: "$8.49",
  },
  {
    label: "POPULAR",
    domainName: ".city",
    price: "$8.49",
  },
]

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="container-1440">
        <div className="container-with-bg-img padding">
          <div className="left-col">
            <h1 className="home-page__header">
              Choose to be <br /> Canadian
            </h1>
            <div className="search-form-label">Register .CA</div>
            <form className="search-form" action="">
              <input
                className="search-form__input"
                type="text"
                placeholder="Start here by typing a domain name or a keyword"
              />
              <button className="search-form__button">
                <svg
                  className="search-form__button-svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7812 13.8344L12.6656 10.7188C12.525 10.5781 12.3344 10.5 12.1344 10.5H11.625C12.4875 9.39688 13 8.00937 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.00937 13 9.39688 12.4875 10.5 11.625V12.1344C10.5 12.3344 10.5781 12.525 10.7188 12.6656L13.8344 15.7812C14.1281 16.075 14.6031 16.075 14.8938 15.7812L15.7781 14.8969C16.0719 14.6031 16.0719 14.1281 15.7812 13.8344ZM6.5 10.5C4.29063 10.5 2.5 8.7125 2.5 6.5C2.5 4.29063 4.2875 2.5 6.5 2.5C8.70938 2.5 10.5 4.2875 10.5 6.5C10.5 8.70938 8.7125 10.5 6.5 10.5Z"
                    fill="white"
                  />
                </svg>
                <span className="search-form__button-text">Search Domains</span>
              </button>
            </form>
            <p className="home-page__intoduction">
              We are the Canadian Internet Registration Authority. <br />
              We manage .CA domains on behalf of all Canadians and work every
              day to build a better online Canada.
            </p>
          </div>
          <div className="right-col bg-img1"></div>
        </div>
      </div>

      <div className="popular-domains">
        <div className="container-col center-col padding">
          <h2 className="popular-domains__header">
            Popular Domain Name Promos & Offers
          </h2>
          <p className="popular-domains__p">
            Register cheap domains at the best prices you can find on the
            internet
          </p>
          <div className="popular-domains__cards">
            <div className="container allow-wrap justify-space-between">
              {domainCards.map((card) => (
                <DomainCard
                  label={card.label}
                  domainName={card.domainName}
                  price={card.price}
                />
              ))}
            </div>
          </div>
          <a href="#" className="view-all-link">
            <span className="view-all-link__text">
              View All Domain Extensions
            </span>
            <svg
              className="view-all-link__svg"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.86865 5.26567L1.28115 9.89067C1.13428 10.0375 0.896777 10.0375 0.749902 9.89067L0.131152 9.27192C-0.0157227 9.12504 -0.0157227 8.88754 0.131152 8.74067L3.83428 5.00004L0.131152 1.25942C-0.0157227 1.11255 -0.0157227 0.875048 0.131152 0.728173L0.749902 0.109424C0.896777 -0.0374511 1.13428 -0.0374511 1.28115 0.109424L5.86865 4.73442C6.01553 4.88129 6.01553 5.11879 5.86865 5.26567Z"
                fill="#0088CC"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="container-col center-col padding">
        <svg
          className="we-are__svg"
          width="60"
          height="64"
          viewBox="0 0 60 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5708 64L29.2855 50.2948C29.2959 50.0694 29.2556 49.8445 29.1676 49.6368C29.0796 49.429 28.9461 49.2437 28.7769 49.0943C28.6078 48.945 28.4073 48.8355 28.1902 48.7739C27.9732 48.7123 27.7451 48.7002 27.5227 48.7385L13.881 51.1365L15.7232 46.0546C15.7979 45.8524 15.8075 45.6318 15.7505 45.4239C15.6936 45.216 15.573 45.0312 15.4056 44.8953L0.46167 32.794L3.82842 31.2218C4.0558 31.1144 4.23614 30.9276 4.33556 30.6966C4.43498 30.4656 4.44665 30.2062 4.36837 29.9672L1.41452 20.8834L10.022 22.7097C10.2552 22.7583 10.498 22.7248 10.7093 22.6148C10.9206 22.5048 11.0873 22.3251 11.1813 22.1062L12.8488 18.1836L19.5664 25.3935C19.72 25.5556 19.922 25.6634 20.142 25.7009C20.3621 25.7384 20.5884 25.7036 20.787 25.6016C20.9856 25.4996 21.1458 25.336 21.2436 25.1353C21.3413 24.9346 21.3713 24.7076 21.3292 24.4883L18.0895 7.78164L23.2825 10.7831C23.4044 10.8546 23.5397 10.9002 23.68 10.9173C23.8203 10.9343 23.9626 10.9224 24.0981 10.8822C24.2336 10.842 24.3594 10.7744 24.4677 10.6836C24.576 10.5928 24.6645 10.4807 24.7277 10.3543L30.0001 0L35.2726 10.3543C35.3358 10.4807 35.4243 10.5928 35.5326 10.6836C35.6409 10.7744 35.7667 10.842 35.9022 10.8822C36.0377 10.9224 36.1799 10.9343 36.3202 10.9173C36.4605 10.9002 36.5958 10.8546 36.7177 10.7831L41.9108 7.78164L38.6711 24.4883C38.6289 24.7076 38.659 24.9346 38.7567 25.1353C38.8545 25.336 39.0146 25.4996 39.2132 25.6016C39.4118 25.7036 39.6381 25.7384 39.8582 25.7009C40.0783 25.6634 40.2803 25.5556 40.4339 25.3935L47.1515 18.1836L48.819 22.1062C48.9129 22.3251 49.0797 22.5048 49.291 22.6148C49.5023 22.7248 49.7451 22.7583 49.9783 22.7097L58.5857 20.8834L55.6319 29.9672C55.5536 30.2062 55.5653 30.4656 55.6647 30.6966C55.7641 30.9276 55.9445 31.1144 56.1718 31.2218L59.5386 32.794L44.5947 44.8953C44.4273 45.0312 44.3067 45.216 44.2497 45.4239C44.1927 45.6318 44.2023 45.8524 44.2771 46.0546L46.1192 51.1365L32.4775 48.7385C32.2552 48.7002 32.0271 48.7123 31.81 48.7739C31.593 48.8355 31.3925 48.945 31.2233 49.0943C31.0542 49.2437 30.9207 49.429 30.8327 49.6368C30.7447 49.8445 30.7044 50.0694 30.7148 50.2948L31.4294 64H28.5708Z"
            fill="#CC0000"
          />
        </svg>
        <h2 className="we-are__header">We are Canada’s internet. </h2>
        <p className="we-are__p">
          We are the Canadian Internet Registration Authority. We manage .CA
          domains on behalf of all Canadians and work every day to build a
          better online Canada.
        </p>

        <div className="trust-and-privacy container justify-space-between">
          <div className="trust-and-privacy__block">
            <span className="trust-and-privacy__label">
              Trust the experts in domain registration!
            </span>
            <p className="trust-and-privacy__text">
              Among the first Dot-Ca registrars certified in 2000 and ICANN
              accredited since 2005, our secure and robust system will protect
              one of your most valuable assets: Your Domain Name.
            </p>
          </div>

          <div className="trust-and-privacy__block">
            <span className="trust-and-privacy__label">
              Privacy by default!
            </span>
            <p className="trust-and-privacy__text">
              Whois privacy can protect you against identity theft, spammers,
              hackers and other threats on the web. Every domain registered with
              us gets the Whois privacy service at no extra charge!
            </p>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container-col padding center-col">
          <div className="features__label">FEATURES</div>
          <div className="features__why">Why Register with All.CA</div>

          <div className="reasons">
            <div className="container justify-space-between allow-wrap">
              <div className="reason-card">
                <div className="reason-card__svg-block whois-bg">
                  <svg
                    className="reason-card__svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M35.625 21.375H28.3805L33.5031 16.2524C34.4308 15.3247 34.4308 13.821 33.5031 12.894L25.106 4.49691C24.6421 4.03305 24.0343 3.80148 23.4264 3.80148C22.8186 3.80148 22.2107 4.03305 21.7468 4.49691L16.625 9.61949V2.375C16.625 1.06355 15.5614 0 14.25 0H2.375C1.06355 0 0 1.06355 0 2.375V29.6875C0 34.2787 3.72133 38 8.3125 38H35.625C36.9364 38 38 36.9364 38 35.625V23.75C38 22.4386 36.9364 21.375 35.625 21.375ZM8.3125 31.4688C9.2959 31.4688 10.0938 30.6709 10.0938 29.6875C10.0938 28.7034 9.2959 27.9062 8.3125 27.9062C7.3291 27.9062 6.53125 28.7034 6.53125 29.6875C6.53125 30.6709 7.3291 31.4688 8.3125 31.4688ZM11.6323 33.0756C12.5125 32.2132 13.0625 31.0145 13.0625 29.6875V22.5618H3.5625V29.6868C3.5625 32.3059 5.69332 34.4368 8.3125 34.4368H8.31398C8.72812 34.4368 9.12297 34.367 9.50594 34.2668C9.86961 34.1733 10.2147 34.0271 10.5465 33.8534C10.5643 33.8439 10.5822 33.8345 10.6002 33.8251L10.6003 33.825L10.6004 33.825C10.6481 33.7999 10.6961 33.7748 10.7424 33.7473C11.0608 33.5602 11.3614 33.3405 11.6323 33.0756ZM13.0625 19H3.5625V13.0625H13.0625V19ZM3.5625 9.5H13.0625V3.5625H3.5625V9.5ZM16.625 14.6575L23.4271 7.85531L30.1447 14.5729L16.625 28.0925V14.6575ZM15.318 34.4375H34.4375V24.9375H24.818L15.318 34.4375Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="reason-card__label">WHOIS</div>
                <p className="reason-card__text">
                  Life isn't about finding yourself. Life is about creating
                  yourself.
                </p>
              </div>

              <div className="reason-card">
                <div className="reason-card__svg-block maas-marketing-bg">
                  <svg
                    className="reason-card__svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.182 0C21.2075 0 21.2337 0.00075 21.26 0.003C30.2193 0.621 37.3786 7.7805 37.9974 16.74C38.0439 17.4233 37.4679 18 36.7824 18H20V1.21725C20 0.558 20.5325 0 21.182 0ZM33.812 21.5812H16.419V4.18817C16.419 3.54094 15.8928 3 15.2653 3C15.214 3 15.1627 3.00366 15.1107 3.01099C6.38301 4.24387 -0.290074 11.864 0.00971627 20.9999C0.308041 30.0911 7.90982 37.6921 17.0003 37.9905C17.1975 37.9971 17.3954 38 17.5918 38C26.4638 38 33.7827 31.4281 34.9892 22.8888C35.0867 22.1961 34.5113 21.5812 33.812 21.5812ZM18.4216 35C18.2601 35 18.0963 34.997 17.9333 34.9917C10.4989 34.7477 4.252 28.502 4.00789 21.0691C3.79833 14.6657 7.78293 9.04334 13.6145 7V25.3878H32C29.9998 31.0245 24.5851 35 18.4216 35Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="reason-card__label">Maas Marketing</div>
                <p className="reason-card__text">
                  Better a diamond with a flaw than a pebble without one.
                </p>
              </div>

              <div className="reason-card">
                <div className="reason-card__svg-block clean-code-bg">
                  <svg
                    className="reason-card__svg"
                    width="43"
                    height="38"
                    viewBox="0 0 43 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.4203 37.9771L14.4449 37.1385C14.1228 37.0494 13.9311 36.7154 14.0231 36.4037L24.8205 0.430538C24.9125 0.118825 25.2576 -0.0667188 25.5797 0.0223421L28.5551 0.860999C28.8772 0.950059 29.0689 1.28404 28.9769 1.59575L18.1795 37.5689C18.0875 37.8881 17.75 38.0662 17.4203 37.9771ZM11.7269 28.8155L13.8303 26.7007C14.07 26.4601 14.0468 26.0808 13.7916 25.8621L5.58702 19L13.7916 12.1379C14.0546 11.9192 14.07 11.5399 13.8303 11.2993L11.7269 9.18453C11.495 8.95117 11.1006 8.93659 10.8531 9.15536L0.197189 18.577C-0.0657297 18.8104 -0.0657297 19.1969 0.197189 19.4302L10.8531 28.8446C11.1006 29.0634 11.4872 29.0488 11.7269 28.8155ZM42.8027 19.4315L32.1486 28.8447C31.901 29.0634 31.5142 29.0488 31.2743 28.8155L29.1698 26.701C28.9299 26.4604 28.9454 26.0812 29.2085 25.8625L37.4176 19.0013L29.2085 12.1401C28.9532 11.9214 28.9299 11.5422 29.1698 11.3016L31.2743 9.18711C31.5064 8.9465 31.901 8.93921 32.1486 9.15795L42.8027 18.5784C43.0658 18.8117 43.0658 19.1982 42.8027 19.4315Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="reason-card__label">Clean Code</div>
                <p className="reason-card__text">
                  Life isn't about finding yourself. Life is about creating
                  yourself.
                </p>
              </div>

              <div className="reason-card">
                <div className="reason-card__svg-block global-reach-bg">
                  <svg
                    className="reason-card__svg"
                    width="34"
                    height="38"
                    viewBox="0 0 34 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.413 34.4375H25.8371C27.3133 34.4375 28.5097 35.6339 28.509 37.1094C28.509 37.6014 28.1104 38 27.6183 38H5.64217C5.1501 38 4.75154 37.6014 4.75154 37.1094C4.75154 35.6339 5.94795 34.4375 7.42416 34.4375H14.849V32.0298C11.3206 31.9074 7.82123 30.7511 4.85025 28.5453L2.86787 30.5269C2.40326 30.9908 1.65143 30.9908 1.18756 30.5269L0.348145 29.6882C-0.115723 29.2244 -0.115723 28.4725 0.348145 28.0087L4.73002 23.6275C4.75957 23.6613 4.78904 23.6952 4.81852 23.729C4.99483 23.9315 5.17107 24.1339 5.36311 24.3259C8.05576 27.0178 11.6353 28.5 15.4428 28.5C19.2502 28.5 22.8297 27.0171 25.5224 24.3259C28.2151 21.6348 29.6979 18.0567 29.6979 14.25C29.6979 10.4433 28.2151 6.86449 25.5224 4.17332C25.3399 3.9914 25.1475 3.82327 24.9553 3.65528C24.9115 3.61698 24.8677 3.57868 24.824 3.54023L28.0176 0.348083C28.4822 -0.115784 29.2341 -0.115784 29.6979 0.348083L30.5374 1.18676C31.0012 1.65062 31.0012 2.40246 30.5374 2.86633L29.7432 3.66047C34.9252 10.6326 34.37 20.52 28.0429 26.8449C25.3213 29.5665 21.9384 31.2127 18.413 31.8005V34.4375ZM15.4428 26.125C22.0037 26.125 27.3222 20.8087 27.3222 14.25C27.3222 7.695 22.0074 2.375 15.4428 2.375C8.88182 2.375 3.5633 7.69129 3.5633 14.25C3.56404 20.8043 8.87811 26.125 15.4428 26.125ZM15.4428 5.9375C20.0354 5.9375 23.7582 9.65883 23.7582 14.25C23.7582 18.8412 20.0354 22.5625 15.4428 22.5625C10.8501 22.5625 7.12729 18.8412 7.12729 14.25C7.12729 9.65883 10.8501 5.9375 15.4428 5.9375Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="reason-card__label">Global Reach</div>
                <p className="reason-card__text">
                  Better a diamond with a flaw than a pebble without one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="personal-support container-1440">
        <div className="container-with-bg-img padding">
          <div className="left-col">
            <span className="personal-support__header">
              Unparalleled Personal Support
            </span>
            <p className="personal-support__text">
              When you contact us, you get quick and direct access to our
              knowledgable staff with no long hold times. Get the answers you
              want without the hassle!
            </p>
          </div>
          <div className="right-col bg-img2"></div>
        </div>
      </div>

      <div className="reviews padding container">
        <h1 className="reviews__header">
          We Are Loved By Users And Clients Worldwide
        </h1>
        <p className="reviews__text">
          Only those who risk going too far can possibly find out how far one
          can go.
        </p>

        <Scrollable className="reviews__cards">
          <div className="reviews__card">
            <div className="reviews__rate">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
            </div>
            <div className="reviews__comment">
              “It’s not only about what you write but how you present it. Only
              those who risk going too far can possibly find out how far one can
              go."
            </div>
            <div className="reviews__commentator">Georges Embolo</div>
            <div className="reviews__commentator-position">
              Product Designer @Apex
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__rate">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
            </div>
            <div className="reviews__comment">
              “It’s not only about what you write but how you present it. Only
              those who risk going too far can possibly find out how far one can
              go."
            </div>
            <div className="reviews__commentator">Artem Sazonov</div>
            <div className="reviews__commentator-position">
              Product Designer @Apex
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__rate">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
            </div>
            <div className="reviews__comment">
              “It’s not only about what you write but how you present it. Only
              those who risk going too far can possibly find out how far one can
              go."
            </div>
            <div className="reviews__commentator">Pin Jung-Eum</div>
            <div className="reviews__commentator-position">
              Product Designer @Apex
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__rate">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37346 0.695722L6.81029 5.86696L1.07553 6.69889C0.0471213 6.8473 -0.365027 8.10887 0.380766 8.83144L4.52973 12.8544L3.54842 18.5373C3.37179 19.5645 4.45908 20.3339 5.36973 19.8535L10.5 17.1702L15.6303 19.8535C16.5409 20.33 17.6282 19.5645 17.4516 18.5373L16.4703 12.8544L20.6192 8.83144C21.365 8.10887 20.9529 6.8473 19.9245 6.69889L14.1897 5.86696L11.6265 0.695722C11.1673 -0.226039 9.83664 -0.237757 9.37346 0.695722Z"
                  fill="#FFA900"
                />
              </svg>
            </div>
            <div className="reviews__comment">
              “It’s not only about what you write but how you present it. Only
              those who risk going too far can possibly find out how far one can
              go."
            </div>
            <div className="reviews__commentator">Tao Yi</div>
            <div className="reviews__commentator-position">
              Product Designer @Apex
            </div>
          </div>
        </Scrollable>
      </div>
    </div>
  )
}
