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

  const handleChangeFile = (e, rowIndex) => {
    const selectFile = e.target.files[0];
    setFiles((prev) => ({ ...prev, [rowIndex]: selectFile }));
  };

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
                      <input type="file" style={{ display: "none" }} id={`file-upload-${index}`} onChange={(e) => handleChangeFile(e, index)} />
                      <label htmlFor={`file-upload-${index}`}>
                        <IconButton color={files[index] ? "success" : "primary"} component="span"><AttachFile /></IconButton>
                      </label>
                      {files[index] && (<span style={{ marginLeft: "8px" }}>{files[index].name}</span>)}
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

          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-start" }}>
            <Pagination count={10}/>
          </Box>

          {/* Edit Dialog */}
          <Dialog open={openEdit} onClose={closeDialogs} fullWidth maxWidth="lg">10  md={6}           <DialogTitle sx={{
           
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "700",
            color:" #064575",
              fontFamily: "Poppins, sans-serif",
      fontSize: "1.25rem",
            pb: 0,
            pt:0,
            mt:0,
          }}>Edit Seafarer<IconButton  onClick={closeDialogs}><Close/></IconButton></DialogTitle><Divider/>
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt:1 }}>
           <Typography fontFamily="poppins">Name</Typography>   <TextField  value={selectedSeafarer?.name || ""} onChange={(e) => setSelectedSeafarer({...selectedSeafarer, name: e.target.value})} />
             <Typography fontFamily="poppins">Email</Typography>  <TextField  value={selectedSeafarer?.email || ""} onChange={(e) => setSelectedSeafarer({...selectedSeafarer, email: e.target.value})} />
              <Typography fontFamily="poppins">Phone</Typography> <TextField  value={selectedSeafarer?.phone || ""} onChange={(e) => setSelectedSeafarer({...selectedSeafarer, phone: e.target.value})} />
              <Typography fontFamily="poppins">Role</Typography> <TextField  value={selectedSeafarer?.role || ""} onChange={(e) => setSelectedSeafarer({...selectedSeafarer, role: e.target.value})} />
                 <Typography fontFamily="poppins">Id</Typography> <TextField  value={selectedSeafarer?.Id || ""} onChange={(e) => setSelectedSeafarer({...selectedSeafarer, Id: e.target.value})} /> 
                  <Typography fontFamily="poppins">passport</Typography> <TextField  value={selectedSeafarer?.passport || ""} onChange={(e) => setSelectedSeafarer({...selectedSeafarer, passport: e.target.value})} />
                   <Typography fontFamily="poppins">location</Typography> <TextField  value={selectedSeafarer?.location || ""} onChange={(e) => setSelectedSeafarer({...selectedSeafarer, location: e.target.value})} />
                     <Typography fontFamily="poppins">ship</Typography> <TextField  value={selectedSeafarer?.ship || ""} onChange={(e) => setSelectedSeafarer({...selectedSeafarer, ship: e.target.value})} />
                       <Typography fontFamily="poppins">ship1</Typography> <TextField  value={selectedSeafarer?.ship1 || ""} onChange={(e) => setSelectedSeafarer({...selectedSeafarer, ship1: e.target.value})} />
              <Typography fontFamily="poppins">Upload Documents</Typography>
<Box  sx={{
                  border: "2px dashed #B0BEC5",
                  borderRadius: 2,
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "#F9FBFC",
                  "&:hover": { backgroundColor: "#F1F5F9" },
                  transition: "0.2s",
                }}>
  <input
    type="file"
    multiple
    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
    hidden
    id="edit-documents"
    style={{ display: "none" }}
    onChange={(e) => {
      const uploadedFiles = Array.from(e.target.files);
      setSelectedSeafarer({
        ...selectedSeafarer,
        documents: uploadedFiles,
      });
    }}
  />
  <label htmlFor="edit-documents">
     <DriveFolderUploadRounded
                        sx={{
                        
                          color: "#064575"
                          
                        }} /><Typography variant="body2" color="text.secondary" mt={1}>
                                            Drag your file(s) to start uploading
                                          </Typography>
    <Button
      variant="outlined"
      component="span"
      startIcon={<AttachFile />}
      sx={{ width: "fit-content" }}
    >
      Upload Documents
    </Button>
  </label>
  

  {selectedSeafarer?.documents?.length > 0 && (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        mt: 1,
        p: 1,
        border: "1px dashed #ccc",
        borderRadius: "6px",
        background: "#fafafa",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Uploaded Files:
      </Typography>
      
      {selectedSeafarer.documents.map((file, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#fff",
            p: 0.5,
            borderRadius: "4px",
            boxShadow: 1,
          }}
        >
          <Typography variant="body2">{file.name}</Typography>
          <IconButton
            color="error"
            size="small"
            onClick={() => {
              const newDocs = selectedSeafarer.documents.filter(
                (_, idx) => idx !== i
              );
              setSelectedSeafarer({
                ...selectedSeafarer,
                documents: newDocs,
              });
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
      ))}
    </Box>
  )}
</Box>
   
              
            </DialogContent>
            <DialogActions>
            
              <Button variant="contained" onClick={() => saveEdit(selectedSeafarer)}>Save</Button>
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

          {/* Add Dialog */}
        <Dialog open={openAdd} onClose={closeDialogs} fullWidth maxWidth="sm"> <DialogTitle>Add Seafarer</DialogTitle>
  <Divider />
  <DialogContent sx={{  px: 2, py: 2 }}>
    <Grid container spacing={2}>
      <Grid size={6} item xs={12} sm={6} md={6} >
        <TextField fullWidth label="Name" id="add-name" />
      </Grid>
      <Grid size={6} item xs={12} sm={6} md={6}>
        <TextField fullWidth label="Email" id="add-email" />
      </Grid>
      <Grid size={6} item xs={12} sm={6} md={6}>
        <TextField fullWidth label="Id" id="add-Id" />
      </Grid>
      <Grid  size={6}item xs={12} sm={6} md={6}>
        <TextField fullWidth label="Passport" id="add-passport" />
      </Grid>
      <Grid size={6} item xs={12} sm={6} md={6}>
        <TextField fullWidth label="Location" id="add-location" />
      </Grid>
      <Grid  size={6}item xs={12} sm={6} md={6}>
        <TextField fullWidth label="Phone" id="add-phone" />
      </Grid>
      <Grid size={6}item xs={12} sm={6} md={6}>
        <TextField fullWidth label="Role" id="add-role" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <TextField fullWidth label="Ship Name" id="add-ship" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <TextField fullWidth label="Ship Name1" id="add-ship1" />
      </Grid>
    </Grid>
  </DialogContent>
  <DialogActions>
    <Button onClick={closeDialogs}>Cancel</Button>
    <Button
      variant="contained"
      onClick={() => {
        const newSeafarer = {
          sno: (seafarers.length + 1).toString(),
          name: document.getElementById("add-name").value,
          email: document.getElementById("add-email").value,
          phone: document.getElementById("add-phone").value,
          role: document.getElementById("add-role").value,
          ship: document.getElementById("add-ship").value,
          ship1: document.getElementById("add-ship1").value,
          Id: document.getElementById("add-Id").value,
          passport: document.getElementById("add-passport").value,
          location: document.getElementById("add-location").value,
        };
        addSeafarer(newSeafarer);
      }}
    >
      Add
    </Button>
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
            <Typography >Enter your Password <Typography display="inline" color="#f80000ff">*</Typography></Typography>  <TextField placeholder="New Password" type="password"/>
            
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
