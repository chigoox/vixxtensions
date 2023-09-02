'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { AiFillBackward, AiFillStepBackward, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

export const EmblaCarousel = ({ img1, img2, img3 }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla relative">
            <div className="embla__viewport from-slate-400 to-slate-500 bg-gradient-to-br h-[334.89px] overflow-hidden" ref={emblaRef}>
                <div className="embla__container zoom">
                    {img1 &&
                        <div className="embla__slide"> <img className='object-cover' src={img1} alt="" /></div>}
                    {img2 &&
                        <div className="embla__slide"><img className='object-cover' src={img2} alt="" /></div>}
                    {img3 &&
                        <div className="embla__slide"><img className='object-cover' src={img3} alt="" /></div>}
                </div>
            </div>
            <div className='absolute top-[70%] between gap-4 p-4 w-full'>
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













