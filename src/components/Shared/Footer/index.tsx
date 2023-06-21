import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Typography
        align="center"
        mb={0}
        paragraph={true}
        sx={{
          fontSize: "12px",
          color: "text.secondary",
        }}
      >
        Copyright {new Date().getFullYear()} &copy; Design and Developed by :{" "}
        <Link href="https://simecsystem.com/">SIMEC System Ltd.</Link>
      </Typography>
    </footer>
  );
};

export default Footer;
