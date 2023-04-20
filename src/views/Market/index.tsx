import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Tab,
} from "@mui/material";
import React, { useState } from "react";
import { GiBuyCard } from "react-icons/gi";
import BiButton from "../../components/BiButton";

import IconLabelTabs from "../../components/IconLabelTabs";
import AdTable from "../../components/Table";
import { getColors } from "../../util/assets";
import { StyledMarket } from "./style";

const Market = () => {
  const [values, setValues] = useState({
    amount: "",
    country: "",
    currencies: "",
    payment: "",
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <StyledMarket>
      <div className="mkt_bg">
        <p className="mkt_h">Find the best offer</p>
        <div className="mkt_tabs">
          <IconLabelTabs
            tabs={[
              {
                icon: <GiBuyCard />,
                label: "Your Ads",
                index: 0,
                children: (
                  <>
                    <div className="tb">
                      <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                          Amount
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={values.amount}
                          onChange={handleChange("amount")}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Amount"
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          value={values.country}
                          onChange={handleChange("country")}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>Select Country</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="tb_one">
                      <FormControl sx={{ m: 1, width: "100%" }}>
                        <Select
                          value={values.currencies}
                          onChange={handleChange("currencies")}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>All currencies</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="tb_one">
                      <FormControl sx={{ m: 1, width: "100%" }}>
                        <Select
                          value={values.payment}
                          onChange={handleChange("payment")}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>All payment method</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="tb_btn">
                      <BiButton
                        bg={getColors.primary}
                        hover={getColors.dark_primary}
                        color={getColors.white}
                      >
                        Search for offer
                      </BiButton>
                    </div>
                  </>
                ),
              },
              {
                icon: <GiBuyCard />,
                label: "Open Trades",
                index: 1,
                children: (
                  <>
                    <div className="tb">
                      <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                          Amount
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={values.amount}
                          onChange={handleChange("amount")}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Amount"
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          value={values.country}
                          onChange={handleChange("country")}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>Select Country</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="tb_one">
                      <FormControl sx={{ m: 1, width: "100%" }}>
                        <Select
                          value={values.currencies}
                          onChange={handleChange("currencies")}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>All currencies</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="tb_one">
                      <FormControl sx={{ m: 1, width: "100%" }}>
                        <Select
                          value={values.payment}
                          onChange={handleChange("payment")}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>All payment method</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="tb_btn">
                      <BiButton
                        bg={getColors.secondary}
                        hover={getColors.dark_secondary}
                        color={getColors.white}
                      >
                        Search for offer
                      </BiButton>
                    </div>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="s_tab">
        <AdTable />
      </div>
    </StyledMarket>
  );
};

export default Market;
