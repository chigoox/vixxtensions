'use client'
import useFilterEmptyCategory from '@/app/Hooks/useFilterCategory'
import React from 'react'
import Image from "next/image";

import Link from "next/link";
import { Skeleton } from '@nextui-org/react';
import { HomePageCategoryImages } from '@/app/META';

const HomeProtuctCategories = () => {
    const category = useFilterEmptyCategory()
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center  w-full h-80 relative">
            {category.map((category) => (
                <Link key={category} href={`/Shop/${category.includes('Hot') ? 'HotTools' : category.replace(/\s/g, '')}`} className="  drop-shadow-md shadow-black m-auto overflow-hidden rounded-full md:w-[50%] md:h-[100%]  w-[90%] h-[70%] relative">
                    <Image width='300' height='900' className='h-full w-full  object-cover'
                        src={HomePageCategoryImages(category)} alt="" />
                    <div className="absolute top-0 m-auto h-full center w-full">
                        <h1 className="text-white text-2xl text-center center  w-full h-full  bg-opacity-50 bg-black">{category}</h1>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default HomeProtuctCategories