type GreetProps ={
    name: string
    messageCount: number
    isLoggedIn: boolean
}
export const Greet = (props:GreetProps) =>{
    return (
        <div>
            <h2>
                {props.isLoggedIn ? 'Welcome {props.name}! Welcome to Here! You have {props.messageCount} mesages':'Welcome Guest'}
            </h2>
        </div>
    )
}