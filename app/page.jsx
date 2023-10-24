import EmblaCarousel from "./Componets/HomePage/Carousel";
import { bannerImage } from "./META";
import IGFeed from "./Componets/HomePage/IGFeed";
import ProductsList from "./Shop/Componets/ProductsList";
import EmailCollectorMain from "./Componets/General/EmailCollectorMain";
import HomeProtuctCategories from "./Componets/HomePage/HomeProtuctCategories";

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
        <HomeProtuctCategories />
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

