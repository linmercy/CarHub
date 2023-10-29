"use client";

import { ButtonProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const Button = ({title, styles, handleClick, type} : ButtonProps ) => {
  return (
    <button
        disabled={false}
        type={type || "button"} 
        className={`custom-btn ${styles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default Button