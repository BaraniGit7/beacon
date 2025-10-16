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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const borderColor = "rgba(0, 187, 255, 1)";
const borderStyle = `1px solid ${borderColor}`;

const MyDialog = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    overflow: "hidden",
    mb: 4,
    border: borderStyle, 
   
  };

  const cellBorderRight = {
    borderRight: borderStyle,
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
            p: 2,
            px:5,
            backgroundColor: "#f9fbfc",
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "700",
            color: "primary.main",
            pb: 1,
            pt:0,
            mt:0,
          }}
        >
          Offline Certificate Information
          <IconButton onClick={handleClose} >
            <CloseIcon  color="primary" />
          </IconButton>
        </DialogTitle>

      
        <Divider sx={{ mx: -3, mb: 2 }} />

        <DialogContent sx={{ overflow: "visible", p: 0 }}>
          <Typography
            variant="h6"
            fontWeight={700}
            textAlign="center"
            color="primary.main"
            mb={2}
          
          >
            Pending Certificate Approval
          </Typography>

    
          <TableContainer component={Paper}  elevation={0} sx={tableContainerStyle}>
            <Table size="small" sx={{ borderCollapse: "separate", width: "100%" }}>
              <TableBody sx={{ backgroundColor: "#dfecf5ff" }}>
                {pendingCertificates.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:not(:last-child) td": { borderBottom: borderStyle },
                      "&:last-child td": { borderBottom: "none" }
                    }}
                  >
                    <TableCell sx={{ fontWeight: "600", ...cellBorderRight }}>
                      {item.company}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "left",
                        fontWeight: "600",
                        ...cellBorderRight,
                      }}
                    >
                      {item.count}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            variant="h6"
            fontWeight={700}
            textAlign="center"
            color="primary.main"
            mb={2}
          >
            Duplicates and Mismatches
          </Typography>

        
          <TableContainer component={Paper} elevation={0} sx={tableContainerStyle}>
            <Table size="small" sx={{ borderCollapse: "separate", width: "100%" }}>
              <TableHead sx={{ backgroundColor: "#d6e6f7ff"}}>
                <TableRow>
                  {[
                    "Company Name",
                    "Duplicate",
                    "ID Mismatch",
                    "Course Mismatch",
                  ].map((header, idx) => (
                    <TableCell
                      key={idx}
                      sx={{ fontWeight: "700",
                borderRight: borderStyle,
                "&:last-child": { borderRight: "none" },
                borderBottom: borderStyle }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor:"#d6e6f7ff" }}>
                {duplicatesData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:not(:last-child) td": { borderBottom: borderStyle },
                      "&:last-child td": { borderBottom: "none" },
                      
                    }}
                  >
                    <TableCell
                      sx={{ width: 500, fontWeight: "600", ...cellBorderRight }}
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
