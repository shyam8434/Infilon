import React from 'react'
import { Button, Grid, Paper, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateUser } from "../../AppConfig/redux/action/common";
import { useDispatch, useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FormRow = ({ user }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.common.users);

  const handleDelete = (user) => {
    var tempData = [...userData].filter((item) => user.id !== item.id);
    dispatch(updateUser(tempData));
  };

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
        <Button
          variant="outlined"
          onClick={() => handleDelete(user)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default FormRow;
