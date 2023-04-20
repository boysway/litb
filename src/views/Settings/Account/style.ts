import styled from "styled-components";
import { getColors } from "../../../util/assets";

export const StyledAcc = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  .pass_change {
    background-color: ${getColors.white};
    padding: 2rem;
    .title {
      color: ${getColors.primary};
      font-size: 1.4rem;
      text-align: right;
    }

    .change {
      margin-top: 1.4rem;
      .del_btn {
        margin-top: 1rem;
      }
      .sub_t {
        font-size: 1.6rem;
        color: grey;
        font-weight: bolder;
      }
      .sub_p {
        font-size: 1.6rem;
        color: ${getColors.secondary};
        margin-top: 0.6rem;
      }

      .act {
        font-size: 1.6rem;
        text-align: right;
        color: ${getColors.dark_secondary};
        margin-top: 2rem;
      }
    }
  }

  @media only screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    .pass_change {
      background-color: ${getColors.white};
      padding: 2rem;
      .title {
        color: ${getColors.primary};
        font-size: 1rem;
        text-align: right;
      }

      .change {
        margin-top: 1rem;
        .del_btn {
          margin-top: 1rem;
        }
        .sub_t {
          font-size: 1rem;
          color: grey;
          font-weight: bolder;
        }
        .sub_p {
          font-size: 1.6rem;
          color: ${getColors.secondary};
          margin-top: 0.6rem;
        }

        .act {
          font-size: 1.6rem;
          text-align: right;
          color: ${getColors.dark_secondary};
          margin-top: 2rem;
        }
      }
    }
  }
`;
