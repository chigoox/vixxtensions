

import Script from "next/script";
import EmblaCarousel from "./Componets/HomePage/Carousel";
import { EmblaCarousel2 } from "./Componets/HomePage/Carousel copy";
import ShopItem from "./Componets/Shop/ShopItem";
import { bestseller, category } from "./META";
import IGFeed from "./Componets/HomePage/IGFeed";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">
      <EmblaCarousel
        img1={'https://Yummyextensions.com/cdn/shop/files/hero-banner-2019-2_420822c0-6107-485b-ba96-551c1b2697a5_1950x.jpg'}
        img2={'https://static.wixstatic.com/media/53a3ab_51f8142a5f024605a53a6dede0e5e250~mv2.png/v1/fill/w_1919,h_1080,al_c,q_95,enc_auto/53a3ab_51f8142a5f024605a53a6dede0e5e250~mv2.png'}
        img3={'https://static.wixstatic.com/media/53a3ab_3b3d05b47884499cb57590fcf11aa824~mv2.jpg/v1/fill/w_1462,h_971,al_t,q_85,enc_auto/53a3ab_3b3d05b47884499cb57590fcf11aa824~mv2.jpg'}
        img4={'https://hairinbeauty.com/cdn/shop/files/lunbo04_c77caeff-ce7f-443b-b137-b31baae25c52.jpg?v=1692687737&width=2400'}
      />

      <div className="">
        <h1 className="text-center font-thin md:text-6xl text-3xl  border-black mt-24 mb-2">Shop The Look</h1>

        <EmblaCarousel2
          img1={'http://yummyextensions.com/cdn/shop/files/IMG_1445.jpg?v=1687996125'}
          img2={'http://yummyextensions.com/cdn/shop/files/YUMMY_EXTENSIONS_LOOSE_CURL_SHOP_THE_LOOK.jpg?v=1687658312'}
          img3={'http://yummyextensions.com/cdn/shop/files/IMG_1439.jpg?v=1687995106'}
          img4={'http://yummyextensions.com/cdn/shop/files/IMG_1456.jpg?v=1687994832'}
        />
      </div>

      <div className=" mt-8 w-full ">
        <h1 className="my-2 text-2xl text-center">Best Sellers</h1>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-2 md:w-[70%] m-auto">
          {bestseller.map(shopItems => (<ShopItem shopItems={shopItems} />))}
        </div>
      </div>

      <div className=" mt-8 w-full ">
        <h1 className="my-2 text-2xl text-center">SHOP BY CATEGORY</h1>
        <div className="flex flex-wrap  m-auto h-80 relative">
          {category.map(category => (
            <div className=" w-[50%] lg:w-[25%] lg:h-full  h-[50%]">
              <img className='h-full w-full  object-cover'
                src={category == 'Luxury Wigs' ? 'http://yummyextensions.com/cdn/shop/files/EmilynnRoseSaweetie4990.jpg?v=1614733372)' :
                  category == 'Luxury Lace' ? 'http://yummyextensions.com/cdn/shop/products/raw-cambodian-natural-wave-yummy-extensions-2_copy_300x300.jpg?v=1568791827' :
                    category == 'Luxury Bundles' ? 'http://yummyextensions.com/cdn/shop/products/rawseawavyopulence_Yummyhairextensions_1024x1024@2x.jpg?v=1676367879' :
                      category == 'Hot Tools' ? 'https://images.unsplash.com/photo-1522336284037-91f7da073525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3269&q=80' :
                        ''
                } alt="" />
              <div className="absolute bottom-12 center w-32 opacity-75 bg-black">
                <h1 className="text-white text-center">{category}</h1>
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

