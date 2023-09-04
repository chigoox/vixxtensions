import EmblaCarousel from "./Componets/HomePage/Carousel";
import { EmblaCarousel2 } from "./Componets/HomePage/Carousel copy";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <EmblaCarousel 
        img1={'https://Yummyextensions.com/cdn/shop/files/hero-banner-2019-2_420822c0-6107-485b-ba96-551c1b2697a5_1950x.jpg'}
        img2={'https://static.wixstatic.com/media/53a3ab_51f8142a5f024605a53a6dede0e5e250~mv2.png/v1/fill/w_1919,h_1080,al_c,q_95,enc_auto/53a3ab_51f8142a5f024605a53a6dede0e5e250~mv2.png'} 
        img3={'https://static.wixstatic.com/media/53a3ab_3b3d05b47884499cb57590fcf11aa824~mv2.jpg/v1/fill/w_1462,h_971,al_t,q_85,enc_auto/53a3ab_3b3d05b47884499cb57590fcf11aa824~mv2.jpg'}
        img4={'https://hairinbeauty.com/cdn/shop/files/lunbo04_c77caeff-ce7f-443b-b137-b31baae25c52.jpg?v=1692687737&width=2400'}
      />

<h1 className="text-center font-thin text-5xl my-12">Shop The Look</h1>
      <EmblaCarousel2 
        img1={'http://yummyextensions.com/cdn/shop/files/IMG_1445.jpg?v=1687996125'}
        img2={'http://yummyextensions.com/cdn/shop/files/YUMMY_EXTENSIONS_LOOSE_CURL_SHOP_THE_LOOK.jpg?v=1687658312'} 
        img3={'http://yummyextensions.com/cdn/shop/files/IMG_1439.jpg?v=1687995106'}
        img4={'http://yummyextensions.com/cdn/shop/files/IMG_1456.jpg?v=1687994832'}
      />


      
    </main>
  )
}
    
