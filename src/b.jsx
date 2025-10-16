import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  IconButton,
  Breadcrumbs,
  Link,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { RemoveRedEyeOutlined, Add, Save, Close, DriveFolderUploadRounded, Email, Person, Phone, DirectionsBoat, Work, Edit, Delete, AttachFile } from "@mui/icons-material";

// ------------------ Seafarer Credentials Component ------------------
function SeafarerCredentials({ seafarer }) {
  const [selectedTab, setSelectedTab] = useState("coc");
  const [cocTable, setCocTable] = useState([]);
  const [stcwTable, setStcwTable] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newEntry, setNewEntry] = useState({
    name: "",
    flagState: "",
    dateIssued: "",
    validUntil: "",
    document: null,
    documentName: "",
  });

  const handleTabChange = (event, newValue) => { if (newValue) setSelectedTab(newValue); };
  const getCurrentTable = () => (selectedTab === "coc" ? cocTable : stcwTable);
  const setCurrentTable = (data) => (selectedTab === "coc" ? setCocTable(data) : setStcwTable(data));

  const handleOpenDialog = (index = null) => {
    const table = getCurrentTable();
    if (index !== null) setEditIndex(index), setNewEntry(table[index]);
    else setEditIndex(null), setNewEntry({ name: "", flagState: "", dateIssued: "", validUntil: "", document: null, documentName: "" });
    setOpenDialog(true);
  };
  const handleCloseDialog = () => { setOpenDialog(false); setEditIndex(null); setNewEntry({ name: "", flagState: "", dateIssued: "", validUntil: "", document: null, documentName: "" }); };
  const handleChange = (e) => { const { name, value } = e.target; setNewEntry(prev => ({ ...prev, [name]: value })); };
  const handleFileChange = (e) => { const file = e.target.files[0]; if(file) setNewEntry(prev => ({ ...prev, document: file, documentName: file.name })); };
  const handleAddOrEditEntry = () => {
    if (!newEntry.name || !newEntry.flagState || !newEntry.dateIssued || !newEntry.validUntil) { alert("Please fill all fields"); return; }
    if (new Date(newEntry.validUntil) < new Date(newEntry.dateIssued)) { alert("Valid Until cannot be before Date Issued"); return; }
    const table = getCurrentTable();
    if (editIndex !== null) { const updated = [...table]; updated[editIndex] = newEntry; setCurrentTable(updated); }
    else setCurrentTable([...table, { id: table.length + 1, ...newEntry }]);
    handleCloseDialog();
  };
  const handleDelete = (index) => { const table = getCurrentTable(); setCurrentTable(table.filter((_, i) => i !== index)); };
  const handleSave = () => { console.log("COC:", cocTable); console.log("STCW:", stcwTable); alert("Data saved! Check console."); };

  // Dynamic credentials
  const credentials = [
    { icon: <Person />, label: "Name", value: seafarer.name },
    { icon: <Email />, label: "Email", value: seafarer.email },
    { icon: <Phone />, label: "Mobile Number", value: seafarer.phone },
    { icon: <DirectionsBoat />, label: "Ship/Type", value: `${seafarer.ship} (${seafarer.type})` },
    { icon: <Work />, label: "Role", value: seafarer.role },
  ];

  return (
    <Box>
      {/* Credentials */}
      <Paper elevation={4} sx={{ p: 3, mb: 4, borderRadius: 2, backgroundColor: "#F8FAFF" }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#1E3A8A" }}>Credentials</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="space-between">
          {credentials.map(c => (
            <Box key={c.label} sx={{ display: "flex", gap: 1, minWidth: 200 }}>
              {c.icon}
              <Box>
                <Typography variant="body2" color="textSecondary">{c.label}</Typography>
                <Typography variant="body1" fontWeight={600}>{c.value}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>

      {/* Toggle COC/STCW */}
      <ToggleButtonGroup value={selectedTab} exclusive onChange={handleTabChange} sx={{ width: "100%", mb: 3, borderRadius: "32px" }}>
        <ToggleButton value="coc" sx={{ flex:1, borderRadius:32, backgroundColor:selectedTab==='coc'?'#1E3A8A':'transparent', color:selectedTab==='coc'?'#fff':'#1E3A8A' }}>Certificate of Competence</ToggleButton>
        <ToggleButton value="stcw" sx={{ flex:1, borderRadius:32, backgroundColor:selectedTab==='stcw'?'#1E3A8A':'transparent', color:selectedTab==='stcw'?'#fff':'#1E3A8A' }}>STCW Courses</ToggleButton>
      </ToggleButtonGroup>

      {/* Table */}
      <TableContainer component={Paper} sx={{ maxHeight:400, borderRadius:2 }}>
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor:"#5C5C5C" }}>
            <TableRow>
              <TableCell sx={{color:"#fff", fontWeight:600}}>S.No</TableCell>
              <TableCell sx={{color:"#fff", fontWeight:600}}>{selectedTab==='coc'?"COC Name":"Course Name"}</TableCell>
              <TableCell sx={{color:"#fff", fontWeight:600}}>Flag State</TableCell>
              <TableCell sx={{color:"#fff", fontWeight:600}}>Date Issued</TableCell>
              <TableCell sx={{color:"#fff", fontWeight:600}}>Valid Until</TableCell>
              <TableCell sx={{color:"#fff", fontWeight:600}}>Documents</TableCell>
              <TableCell sx={{color:"#fff", fontWeight:600}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getCurrentTable().map((row,index)=>(
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.flagState}</TableCell>
                <TableCell>{row.dateIssued}</TableCell>
                <TableCell>{row.validUntil}</TableCell>
                <TableCell><IconButton><AttachFile/></IconButton>{row.documentName||"viewAttachment"}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <IconButton onClick={()=>handleOpenDialog(index)}><Edit/></IconButton>
                    <IconButton onClick={()=>handleDelete(index)} color="error"><Delete/></IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display:"flex", justifyContent:"space-between", mt:3 }}>
        <Button variant="outlined" onClick={()=>handleOpenDialog()}><Add/> Add</Button>
        <Button variant="contained" onClick={handleSave}><Save/> Save</Button>
      </Box>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle sx={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          {editIndex!==null?"Edit":"Add"} {selectedTab==='coc'?"COC":"STCW"} Credential
          <IconButton onClick={handleCloseDialog}><Close/></IconButton>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField label={selectedTab==='coc'?"COC Name":"Course Name"} name="name" fullWidth value={newEntry.name} onChange={handleChange}/>
            <TextField label="Flag State" name="flagState" fullWidth value={newEntry.flagState} onChange={handleChange}/>
            <TextField label="Date Issued" type="date" name="dateIssued" InputLabelProps={{shrink:true}} fullWidth value={newEntry.dateIssued} onChange={handleChange}/>
            <TextField label="Valid Until" type="date" name="validUntil" InputLabelProps={{shrink:true}} fullWidth value={newEntry.validUntil} onChange={handleChange}/>
            <Box>
              <input type="file" hidden id="file-upload" onChange={e=>setNewEntry(prev=>({...prev, document:e.target.files[0], documentName:e.target.files[0]?.name}))}/>
              <label htmlFor="file-upload"><DriveFolderUploadRounded/> Upload Document</label>
              {newEntry.documentName && <Typography>{newEntry.documentName}</Typography>}
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleAddOrEditEntry}>{editIndex!==null?"Update":"Add"}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

// ------------------ Main Component ------------------
export default function SeafarerBoard() {
  const [showCredentials, setShowCredentials] = useState(false);
  const [selectedSeafarer, setSelectedSeafarer] = useState(null);
  const [searchText, setSearchText] = useState("");
  const seafarers = [
    { id:1, name:"Ashwathy K R", email:"ashwathykr@gmail.com", phone:"9791971536", ship:"Training Ship 1", type:"Oil Tanker", role:"Deck Rating" },
    { id:2, name:"Baranikumar K", email:"baranikumar7777@gmail.com", phone:"9360388506", ship:"Training Ship 2", type:"Bulk Carrier", role:"Engine Rating" },
  ];

  const filtered = seafarers.filter(s=>s.name.toLowerCase().includes(searchText.toLowerCase()));

  const handleViewCredentials = (seafarer) => { setSelectedSeafarer(seafarer); setShowCredentials(true); };
  const handleBackToList = () => { setShowCredentials(false); setSelectedSeafarer(null); };

  return (
    <Box sx={{ p:2, maxWidth:1200, mx:"auto" }}>
      <Breadcrumbs sx={{ mb:3 }}>
        <Link underline="hover" color="inherit" onClick={handleBackToList} sx={{cursor:"pointer"}}>Seafarer List</Link>
        {showCredentials && <Typography color="text.primary">Credentials</Typography>}
      </Breadcrumbs>

      {!showCredentials ? (
        <Paper sx={{ p:2 }}>
          <TextField placeholder="Search by name..." fullWidth value={searchText} onChange={e=>setSearchText(e.target.value)} sx={{ mb:2 }}/>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Ship</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map((s,i)=>(
                  <TableRow key={s.id}>
                    <TableCell>{i+1}</TableCell>
                    <TableCell>{s.name}</TableCell>
                    <TableCell>{s.email}</TableCell>
                    <TableCell>{s.phone}</TableCell>
                    <TableCell>{s.ship}</TableCell>
                    <TableCell>{s.role}</TableCell>
                    <TableCell><IconButton onClick={()=>handleViewCredentials(s)}><RemoveRedEyeOutlined/></IconButton></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <SeafarerCredentials seafarer={selectedSeafarer}/>
      )}
    </Box>
  );
}
