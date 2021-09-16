import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GetBranches} from '../../Redux/Actions/Branch/actions';
import BranchCard from './General/BranchCard';

function GetBranchesForm() {

    const selector = useSelector(state=>state.BranchReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetBranches());
    }, [])

    return (
        <div>
            {selector.branches.map((element)=>{
                return <BranchCard branch={element}/>
            })}
        </div>
    )
}

export default GetBranchesForm
