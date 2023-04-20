import React from "react";
import { PushSpinner } from "react-spinners-kit";
import styled from "styled-components";
import { getColors } from "../util/assets";

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
  position: fixed;
  display:flex;
  justify-content:center;
  align-items:center;
  top:0;
  left:0;
`;

const Loading = () => {
  return (
    <StyledLoading>
      <div className="loader">
        <PushSpinner size={30} color={getColors.white} loading={true} />;
      </div>
    </StyledLoading>
  );
};

export default Loading;
