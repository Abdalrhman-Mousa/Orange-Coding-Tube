import { GoogleLogout } from "react-google-login";
function Logout() {
  const logoutHandler = () => {
    console.log ('successfully logged out!');
  };
  return (
    <GoogleLogout
      clientId="712632343962-gfti1ov84rce7cm1ofq9cvphvbk2u0i6.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logoutHandler}
    />
  );
}
export default Logout;