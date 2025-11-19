import {
  CancelOutlined,
  Check,
  FilterAltOutlined,
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export default function FilterDialog() {
  const [dialog, setDialog] = useState(false);
  const handleOpen = () => setDialog(true);
  const handleClose = () => setDialog(false);
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("sm"));
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
      type: "select",
      name: "selectStandards",
      options:["STCW(Navigation)", "SIRE(Navigation and Communications)"," RDBMS(Navigation and Communications)"," TMSA(Navigational Safety)" ,"CDI (Navigational safety)"] ,
      placeholder:"Select Standards"
    },
  ];

  return (
    <>
      <Button size="small"
        sx={{
          color: "#259BC1",
          fontWeight: 600,
       
          border: "1px solid #259BC1",
          borderRadius: "8px",
          fontSize: isMobile?"10px":"12px",
          backgroundColor: "#fff",
        }}
        variant="outlined"
        onClick={handleOpen}
      >
        <FilterAltOutlined sx={{ fontSize: isMobile?"19px":"15px" ,m:"0px 2px" }} />
        Filter Courses
      </Button>

      <Dialog open={dialog} onClose={handleClose} fullWidth maxWidth="sm" sx={{ border:"1px solid #259BC1"}}>
        <DialogTitle
          sx={{
            fontSize: "17px",
            fontWeight: 700,
            fontFamily: "poppins,sans-serif",
            color: "#259BC1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
           
          }}
        >
          Filter Courses
          <IconButton onClick={handleClose}>
            <CancelOutlined sx={{ color: "#259BC1" }} />
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
                    fontFamily: "Poppins,sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
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
                    sx={{ fontFamily: "poppins,sans-serif" , fontSize:"14px" ,"& .MuiInputBase-input": {
                        fontFamily: "Poppins,sans-serif" , fontSize:"14px"
                      },    "& .MuiOutlinedInput-root": {
                          
                          fontFamily:"poppins,sans-serif",
                          fontSize:"13px",
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
                          },}}
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
                            style={{ color: "#9e9e9e", fontFamily: "poppins,sans-serif" , fontSize:"14px" }}
                          >
                            {filter.placeholder}
                          </span>
                        ),
                    }}
                  >
                    <MenuItem sx={{ fontFamily: "poppins,sans-serif", fontSize:"14px"}} value="" disabled>
                      {filter.placeholder}
                    </MenuItem>
                    {filter.options.map((opt) => (
                      <MenuItem
                        sx={{ fontFamily: "poppins,sans-serif" , fontSize:"14px"}}
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
                        fontSize:"14px",
                      "& .MuiInputBase-input::placeholder": {
                        fontFamily: "Poppins,sans-serif",  fontSize:"14px"
                      },
                      "& .MuiInputBase-input": {
                        fontFamily: "Poppins,sans-serif" , fontSize:"14px"
                      },
                         "& .MuiOutlinedInput-root": {
                           
                          fontFamily:"poppins,sans-serif",
                          fontSize:"13px",
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
              fontFamily:"poppins,sans-serif",
              color: "#ffff",
              backgroundColor: "#259BC1",
              fontSize: "12px",
            }}
          > <Check sx={{pr:"8px", fontSize: "22px", color: "#ffff" }} /> 
          Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
