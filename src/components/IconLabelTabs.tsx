import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FaSellcast } from "react-icons/fa";
import { GiBuyCard } from "react-icons/gi";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface tabProps {
  tabs:Array<any>
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({tabs} : tabProps) {
  const [value, setValue] = React.useState(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((e: any) => {
            return (
              <Tab  key={e.index} icon={e.icon} label={e.label} {...a11yProps(e.index)} />
            );
          })}
          
        </Tabs>
      </Box>
      {tabs.map((e: any) => {
        return (
          <TabPanel key={e.index} value={value} index={e.index}>
            {e.children}
          </TabPanel>
        );
      })}
    </Box>
  );
}
