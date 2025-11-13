import { Check, Close, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Password(
    {openPassword,closeDialogs,}
){
  const [showPassword,setShowPassword]=useState(false);
  const handleClick =  () => setShowPassword((prev)=>!prev)
  const handleMouse =(event)=>{
    event.preventDefault();
  }

    return(
           <Dialog
            fullWidth
            maxWidth="xs"
            sx={{ borderColor: " #006D90" }}
            open={openPassword}
            onClose={closeDialogs}
          >
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: 400,
                color: "#006D90",

                fontFamily: "Poppins",
                fontSize: " 17px",
              }}
            >
              SeaFarer Password
              <IconButton sx={{ color: "#006D90" }} onClick={closeDialogs}>
                <Close
                  sx={{
                    backgroundColor: "#006D90",
                    color: "#ffffff",
                    fontSize: "18px",
                    borderRadius: "2px",
                  }}
                />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography sx={{ fontSize: "16px" ,fontFamily:"poppins"}}>
                Enter your Password
                <span> </span>
                <Typography display="inline" color="#f80000ff">
                  *
                </Typography>
              </Typography>
              <TextField
                placeholder="New Password"
                type={showPassword ? "text":"password"}
                fullWidth
                InputProps={{
                  endAdornment:(
                    <InputAdornment position="end">
                      <IconButton onClick={handleClick}
                      onMouseDown={handleMouse}
                      edge="end">
                        {showPassword ?<VisibilityOff sx={{fontSize:"19px",color:"#006D90"}}/> :<Visibility  sx={{fontSize:"19px",color:"#006D90"}}/>}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{
                  borderRadius: "1px",
                  fontSize: "12px",
                  "& .MuiInputBase-input::placeholder": {
                    fontSize: "13px",
                      
                  },
                   "& .MuiOutlinedInput-root": {
                            borderRadius: "px",
                          
                            paddingLeft: "10px",
                            "& fieldset": {
                              borderWidth: "1px",
                              borderColor: "#B0BEC5",
                            },
                            "&:hover fieldset": {
                              borderColor: "#3fadd2ff",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#006D90",
                            },
                          },
                    
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#006D90",
                  textTransform: "none",
                  fontSize: "12px",
                  "& .MuiButton-startIcon": {
                    marginRight: "4px",
                    "& > *:nth-of-type(1)": {
                      fontSize: "13px",
                    },
                  },
                }}
                onClick={closeDialogs}
                startIcon={<Check />}
              >
                Update
              </Button>
            </DialogActions>
          </Dialog>
    )
}