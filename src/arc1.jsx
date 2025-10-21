import React, { useState } from "react";  
import {
  Delete,
  Edit,
  RemoveRedEyeOutlined,
  LoopRounded,
  Search,
  AttachFile,
  Password,
  Close,
  Check,
  Clear,
  DriveFolderUploadRounded,
  CloseOutlined,
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
  Stack,
  MenuItem,
} from "@mui/material";
import SeafarerCredentials from "./cred";

function MyBoard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  const [files, setFiles] = useState({});
  const [seafarers, setSeafarers] = useState([
    { sno: "1", name: "K R Ashwathy", Id:"18051988", passport:"passport", loaction:"India", email: "ash@gmail.com", phone:"9791917536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "2", name: "Michael", Id:"18051988", passport:"passport", loaction:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "3", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "4", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "5", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "6", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "7", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },
  ]);

  const [showCredentials, setShowCredentials] = useState(false);
  const [selectedSeafarer, setSelectedSeafarer] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openBulkUpload, setOpenBulkUpload] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const headers = [
    "S.No", "Seafarer Info", "Id Info", "Ship Name/Type", "Role", "Documents",
    "Credentials", "Password", "Status", "Actions"
  ];
   const [newSeafarer, setNewSeafarer] = useState({
      seafarerName: "",
      mobileNumber: "",
      email: "",
      role: "",
      shouldEmail: "",
      vesselAdmin: "",
      shipName: "",
      idType: "",
      idNumber: "",
      country: "",
    });
  
   const [editSeafarer, setEditSeafarer] = useState({});
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (openAdd)
        setNewSeafarer((prev) => ({ ...prev, [name]: value }));
      else if (openEdit)
        setEditSeafarer((prev) => ({ ...prev, [name]: value }));
    };

  const handleFileChange = (e) => {
    const selectFile = e.target.files[0];
    console.log("File uploaded:", selectFile);
   
  };

  const handleViewCredentials = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setShowCredentials(true);
  };

  const handleBackToList = () => {
    setShowCredentials(false);
    setSelectedSeafarer(null);
  };
  const handleAddSeafarer = () => {
    setSeafarers([
      ...seafarers,
      { ...newSeafarer, sno: (seafarers.length + 1).toString() },
    ]);
    setOpenAdd(false);
  };

  const handleEditSeafarer = () => {
    setSeafarers((prev) =>
      prev.map((s) => (s.sno === editSeafarer.sno ? editSeafarer : s))
    );
    setOpenEdit(false);
  };


  const handleEdit = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setOpenEdit(true);
  };

  const handleDelete = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setOpenDelete(true);
  };

  const handleAdd = () =>  {
    setNewSeafarer({
      seafarerName: "",
      mobileNumber: "",
      email: "",
      role: "",
      shouldEmail: "",
      vesselAdmin: "",
      shipName: "",
      idType: "",
      idNumber: "",
      country: "",
    });
    setOpenAdd(true);
  };


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
    setSelectedSeafarer(null);
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
            <IconButton><Search /></IconButton>
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
                      <Typography variant="body2">{row.loaction}</Typography>
                    </TableCell>
                    <TableCell>{row.ship}<Typography color="text.secondary">{row.ship1}</Typography></TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <IconButton color="primary" component="label">
                                          <AttachFile />
                                          <input type="file" hidden />
                                        </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton color="secondary" onClick={() => handleViewCredentials(row)}><RemoveRedEyeOutlined /></IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton color="warning" onClick={() => handlePassword(row)}><Password /></IconButton>
                    </TableCell>
                    <TableCell>
                      {/* Editable Status */}
                      <TextField
                        select
                        SelectProps={{ native: true }}
                        value={row.status || "Active"}
                        onChange={(e) => {
                          const updatedStatus = e.target.value;
                          setSeafarers(prev => prev.map(s => s.sno === row.sno ? { ...s, status: updatedStatus } : s));
                        }}
                        variant="standard"
                        sx={{ minWidth: 80 }}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </TextField>
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

          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <Pagination count={10}/>
          </Box>

