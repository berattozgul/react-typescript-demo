type GreetProps ={
    name: string
}
export const Greet = (props:GreetProps) =>{
    return (
        <div>
            <h2>Welcome {props.name}! Welcome to Here!</h2>
        </div>
    )
}