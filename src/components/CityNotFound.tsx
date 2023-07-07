import Image from 'next/image'
import catConfused from 'public/cats/cat-confused.gif'

export const CityNotFound = () => {
    return (
        <div className='flex gap-6 items-center py-6'>
            <div className='w-36'>
                <Image src={catConfused} alt='Gato confuso' />
            </div>

            <span className='text-3xl font-medium'>Cidade não encontrada</span>

            <div className='w-36 transform -scale-x-100'>
                <Image src={catConfused} alt='Gato confuso' />
            </div>
        </div>
    )
}
