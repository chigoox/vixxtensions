
import Image from "next/image";
import Script from "next/script";
import EmblaCarousel from "./Componets/HomePage/Carousel";
import { EmblaCarousel2 } from "./Componets/HomePage/Carousel copy";
import ShopItem from "./Componets/Shop/ShopItem";
import { bestseller, category } from "./META";
import IGFeed from "./Componets/HomePage/IGFeed";
import { revalidatePath } from "next/cache";
import VIXBAN1 from "../public/Images/VIXBAN1.webp";
import VIXBAN2 from "../public/Images/VIXBAN2.webp";
import RawBundlesImage from '../public/Images/RawBundles.jpeg'
import RawLace from '../public/Images/RawLace.jpeg'
import RawWig from '../public/Images/RawWig.jpeg'



export default async function Home() {
  revalidatePath('/')

  //await fetch("/api/revalidate?secret=5isthegoat");

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">

      <EmblaCarousel
        img1={VIXBAN2}
        img2={VIXBAN1}
      />



      <div className=" mt-8 w-full ">
        <h1 className="my-2 text-2xl text-center">Best Sellers</h1>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap12 md:w-[70%] m-auto">
          {bestseller.map(shopItems => (<ShopItem shopItems={shopItems} />))}
        </div>
      </div>

      <div className=" mt-8 w-full ">
        <h1 className="my-2 text-2xl text-center">SHOP BY CATEGORY</h1>
        <div className="flex flex-wrap  m-auto h-80 relative">
          {category.map(category => (
            <div className=" w-[50%] lg:w-[25%] lg:h-full  h-[50%] relative">
              <Image width='0' height='0' className='h-full w-full  object-cover'
                src={category == 'Luxury Wigs' ? RawWig :
                  category == 'Luxury Lace' ? RawLace :
                    category == 'Luxury Bundles' ? RawBundlesImage :
                      category.includes('Hot Tools') ? 'https://images.unsplash.com/photo-1522336284037-91f7da073525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3269&q=80' :
                        ''
                } alt="" />
              <div className="absolute bottom-12 m-auto center w-full">
                <h1 className="text-white text-center  w-32  opacity-75 bg-black">{category}</h1>
              </div>
            </div>
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

