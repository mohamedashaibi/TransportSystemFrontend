import React from 'react'

function CityCard(props) {

    const city = props.city

    return (
        <div>
            {city.id}
            {city.arabicName}
            {city.englishName}
        </div>
    )
}

export default CityCard
