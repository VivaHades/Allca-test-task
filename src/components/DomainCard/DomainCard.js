import React from 'react'

import './DomainCard.scss';

export default function DomainCard(props) {
  const {label, domainName, price} = props
  return (
    <div className="card">
      <label className="card__label">{label}</label>
      <div className="card__domain-name">
        {domainName}
      </div>
      <div className="card__domain-price">
        {price}
      </div>
    </div>
  )
}
