import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { CardExpndable } from './CardExpndable'


export const ProductCarasoul = () => {
    useEffect(() => {
        const slider = new Glide('.glide-01', {
            type: 'carousel',
            focusAt: 'center',
            perView: 3,
            autoplay: 5000,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: '[&>*]: bg-wuiSlate-700' //& represent current element, > child ele apply, background apply
                }
            },
            breakpoints: {
                1300: {
                    perView: 3,
                },
                980: {
                    perView: 2,
                },
                700: {
                    perView: 1
                }
            }
        })
            .mount();
        return () => {
            slider.destroy();
        }
    }, [])
    return (
        <>
            <div className='glide-01 relative w-full'>
                <div className='overflow-x-hidden h-fit py-5 flex items-center' data-glide-el='track'>
                    <ul className='h-fit whitespace-nowrap flex-nowrap 
                [backspace-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] 
                [will-change: transform] relative flex w-full ps-0'>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
