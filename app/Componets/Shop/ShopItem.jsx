import { AiFillStar } from 'react-icons/ai'

function ShopItem({ shopItems }) {
    const { title, img, price, salePrice, rating } = shopItems
    const stars = new Array(rating)
    console.log(stars)

    return (
        <div className='h-[30rem] my-2 w-80 bg-black relative text-white rounded-full overflow-hidden'>
            <img src={img} className='h-[80%] w-full object-cover' alt="" />
            <div className='h-[20%] w-full center-col'>
                <h1 className='font-bold text-2xl'>{title}</h1>
                <div className='center gap-2 flex-wrap'>
                    <h1>from ${price}</h1>
                    {salePrice && <h1>${salePrice}</h1>}
                </div>

            </div>

            <div className='w-28 h-8 absolute flex justify-end items-center p-2 top-[70%] right-4 bg-black bg-opacity-50'>
                {stars.map((star) => {
                    return (
                        <AiFillStar color='yellow' size={24} />
                    )
                })}


            </div>

        </div>
    )
}

export default ShopItem