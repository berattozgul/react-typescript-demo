type RandomNumberType= {
    value: number;
}
type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegative: never;
    isZero: never;
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean;
    isPositive: never;
    isZero: never;
}
type ZeroNumber = RandomNumberType & {
    isZero: boolean;
    isPositive: never;
    isNegative: never;
} 
type RandomNumberProps = {
    value: number;
    isPositive?: boolean;
    isNegative?: boolean;
    isZero?: boolean;
}
export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
    return (
        <div>
            {value} is {isPositive ? 'Positive' : isNegative ? 'Negative' : isZero ? 'Zero' : ''}
        </div>
    )
}