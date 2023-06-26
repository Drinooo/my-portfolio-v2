import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "./ThemeProvider";
import { useTheme } from "@mui/material/styles";
import { CTATypo } from "./Typography";
import CloseIcon from '@mui/icons-material/Close';

export const CustButton = ({ variant }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant={variant}
          color="tertiary"
          sx={{
            padding: "20px 40px",
            borderRadius: "10px",
            "@media (max-width:600px)": {
              fontSize: "15px",
              padding: "10px 20px",
            },
          }}
        >
          Download CV
        </Button>
      </ThemeProvider>
    </>
  );
};

export const CTABtn = ({ variant }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClickOpen}
          variant={variant}
          color="tertiary"
          sx={{
            padding: "20px 40px",
            borderRadius: "10px",
            "@media (max-width:600px)": {
              fontSize: "15px",
              padding: "10px 20px",
            },
          }}
        >
          Let's Talk
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          color="primary"
        >
          <Box position={"absolute"} right={0}>
            <Button
              color="primary"
              onClick={handleClose}
              sx={{ padding: "20px" }}
            >
              <CloseIcon />
            </Button>
          </Box>
          <DialogTitle>
            <CTATypo variant={"h3"} color={"primary"}>
              Let's Talk
            </CTATypo>
          </DialogTitle>
          <DialogContent>
            <Input
              fullWidth
              required
              placeholder="Name"
              type="text"
              sx={{ mb: 3 }}
            />
            <Input
              fullWidth
              required
              placeholder="Email"
              type="email"
              sx={{ mb: 3 }}
            />
            <Input
              fullWidth
              required
              placeholder="Message"
              rows={5}
              multiline
              type="text"
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              Submit
            </Button>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </>
  );
};
