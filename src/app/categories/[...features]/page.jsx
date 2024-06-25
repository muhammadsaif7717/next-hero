import React from 'react';

const page = ({ params }) => {
    console.log(params)
    if (params.features.length == 1) {
        return <div>{params.features[0]}</div>
    }
    if (params.features.length == 2) {
        return <div>{params.features[1]}</div>
    }
    if (params.features.length == 3) {
        return <div>{params.features[2]}</div>
    }
    if (params.features.length == 4) {
        return <div>{params.features[3]}</div>
    }
    return (
        <div>Not Available</div>
    )


};

export default page;