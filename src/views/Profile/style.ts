import styled from "styled-components";
import { getColors } from "../../util/assets";
const { primary, dark_secondary, secondary, white, tetiary } = getColors;

export const StyledProfile = styled.div`
  .acc_dtl {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    .recent {
      background-color:${white};
      height:max-content;
      ul {
        padding: 1rem;
      }
    }
    .balance {
      padding: 1rem;
      min-width: 300px;
      background-color: ${white};
      .amounts {
        p{
          color:${tetiary};
        }
        .suc_ful, .un_suc {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap:1rem;
          div {
            background-color: ${white};
            padding: 0.6rem;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          }
        }

        h2:first-child {
          color: ${secondary};
          font-weight: bolder;
        }
      }
    }
  }
  .pro {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .edit_title {
    font-size: 1.4rem;
    color: ${primary};
    opacity: 0.3;
    font-weight: bold;
    text-align: right;
  }

  .MuiCard-root {
    padding: 0.8rem 2rem;
    position: relative;
  }

  .user_data {
    width: 30%;
  }
  .act {
    display: flex;
    justify-content: right;
    width: 100%;
    font-size: 1.6rem;
    color: ${dark_secondary};
    width: max-content;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 2rem;
  }

  .mst_pf {
    display: flex;
    justify-content: end;
    font-size: 2rem;
  }

  .dtl {
    display: flex;
    align-items: center;
    padding: 0.6rem 0;

    .wallet_add {
      font-weight: bolder;
      color: grey;
      font-size: 1.3rem;
      overflow: scroll;
    }
    .name {
      font-size: 2rem;
    }
    span {
      font-weight: bolder;
      color: ${secondary};
    }

    .ic {
      color: grey;
      font-size: 1.6rem;
      margin: 0 1.2rem;
    }
  }
`;
