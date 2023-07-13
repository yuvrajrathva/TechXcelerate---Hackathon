import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { auth, provider } from "../config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Dashboard from "../pages/Dashboard";

function SimpleDialog(props) {
  const { onClose, open } = props;
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // setValue(result.user.email);
        localStorage.setItem("email", result.user.email);
        navigate("/dashboard");
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.table(credential, token, user);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.table(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Sign Up or Log In using Google </DialogTitle>
        <Button
          className="bg-[#285F4] py-3 px-7 mx-5 mb-5"
          variant="outlined"
          onClick={handleClick}
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="google"
            className="inline-block mr-2"
          />
          Sign Up with Google
        </Button>
      </Dialog>
    </>
  );
}

export default SimpleDialog;
