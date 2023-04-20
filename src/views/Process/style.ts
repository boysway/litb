import styled from "styled-components";
import { getColors } from "../../util/assets";
const { white, dark_secondary, secondary } = getColors;

export const StyledProcess = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed,
  .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    color: ${dark_secondary};
  }
  .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
    color: ${secondary};
  }
  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${secondary};
  }
  .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root {
    color: ${secondary};
  }
  .css-1a1fmpi-MuiInputBase-root-MuiInput-root:before,
  .css-1a1fmpi-MuiInputBase-root-MuiInput-root:after {
    border-bottom: 1px solid ${secondary};
  }

  .pf {
    padding: 3rem;
    min-width: 300px;
    max-width: 400px;
    background-color: ${white};

    .reg_finish {
      margin: 2rem 0;
    }

    .form {
      margin-top: 2rem;

      .policy {
        max-height: 200px;
        overflow: scroll;
      }
    }
  }

  .logo {
    display: flex;
    place-content: center;

    img {
      height: 5rem;
      width: 5rem;
    }
  }
`;
