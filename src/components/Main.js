import React from 'react'
import { GiHand } from "react-icons/gi";
import Cryptocards from './Cryptocards';

import Wallet from './Wallet';


const Main = () => {
    return (
        <div className='Main p-20 w-3/4 text-white'>
            <div className='mainContent flex flex-col'>
                <div className='main1 flex'>

                    <Wallet />
                </div>
                <span className='my-5 text-lg' >Assets</span>
                <Cryptocards />

            </div>

        </div>
    )
}

export default Main