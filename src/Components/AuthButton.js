import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LoginButton = ({ loggedIn, updateUser }) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user } = useAuth0();

  useEffect(() => {
    // console.log("use Effect AuthButton");
    if (user) {
      updateUser(user);
    }
  }, [user]);

  return (
    <>
      {loggedIn ? (
        <Button style={{ minWidth: "100px" }} onClick={() => logout()}>
          Log Out
        </Button>
      ) : (
        <Button style={{ minWidth: "100px" }} onClick={() => loginWithRedirect()}>
          Log In
        </Button>
      )}
    </>
  );
};

export default LoginButton;
