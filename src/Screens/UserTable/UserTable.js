import { Box, Button, Grid, Paper, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, updateUser } from "../../AppConfig/redux/action/common";
import "./userTable.scss";

import DeleteIcon from '@mui/icons-material/Delete';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UserTable = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.common.users);

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  const handleDelete = (user) => {
        var tempData = [...userData].filter(item => user.id !== item.id)  
        dispatch(updateUser(tempData))
  }

  const FormRow = ({ user }) => {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Item>{user.first_name}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.last_name}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{user.email}</Item>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" onClick={() => handleDelete(user)} startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <div className="mainContainer">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={1}>
            {userData.map((item) => {
              return <FormRow key={item.id} user={item} />;
            })}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UserTable;
