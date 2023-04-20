

import styled from "styled-components";



interface props {
  children?: any;
  bg?: string;
  color?: string;
  hover?: string;
  click?: React.MouseEventHandler<HTMLButtonElement>
}

interface stprop {
  bg?: string;
  color?: string;
  hover?: string;
  
}

const Style = styled.div<stprop>`
  .btn {
    width: 100%;
    background-color: ${(prop) => prop.bg};
    color: ${(prop) => prop.color};
    border: none;
    padding: 0.8rem 0;
    font-size: 1rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition:all 500ms ease;
    button{
      color: ${(prop) => prop.color};
    }
    &:hover {
      background-color: ${(prop) => prop.hover};
      cursor: pointer;
    }
  }
`;
const BiButton = ({ children, bg, hover, color, click}: props) => {
  return (
    <Style bg={bg} hover={hover} color={color}>
       <button className="btn" onClick={click} type="submit">
      {children}
    </button>
    </Style>
   
  );
};



export default BiButton;
