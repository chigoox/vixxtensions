'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = ({ img1, img2, img3 }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla ">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container zoom">
                    {img1 &&
                        <div className="embla__slide"> <img src={img1} alt="" /></div>}
                    {img2 &&
                        <div className="embla__slide"><img src={img2} alt="" /></div>}
                    {img3 &&
                        <div className="embla__slide"><img src={img3} alt="" /></div>}
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
                Prev
            </button>
            <button className="embla__next" onClick={scrollNext}>
                Next
            </button>
        </div>
    )
}




export default EmblaCarousel













