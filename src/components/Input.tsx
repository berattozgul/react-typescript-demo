type InputProps = {
    handleChange:(event : React.ChangeEvent<HTMLInputElement>) => void
    value:string
}
export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <input type="text" onChange={props.handleChange} value={props.value} />
}