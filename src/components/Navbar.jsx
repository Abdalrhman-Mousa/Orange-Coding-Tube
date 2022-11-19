import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import  logo  from "../img/logo.png";
import { SearchBar } from "./";
import Login from "./Login";
import Logout from "./Logout";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img className="logo" src={logo} alt="logo" width={175} />
    </Link>
    <SearchBar />
    <Login/>    
  </Stack>
);

export default Navbar;
