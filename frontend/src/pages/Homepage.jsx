// import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Childrens from "../assets/bill-wegener-P0OJbBJ1ZTM-unsplash.jpg";
import FoodForm from "../components/FoodForm";
import SimpleDialog from "../components/SignUp";

const Homepage = () => {
  const [logedIn, setLogedIn] = useState(false); // to check if user is loged in or not
  const [open, setOpen] = useState(false);
  const [openGoogleBtn, setOpenGoogleBtn] = useState(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setLogedIn(true);
    }
  }, []);

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
            {logedIn ? (
              <Button
                variant="contained"
                className="py-3 bg-blue-700 px-7"
                href="/dashboard"
              >
                Dashboard
              </Button>
            ) : (
              <Button
                variant="contained"
                className="py-3 bg-blue-700 px-7"
                onClick={handleSignupOpen}
              >
                Volunteering
              </Button>
            )}

            <SimpleDialog open={openGoogleBtn} onClose={handleSignupClose} />
          </div>
        </Container>
        <FoodForm open={open} handleClose={handleClose} />
      </Container>
    </>
  );
};

export default Homepage;
