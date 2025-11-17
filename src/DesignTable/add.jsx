import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";

const borderColor = "#259BC1";
const borderStyle = `1.5px solid ${borderColor}`;

const MyDialog = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("sm"));

  const pendingCertificates = [
    { company: "IMC Ship Management PTE LTD", count: 23 },
    { company: "Nitta Kisen Kaisha Ltd", count: 4 },
    { company: "NSK Ship Management Private Limated", count: 25 },
    { company: "Wideshine Management PTE Limated", count: 165 },
  ];

  const duplicatesData = [
    { company: "Nitta Kisen Kaisha Ltd", duplicate: 38, idMismatch: 0, courseMismatch: 0 },
    { company: "NSK Ship Management Private Limated", duplicate: 13, idMismatch: 0, courseMismatch: 0 },
    { company: "Wideshine Management PTE Limated", duplicate: 0, idMismatch: 0, courseMismatch: 0 },
    { company: "CMS Demo Company", duplicate: 138, idMismatch: 0, courseMismatch: 5 },
    { company: "Mariner Skills Training", duplicate: 13, idMismatch: 5, courseMismatch: 21 },
    { company: "MMSL Japan Ltd", duplicate: 0, idMismatch: 0, courseMismatch: 0 },
    { company: "Sandbox", duplicate: 0, idMismatch: 7, courseMismatch: 15 },
  ];

  const tableContainerStyle = {
    borderRadius: "5px",
   
  
  overflowX:isMobile?"auto":"hidden",
    border: borderStyle,
  };

  const cellBorderRight = {
    borderRight: borderStyle,
    fontFamily: "poppins",
    fontSize:isMobile? "13px":"16px",
    fontWeight: 600,
    lineHeight: "100%",
    padding:isMobile?  "6px 8px": "7px 9px",
    "&:last-child": { borderRight: "none" },
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Try
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: isMobile ? 2 : 4,
            pt:"10px",
          
            backgroundColor: "#f9fbfc",
          },
        }}
      >
     

        <DialogContent sx={{ overflow: "visible",   p: 0,
    px: { xs: 1.5, sm: 2 },}}>
   <Box>  <Typography
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // center title
   // position: "relative",
    fontWeight: 700,
    color: "#006D90",
    py: 0,
    pb: 1,
    pt:1,

    m:0,
    px: 0,
   
    whiteSpace: "nowrap",
    fontFamily: "poppins",
    fontSize: { xs: "18px", sm: "24px" },
  }}
>
  Offline Certificate Information <IconButton
    onClick={handleClose}
    sx={{
      // pushes icon to extreme right
   
     
      color: "#006D90",
    }}
  >
    <Cancel />
  </IconButton></Typography>

  {/* CLOSE ICON — stays at right end */}
 <Divider sx={{mb:2,mx:-6}}/></Box> 
          {/* Pending Header */}
          <Typography
            sx={{
              textAlign: "center",
              color: "#006D90",
             
              p:1,
              fontSize: { xs: "18px", sm: "24px" },
              fontFamily: "poppins",
              fontWeight: 700,
            }}
          >
            Pending Certificate Approval
          </Typography>

          {/* Pending Table */}
          <TableContainer component={Paper} elevation={0} sx={tableContainerStyle}>
            <Table size="small" sx={{ borderCollapse: "collapse", }}>
              <TableBody sx={{ backgroundColor: "#dfecf5ff" }}>
                {pendingCertificates.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:not(:last-child) td": { borderBottom: borderStyle },
                      "&:last-child td": { borderBottom: "none" },
                    }}
                  >
                    <TableCell sx={{ ...cellBorderRight }}>{item.company}</TableCell>
                    <TableCell sx={{ ...cellBorderRight }}>{item.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Duplicate Header */}
          <Typography
            sx={{
              fontFamily: "poppins",
              fontWeight: 700,
              textAlign: "center",
              color: "#006D90",
              p:1,
             
              fontSize: { xs: "18px", sm: "24px" },
            }}
          >
            Duplicates and Mismatches
          </Typography>

          {/* Duplicate Table */}
          <TableContainer component={Paper} elevation={0} sx={tableContainerStyle}>
            <Table size="small" sx={{ minWidth: isMobile ? 600 : "100%",  borderCollapse: "collapse",}}>
              <TableHead sx={{ backgroundColor: "#dfecf5ff" }}>
                <TableRow>
                  {["Company Name", "Duplicate", "ID Mismatch", "Course Mismatch"].map((header, idx) => (
                    <TableCell
                      key={idx}
                      sx={{
                        fontWeight: 700,
                        fontFamily: "poppins",
                        fontSize: { xs: "12px", sm: "16px" },
                        borderRight: borderStyle,
                        whiteSpace: "nowrap",
                        padding: { xs: "6px 8px", sm: "8px 12px" },
                        "&:last-child": { borderRight: "none" },
                        borderBottom: borderStyle,
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody sx={{ backgroundColor: "#dfecf5ff" }}>
                {duplicatesData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:not(:last-child) td": { borderBottom: borderStyle },
                      "&:last-child td": { borderBottom: "none" },
                    }}
                  >
                    <TableCell
                      sx={{
                      
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        ...cellBorderRight,
                      }}
                    >
                      {row.company}
                    </TableCell>
                    <TableCell sx={cellBorderRight}>{row.duplicate}</TableCell>
                    <TableCell sx={cellBorderRight}>{row.idMismatch}</TableCell>
                    <TableCell sx={cellBorderRight}>{row.courseMismatch}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default MyDialog;
