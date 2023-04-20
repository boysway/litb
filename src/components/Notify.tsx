import React from 'react'
import styled from 'styled-components';
import { getColors } from '../util/assets';

interface props{
  children:any;
  type:string
}

interface sprop{
  type:string
}

const Style =  styled.div<sprop>`
     background-color: ${(p)=> p.type === "error" ? "red" : getColors.dark_secondary};
     color: ${getColors.white};
     padding:0.6rem;
     text-align:center;
     margin-top: 1rem;
     .message{
      font-size: 0.8rem;
     }
`

const Notify = ({children, type}:props) => {
  return (
        <Style type={type}>
            <div className="message">
                {children}
            </div>
        </Style>
  )
}

export default Notify