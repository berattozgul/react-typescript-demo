import React from "react";
import { Greet } from "../Greet";

export const CustomComponents = (props:React.ComponentProps<typeof Greet>) => {
    return(
        <div>
            {props.name}
        </div>
    )
}