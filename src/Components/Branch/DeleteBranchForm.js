import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { GetBranch } from '../../Redux/Actions/Branch/actions';

function DeleteBranchForm() {

    const {id} = useParams();

    const dispatch = useDispatch();

    const selector = useSelector(state=>state.BranchReducer);

    useEffect(() => {
        dispatch(GetBranch(id));
    }, [])

    return (
        <div>
                    
        </div>
    )
}

export default DeleteBranchForm
