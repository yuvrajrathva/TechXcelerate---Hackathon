// import React from 'react'
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Childrens from "../assets/bill-wegener-P0OJbBJ1ZTM-unsplash.jpg";
import FoodForm from "../components/FoodForm";

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Sign Up or Log In using Google </DialogTitle>
      {/* I want to add a google button here */}
      {/* want bg of colour code 285F4 */}
      <Button className="bg-[#285F4] py-3 px-7 mx-5 mb-5" variant="outlined">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="google"
          className="inline-block mr-2"
        />
        Sign Up with Google
      </Button>
    </Dialog>
  );
}

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [openGoogleBtn, setOpenGoogleBtn] = useState(false);

  const handleSignupOpen = () => {
    setOpenGoogleBtn(true);
  };

  const handleSignupClose = () => {
    setOpenGoogleBtn(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    background: {
      backgroundImage: `url(${Childrens})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  };

  return (
    <>
      {/* want one background image to whole homepage and other content on it */}
      <Container
        maxWidth=""
        className="flex flex-col justify-center h-screen p-0 m-0"
        style={style.background}
      >
        <Container maxWidth="md" className="m-auto text-center text-white ">
          <Typography variant="h2" className="font-bold">
            Welcome to the Homepage
          </Typography>
          <Typography variant="subtitle1" className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sequi aspernatur, officiis molestias sapiente quaerat laboriosam,
            commodi est enim sint dolores? Quia voluptatibus impedit, modi
            minima nobis saepe optio tempora.
          </Typography>
          <div className="flex flex-row justify-center gap-10 m-auto">
            <Button
              variant="outlined"
              className="py-3 font-medium px-7"
              onClick={handleClickOpen}
            >
              Have Food
            </Button>
            <Button
              variant="contained"
              className="py-3 bg-blue-700 px-7"
              onClick={handleSignupOpen}
            >
              Volunteering
            </Button>
            <SimpleDialog open={openGoogleBtn} onClose={handleSignupClose} />
          </div>
        </Container>
        <FoodForm open={open} handleClose={handleClose} />
      </Container>
    </>
  );
};

export default Homepage;
