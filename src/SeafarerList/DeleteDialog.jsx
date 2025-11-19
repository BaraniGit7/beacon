import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import pic from "./assets/pic.png";
import { Check, Close } from "@mui/icons-material";
export default function DeleteDialog({
  openDelete,
  closeDialogs,
  selectedSeafarer,
  onConfirm,
  onClose,
}) {
  return (
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
        <Close
          onClick={closeDialogs}
          sx={{
            backgroundColor: "#259BC1",
            color: "#ffffff",
            fontSize: "20px",
            borderRadius: "2px",
            transition: "transform 0.25s ease",

            "&:hover": {
              transform: "scale(1.25)",
              animation: "bounce 0.4s ease",
            },

            "@keyframes bounce": {
              "0%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.35)" },
              "100%": { transform: "scale(1.2)" },
            },
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
            fontFamily: "poppins,sans-serif",
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
        <Grid container spacing={4}sx={{mb:2}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {sm:"row",xs:"column"},
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Button
              variant="contained"
              startIcon={<Check />}
              sx={{
                backgroundColor: "#259BC1",
                textTransform: "none",
                borderRadius: "8px",
                //width: "auto",
                //  height: "36px",
                fontSize: "12px",
                "&:hover": { backgroundColor: "#00506b" },
                "@media (max-width:600px)": {
                  //width: "auto",
                  //height: "20px",
                  fontFamily: "poppins,sans-serif",
                },
              }}
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              Delete This Row
            </Button>

            <Button
              variant="outlined"
              startIcon={<Close />}
              sx={{
                color: "#259BC1",
                borderColor: "#259BC1",
                textTransform: "none",
                borderRadius: "8px",
                fontFamily: "poppins,sans-serif",
                fontSize: "12px",
                "&:hover": {
                  borderColor: "#00506b",
                  color: "#00506b",
                },
                "@media (max-width:600px)": {
                  //width: "auto",
                  //height: "20px",
                },
              }}
              onClick={closeDialogs}
            >
              Cancel This Time
            </Button>
          </Box>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
