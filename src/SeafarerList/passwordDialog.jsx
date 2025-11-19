import { Check, Close, Done, DoneAllOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
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
            sx={{ borderColor: " #259BC1" }}
            open={openPassword}
            onClose={closeDialogs}
          >
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: 400,
                color: "#259BC1",
                pr:1.5, //for close button padding reduce on right side
                fontFamily: "Poppins,sans-serif",
                fontSize: " 16px",
              }}
            >
              Seafarer Password
              <IconButton sx={{ color: "#259BC1" }} onClick={closeDialogs}>
                <Close
                  sx={{
                    backgroundColor: "#259BC1",
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
              <Typography sx={{ fontSize: "14px" ,fontFamily:"poppins,sans-serif"}}>
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
                        {showPassword ?<VisibilityOff sx={{fontSize:"19px",color:"#259BC1"}}/> :<Visibility  sx={{fontSize:"19px",color:"#259BC1"}}/>}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{
                 mb:1,
                  borderRadius: "1px",
                  fontSize: "12px",
                  "& .MuiInputBase-input::placeholder": {
                    fontSize: "13px",
                      
                  },
                   "& .MuiOutlinedInput-root": {
                            borderRadius: "px",
                          fontFamily:"poppins,sans-serif",
                          fontSize:"14px",
                            paddingLeft: "10px",
                            "& fieldset": {
                              borderWidth: "1px",
                              borderColor: "#B0BEC5",
                            },
                            "&:hover fieldset": {
                              borderColor: "#3fadd2ff",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#259BC1",
                            },
                          },
                    
                }}
                
              />
               <Button
                variant="contained"
                sx={{  
                      
                  ml:"auto",
                  backgroundColor: "#259BC1",
                  textTransform: "none",
                  fontSize: "13px",
                }}
                onClick={closeDialogs}
             
              >
                <Done sx={{ fontSize: "22px",  marginRight: "5px"}}/>
                Update
              </Button>
            </DialogContent>
           
          </Dialog>
    )
}