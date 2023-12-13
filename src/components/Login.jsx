import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";



export const Login = ()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    return ( <>
        <Box
        className='login-page'
        >
          <div>
            <Typography
              sx={{ mt: 3 }}
              align="center"
              color="primary"
              variant="h5"
            >
              Please Login to your Account!
            </Typography>
          </div>
  
          <div>
            <TextField
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              align="center"
            ></TextField>
          </div>
          <div>
            <TextField
              onBlur={(event) => event}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              align="center"
              fullWidth
              required
            ></TextField>
          </div>
  
          <div>
            <Button
              type="submit"
              align="center"
              variant="contained"
              color="primary"
              onClick={() => {
                alert("You have Successfully Loged in!");
              }}
            >
              LogIn
            </Button>
          </div>
        </Box>
      </>)
}