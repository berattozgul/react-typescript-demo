import React from 'react';

type InputProps = React.ComponentProps<'input'>


export const CustomInput = (props:InputProps) => {
    return (
        <div>
            <input type="text" {...props}/>
        </div>
    )
}