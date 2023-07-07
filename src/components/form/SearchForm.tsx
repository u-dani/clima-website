import { SearchInput } from './SearchInput'

interface ISearchFormProps {
    handleSubmit({ valueInput }: { valueInput: string | undefined }): void
}

export const SearchForm = ({ handleSubmit }: ISearchFormProps) => {
    const input = document.querySelector('input')

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                handleSubmit({ valueInput: input?.value })
            }}>
            <SearchInput
                id='city-name'
                placeholder='Digite o nome da sua cidade'
            />
        </form>
    )
}
