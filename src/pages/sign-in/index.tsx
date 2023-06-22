import { Box, Button, SxProps, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { signInStyle } from "./signStyle";

function SignIn() {
  return (
    <Box sx={{ ...signInStyle } as SxProps}>
      <div className="boxWrapper">
        <Box className="innerBoxWrapper">
          <Box className="logoWrapper">
            <Image
              src="/assets/googleLogo.svg"
              width={100}
              height={50}
              alt="logo"
            />
          </Box>
          <Box className="headerWrapper">
            <h3>Sign in</h3>
            <p>Use Your Google Account</p>
          </Box>
          <TextField
            className="textField"
            id="outlined-basic"
            variant="outlined"
            placeholder="Email or phone"
          />
          <Box className="forgotEmailWrapper">
            <Link className="forgotEmail" href="#">
              Forgot email
            </Link>
          </Box>
          <Box className="textWrapper">
            Not your computer? Use Private Browsing windows to sign in.{" "}
            <span>Learn more</span>
          </Box>
          <Box className="bottomItem">
            <Link href="#">Create Account</Link>
            <Button variant="contained">Next</Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default SignIn;
