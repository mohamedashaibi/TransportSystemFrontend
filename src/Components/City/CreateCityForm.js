import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {CreateCity} from '../../Redux/Actions/City/actions';
import {Button} from 'reactstrap';


function CreateCityForm() {

    const[englishName, setEnglishName] = useState("");
    const[arabicName, setArabicName] = useState("");
    
    const handleEnglishName = (e) => {
        setEnglishName(e.target.value);
    }

    const handleArabicName = (e) => {
        setArabicName(e.target.value);
    }

    const dispatch = useDispatch();

    const Submit = () =>{
        const City = {
            "englishName": englishName,
            "arabicName": arabicName
        }

        dispatch(CreateCity(City));
    }
    
    return (
        <div>
            <form>
                <input type="text" onChange={handleEnglishName} placeholder="الاسم الانجليزي"/>
                <input type="text" onChange={handleArabicName} placeholder="الاسم العربي"/>
                <Button onClick={Submit}>اضافة المدينة</Button>
            </form>
        </div>
    )
}

export default CreateCityForm
