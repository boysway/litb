import styled from "styled-components";
import { getColors } from "../../util/assets";
const { white, secondary, primary } = getColors;

export const StyledVerifyEmail = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .verify {
    width: 400px;
    background-color: ${white};

    .ver_input_con {
      display: flex;
      justify-content: center;
      margin-top: 1.6rem;
      .ver_input {
        padding:1rem;
        font-size:2rem;
        width:30%;
        letter-spacing:0.8rem;
      }
    }

    .ver_email {
      padding: 0.4rem 2rem;
    }
    .head {
      width: 100%;
      padding: 0.4rem 2rem;
      display: flex;
      h1 {
        width: 70%;
        font-weight: bold;
        color: ${primary};
      }
      img {
        width: 4rem;
        height: 4rem;
      }
    }

    .msg {
      padding: 0.4rem 2rem;
    }
    .resend {
      text-align: center;
      margin-top: 2rem;
    }
    .ver_bt{
      margin-top: 1rem;
    }
  }
`;
