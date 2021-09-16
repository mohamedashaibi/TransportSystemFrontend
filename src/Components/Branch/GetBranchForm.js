import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { GetBranch } from '../../Redux/Actions/Branch/actions';
import BranchCard from './General/BranchCard';

function GetBranchForm() {

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetBranch(id))
    }, [])
     
    const selector = useSelector(state=>state.BranchReducer)

    return (
        <div>
            {selector.branch.id != null?<BranchCard branch={selector.branch}/> : <p>Error</p>   }
        </div>
    )
}

export default GetBranchForm
