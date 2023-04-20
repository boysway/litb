import styled from "styled-components";
import { getColors } from "../../util/assets";
const { white, dark_secondary, secondary } = getColors;

export const StyledSettings = styled.div`
  position:relative;
  margin-top:5rem;
  .sideMenu{
    position:fixed;
    background: ${white};
    
  
    width:20%;
    height:100%;
    ul{
       padding: 1rem 0;
        li{
            list-style-type:none;
           display:block;
            a{
                text-decoration:none;
                color: ${dark_secondary};
                font-size:1.2rem;
                display:block;
                padding:1rem 2rem;
                font-weight:bold;
                transition:all 500ms ease-in;
                

                &:hover{
                    background-color:${secondary};
                    color:${white}
                }
            }
        }
    }

  }

  .otherSide{
    margin-left:21%;
    padding: 2rem;
  }
`;
