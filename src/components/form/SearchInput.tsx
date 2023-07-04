import { MdSearch } from 'react-icons/md'

interface ISearchInputProps {
    id: string
    placeholder?: string
}

export const SearchInput = ({ id, placeholder }: ISearchInputProps) => {
    return (
        <label htmlFor={id} className='flex relative'>
            <input
                type='text'
                placeholder={placeholder}
                id={id}
                className='rounded-xl text-sm md:text-base border border-transparent bg-secondary-light px-4 py-2 pr-10 w-full outline-none text-medium-gray focus:bg-transparent focus:border-primary-light focus:dark:border-primary-dark focus:dark:text-secondary-light'
            />
            <MdSearch className='text-xl md:text-2xl absolute top-2/4 -translate-y-2/4 right-3 md:right-3 text-primary-light dark:text-primary-dark' />
        </label>
    )
}
