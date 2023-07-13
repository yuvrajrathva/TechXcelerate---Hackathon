import React from "react";
import Button from "@mui/material/Button";

const Dashboard = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div>Dashboard Page</div>
      <Button variant="contained" onClick={logout} className="bg-red-600">Logout</Button>
    </>
  );
};

export default Dashboard;
