import styled from "styled-components";
import { getColors } from "../../../util/assets";

export const StyledUser = styled.div`
  .tu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .title {
      font-size: 1.6rem;
      color: ${getColors.primary};
    }

    .amt {
      font-size: 3rem;
      color: ${getColors.tetiary};
      margin-top: 0.2rem;
    }
  }

  .user_tb {
    margin-top: 2rem;
  }
`;
