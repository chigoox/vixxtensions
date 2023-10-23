'use client'
import useFilterEmptyCategory from '@/app/Hooks/useFilterCategory'
import React from 'react'
import Image from "next/image";
import RawBundlesImage from '../../../public/Images/RawBundles.jpeg'
import RawLace from '../../../public/Images/RawLace.jpeg'
import RawWig from '../../../public/Images/RawWig.jpeg'
import RawTools from '../../../public/Images/RawTools.jpeg'
import Link from "next/link";
import { Skeleton } from '@nextui-org/react';

const HomeProtuctCategories = () => {
    const category = useFilterEmptyCategory()
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center  w-full h-80 relative">
            {category.map((category) => (
                <Link key={category} href={`/Shop/${category.includes('Hot') ? 'HotTools' : category.replace(/\s/g, '')}`} className="  drop-shadow-md shadow-black m-auto overflow-hidden rounded-full md:w-[50%] md:h-[100%]  w-[90%] h-[70%] relative">
                    <Skeleton isLoaded={category} className='h-full w-full'>
                        <Image width='300' height='0' className='h-full w-full  object-cover'
                            src={category == 'Luxury Wigs' ? RawWig :
                                category == 'Luxury Lace' ? RawLace :
                                    category == 'Luxury Bundles' ? RawBundlesImage :
                                        category.includes('Hot Tools') ? RawTools :
                                            'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=2193&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            } alt="" />
                        <div className="absolute top-0 m-auto h-full center w-full">
                            <h1 className="text-white text-2xl text-center center  w-full h-full  bg-opacity-50 bg-black">{category}</h1>
                        </div>
                    </Skeleton>
                </Link>
            ))}
        </div>
    )
}

export default HomeProtuctCategories