"use client"
import React, { useState, useEffect } from 'react';
import { MdInfoOutline } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

const Cryptocards = () => {

    const [bitcoinPrice, setBitcoinPrice] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBitcoinPrice() {
            try {
                const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
                const data = await response.json();
                setBitcoinPrice(Object.entries(data.bpi));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchBitcoinPrice();
    }, []);

    const decodeHtmlEntity = (htmlEntity) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = htmlEntity;
        return txt.value;
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='cryptoCards flex'>
                    {bitcoinPrice.map(([currency, { rate, description, code, rate_float, symbol }]) => {
                        const percentage = (rate_float / 1000) * 100;
                        return (
                            <div key={rate} className='cryptoCard w-1/5 bg-gray-800 p-6 rounded flex flex-col mr-5'>
                                <div className='flex items-center mt-1'>
                                    <BsArrowDownRightCircleFill className='text-yellow-300 m-1 w-10 h-10' />
                                    <p className='inline-block mx-4'>{code}</p>
                                </div>
                                <p className='text-gray-500 text-sm mt-3'>{description}</p>
                                <div className='flex items-center justify-between mt-3'>
                                    <span>{rate} {decodeHtmlEntity(symbol)}</span>
                                    <span className='flex text-gray-500 text-xs inline-block'>{percentage.toFixed(2)}% <BsGraphUpArrow className='mx-1s' /></span>
                                </div>
                                <div className='flex justify-between mt-3'>
                                    <MdInfoOutline className='text-yellow-400 m-1 w-10 h-7' />
                                    <button className='px-3 py-1 block bg-yellow-300 text-black rounded'>Trade</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>

    )
}

export default Cryptocards