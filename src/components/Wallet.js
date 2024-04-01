import React from 'react'

import DonutChart from './DonutChart';

const Wallet = () => {

    return (
        <>
            <div className='GraphtoCard w-1/5 bg-gray-800 p-5 rounded flex flex-col mr-5 mt-10 text-center'><h2 className='flex-1'>Wallet Balance</h2>
                <DonutChart />
            </div>

        </>
    )

}

export default Wallet