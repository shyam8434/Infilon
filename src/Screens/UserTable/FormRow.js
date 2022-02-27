import React, { useState } from "react";
import { Button, Grid, Paper, styled, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateUser } from "../../AppConfig/redux/action/common";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Save } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "75%",
}));

const FormRow = ({ user }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editData, setEditData] = useState(user);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.common.users);

  const handleDelete = (user) => {
    var tempData = [...userData].filter((item) => user.id !== item.id);
    dispatch(updateUser(tempData));
  };

  const handleOnEdit = (condition) => {
    setToggleEdit(!toggleEdit);
    if (condition) {
        var tempData = [...userData]
        tempData.forEach(item => {
            if(item.id === user.id){
                item.first_name = editData.first_name
                item.last_name = editData.last_name
                item.email = editData.email
            }
        })
      dispatch(updateUser(tempData));
    }
  };

  const handleEditText = (event) => {
    var tempData = { ...editData };
    tempData[event.target.id] = event.target.value;
    setEditData(tempData);
  };

  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Item>
          {toggleEdit ? (
            <TextField id="first_name" value={editData.first_name} onChange={handleEditText}/>
          ) : (
            user.first_name
          )}
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          {toggleEdit ? (
            <TextField id="last_name" value={editData.last_name} onChange={handleEditText}/>
          ) : (
            user.last_name
          )}
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          {toggleEdit ? (
            <TextField id="email" value={editData.email} onChange={handleEditText}/>
          ) : (
            user.email
          )}
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="outlined"
          style={{ backgroundColor: toggleEdit ? "aliceblue" : "transparent" }}
          onClick={() => handleOnEdit(toggleEdit)}
          startIcon={toggleEdit ? <Save /> : <Edit />}
        >
          {toggleEdit ? "Save" : "Edit"}
        </Button>
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
