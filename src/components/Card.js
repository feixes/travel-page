import React from 'react'

const Card = (props) => {
    console.log(props)
    return (

        <div className='card'>
            <img
                className='card-image'
                src={props.imageUrl}
                alt={props.title}
            />
            <div className='card-info'>
                <p className='card-location'>
                    <span className='card-icon'><i className="fa-solid fa-location-dot"></i></span>
                    <span className='card-country'>{props.location}</span>
                    <a className='card-link' href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
                </p>
                <h2 className='card-title'>{props.title}</h2>
                <p className='card-dates'>{props.startDate} - {props.endDate}</p>
                <p className='card-text'>{props.description}</p>
            </div>
        </div>
    )

}

export default Card