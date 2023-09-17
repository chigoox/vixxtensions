'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { AiFillBackward, AiFillStepBackward, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'

export const EmblaCarousel = ({ img1, img2, img3, img4, rounded, noArrow, dim, text, text2, text3, text4, noZoom }) => {
    console.log(rounded)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const Slide = ({ rounded, img, dim, text, noZoom }) => {
        return (
            <div className="embla__slide relative">
                {text && <div className='text-center w-full h-full text-4xl absolute center text-white font-bold z-[50] drop-shadow-sm shadow-black shadow-md'>{text}</div>}
                {dim && <div className='bg-opacity-25  h-full w-full bg-black absolute top-0'></div>}
                <Image height={rounded ? 300 : 0} width={rounded ? 200 : 0} className={`object-cover ${noZoom ? '' : 'zoom'} w-full h-full`} src={img} alt="" />
            </div>

        )
    }

    return (
        <div className="embla relative z-0">
            <div className={`embla__viewport bg-[#EEEFF0] h-[14rem] md:[20rem] ${rounded ? 'rounded-full' : ''} lg:h-[40rem] overflow-hidden`} ref={emblaRef}>
                <div className="embla__container h-full w-[100vw] relative   gap-4">
                    {img1 && <Slide rounded={true} img={img1} text={text} dim={dim} noZoom={noZoom} />}
                    {img2 && <Slide rounded={true} img={img2} text={text2} dim={dim} noZoom={noZoom} />}
                    {img3 && <Slide rounded={true} img={img3} text={text3} dim={dim} noZoom={noZoom} />}
                    {img4 && <Slide rounded={true} img={img4} text={text4} dim={dim} noZoom={noZoom} />}
                </div>
            </div>
            {!noArrow && <div className='absolute z-[99999] top-[50%] between gap-4 p-4 w-full'>
                <button className="embla__prev hover:scale-110 trans scale-100 rounded-full border border-dotted bg-white bg-opacity-50" onClick={scrollPrev}>
                    <AiOutlineArrowLeft size={32} color='white' />
                </button>
                <button className="embla__next hover:scale-110 trans scale-100 rounded-full border border-dotted bg-white bg-opacity-50" onClick={scrollNext}>
                    <AiOutlineArrowRight size={32} color='white' />
                </button>
            </div>}
        </div>
    )
}




export default EmblaCarousel













