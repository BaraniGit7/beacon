import { Check, Close } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField, Typography } from "@mui/material";

export default function Password(
    {openPassword,closeDialogs,}
){
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
                fontSize: " 16px",
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
              <Typography sx={{ fontSize: "14px" }}>
                Enter your Password{" "}
                <Typography display="inline" color="#f80000ff">
                  *
                </Typography>
              </Typography>
              <TextField
                placeholder="New Password"
                type="password"
                sx={{
                  borderRadius: "1px",
                  fontSize: "12px",
                  "& .MuiInputBase-input::placeholder": {
                    fontSize: "13px",
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