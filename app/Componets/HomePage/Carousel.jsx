'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { AiFillBackward, AiFillStepBackward, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'

export const EmblaCarousel = ({ img1, img2, img3, img4, square }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla relative z-0">
            <div className="embla__viewport from-slate-400 to-slate-500 bg-gradient-to-br h-[14rem] md:[20rem] lg:h-[40rem] overflow-hidden" ref={emblaRef}>
                <div className="embla__container h-full w-full  gap-4">
                    {img1 &&
                        <div className="embla__slide"> <img className='object-cover zoom w-full h-full' src={img1} alt="" /></div>}
                    {img2 &&
                        <div className="embla__slide"><img className='object-cover zoom w-full h-full' src={img2} alt="" /></div>}
                    {img3 &&
                        <div className="embla__slide"><img className='object-cover zoom w-full h-full' src={img3} alt="" /></div>}
                    {img4 &&
                        <div className="embla__slide"><img className='object-cover zoom w-full h-full' src={img4} alt="" /></div>}
                </div>
            </div>
            <div className='absolute z-[99999] top-[50%] between gap-4 p-4 w-full'>
                <button className="embla__prev hover:scale-110 trans scale-100 rounded-full border border-dotted bg-white bg-opacity-50" onClick={scrollPrev}>
                    <AiOutlineArrowLeft size={32} color='white' />
                </button>
                <button className="embla__next hover:scale-110 trans scale-100 rounded-full border border-dotted bg-white bg-opacity-50" onClick={scrollNext}>
                    <AiOutlineArrowRight size={32} color='white' />
                </button>
            </div>
        </div>
    )
}




export default EmblaCarousel













