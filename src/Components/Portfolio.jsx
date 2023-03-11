import React from 'react'

export default function Portfolio({img, title, text, link}) {
  return (
    <div>
      <div className="swiper-item">
        <div className="item-img">
            <img src={img} alt="meme-img" />
        </div>
        <div className="carousel-title">{title}</div>
        <div className="carousel-text">
          <p>
          {text}
          </p>
          </div>
        </div>
        <a href={link} className="carousel-link">Get to details <ion-icon name="arrow-forward-outline"></ion-icon></a>
    </div>
  )
}
