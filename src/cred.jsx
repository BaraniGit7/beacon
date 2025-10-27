import React, { useState } from "react";

import {
  Email,
  Person,
  Phone,
  DirectionsBoat,
  Work,
  Add,
  Save,
  Close,
  DriveFolderUploadRounded,
  DoneOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";
import { Delete, Edit, AttachFile } from "@mui/icons-material";

function SeafarerCredentials({ seafarer }) {
   if (!seafarer)
     return null; 
   const credentials = [
     { icon: <Person />, label: "Name", value: seafarer.name },
     { icon: <Email />, label: "Email ID", value: seafarer.email }, 
     { icon: <Phone />, label: "Mobile Number", value: seafarer.phone }, 
     { icon: <DirectionsBoat />, label: "Ship Name/Type", value: `${seafarer.ship} ${seafarer.ship1}` },
      { icon: <Work />, label: "Role", value: seafarer.role },
     ]; 
  const [selectedTab, setSelectedTab] = useState("coc");
  const [cocTable, setCocTable] = useState([
    {
      id: 1,
      name: "Master National Certificate of Competence",
      flagState: "Poland",
      dateIssued: "2024-11-10",
      validUntil: "2025-11-12",
      document: null,
      documentName: "",
    },
  ]);

  const [stcwTable, setStcwTable] = useState([
    {
      id: 1,
      name: "Basic Safety Training",
      flagState: "Poland",
      dateIssued: "2023-01-10",
      validUntil: "2024-01-10",
      document: null,
      documentName: "",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const[deleteDialog,setDeleteDialog]=useState({open:false,index:null})
  const [editIndex, setEditIndex] = useState(null);
  const [newEntry, setNewEntry] = useState({
    name: "",
    flagState: "",
    dateIssued: "",
    validUntil: "",
    document: null,
    documentName: "",
  });

  const handleTabChange = (event, newValue) => {
    if (newValue !== null) setSelectedTab(newValue);
  };

  const getCurrentTable = () => (selectedTab === "coc" ? cocTable : stcwTable);
  const setCurrentTable = (data) =>
    selectedTab === "coc" ? setCocTable(data) : setStcwTable(data);

  const handleOpenDialog = (index = null) => {
    const table = getCurrentTable();
    if (index !== null) {
      setEditIndex(index);
      setNewEntry(table[index]);
    } else {
      setEditIndex(null);
      setNewEntry({
        name: "",
        flagState: "",
        dateIssued: "",
        validUntil: "",
        document: null,
        documentName: "",
      });
    }
    setOpenDialog(true);
  };
  const handleDelete=(index)=>{
    setDeleteDialog({open:true,index})
  }

   const confirmDelete = (index) => {
    const table = getCurrentTable();
    const updated = table.filter((_, i) => i !==deleteDialog.index);
    setCurrentTable(updated);
    setDeleteDialog({open:false,index:null});

  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditIndex(null);
    setDeleteDialog({open:false,index:null});
    setNewEntry({
      name: "",
      flagState: "",
      dateIssued: "",
      validUntil: "",
      document: null,
      documentName: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewEntry((prev) => ({ ...prev, document: file, documentName: file.name }));
    }
  };

  const handleAddOrEditEntry = () => {
    if (!newEntry.name || !newEntry.flagState || !newEntry.dateIssued || !newEntry.validUntil) {
      alert("Please fill all fields");
      return;
    }
    if (new Date(newEntry.validUntil) < new Date(newEntry.dateIssued)) {
      alert("Valid Until date cannot be before Date Issued");
      return;
    }

    const table = getCurrentTable();
    if (editIndex !== null) {
      const updated = [...table];
      updated[editIndex] = newEntry;
      setCurrentTable(updated);
    } else {
      setCurrentTable([...table, { id: table.length + 1, ...newEntry }]);
    }

    handleCloseDialog();
  };

 

  const handleSave = () => {
    console.log("COC Data:", cocTable);
    console.log("STCW Data:", stcwTable);
    alert("Data saved! Check console.");
  };

  
  return (
    <Box sx={{ p: 2 ,width: '100%', height: '100%', mx: "auto",backgroundColor:"#F4FCFF", opacity: 1 }}>
    
      <Paper elevation={4} sx={{ p: 3, borderRadius: 2, backgroundColor: "#f2f2f2ff", mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#006D90", mb: 2, textAlign:"left"}}>
          Credentials
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="space-between" >
          {credentials.map((item) => (
            <Box key={item.label} sx={{ display: "flex", gap: 2, minWidth: 200, }}>
             <Stack color="#006D90">{item.icon}</Stack> 
              <Stack spacing={1}>
                <Typography sx={{
                              fontFamily: 'Inter, sans-serif',
                              fontWeight: 600,      
                              fontStyle: 'normal',
                              fontSize: '16px',
                              lineHeight: '100%',
                              letterSpacing: 0,
                            }}   >
                              {item.label}
                </Typography>
                <Typography  sx={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,        
                                    fontStyle: 'normal',
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: 0,
                                    color:"000000",
                                  }}
                                  >
                  {item.value}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Paper>


<ToggleButtonGroup
  value={selectedTab}
  exclusive
  onChange={handleTabChange}
  sx={{
    width: "100%",
    borderRadius: "32px",
    border: "2px solid #1E3A8A", 
    overflow: "hidden",
    display: "flex",
    flexDirection: "row"
  }}
>
  <ToggleButton
    value="coc"
    sx={{
      flex: 1,
      textTransform: "none",
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: { xs: "16px", sm: "20px" },
      lineHeight: "100%",
      letterSpacing: "0%",
      border: "none",
      borderRadius: { xs: "32px", sm: "0 32px 32px 0" }, 
      color: "#1E3A8A",
      "&.Mui-selected": {
        backgroundColor: "#1E3A8A",
        color: "#fff",
      },
      "&:hover": {
        backgroundColor: selectedTab === "coc" ? "#1E3A8A" : "#E0E7FF",
      },
      py: { xs: 1.5, sm: 2 },
      transition: "all 0.3s ease",
    }}
  >
    Certificate of Competence
  </ToggleButton>

  <ToggleButton
    value="stcw"
    sx={{
      flex: 1,
      textTransform: "none",
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: { xs: "16px", sm: "20px" },
      lineHeight: "100%",
      letterSpacing: "0%",
      border: "none",
      borderRadius: { xs: "32px", sm: "32px 0 0 32px" },
      color: "#1E3A8A",
      "&.Mui-selected": {
        backgroundColor: "#1E3A8A",
        color: "#fff",
      },
      "&:hover": {
        backgroundColor: selectedTab === "stcw" ? "#1E3A8A" : "#E0E7FF",
      },
      py: { xs: 1.5, sm: 2 },
      transition: "all 0.3s ease",
    }}
  >
    STCW Modular Courses
  </ToggleButton>
</ToggleButtonGroup>      
        <Table sx={{ borderSpacing: "0px 14px", borderCollapse: "separate"}} >
          <TableHead sx={{  backgroundColor: "#5C5C5C",border: "1.06px solid", borderCollapse:"separate" }}>
            <TableRow>
              <TableCell sx={{color: "#fff", fontWeight: 600 }}>S. No</TableCell>
              <TableCell sx={{color: "#fff", fontWeight: 600 }}>{selectedTab === "coc" ? "COC Name" : "Course Name"}</TableCell>
              <TableCell sx={{ color: "#fff",fontWeight: 600 }}>Flag State</TableCell>
              <TableCell sx={{ color: "#fff",fontWeight: 600 }}>Date Issued</TableCell>
              <TableCell sx={{ color: "#fff",fontWeight: 600 }}>Valid Until</TableCell>
              <TableCell sx={{ color: "#fff",fontWeight: 600 }}>Documents</TableCell>
              <TableCell sx={{color: "#fff", fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
            </TableHead>
           <TableBody sx={{ backgroundColor: "#ffffff"}}>
           {getCurrentTable().map((row, index) => {

          const formatDate = (dateString) => {
            if (!dateString) return "";
            const date = new Date(dateString);
            const day = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
          };

              return (
                <TableRow key={row.id} sx={{backgroundColor:"#ffffff"}}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.flagState}</TableCell>
                  <TableCell>{formatDate(row.dateIssued)}</TableCell>
                  <TableCell>{formatDate(row.validUntil)}</TableCell>
                  <TableCell sx={{ color: "#064575", fontWeight: 600, textDecoration:"underline", textDecorationLine:"solid", textDecorationSkipInk:"true", textDecorationThickness:"0%"}}>
                    <IconButton>
                      <AttachFile sx={{ transform: "rotate(45deg)", color:"#064575"}} />
                    </IconButton>
                    {row.documentName || "viewAttachment"}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <IconButton sx={{ border: "2px solid #6fa9e2ff",width:"40px",height:"40px",
                          borderRadius: "8px",
                          p: 1,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",}} onClick={() => handleOpenDialog(index)}>
                        <Edit />
                      </IconButton>
                      <IconButton 
                      sx={{ 
                        border: "2px solid, #f71000ff",
                      color:" #e03a2eff",
                    borderRadius: "8px",
              p: 1,width:"40px",height:"40px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",}} onClick={() => handleDelete(index)} color="error">
                        <Delete color= "#1976d2" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
              </TableBody>

                      
                        
                      
                  </Table>
              

              
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                  <Button variant="outlined" size="small" startIcon={<Add/>} onClick={() => handleOpenDialog()}
                sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,          
            fontStyle: 'normal',
            fontSize: '14px',
            lineHeight: '24px',
            letterSpacing: '0.025em',    
            textAlign: 'center',
            textTransform: 'uppercase',
            color:"#006D90", width: '88px',
            borderRadius: '8px',
            borderWidth: '1px',
            paddingRight: '13px',
            paddingLeft: '10px',
            gap: '8px',
            opacity: 1,
          
        
            transform: 'rotate(0deg)',
            
          }}
          >Add</Button>
                  <Button variant="contained" size="small" 
                  sx={{
                            
                        backgroundColor:"#006D90",
                        borderRadius: '8px',
                        borderWidth: '1px',
                        borderStyle: 'solid',       
                        paddingRight: '13px',
                        paddingLeft: '10px',
                        gap: '8px',               
                        transform: 'rotate(0deg)',
                        opacity: 1,
                      }}
          startIcon={<Save/>} onClick={handleSave}>Save</Button>
                </Box>

             <Dialog
             open={openDialog}
  onClose={handleCloseDialog}
  fullWidth
  maxWidth="sm"
  PaperProps={{
    sx: {
      border: "2px solid #006D90",
      boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
      backgroundColor: "#fff",
      overflow: "hidden",
      borderRadius: "16px",
      
      "@media (max-width:600px)": {
        mx: 2, 
        borderRadius: "12px",
      },
    },
  }}
>
  <DialogTitle
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: 700,
      color: "#006D90",
      fontFamily: "Poppins, sans-serif",
      fontSize: "1.25rem",
      pb: 1,
      pt: 0,
      mt: 1,
      
      "@media (max-width:600px)": {
        fontSize: "1rem",
        px: 2,
      },
    }}
  >
    {editIndex !== null ? "Edit" : "Add"} Seafarer Credentials
    <IconButton onClick={handleCloseDialog}>
      <Close sx={{ color: "#006D90" }} />
    </IconButton>
  </DialogTitle>

  <Divider />

  <DialogContent
    sx={{sm:{
      px: 4,
      overflowY: "auto",
      "@media (max-width:600px)": {
        px: 2,
        py: 2,
        maxHeight: "80vh",
      },}
    }}
  >
    <Stack spacing={1}>

      <Typography fontFamily="Poppins" mb={0.5}>
        {selectedTab === "coc" ? "COC Name" : "Course Name"}
        {editIndex === null && (
          <Typography display="inline" color="#f80505ff">
            *
          </Typography>
        )}
      </Typography>
      <TextField
        size="small"
        required
        name="name"
        fullWidth
        value={newEntry.name}
        onChange={handleChange}
      />

      <Typography fontFamily="Poppins" mb={0.5}>
        Flag State
        {editIndex === null && (
          <Typography display="inline" color="#f80505ff">
            *
          </Typography>
        )}
      </Typography>
      <TextField
        size="small"
        required
        name="flagState"
        fullWidth
        value={newEntry.flagState}
        onChange={handleChange}
      />

      <Typography fontFamily="Poppins" mb={0.5}>
        Date Issued
        {editIndex === null && (
          <Typography display="inline" color="#f80505ff">
            *
          </Typography>
        )}
      </Typography>
      <TextField
        size="small"
        required
        name="dateIssued"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={newEntry.dateIssued}
        onChange={handleChange}
      />

      <Typography fontFamily="Poppins" mb={0.5}>
        Valid Until
        {editIndex === null && (
          <Typography display="inline" color="#f80505ff">
            *
          </Typography>
        )}
      </Typography>
      <TextField
        size="small"
        required
        name="validUntil"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={newEntry.validUntil}
        onChange={handleChange}
      />

      <Typography fontFamily="Poppins" fontWeight={500}>
        Upload Document
      </Typography>

      {!newEntry.documentName ? (
        <>
          <Box
            sx={{
              border: "2px dashed #006D90",
              borderRadius: 2,
              p: 1,
              textAlign: "center",
              backgroundColor: "#F9FBFC",
              "&:hover": { backgroundColor: "#F1F5F9" },
              transition: "0.2s",
              "@media (max-width:600px)": {
                p: 1.5,
              },
            }}
          >
            <input
              required
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              hidden
              id="file-upload"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <DriveFolderUploadRounded sx={{ color: "#006D90" }} />
              <Typography
                variant="body2"
                color="text.secondary"
                mt={1}
                sx={{
                  "@media (max-width:600px)": { fontSize: "0.85rem" },
                }}
              >
                Drag your file(s) to start uploading
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ py: 1 }}
              >
                OR
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#006D90",
                  color: "#006D90",
                  mt: 1,
                  textTransform: "none",
                  fontWeight: 600,
                }}
                component="span"
              >
                Browse files
              </Button>
            </label>
          </Box>

          <Typography
            variant="caption"
            display="block"
            mt={1}
            color="gray"
          >
            Supports .doc, .docx, .pdf, .jpg, .png
          </Typography>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
               width: "673px",
          height: "68px",
          fontSize:"14px",
            fontFamily: "Poppins",
            justifyContent: "space-between",
            border: "1px solid #E7E7E7",
            borderRadius: 2,
            px: 2,
            py: 1.5,
            mt: 1,
            backgroundColor: "#F3F3F3",
            flexWrap: "wrap",
               "@media (max-width:900px)": {
            width: "100%",
            height: "auto",
            flexDirection: "row",
            alignItems: "flex-start",
            p: 1,
        
          },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {newEntry.documentName.endsWith(".pdf") ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="pdf"
                width={26}
                height={26}
              />
            ) : newEntry.documentName.match(/\.(doc|docx)$/) ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337932.png"
                alt="doc"
                width={26}
                height={26}
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/136/136524.png"
                alt="img"
                width={26}
                height={26}
              />
            )}

            <Box>
              <Typography
                fontWeight={600}
                fontFamily="Poppins"
                sx={{
                  wordBreak: "break-all",
                  "@media (max-width:600px)": { fontSize: "0.85rem" },
                }}
              >
                {newEntry.documentName}
              </Typography>
              {newEntry.document && (
                <Typography variant="caption" color="gray">
                  {(newEntry.document.size / 1024 / 1024).toFixed(2)} MB
                </Typography>
              )}
            </Box>
          </Box>

          <IconButton sx={{display:"inline"}}
            onClick={() =>
              setNewEntry((prev) => ({
                ...prev,
                document: null,
                documentName: "",
              }))
            }
          >
            <Close />
          </IconButton>
        </Box>
      )}
    </Stack>
  </DialogContent>

  <DialogActions
    sx={{
      px: 3,
      pb: 2,
      "@media (max-width:600px)": {
        px: 2,
        pb: 2,
      },
    }}
  >
    <Button
      sx={{
        backgroundColor: "#006D90",
        px: "14px",
        py: "8px",
        "@media (max-width:600px)": {
          width: "100%",
          fontSize: "0.9rem",
        },
      }}
      variant="contained"
      onClick={handleAddOrEditEntry}
    >
      {editIndex !== null ? "Update" : "Add"}
    </Button>
  </DialogActions>
</Dialog>
      <Dialog fullWidth maxWidth="xs" open={deleteDialog.open} onClose={handleCloseDialog}>
          <DialogTitle align="right"><IconButton  onClick={handleCloseDialog}><Close
          /></IconButton></DialogTitle>
          <DialogContent><Typography sx={{fontFamily:"poppins",fontWeight:500,fontStyle:"medium",fontSize:"22px", alignItems:"center"}}>Are you Sure Want To Delete This Seafarer List?</Typography>
          
          </DialogContent>
          <DialogActions>
            <Stack spacing={5} direction="row">
            <Button variant="contained"  sx={{backgroundColor:"#006D90"}} startIcon={<DoneOutlined/>} onClick={confirmDelete}>Delete This Row</Button>
            <Button variant="outlined" sx={{color:"#006D90"}} startIcon={<Close />}onClick={handleCloseDialog}>Cancel This Time</Button>
            </Stack>
          </DialogActions>
        </Dialog>

    </Box>
  );
}

export default SeafarerCredentials;