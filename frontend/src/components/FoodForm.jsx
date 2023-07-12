import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FoodForm = ({ open, handleClose }) => {
  const [foodType, setFoodType] = useState("");
  const [expirationTime, setExpirationTime] = useState("");
  const [foodWeight, setFoodWeight] = useState("");
  const [location, setLocation] = useState("");
  const [customLocation, setCustomLocation] = useState("");

  useEffect(() => {
    setFoodType("");
    setExpirationTime("");
    setFoodWeight("");
    setLocation("");
    setCustomLocation("");
  }, [open]);

  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  const handleExpirationChange = (event) => {
    setExpirationTime(event.target.value);
  };

  const handleFoodWeightChange = (event) => {
    setFoodWeight(event.target.value);
  };

  const handleCurrentLocation = (event) => {
    const successCallback = (position) => {
      const getAddress = async (lat, long) => {
        const response = await axios.get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
        );
        setLocation(`${response.data.city}, ${response.data.countryName}`);
        console.table(response.data);
      };
      getAddress(position.coords.latitude, position.coords.longitude);
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  const handleCustomLocation = () => {
    console.log("custom location");
  };

  const handleSubmit = () => {
    if (foodType === "" || expirationTime === "") {
      toast.error(
        `Please enter ${
          foodType === "" ? "'Type of food'" : "'Estimated expiration time'"
        } it is mandatory field 🙂`
      );
      return;
    }

    console.log("Food Type is: ", foodType);
    console.log("Expire in: ", expirationTime);
    console.log("Food weight is equal to: ", foodWeight);
    console.log("Coordinates are: ", location);
    console.log("Custom Location is: ", customLocation);

    // Close the dialog
    toast.success("Thank you for conribution 🤗");
    handleClose();
  };

  const FoodType = [
    "Vegetables",
    "Fruits",
    "Bread",
    "Dairy",
    "Meat",
    "Seafood",
    "Beverages",
    "Others",
  ];

  const Expire = [
    "Less than 1 day",
    "1 day",
    "2 days",
    "3 days",
    "More than 3 days",
  ];

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contribute for the better World</DialogTitle>
        <DialogContent className="flex flex-row gap-5 justify-between flex-wrap">
          <FormControl required fullWidth sx={{ minWidth: 80 }}>
            <FormHelperText className="ml-1">
              Enter the type of food*
            </FormHelperText>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={foodType}
              onChange={handleFoodTypeChange}
              autoWidth
            >
              {FoodType.map((food) => (
                <MenuItem key={food} value={food}>
                  {food}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl required fullWidth sx={{ minWidth: 80 }}>
            <FormHelperText className="ml-1">
              Enter estimated expiration time*
            </FormHelperText>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={expirationTime}
              onChange={handleExpirationChange}
              autoWidth
            >
              {Expire.map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogContent className="flex flex-row gap-10 justify-between">
          <FormControl sx={{ width: "25ch", minWidth: 80 }} variant="outlined">
            <FormHelperText id="outlined-weight-helper-text" className="ml-1">
              Enter estimated food weight
            </FormHelperText>
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              value={foodWeight}
              onChange={handleFoodWeightChange}
              label="Weight"
            />
          </FormControl>
          <FormControl sx={{ width: "25ch" }} variant="outlined">
            <FormHelperText id="outlined-weight-helper-text" className="ml-1">
              Upload image of food
            </FormHelperText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="file"
              fullWidth
              className="m-0"
            />
          </FormControl>
        </DialogContent>
        <DialogContent>
          <FormHelperText className="mt-2">
            Please Locate the location. A volunteer will pick that up 😊.
          </FormHelperText>
          <div className="flex flex-row flex-wrap justify-between gap-5">
            <Button
              variant="outlined"
              className="mt-2"
              onClick={handleCurrentLocation}
            >
              Current Location
            </Button>
            <Button
              variant="outlined"
              className="mt-2"
              onClick={handleCustomLocation}
            >
              Custom Location
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Send</Button>
        </DialogActions>
        <ToastContainer />
      </Dialog>
    </>
  );
};

export default FoodForm;
