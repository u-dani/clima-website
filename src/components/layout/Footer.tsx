import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-6 bg-secondary-dark p-6 text-center tracking-wide text-secondary-light'>
      <span className='md:text-lg'>
        ✨ Projeto feito com Nextjs + React, TypeScript e TailwindCss ✨
      </span>

      <div className='flex flex-wrap gap-4 md:gap-6'>
        <Link
          title='Ver código no Github'
          href='https://github.com/u-dani/clima-website'
          target='_blank'
          className='flex items-center gap-2 rounded-lg border px-4 py-2 duration-150 hover:opacity-75'>
          <FaGithub />
          <span>Código</span>
        </Link>

        <Link
          title='Ver design no Figma'
          href='https://www.figma.com/file/YQYQMsAfHLlnUBosWqjFzp/Design-%3AD?type=design&node-id=0%3A1&mode=dev'
          target='_blank'
          className='flex items-center gap-2 rounded-lg border px-4 py-2 duration-150 hover:opacity-75'>
          <FaFigma />
          <span>UI Design</span>
        </Link>
      </div>
    </footer>
  )
}
