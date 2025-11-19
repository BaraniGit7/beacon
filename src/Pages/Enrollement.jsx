import { useState } from "react";
import { CheckBox, Edit, Person, Search } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography
} from "@mui/material";
import FilterDialog from "./Filter";
import EnrollDetails from "./Enroll";
import Tables from "./Table";

export default function Encrollment() {
  const [openFilter, setOpenFilter] = useState(false);

 // const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);

  return (
    <Box sx={{ p: 2 ,backgroundColor:"#f4fcff"}}>
      {/* Heading with combined icon */}
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1,
          fontWeight: 600,
          fontFamily: "Poppins,sans-serif",
          gap: 1,
          fontSize:"16px"
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex", mr: 1 }}>
          <Person sx={{ fontSize: 22, color: "#259BC1" }} />
         
       
        </Box>
        Enrollment
      </Typography>

      {/* Search + Filter */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          mb: 1.9,
         
        }}
      >
        <Paper
          component="form"
          sx={{
            display: "flex",
            flex: "1 1 auto",
            maxWidth:"50%",
            //height:"3%",
            alignItems: "center",
            py:0,
            px: 1,
            borderRadius: "6px"
          }}
        >
          <IconButton>
            <Search sx={{fontSize:"11px"}} />
          </IconButton>
          <InputBase placeholder="Search…" fullWidth sx={{fontSize:"12px"}} />
        </Paper>

        <FilterDialog open={openFilter} handleClose={handleCloseFilter} />
      </Box>

      {/* Enroll Details + Legend */}
      <EnrollDetails />
      <Box sx={{ display: "flex", alignItems: "center", gap: 4,mb:1}}>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1,fontSize: "13px",
                          fontFamily: "poppins,sans-serif", }}>
          <CheckBox sx={{ color: "red",fontSize:"16px"}} />
          Already enrolled courses
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 ,fontSize: "13px",
                          fontFamily: "poppins,sans-serif",}}>
          <CheckBox sx={{ color: "green" ,fontSize:"16px" }} />
          Courses selected now for Enrollment
        </Typography>
      </Box>

      {/* Table */}
      <Tables />
    </Box>

  );
}
