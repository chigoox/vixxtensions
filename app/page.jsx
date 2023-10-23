
import Image from "next/image";
import EmblaCarousel from "./Componets/HomePage/Carousel";
import { bannerImage, category } from "./META";
import IGFeed from "./Componets/HomePage/IGFeed";
import RawBundlesImage from '../public/Images/RawBundles.jpeg'
import RawLace from '../public/Images/RawLace.jpeg'
import RawWig from '../public/Images/RawWig.jpeg'
import RawTools from '../public/Images/RawTools.jpeg'
import Link from "next/link";
import ProductsList from "./Shop/Componets/ProductsList";
import EmailCollectorMain from "./Componets/General/EmailCollectorMain";




export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">
      <EmailCollectorMain />
      <EmblaCarousel
        img1={bannerImage[0]}
        img2={bannerImage[1]}
        img3={bannerImage[2]}
        img4={bannerImage[3]}
      />




      <div className=" mt-8 w-full ">
        <h1 className="my-2 text-2xl text-center">New Arrivals</h1>
        <ProductsList search={'isNew'} category={'true'} list={true} limit={10} />

      </div>

      <div className=" mt-8 w-full ">
        <h1 className="my-6  border-4 w-fit m-auto border-dotted p-2 border-spacing-8 font-extrabold text-3xl text-center">SHOP BY CATEGORY</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center  w-full h-80 relative">
          {category.slice(0, 6).map((category) => (
            <Link href={`/Shop/${category.includes('Hot') ? 'HotTools' : category.replace(/\s/g, '')}`} className="  drop-shadow-md shadow-black m-auto overflow-hidden rounded-full md:w-[50%] md:h-[100%]  w-[90%] h-[70%] relative">
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
            </Link>
          ))}
        </div>
      </div>

      <div className="center-col w-full overflow-hidden mt-32">
        <h1 className="font-thin text-center text-2xl  mb-2">FOLLOW US ON INSTAGRAM</h1>
        <div >

          <IGFeed />
        </div>
      </div>


    </main>
  )
}

