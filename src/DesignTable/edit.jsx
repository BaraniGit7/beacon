import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    overflowX: isMobile ? "auto" : "hidden",
    border: borderStyle,
    my: 2,
    mx: isMobile ? 0 : 4, // equal horizontal spacing on desktop
  };

  const cellStyle = {
    borderRight: borderStyle,
    fontFamily: "poppins",
    fontSize: isMobile ? "13px" : "16px",
    fontWeight: 600,
    lineHeight: "100%",
    padding: isMobile ? "6px 8px" : "8px 12px",
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
            backgroundColor: "#f9fbfc",
          },
        }}
      >
        {/* Dialog Title */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: "#006D90",
              fontFamily: "poppins",
              fontSize: { xs: "18px", sm: "24px" },
            }}
          >
            Offline Certificate Information
          </Typography>
          <IconButton onClick={handleClose} sx={{ color: "#006D90" }}>
            <Cancel />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />

        <DialogContent sx={{ p: 0 }}>
          {/* Pending Certificates Table */}
          <Typography
            sx={{
              textAlign: "center",
              color: "#006D90",
              fontWeight: 700,
              fontFamily: "poppins",
              fontSize: { xs: "18px", sm: "24px" },
              mb: 1,
            }}
          >
            Pending Certificate Approval
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={tableContainerStyle}>
            <Table sx={{ minWidth: isMobile ? 500 : "100%", borderCollapse: "collapse" }} size="small">
              <TableBody sx={{ backgroundColor: "#dfecf5ff" }}>
                {pendingCertificates.map((item, index) => (
                  <TableRow key={index} sx={{ "&:not(:last-child) td": { borderBottom: borderStyle } }}>
                    <TableCell sx={cellStyle}>{item.company}</TableCell>
                    <TableCell sx={cellStyle}>{item.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Duplicates Table */}
          <Typography
            sx={{
              textAlign: "center",
              color: "#006D90",
              fontWeight: 700,
              fontFamily: "poppins",
              fontSize: { xs: "18px", sm: "24px" },
              mt: 3,
              mb: 1,
            }}
          >
            Duplicates and Mismatches
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={tableContainerStyle}>
            <Table sx={{ minWidth: isMobile ? 600 : "100%", borderCollapse: "collapse" }} size="small">
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
                        padding: isMobile ? "6px 8px" : "8px 12px",
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
                  <TableRow key={index} sx={{ "&:not(:last-child) td": { borderBottom: borderStyle } }}>
                    <TableCell sx={{ ...cellStyle, whiteSpace: "normal", wordBreak: "break-word" }}>
                      {row.company}
                    </TableCell>
                    <TableCell sx={cellStyle}>{row.duplicate}</TableCell>
                    <TableCell sx={cellStyle}>{row.idMismatch}</TableCell>
                    <TableCell sx={cellStyle}>{row.courseMismatch}</TableCell>
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
