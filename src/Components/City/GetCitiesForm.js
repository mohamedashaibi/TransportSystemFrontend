import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCities } from '../../Redux/Actions/City/actions';
import CityCard from './General/CityCard';

function GetCitiesForm() {

    const selector = useSelector(state => state.CityReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCities());
    }, [])

    return (
        <div>
            {selector.cities.map(element=>{
                return <CityCard city={element}/>
            })}
        </div>
    )
}

export default GetCitiesForm
