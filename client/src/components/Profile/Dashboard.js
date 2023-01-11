import React from 'react'
import { useHistory } from "react-router-dom";

const Dashboard = ({updateUser}) => {
  const history = useHistory();

  const handleLogOut = () => {
    fetch(`/logout`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        updateUser(false);
        history.push("/");
        //redirect user to home
      }
    });
  };
  console.log('user')
  return (
    <div>
      <button onClick={handleLogOut}>
        Log out
      </button>
    </div>
  )
}

export default Dashboard