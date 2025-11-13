import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import pic from "./assets/pic.png";
import { Check, Close } from "@mui/icons-material";
export default function DeleteDialog({openDelete,closeDialogs,selectedSeafarer,  onConfirm,onClose}){
    return(
          <Dialog
            fullWidth
            maxWidth="xs"
            open={openDelete}
            onClose={closeDialogs}
            PaperProps={{
              sx: {
                border: "2px solid #259BC1",
                borderRadius: "12px",

                backgroundColor: "#ffffffff",
                "@media (max-width:600px)": {
                  border: "2px solid #259BC1",
                  borderRadius: "10px",
                  mx: 2,
                },
              },
            }}
          >
            <DialogTitle align="right">
            
                <Close onClick={closeDialogs}
                  sx={{
                    backgroundColor: "#259BC1",
                    color: "#ffffff",
                    fontSize: "20px",
                    borderRadius: "2px",
                  }}
                />
            </DialogTitle>
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: 500,
                  fontStyle: "medium",
                  fontSize: "16px",
                  alignItems: "center",
                  "@media (max-width:600px)": {
                    fontSize: "18px",
                  },
                }}
              >
                Do you really want to delete {selectedSeafarer?.name} List?
              </Typography>
              <img
                src={pic}
                alt="warning"
                style={{ width: "270px", height: "211px" }}
              />
            </DialogContent>

            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<Check />}
                  sx={{
                    backgroundColor: "#259BC1",
                    textTransform: "none",
                    borderRadius: "8px",
                    width: "auto",
                    height: "36px",
                    fontSize: "13px",
                    "&:hover": { backgroundColor: "#00506b" },
                    "@media (max-width:600px)": {
                      p: 3,
                      width: "auto",
                      height: "20px",
                    },
                  }}
                  onClick={() => {
                 onConfirm();
              onClose();
                  }}
                >
                  Delete This Seafarer
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<Close />}
                  sx={{
                    color: "#259BC1",
                    borderColor: "#259BC1",
                    textTransform: "none",
                    borderRadius: "8px",

                    fontSize: "13px",
                    "&:hover": {
                      borderColor: "#00506b",
                      color: "#00506b",
                    },
                    "@media (max-width:600px)": {
                      p: 3,
                      width: "auto",
                      height: "20px",
                    },
                  }}
                  onClick={closeDialogs}
                >
                  Cancel This Time
                </Button>
              </Box>
            </DialogActions>
          </Dialog>
    )
}