import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../AppConfig/redux/action/common";
import FormRow from "./FormRow";
import "./userTable.scss";


const UserTable = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.common.users);

  useEffect(() => {
    dispatch(setUsers());
  }, []);


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
