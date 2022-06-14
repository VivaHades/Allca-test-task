import React from 'react'
import './TransfersSecondStep.scss'
export default function TransfersSecondStep() {
  return (
    <div className='transfers-step-two wrapper'>
      <div className="container-col padding">
        <h1 className="transfers-step-two__header">Transfer Domains To Your All.CA Account</h1>
        <label className="transfers-step-two__label">
          You are about to transfer the following 5 domain(s) into your All.CA account:
        </label>
        <div className="order-and-checkout">
          <div className="order">
            <div className="order__headers">
              <label className="order__header">Domain Name</label>
              <label className="order__header">TLD</label>
              <label className="order__header">Price</label>
            </div>
            <div className="order__cards">
              <div className="order__card">
                <label className="order__card-label">ArtDecoDesign.com</label>
                <span className="order__card-tld">.Net</span>
                <span className="order__card-price">$9.54</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#9EA0A5"/>
                </svg>
              </div>

              <div className="order__card">
                <label className="order__card-label">Sitedesignmaster.com</label>
                <span className="order__card-tld">.Net</span>
                <span className="order__card-price">$9.54</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#9EA0A5"/>
                </svg>
              </div>

              <div className="order__card">
                <label className="order__card-label">Toenailsnacks.com</label>
                <span className="order__card-tld">.Net</span>
                <span className="order__card-price">$9.54</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#9EA0A5"/>
                </svg>
              </div>

              <div className="order__card">
                <label className="order__card-label">Earcushionkit.com</label>
                <span className="order__card-tld">.Net</span>
                <span className="order__card-price">$9.54</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#9EA0A5"/>
                </svg>
              </div>

              <div className="order__card">
                <label className="order__card-label">Neverbreakthechain.com</label>
                <span className="order__card-tld">.Net</span>
                <span className="order__card-price">$9.54</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#9EA0A5"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="checkout">

            <div className="order-summary">
              <h2 className="order-summary__header">Order Summary</h2>
              <div className="order-summary__labels">
                <label className="order-summary__label">
                  Item
                </label>
                <label className="order-summary__label">
                  Price
                </label>
              </div>
              <div className="ordered-domains">
                <span className="ordered-domains__number">5 Domain Name Transfers</span>
                <span className="ordered-domains__price">
                  $47.7
                  <svg className="ordered-domains__close" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#9EA0A5"/>
                  </svg>
                </span>
              </div>
              <div className="total">
                <label className="total__label">Total</label>
                <span className="total__price">$47.7</span>
              </div>
            </div>

            <button className="checkout__button">Checkout</button>
          </div>

        </div>
      </div>
    </div>
  )
}
