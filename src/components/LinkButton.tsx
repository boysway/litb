
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getColors } from "../util/assets";
const {secondary, tetiary, white, primary, dark_secondary} = getColors

const SolidStyled = styled.div`
  a {
    border-radius: 10px;
    margin-top: 1rem;
    background-color: ${primary};
    display: block;
    padding: 0.3rem 1rem;
    text-decoration: none;
    color: ${white};
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease-in;

    &:hover {
      background-color: ${dark_secondary};
      color: ${white};
    }
  }
`;

const OutlinedStyled = styled.div`
  a {
    border-radius: 10px;
    border: 1px solid ${secondary};
    margin-top: 1rem;
    display: block;
    padding: 0.3rem 1rem;
    text-decoration: none;
    color: ${tetiary};
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease-in;

    &:hover {
      background-color: ${dark_secondary};
      color: ${white};
    }
  }
`;

interface props {
  children?: any;
  type: string;
  to:string;
  styles?:Object
}

const LinkButton = ({ children, type, to, styles }: props) => {
  return type === "solid" ? (
    <SolidStyled>
      <Link style={styles} className="solid" to={to}>
        {children}
      </Link>
    </SolidStyled>
  ) : (
    <OutlinedStyled>
      <Link style={styles} className="outlined" to={to}>
        {children}
      </Link>
    </OutlinedStyled>
  );
};

export default LinkButton;
