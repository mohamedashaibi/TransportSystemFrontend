import React, { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Button} from 'reactstrap'
import {CreateBranch} from '../../Redux/Actions/Branch/actions'
import {GetCities} from '../../Redux/Actions/City/actions'

function CreateBranchForm() {

    const[englishName, setEnglishName] = useState("");
    const[arabicName, setArabicName] = useState("");
    const[cityId, setCityId] = useState(0);
    const[address, setAddress] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    const[email, setEmail] = useState("");

    useEffect(() => {
        dispatch(GetCities());
    }, [])

    const dispatch = useDispatch();

    const handleEnglishName = (e) => {
        setEnglishName(e.target.value);
    }

    const handleArabicName = (e) => {
        setArabicName(e.target.value);
    }

    const handleCityId = (e) => {
        setCityId(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = () => {
        const newBranch = {
            "englishName": englishName,
            "arabicName": arabicName,
            "cityId": cityId,
            "address": address,
            "phoneNumber": phoneNumber,
            "email": email
        }
        
        dispatch(CreateBranch(newBranch));
          
    }

   

    const selector = useSelector(state=>state.CityReducer)

    return (
        <div className="create-branch">
            <form>
                <input type="text" onChange={handleEnglishName} placeholder="الاسم بالانجليزي"/>
                <input type="text" onChange={handleArabicName} placeholder="الاسم بالعربي"/>
                <input type="text" onChange={handleAddress} placeholder="العنوان"/>
                <input type="phone" onChange={handlePhoneNumber} placeholder="رقم الهاتف"/>
                <select onChange={handleCityId}>
                    <option></option>
                    {selector.cities.map((element)=>{
                        return <option key={element.id} value={element.id}>{element.arabicName}</option>
                    })}
                </select>
                <input type="email" onChange={handleEmail} placeholder="البريد الالكتروني"/>
                <Button onClick={handleSubmit}>إضافة فرع</Button>
            </form>
        </div>
    )
}

export default CreateBranchForm
