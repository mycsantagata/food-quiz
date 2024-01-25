import React from 'react'
interface IProps{
    text: string;
    color: string;
    disabled?: true|false;
    addStyle?: string;
    onClick: () => void;
}

const Button: React.FC<IProps> = ({text, color, disabled = false, addStyle, onClick}: IProps) => {
    return(
    <button className={`bg-${color}-500 text-white mt-6 rounded-md hover:bg-gray-${color}-600 rounded-md h-[45px] min-w-[120px] ${addStyle}  shadow-md`}
    onClick={onClick}
    disabled={disabled}>
        {text}
    </button>
    )
}
 
export default Button