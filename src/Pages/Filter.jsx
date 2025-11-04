import { Check, Close, Filter, FilterListAlt, Room, Tune } from "@mui/icons-material";
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
  Typography
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
      icon:<Tune/>
    },
    {
      label: "Functional Area",
      name: "functionalArea",
      type: "select",
      options: ["Function1", "Function2", "Function3"],
      placeholder: "Select functional area",
      icon:<Room/>
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
      <Button sx={{color:"#006D90",fontWeight:600, border:"2px solid #006D90",borderRadius:"8px"}} startIcon={<FilterListAlt />} variant="outlined" onClick={handleOpen}>
         Filter Courses
      </Button>

      <Dialog open={dialog} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          Filter Courses
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <Divider />

        <DialogContent>
          <Grid container spacing={2}sx={{
           display: "flex",
    flexDirection: "column",
    //justifyContent: "space-between",
    flexWrap: "wrap",
          }}>
            {filters.map((filter) => (
              <Grid item xs={12} sm={6} key={filter.name}>
                <Typography  variant="body2"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "16px",
          mb: 0.5,  }}>
                  {filter.label}
                  <Box component="span" sx={{ color: "#ff0000" }}>
                    *
                  </Box>
                </Typography>

                {filter.type === "select" ? (
                  <TextField
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
                <span style={{ color: "#9e9e9e" }}>
                  {filter.placeholder}
                </span>
              ),
          }} 
                  >
                    <MenuItem value="" disabled>
                      {filter.placeholder}
                    </MenuItem>
                    {filter.options.map((opt) => (
                      <MenuItem key={opt} value={opt}>
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
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </DialogContent>

        <DialogActions>
        
          <Button onClick={handleClose} variant="contained" sx={{color:"#ffff",backgroundColor:"#006D90"}} startIcon={<Check/>}>Apply</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}