<Dialog
        open={openAdd || openEdit}
        onClose={closeDialogs}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: 600,
            color: "#064575",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {openAdd ? "Add Seafarer Details" : "Edit Seafarer Details"}<IconButton  onClick={closeDialogs}><CloseOutlined/></IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 4, py: 3, fontFamily: "Poppins, sans-serif" }}>
       <Box sx={{p:2}}>   <Grid container spacing={2}>
            {[
              { label: "Seafarer Name", name: "seafarerName" },
              { label: "Mobile Number", name: "mobileNumber" },
              { label: "Email ID", name: "email" },
              { label: "Role", name: "role", type: "select", options: ["Captain", "Engineer", "Crew"] },
              { label: "Should we email seafarer?", name: "shouldEmail", type: "select", options: ["Yes", "No"] },
              { label: "Vessel Admin?", name: "vesselAdmin", type: "select", options: ["Yes", "No"] },
              { label: "Ship Name & Type*", name: "shipName" },
              { label: "ID Type*", name: "idType", type: "select", options: ["Passport", "Seafarer ID"] },
              { label: "ID Number*", name: "idNumber" },
              { label: "Associated Country*", name: "country", type: "select", options: ["India", "USA", "UK"] },
            ].map((field) => (
              <Grid  size={6}item xs={12} sm={6} md={6} key={field.name}>
                <Typography  variant="body2" 
              sx={{ mb: 0.5, fontWeight: 400, fontFamily: "Poppins" }}>{field.label}</Typography>
                {field.type === "select" ? (
                  <TextField
                    select
                    fullWidth
                    size="small"
                    name={field.name}
                    value={
                      openAdd
                        ? newSeafarer[field.name]
                        : editSeafarer[field.name] || ""
                    }
                    onChange={handleInputChange}
                  >
                    {field.options.map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <TextField
                    fullWidth
                    size="small"
                    name={field.name}
                    value={
                      openAdd
                        ? newSeafarer[field.name]
                        : editSeafarer[field.name] || ""
                    }
                    onChange={handleInputChange}
                  />
                )}
              </Grid>
            ))}

            {/* Upload Section */}
            <Grid item xs={12}>
              <Typography>Upload Document</Typography>
              <Box
                sx={{
                  border: "2px dashed #c3cfd9",
                  borderRadius: "12px",
                  p: 3,
                  textAlign: "center",
                  color: "#6b7280",
                  backgroundColor: "#f9fbfc",
                }}
              >
                <Typography variant="body2">
                  Drag your files to start uploading
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  sx={{ mt: 1, borderColor: "#064575", color: "#064575" }}
                >
                  Browse File
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ mt: 1, color: "#9ca3af" }}
                >
                  Support .docs, .docx, .pdf, .jpg, .png
                </Typography>
              </Box>
            </Grid>
          </Grid></Box>
        </DialogContent>

        <DialogActions sx={{ px: 4, pb: 3 }}>
          <Button variant="outlined">
            Cancel
          </Button>
          {openAdd ? (
            <Button variant="contained" onClick={handleAddSeafarer}>
              + Add
            </Button>
          ) : (
            <Button variant="contained" onClick={handleEditSeafarer}>
              Save Changes
            </Button>
          )}
        </DialogActions>
      </Dialog>


    
   {/* Delete Dialog */}
          <Dialog open={openDelete} onClose={closeDialogs}>
            <DialogTitle align="right"><IconButton  onClick={closeDialogs}><Close/></IconButton></DialogTitle>
            <DialogContent>
              <Typography>Do you really want to delete {selectedSeafarer?.name} List?</Typography>
            </DialogContent>
            <DialogActions>
               <Button variant="contained" color="error" onClick={() => {
                setSeafarers(prev => prev.filter(s => s.sno !== selectedSeafarer.sno));
                closeDialogs();
              }}><IconButton><Check/></IconButton>Delete this Seafear</Button><Button onClick={closeDialogs}><IconButton><Clear/></IconButton>Cancel This Time</Button>
             
            </DialogActions>
          </Dialog>


          {/* Bulk Upload Dialog */}
          <Dialog open={openBulkUpload} onClose={closeDialogs}>
            <DialogTitle>Bulk Upload</DialogTitle>
            <DialogContent>
              <input type="file" />
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDialogs}>Cancel</Button>
              <Button variant="contained">Upload</Button>
            </DialogActions>
          </Dialog>


          {/* Password Dialog */}
          <Dialog fullWidth maxWidth="xs" sx={{borderColor:" #006D90"}} open={openPassword} onClose={closeDialogs}>
            <DialogTitle sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 400,
    color: "#006D90",
    m:1,
  fontFamily: "Poppins", 
    fontSize: "1.25rem",
    p: 1
  }}>SeaFarer Password<IconButton sx={{color:"#006D90"}} onClick={closeDialogs}><Close  /></IconButton ></DialogTitle><Divider/>
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt:1 }}>
            <Typography >Enter your Password <Typography display="inline" color="#f80000ff">*</Typography></Typography> 
             <TextField placeholder="New Password" type="password"/>
            
            </DialogContent>
            <DialogActions>
              <Button variant="contained" sx={{backgroundColor:"#006D90"}}  onClick={closeDialogs}>Update</Button>
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
