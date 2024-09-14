import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='text-white text-center  md:mt-32'>
            <p className='text-sm md:text-lg'>This tool is designed for development purposes and does not distribute mainnet SOL.</p>
            <p className='text-sm md:text-lg'>Create by  <Link className='font-bold pb-1' href={"https://github.com/nitindahiya-dev"}>  Nitin Dahiya </Link>.</p>
        </div>
    )
}

export default Footer