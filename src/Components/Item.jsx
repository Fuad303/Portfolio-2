import React from 'react'

export default function Service(props) {
  return (
    <div className='item'>
        <a href={props.socialLink} className="item-img">
            <div>{!props.socialIcon == "" ? <ion-icon name={props.socialIcon}></ion-icon> : <img className='logoImg' src={props.socialImg}/>}</div>
                <div>
                    <span>{props.socialMedia}</span>
                    {props.socialLink == "" ? <ion-icon name="arrow-up-outline"></ion-icon> : ""}
                </div>
        </a>
        <div className="item-title"><span className='item-name'>{props.socialName}</span> <span className='item-date'>{props.socialDate}</span></div>
        <div className="item-text">{props.socialText}</div>
    </div>
  )
}
