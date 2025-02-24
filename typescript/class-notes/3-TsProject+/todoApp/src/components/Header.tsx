import { Typography } from "@mui/material"


const Header = () => {
  return (
    <Typography
    component="h1"
    variant="h2"
    align="center"
    sx={{
          background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "bold",
        textShadow: "3px 3px 5px rgba(0,0,0,0.3)",
        padding: "1rem",
        marginBottom: "1.5rem",
    }}>
        Todo App With TypeScript
    </Typography>
  )
}

export default Header