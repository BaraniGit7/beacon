import {
  CancelOutlined,
  Check,
  Close,
  CloseOutlined,
  Filter,
  FilterAltOutlined,
  FilterListAlt,
  Room,
  Tune,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function FilterDialog() {
  const [dialog, setDialog] = useState(false);
  const handleOpen = () => setDialog(true);
  const handleClose = () => setDialog(false);

  const filters = [
    {
      label: "Operational Area",
      name: "operationalArea",
      type: "select",
      options: ["Room1", "Room2", "Room3"],
      placeholder: "Select operational area",
      icon: <Tune />,
    },
    {
      label: "Functional Area",
      name: "functionalArea",
      type: "select",
      options: ["Function1", "Function2", "Function3"],
      placeholder: "Select functional area",
      icon: <Room />,
    },
    {
      label: "Target Audience",
      type: "text",
      name: "targetAudience",
      placeholder: "Select target audience",
    },
    {
      label: "Select Standards",
      type: "text",
      name: "selectStandards",
      placeholder: "Select standards",
    },
  ];

  return (
    <>
      <Button size="small"
        sx={{
          color: "#006D90",
          fontWeight: 600,
       
          border: "1px solid #006D90",
          borderRadius: "8px",
          fontSize: "9px",
          backgroundColor: "#fff",
        }}
        variant="outlined"
        onClick={handleOpen}
      >
        <FilterAltOutlined sx={{ fontSize: "12px" ,m:"o" }} />
        Filter Courses
      </Button>

      <Dialog open={dialog} onClose={handleClose} fullWidth maxWidth="sm" sx={{ border:"1px solid #006D90"}}>
        <DialogTitle
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "poppins",
            color: "#006D90",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
           
          }}
        >
          Filter Courses
          <IconButton onClick={handleClose}>
            <CancelOutlined sx={{ color: "#006D90" }} />
          </IconButton>
        </DialogTitle>
        <Divider />

        <DialogContent>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              //justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {filters.map((filter) => (
              <Grid item xs={12} sm={6} key={filter.name}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    mb: 0.5,
                  }}
                >
                  {filter.label}
                  <Box component="span" sx={{ color: "#ff0000" }}>
                    *
                  </Box>
                </Typography>

                {filter.type === "select" ? (
                  <TextField
                    sx={{ fontFamily: "poppins" }}
                    select
                    required
                    fullWidth
                    size="small"
                    name={filter.name}
                    SelectProps={{
                      displayEmpty: true,
                      renderValue: (selected) =>
                        selected ? (
                          selected
                        ) : (
                          <span
                            style={{ color: "#9e9e9e", fontFamily: "poppins" }}
                          >
                            {filter.placeholder}
                          </span>
                        ),
                    }}
                  >
                    <MenuItem sx={{ fontFamily: "poppins" }} value="" disabled>
                      {filter.placeholder}
                    </MenuItem>
                    {filter.options.map((opt) => (
                      <MenuItem
                        sx={{ fontFamily: "poppins" }}
                        key={opt}
                        value={opt}
                      >
                        {opt}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <TextField
                    fullWidth
                    required
                    size="small"
                    name={filter.name}
                    type={filter.type}
                    placeholder={filter.placeholder}
                    sx={{
                      "& .MuiInputBase-input::placeholder": {
                        fontFamily: "Poppins",
                      },
                      "& .MuiInputBase-input": {
                        fontFamily: "Poppins",
                      },
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              color: "#ffff",
              backgroundColor: "#006D90",
              fontSize: "12px",
            }}
          >
           
          
              <Check sx={{pr:"8px", fontSize: "16px", color: "#ffff" }} />
         
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
