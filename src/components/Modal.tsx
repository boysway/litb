import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getColors } from "../util/assets";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  maxHeight: '500px',
  overflowY:"scroll",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  '&::-webkit-scrollbar': {
    width: '0.2em'
  },
 
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: getColors.dark_secondary,
   
  }
};
interface props {
  open: any;
  handleClose: any;
  children: any;
}

export default function TransitionsModal({
  open,
  handleClose,
  children,
}: props) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
