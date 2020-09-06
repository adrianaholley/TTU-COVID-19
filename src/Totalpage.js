import React, { useState } from 'react';
import Total, { totaldata } from './components/Total';

function Totalpage() {
    return (
        <div className='responsivecontainer'>
            <svg width="100%" height="139">
                <g>
                    <rect width="100%" height="100%" fill="#B32317" />
                    <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
                </g>
            </svg>
            <h1></h1>
            <h3 >Total Reported Cases</h3>
            <p><i><font size="3">Last updated Friday, September 4 at 5:26pm.</font></i></p>
            <center>

                <Total />
            </center>
        </div>

    )
}

export default Totalpage;