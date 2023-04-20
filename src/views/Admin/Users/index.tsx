import { Box, Grid, Paper, styled } from "@mui/material";
import React from "react";
import AdTable from "../../../components/Table";
import { StyledUser } from "./style";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,

  color: theme.palette.text.secondary,
  height: "160px",
  width: 200,
}));

const Users = () => {
  return (
    <StyledUser>
      <div className="summary">
        <Grid container spacing={2}>
          <Grid item xs={6} key={1}>
            <Box
              sx={{
                p: 2,
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
                gap: 3,
              }}
            >
              <Item key={1} elevation={4}>
                <div className="tu">
                  <div className="title">Users</div>
                  <div className="amt">10</div>
                </div>
              </Item>

              <Item key={2} elevation={4}>
                <div className="tu">
                  <div className="title">Blocked</div>
                  <div className="amt">10</div>
                </div>
              </Item>

              <Item key={2} elevation={4}>
                <div className="tu">
                  <div className="title">Deleted</div>
                  <div className="amt">10</div>
                </div>
              </Item>
              <Item key={2} elevation={4}>
                <div className="tu">
                  <div className="title">Inactive</div>
                  <div className="amt">10</div>
                </div>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className="user_tb">
        <AdTable />
      </div>
    </StyledUser>
  );
};

export default Users;
