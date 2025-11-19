import { Check, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";



export default function SeafarerStatus({openStatusDialog, setOpenStatusDialog,setSeafarers}) {
  
    const handleStatusChange = () => {
      if (!openStatusDialog) return;
  
      const newStatus = openStatusDialog.status;
  
      setSeafarers((prev) =>
        prev.map((s) =>
          s.sno === openStatusDialog.sno ? { ...s, status: newStatus } : s
        )
      );
  
      setOpenStatusDialog(null);
    };
  
 
  {
    return (
      <Dialog
        open={!!openStatusDialog}
        onClose={() => setOpenStatusDialog(null)}
        // fullWidth
        
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
        <DialogTitle
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            color: "#259BC1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          Change Status
          <IconButton onClick={() => setOpenStatusDialog(null)}>
            <Close
              sx={{
                backgroundColor: " #259BC1",
                color: "#ffffff",
                fontSize: "17px",
              }}
              fontSize="18px"
            />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ 
          minWidth: 320,
          
           }}>
          <FormControl>
            <RadioGroup
              value={openStatusDialog?.status || ""}
              onChange={(e) =>
                setOpenStatusDialog((prev) => ({
                  ...prev,
                  status: e.target.value,
                }))
              }
            >
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                    fontFamily: "poppins, sans-serif",
                  },
                }}
                value="Active"
                control={
                  <Radio
                    sx={{
                      color: "#259BC1",
                      "&.Mui-checked": {
                        color: "#00B8D4",
                      },
                    }}
                  />
                }
                label="Active"
              />
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                    fontFamily: "poppins, sans-serif",
                  },
                }}
                value="Inactive"
                control={
                  <Radio
                    sx={{
                      color: "#259BC1",
                      "&.Mui-checked": {
                        color: "#00B8D4",
                      },
                    }}
                  />
                }
                label="Inactive"
              />
            </RadioGroup>
          </FormControl>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
              mb:1,
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#259BC1",
                textTransform: "none",
                fontSize: "13px",
                fontFamily:"Poppins , sans-serif",
                "& .MuiButton-startIcon": {
                  marginRight: "4px",
                  "& > *:nth-of-type(1)": {
                    fontSize: "18px",
                  },
                },
              }}
              onClick={handleStatusChange}
              startIcon={<Check />}
            >
              Update
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    );
  }
}
