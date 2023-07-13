'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'

const GAP = 24

export const CardSlides = ({
    children,
    className,
    id,
}: {
    children?: React.ReactNode[]
    className?: string
    id: string | number
}) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [data, setData] = useState({
        index: 0,
        items: 1,
        widthSlide: 320,
        slideLength: 0,
    })

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))

        const container = document.querySelector<HTMLDivElement>(
            `#slide-container-${id}`
        )
        const widthContainer = container?.clientWidth
        const slides = container?.querySelectorAll(`#slide-${id}`)
        const slideLength =
            container?.querySelectorAll(`#slide-${id}`).length ?? 1

        console.log(slides)

        let items = 1
        if (widthContainer) {
            if (widthContainer >= 664 && widthContainer < 1008) {
                items = 2
            } else if (widthContainer >= 1008) {
                items = 3
            }
        }

        const widthSlide = (widthContainer! - GAP * (items - 1)) / items

        setData(() => ({
            items: items,
            widthSlide: widthSlide,
            index: 0,
            slideLength: slideLength,
        }))
    }, [width])

    function previousSlide() {
        let newIndex: number

        data.index === 0
            ? (newIndex = data.slideLength - data.items)
            : (newIndex = data.index - 1)

        setData(() => ({ ...data, index: newIndex }))
    }

    function nextSlide() {
        let newIndex: number

        data.index === data.slideLength - data.items
            ? (newIndex = 0)
            : (newIndex = data.index + 1)

        setData(() => ({ ...data, index: newIndex }))
    }

    return (
        <div className={`flex items-center justify-around gap-4 ${className}`}>
            <button
                onClick={previousSlide}
                className='cursor-pointer text-3xl hover:text-primary-light dark:hover:text-primary-dark'>
                <MdArrowBackIosNew />
            </button>
            <div
                id={`slide-container-${id}`}
                className='flex duration-500 overflow-hidden gap-6'>
                {children?.map((element, index) => (
                    <div
                        key={JSON.stringify(element)}
                        id={`slide-${id}`}
                        style={{
                            width: data.widthSlide + 'px',
                            marginLeft:
                                index === 0
                                    ? `-${
                                          (data.widthSlide + GAP) * data.index
                                      }px `
                                    : '',
                        }}
                        className='min-w-[320px] h-full duration-500 flex-shrink-0'>
                        {element}
                    </div>
                ))}
            </div>
            <button
                onClick={nextSlide}
                className='cursor-pointer text-3xl hover:text-primary-light dark:hover:text-primary-dark transform rotate-180'>
                <MdArrowBackIosNew />
            </button>
        </div>
    )
}
