import styled from "styled-components";
import { getColors } from "../../util/assets";

export const StyledMarket = styled.div`{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;

  .mkt_bg {
    background-color: ${getColors.white};
    border-radius: 1rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .mkt_h {
      font-size: 1.8rem;
      font-weight: bold;
      color: ${getColors.tetiary};
    }

    .mkt_tabs {
      margin-top: 1.4rem;
      .MuiTabs-flexContainer {
        display: flex;
        justify-content: center;
      }
      #simple-tab-0,
      #simple-tab-1 {
        font-size: 1.2rem;
        padding: 0 5rem;
        color: ${getColors.secondary};
      }
      .css-1aquho2-MuiTabs-indicator {
        background-color: ${getColors.dark_primary};
      }
      .tb {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
      .tb_one {
        .css-78me8v-MuiFormControl-root {
          margin: 0.4rem 0;
        }
      }
    }
  }
  .s_tab {
    margin-top: 4rem;
  }

  @media only screen and (max-width: 760px)
   {
   

  .mkt_bg {
    background-color: ${getColors.white};
    border-radius: 1rem;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .mkt_h {
      font-size: 1.8rem;
      font-weight: bold;
      color: ${getColors.tetiary};
    }

     .mkt_tabs {
      margin-top: 1.4rem;
      .MuiTabs-flexContainer {
        display: block;
        justify-content: center;
      }

        .tb {
        display:block;
     
      }
  }
`;
