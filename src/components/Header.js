import React from 'react'
import { GiHand } from "react-icons/gi";

const Header = () => {
    return (


        <div className='head flex justify-between'>
            <div>
                <div className=' text-white text-4xl max-sm:text-xl flex'>Hello, <span className='head text-lime-500'>
                    vikash kumar</span> <GiHand className='text-yellow-400 m-1' />
                </div>

                <div className=' text-white text-2xl max-sm:text-lg flex'>Welcome to, <span className='head text-lime-700'>
                    Spot trading!</span>
                </div>

            </div>
            <div>
                <button className='p-3 max-sm:p-2 bg-lime-600 text-white rounded'>Start Trading</button>
            </div>
        </div>

    )
}

export default Header
