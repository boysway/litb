import styled from "styled-components";
import { getColors } from "../../util/assets";

export const StyledTrade = styled.div`
  
  .bal {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    color: ${getColors.dark_primary};
    font-weight:bolder;

    div {
      background-color: ${getColors.white};
      padding: 2rem;
      border-radius: 1rem;
      display:flex;
      align-items:center;
      flex-direction:column;

      p{
        margin-top: 1rem;
      }

    }
  }

  .tab{
    margin-top:2rem;
    background-color: ${getColors.white};
   
    
    .tb{
      
      .MuiTabs-flexContainer{
        display:flex;
        justify-content:center;
        button{
          color: ${getColors.secondary};
        }
      }
      .MuiTabs-indicator{
        background-color:${getColors.dark_primary}
      }
    }
    .tb_ttl{
      font-size:2rem;
      font-weight:bold;
      display:flex;
      justify-content:space-between;
      color:${getColors.dark_primary};
      button{
        padding:1rem 1rem;
      }
    }
    .sl{
      margin-top:4rem;
    }
    .tb_srch{
      margin-top:2rem;
    }
  }

 

`;
