export const SET_USERS = "SET_USERS";

export const setUsers = () => dispatch => {
  return fetch('https://reqres.in/api/users?page=1').then(response => response.json()).then(result => {
    dispatch({
      type: SET_USERS,
      payload: result.data
    })
  }) 
};

export const updateUser = (list) => dispatch => {
  dispatch({
    type: SET_USERS,
    payload: list
  })
}
