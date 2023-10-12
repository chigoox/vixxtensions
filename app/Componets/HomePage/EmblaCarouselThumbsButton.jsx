import { Image } from '@nextui-org/react'
import React from 'react'

export const Thumb = (props) => {
    const { selected, imgSrc, index, onClick } = props

    return (
        <div
            className={'emblathumb-thumbs__slide'.concat(
                selected ? ' emblathumb-thumbs__slide--selected' : ''
            )}
        >
            <button
                onClick={onClick}
                className="emblathumb-thumbs__slide__button  shadow-sm shadow-gray-400 rounded-full"
                type="button"
            >
                <div className="emblathumb-thumbs__slide__number ">
                    <span>{index + 1}</span>
                </div>
                <Image
                    className="emblathumb-thumbs__slide__img rounded-full"
                    src={imgSrc}
                    alt="Your alt text"
                    fill

                />
            </button>
        </div>
    )
}
