import React from 'react'

const Card = () => {
    return (

        <div className='card'>
            <img
                className='card-image'
                src="../images/mount-fuji.jpg"
                alt="Mount Fuji"
            />
            <div className='card-info'>
                <p className='card-location'>
                    <span className='card-icon'><i class="fa-solid fa-location-dot"></i></span>
                    <span className='card-country'>Japan</span>
                    <a className='card-link' href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target='_blank'>View on Google Maps</a>
                </p>
                <h2 className='card-title'>Mount Fuji</h2>
                <p className='card-dates'>12 Jan, 2021 - 12 Jan, 2021</p>
                <p className='card-text'>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
                    (12,380 feet). Mount Fuji is the single most popular tourist site in Japan,
                    for both Japanese and foreign tourists.",
                </p>
            </div>
        </div>
    )

}

export default Card