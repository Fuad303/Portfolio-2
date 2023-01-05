import React from 'react'

export default function Article({img, title, date, link}) {
  return (
    <div>
    <a href={link}>
      <div className='article-item'>
            <div className="article-img">
                <img src={img} alt="Article Img" />
            </div>
            <div className="article-item-text">
                <div className="article-item-title">
                    <h4>{title}</h4>
                </div>
                <div className="article-date"><p>{date}</p></div>
            </div>
      </div>
      </a>
    </div>
  )
}
