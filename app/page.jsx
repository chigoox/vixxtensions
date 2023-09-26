
import Image from "next/image";
import Script from "next/script";
import EmblaCarousel from "./Componets/HomePage/Carousel";
import { EmblaCarousel2 } from "./Componets/HomePage/Carousel copy";
import ShopItem from "./Shop/Componets/ShopItem";
import { bestseller, category } from "./META";
import IGFeed from "./Componets/HomePage/IGFeed";
import { revalidatePath } from "next/cache";
import VIXBAN1 from "../public/Images/BAN1.JPG";
import VIXBAN4 from "../public/Images/BAN2.JPG";
import VIXBAN3 from "../public/Images/BAN3.JPG";
import VIXBAN2 from "../public/Images/VIXBAN2.webp";
import RawBundlesImage from '../public/Images/RawBundles.jpeg'
import RawLace from '../public/Images/RawLace.jpeg'
import RawWig from '../public/Images/RawWig.jpeg'
import RawTools from '../public/Images/RawTools.jpeg'
import Link from "next/link";
import ProductsList from "./Shop/Componets/ProductsList";



export default async function Home() {
  revalidatePath('/')

  //await fetch("/api/revalidate?secret=5isthegoat");

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">

      <EmblaCarousel
        img1={VIXBAN2}
        img2={VIXBAN1}
        img3={VIXBAN3}
        img4={VIXBAN4}
      />



      <div className=" mt-8 w-full ">
        <h1 className="my-2 text-2xl text-center">New Arrivals</h1>
        <ProductsList search={'isNew'} category={'true'} list={true} />

      </div>

      <div className=" mt-8 w-full ">
        <h1 className="my-6  border-4 w-fit m-auto border-dotted p-2 border-spacing-8 font-extrabold text-3xl text-center">SHOP BY CATEGORY</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center  w-full h-80 relative">
          {category.map(category => (
            <Link href={`/Shop/${category.includes('Hot') ? 'HotTools' : category.replace(/\s/g, '')}`} className="  drop-shadow-md shadow-black m-auto overflow-hidden rounded-full md:w-[50%] md:h-[100%]  w-[90%] h-[70%] relative">
              <Image width='0' height='0' className='h-full w-full  object-cover'
                src={category == 'Luxury Wigs' ? RawWig :
                  category == 'Luxury Lace' ? RawLace :
                    category == 'Luxury Bundles' ? RawBundlesImage :
                      category.includes('Hot Tools') ? RawTools :
                        ''
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
        <IGFeed />
      </div>


    </main>
  )
}

