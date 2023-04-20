import styled from "styled-components";
import { getColors, getAssets } from "../../util/assets";
const { white, primary, secondary, dark_primary, tetiary } = getColors;
const { login } = getAssets;
export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .reg_img {
    background: ${secondary};
    overflow: hidden;
    width: fit-content;
    width: 40%;
    height: 600px;
    max-width: 500px;
    max-height: 800px;
    background: url(${login});
    background: linear-gradient(
        to right,
        rgba(1, 55, 53, 0.7),
        rgba(1, 55, 53, 0.7)
      ),
      url(${login}) no-repeat fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: end;
    .reg_text {
      font-size: 1.6rem;
      padding: 2rem;
      color: ${white};
      font-weight: bold;

      .reg_mv_btn {
        display: flex;
        justify-content: end;
        margin-top: 1rem;
        .mv_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.2rem 0;
          background-color: ${primary};
          width: 20%;
          transition: all 500ms ease-in;

          &:hover {
            background-color: ${dark_primary};
          }
        }
      }
    }
  }
  .reg_form {
    background-color: ${white};
    width: 50%;
    height: 600px;
    max-height: 800px;
    max-width: 500px;

    .rf_lg {
      display: flex;
      justify-content: flex-end;

      img {
        width: 7vw;
        height: 7vw;
      }
    }

    .form_in {
      padding: 0.2rem 6rem;

      .reg_wel {
        div:nth-child(1) {
          font-size: 2rem;
          font-weight: bolder;
        }

        div:nth-child(2) {
          font-size: 0.8rem;
          margin-top: 0.4rem;
        }
      }

      .or {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;

        div:nth-child(odd) {
          height: 0.5px;
          width: 40%;
          margin: 0 0.6rem;
          background-color: ${tetiary};
        }
      }

      .inputs {
        margin-top: 2rem;
        form {
          .Mui-focused {
            color: ${secondary};
          }
          .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root {
            color: ${secondary};
          }
          .css-1a1fmpi-MuiInputBase-root-MuiInput-root:before,
          .css-1a1fmpi-MuiInputBase-root-MuiInput-root:after {
            border-bottom: 1px solid ${secondary};
          }

          input {
            color: ${tetiary};
          }

          .css-1d1r5q-MuiFormHelperText-root {
            color: red;
          }
        }
      }
    }

    .fgt {
      margin-top: 1.5rem;
      display: flex;
      justify-content: right;
      a {
        text-decoration: none;
        font-size: 0.8rem;
        color: ${tetiary};
        transition: all 500ms ease;

        &:hover {
          color: ${primary};
        }
      }
    }

    .sub {
      margin-top: 2rem;
    }
  }

  @media only screen and (max-width: 760px) {
        display:flex;
        flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center

  height: 100vh;
    .reg_img {
    background: ${secondary};
    overflow: hidden;
    width: fit-content;
    width: 40%;
    height: 600px;
    max-width: 500px;
    max-height: 800px;
    background: url(${login});
    background: linear-gradient(
        to right,
        rgba(1, 55, 53, 0.7),
        rgba(1, 55, 53, 0.7)
      ),
      url(${login}) no-repeat fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: end;
    .reg_text {
      font-size: 1.6rem;
      padding: 2rem;
      color: ${white};
      font-weight: bold;

      .reg_mv_btn {
        display: flex;
        justify-content: end;
        margin-top: 1rem;
        .mv_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.2rem 0;
          background-color: ${primary};
          width: 20%;
          transition: all 500ms ease-in;

          &:hover {
            background-color: ${dark_primary};
          }
        }
      }
    }
  }
  }
`;
