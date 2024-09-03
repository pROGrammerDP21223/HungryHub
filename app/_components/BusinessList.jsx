"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import GlobalApi from '../_utils/GlobalApi';
import BusinessItem from './BusinessItem';

function BusinessList() {
    const params = useSearchParams();
    const [category, setCategory] = useState('all');
    const [businessList, setBusinessList] = useState([])
    useEffect(() => {
        params && setCategory(params.get('category'))
        params && getbusinesslist(params.get('category'))
    }, [params]);
    const getbusinesslist = (category_) => {
        GlobalApi.GetBusiness(category_).then(resp => {
            console.log(resp);
            setBusinessList(resp?.resturants)
        })
    }
    return (
        <div className='mt-5'>
            <h2 className='font-bold text-2xl'>Popular {category} Restuarnts</h2>
            <h2 className='font-bold text-primary'>{businessList?.length} Results</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 '>
                {businessList.map((restuarants, index) => (

                    <BusinessItem key={index}
                    business={restuarants}  />
                ))}
            </div>
        </div>

    )
}

export default BusinessList