import React from "react"
import {StarIcon} from "@heroicons/react/24/solid";

const TopRecommended = ({ props }) => {
    return (
        <div className='sm:mr-4 sm:mb-0'>
            <img className='rounded-lg' alt={props.name} src={props.img_url}/>
            <div>
                <h1 className='text-md font-medium'>{props.name}</h1>
                <div className='flex'>
                    <StarIcon className='w-5 text-orange-300'/>
                    <StarIcon className='w-5 text-orange-300'/>
                    <StarIcon className='w-5 text-orange-300'/>
                    <StarIcon className='w-5 text-orange-300'/>
                    <StarIcon className='w-5 text-gray-300'/>
                </div>
            </div>
        </div>
    )
}

export default TopRecommended;