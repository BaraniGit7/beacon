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

  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);

  return (
    <Box sx={{ p: 2 }}>
      {/* Heading with combined icon */}
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          fontWeight: 600,
          fontFamily: "Poppins",
          gap: 1,
          fontSize:"16px"
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex", mr: 1 }}>
          <Person sx={{ fontSize: 28, color: "#0069d0" }} />
          <Edit
            sx={{
              position: "absolute",
              bottom: 0,
              right: -4,
              fontSize: 14,
           
              color: "#0069d0",
            
            }}
          />
        </Box>
        Enrollment
      </Typography>

      {/* Search + Filter */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          mb: 3
        }}
      >
        <Paper
          component="form"
          sx={{
            display: "flex",
            flex: "1 1 auto",
            maxWidth:"50%",
      
            alignItems: "center",
            px: 1,
            borderRadius: "12px"
          }}
        >
          <IconButton>
            <Search />
          </IconButton>
          <InputBase placeholder="Search…" fullWidth />
        </Paper>

        <FilterDialog open={openFilter} handleClose={handleCloseFilter} />
      </Box>

      {/* Enroll Details + Legend */}
      <EnrollDetails />
      <Box sx={{ display: "flex", alignItems: "center", gap: 4, mb: 2 }}>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1,fontSize: "13px",
                          fontFamily: "poppins", }}>
          <CheckBox sx={{ color: "red" }} />
          Already enrolled courses
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 ,fontSize: "13px",
                          fontFamily: "poppins",}}>
          <CheckBox sx={{ color: "green" }} />
          Courses selected to enroll now
        </Typography>
      </Box>

      {/* Table */}
      <Tables />
    </Box>
  );
}
