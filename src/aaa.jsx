import React, { useState } from "react";  
import {
  Delete,
  Edit,
  RemoveRedEyeOutlined,
  AttachFile,
  Password,
  Close,
  DriveFolderUploadRounded,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Table,
  InputBase,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Pagination,
  Breadcrumbs,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
  Grid,
} from "@mui/material";
import SeafarerCredentials from "./cred";

function MyBoard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  const [seafarers, setSeafarers] = useState([
    { sno: "1", name: "K R Ashwathy", Id:"18051988", passport:"passport", location:"India", email: "ash@gmail.com", phone:"9791917536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating", status: "Active" },
    { sno: "2", name: "Michael", Id:"18051988", passport:"passport", location:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating", status: "Inactive" },
    // ... other seafarers
  ]);

  const [showCredentials, setShowCredentials] = useState(false);
  const [selectedSeafarer, setSelectedSeafarer] = useState(null);

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openBulkUpload, setOpenBulkUpload] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  // Status dialog state
  const [openStatusDialog, setOpenStatusDialog] = useState(false);
  const [selectedStatusSeafarer, setSelectedStatusSeafarer] = useState(null);
  const [tempStatus, setTempStatus] = useState("Active");

  const headers = [
    "S.No", "Seafarer Info", "Id Info", "Ship Name/Type", "Role", "Documents",
    "Credentials", "Password", "Status", "Actions"
  ];

  const handleViewCredentials = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setShowCredentials(true);
  };

  const handleBackToList = () => {
    setShowCredentials(false);
    setSelectedSeafarer(null);
  };

  const handleEdit = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setOpenEdit(true);
  };

  const handleDelete = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setOpenDelete(true);
  };

  const handleAdd = () => setOpenAdd(true);
  const handleBulkUpload = () => setOpenBulkUpload(true);
  const handlePassword = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setOpenPassword(true);
  };

  const closeDialogs = () => {
    setOpenEdit(false);
    setOpenDelete(false);
    setOpenAdd(false);
    setOpenBulkUpload(false);
    setOpenPassword(false);
    setOpenStatusDialog(false);
    setSelectedSeafarer(null);
    setSelectedStatusSeafarer(null);
  };

  const saveEdit = (updatedSeafarer) => {
    setSeafarers(seafarers.map(s => s.sno === updatedSeafarer.sno ? updatedSeafarer : s));
    closeDialogs();
  };

  const addSeafarer = (newSeafarer) => {
    setSeafarers([...seafarers, { ...newSeafarer, sno: (seafarers.length + 1).toString() }]);
    closeDialogs();
  };

  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" onClick={handleBackToList} sx={{ cursor: "pointer" }}>
          Seafarer List
        </Link>
        {showCredentials && <Typography color="text.primary">Credentials</Typography>}
      </Breadcrumbs>

      {!showCredentials ? (
        <>
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, flexWrap: "wrap" }}>
            <Typography variant="h6" fontWeight="600">Seafarer Information</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="contained" onClick={handleAdd}>Add</Button>
              <Button variant="contained" onClick={handleBulkUpload}>Bulk Upload</Button>
            </Box>
          </Box>

          {/* Search */}
          <Paper sx={{ mb: 2, p: 1, display: "flex", alignItems: "center", borderRadius: "8px", width: "100%" }}>
            <IconButton><Search/></IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search or filter..." />
          </Paper>

          {/* Table */}
          <TableContainer component={Paper} elevation={0} sx={{ borderRadius: "10px", width: "100%", overflowX: "auto" }}>
            <Table size="small" sx={{ borderSpacing: "0px 14px", borderCollapse: "separate" }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#baa9a9ff" }}>
                  {headers.map((header, idx) => (
                    <TableCell key={idx} sx={{ fontWeight: 600, minWidth: 120 }}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {seafarers.map((row, index) => (
                  <TableRow key={index} sx={{ backgroundColor: "#f5f5f5" }}>
                    <TableCell>{row.sno}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                        <Typography variant="body2">{row.name}</Typography>
                        <Typography variant="body2">{row.email}</Typography>
                        <Typography variant="body2">{row.phone}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ pt:"9px" }}>{row.Id}</Typography>
                      <Typography variant="body2">{row.passport}</Typography>
                      <Typography variant="body2">{row.location}</Typography>
                    </TableCell>
                    <TableCell>{row.ship}<Typography color="text.secondary">{row.ship1}</Typography></TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <IconButton><AttachFile sx={{ transform: "rotate(45deg)" }} /></IconButton>
                      {row.documentName || "viewAttachment"}
                    </TableCell>
                    <TableCell>
                      <IconButton color="secondary" onClick={() => handleViewCredentials(row)}><RemoveRedEyeOutlined /></IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton color="warning" onClick={() => handlePassword(row)}><Password /></IconButton>
                    </TableCell>

                    {/* Status as colored pill */}
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setSelectedStatusSeafarer(row);
                          setTempStatus(row.status || "Active");
                          setOpenStatusDialog(true);
                        }}
                        sx={{
                          textTransform: "none",
                          borderColor:row.status === "Active" ? "#259800" : "#EB0101",
                          borderRadius: "20px",
                          color: row.status === "Active" ? "#259800" : "#EB0101",
    
  
                          minWidth: "80px",
                        }}
                      >
                        {row.status || "Active"}
                      </Button>
                    </TableCell>

                    <TableCell>
                      <IconButton color="success" onClick={() => handleEdit(row)}><Edit /></IconButton>
                      <IconButton color="error" onClick={() => handleDelete(row)}><Delete /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-start" }}>
            <Pagination count={10}/>
          </Box>

          {/* Status Dialog */}
          <Dialog
            open={openStatusDialog}
            onClose={() => setOpenStatusDialog(false)}
            fullWidth
            maxWidth="xs"
          >
            <DialogTitle> Status<IconButton  onClick={() => setOpenStatusDialog(false)}><Close /></IconButton></DialogTitle><Divider/>
            <DialogContent sx={{ mt: 1 }}>
              <TextField
                select
                label="Status"
                value={tempStatus}
                onChange={(e) => setTempStatus(e.target.value)}
                SelectProps={{ native: true }}
                fullWidth
                variant="outlined"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </TextField>
            </DialogContent>
            <DialogActions>
              
              <Button
                variant="contained"
                onClick={() => {
                  setSeafarers((prev) =>
                    prev.map((s) =>
                      s.sno === selectedStatusSeafarer.sno
                        ? { ...s, status: tempStatus }
                        : s
                    )
                  );
                  setOpenStatusDialog(false);
                }}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>

        </>
      ) : (
        <SeafarerCredentials seafarer={selectedSeafarer}/>
      )}
    </Box>
  );
}

export default MyBoard;
