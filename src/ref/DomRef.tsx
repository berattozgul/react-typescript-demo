import {useRef, useEffect} from 'react';
export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    },[])
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}