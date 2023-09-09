import React from 'react'
import IGPost from './IGPost';



async function IGFeed() {

    const response = await fetch('https://feeds.behold.so/a8MIJ35pXYq2syUql3wg');
    const jsonFeed = await response.json();
    const feedMap = jsonFeed.map(instagramPost => (<IGPost post={instagramPost} />))


    return (
        <div className='grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 overflow-hidden  w-full md:w-fit items-center  gap-2 md:[&>*:nth-child(1)]:relative [&>*:nth-child(1)]:left-14 [&>*:nth-child(1)]:top-14 [&>*:nth-child(3)]:right-14 [&>*:nth-child(3)]:h-64 md:[&>*:nth-child(3)]:h-36  md:[&>*:nth-child(3)]:relative [&>*:nth-child(3)]:bottom-6  md:[&>*:nth-child(2)]:h-64 [&>*:nth-child(2)]:h-64 [&>*:nth-child(2)]:w-40  md:[&>*:nth-child(2)]:w-64  [&>*:nth-child(5)]:h-32 md:[&>*:nth-child(5)]:relative [&>*:nth-child(5)]:bottom-16 [&>*:nth-child(5)]:left-14 [&>*:nth-child(5)]:w-32 md:[&>*:nth-child(4)]:relative [&>*:nth-child(4)]:left-40 [&>*:nth-child(4)]:bottom-14 md:[&>*:nth-child(4)]:h-36 md:[&>*:nth-child(4)]:w-36 [&>*:nth-child(4)]:h-36 [&>*:nth-child(4)]:w-36 [&>*:nth-child(1)]: md:[&>*:nth-child(6)]:relative [&>*:nth-child(6)]:h-40 [&>*:nth-child(6)]:w-40 [&>*:nth-child(6)]:bottom-32 [&>*:nth-child(6)]:right-12'>
            {feedMap.slice(0, 6)}
        </div>
    )
}

export default IGFeed