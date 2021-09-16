import React from 'react'

function BranchCard(props) {

    const branch = props.branch;

    return (
        <div>
            {branch.id}
            {branch.englishName}
            {branch.arabicName}
            {branch.address}
            {branch.phoneNumber}
        </div>
    )
}

export default BranchCard
