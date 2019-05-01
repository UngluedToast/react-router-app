import React from 'react';
import history from 'react'

import { Link } from 'react-router-dom';

const arrayOfRats= [
    'Ikit',
    'Queek',
    'Skrolk',
    'Tretch'
];

function Rats({match, history}) {



    const ratLinks = arrayOfRats.map(ratName => (
        <li>
            <Link to={`${match.path}/${ratName}`}>{ratName}</Link>
        </li>
    ));

    return (
        <div>
            <h1>🐀</h1>
            <h1>🐀</h1>
            <h1>🐀</h1>
            <h1>🐀</h1>
            <ul>
                {ratLinks}
            </ul>
            <button onClick={() => {
                history.push('/');
            }}>Go Home</button>
            <h2> DAMN THATS A LOTTA RATS </h2>
        </div>
    );
}




export default Rats