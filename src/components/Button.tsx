import React from 'react'
interface IProps{
    text: string;
    color: string;
    disabled?: true|false;
    addStyle?: string;
    onClick: () => void;
}

const Button: React.FC<IProps> = ({text, color, disabled = false, addStyle, onClick}: IProps) => {
    let tailwindCSSStyle = '';
    if(color === 'blue'){
        tailwindCSSStyle = `bg-blue-500 text-white mt-6 rounded-md hover:bg-blue-600 rounded-md h-[45px] min-w-[120px] ${addStyle}  shadow-md`;
    }else{
        tailwindCSSStyle = `bg-gray-500 text-white mt-6 rounded-md hover:bg-gray-600 rounded-md h-[45px] min-w-[120px] ${addStyle}  shadow-md`
    }
    return(
    <button className={`bg-${color}-500 text-white mt-6 rounded-md hover:bg-${color}-600 rounded-md h-[45px] min-w-[120px] ${addStyle}  shadow-md`}
    onClick={onClick}
    disabled={disabled}>
        {text}
    </button>
    )
}
 
export default Button