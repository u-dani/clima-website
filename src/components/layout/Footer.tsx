import Link from 'next/link'

import { FaGithub } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'
import { SiNotion } from 'react-icons/si'

export const Footer = () => {
    return (
        <footer className='flex flex-col items-center p-6 gap-6 text-center tracking-wide bg-secondary-dark text-secondary-light  md:p-12'>
            <span className='md:text-lg'>
                ✨ Projeto feito com Nextjs + React, TypeScript e TailwindCss ✨
            </span>

            <div className='flex gap-4 md:gap-6 flex-wrap'>
                <Link
                    title='Ver código no Github'
                    href='https://github.com/u-dani/clima-website'
                    target='_blank'
                    className='flex items-center gap-2 hover:opacity-75 duration-150 border rounded-lg py-2 px-4'>
                    <FaGithub />
                    <span>Código</span>
                </Link>

                <Link
                    title='Ver design no Figma'
                    href='https://www.figma.com/file/YQYQMsAfHLlnUBosWqjFzp/Design-%3AD?type=design&node-id=0%3A1&mode=dev'
                    target='_blank'
                    className='flex items-center gap-2 hover:opacity-75 duration-150 border rounded-lg py-2 px-4'>
                    <FaFigma />
                    <span>Design</span>
                </Link>

                <Link
                    title='Ver documentação no Notion'
                    href='https://spectrum-attempt-1c0.notion.site/Clima-Website-d3a1a70ebd2b4156a359964418d45c97'
                    target='_blank'
                    className='flex items-center gap-2 hover:opacity-75 duration-150 border rounded-lg py-2 px-4'>
                    <SiNotion />
                    <span>Documentação</span>
                </Link>
            </div>
        </footer>
    )
}
