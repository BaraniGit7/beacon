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
  TableContainer,
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

function SeafarerCredentials() {
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

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditIndex(null);
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

  const handleDelete = (index) => {
    const table = getCurrentTable();
    const updated = table.filter((_, i) => i !== index);
    setCurrentTable(updated);
  };

  const handleSave = () => {
    console.log("COC Data:", cocTable);
    console.log("STCW Data:", stcwTable);
    alert("Data saved! Check console.");
  };

  const credentials = [
    { icon: <Person />, label: "Name", value: "Ashwathy K R" },
    { icon: <Email />, label: "Email ID", value: "ashwathykr@gmail.com" },
    { icon: <Phone />, label: "Mobile Number", value: "9791971536" },
    { icon: <DirectionsBoat />, label: "Ship Name/Type", value: "M/S Training Ship 1 (Oil Tanker)" },
    { icon: <Work />, label: "Role", value: "Deck Rating" },
  ];

  return (
    <Box sx={{ p: 2, maxWidth: "1200px", mx: "auto" }}>
    
      <Paper elevation={4} sx={{ p: 3, borderRadius: 2, backgroundColor: "#F8FAFF", mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#1E3A8A", mb: 2, textAlign:"left"}}>
          Credentials
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="space-between" >
          {credentials.map((item) => (
            <Box key={item.label} sx={{ display: "flex", gap: 1, minWidth: 200 }}>
              {item.icon}
              <Box  textAlign= "left" >
                <Typography variant="body2" color="textSecondary" fontWeight={500}>
                  {item.label}
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {item.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>

    
      <ToggleButtonGroup
        value={selectedTab}
        exclusive
        onChange={handleTabChange}
        sx={{ width: "100%", borderRadius: "32px", mb: 3, overflow: "hidden" }}
      >
        <ToggleButton
          value="coc"
          sx={{
            flex: 1,
            borderRadius: 32,
            backgroundColor: selectedTab === "coc" ? "#1E3A8A" : "transparent",
            color: selectedTab === "coc" ? "#fff" : "#1E3A8A",
            "&:hover": { backgroundColor: "#0B2357", color: "#fff" },
          }}
        >
          Certificate of Competence
        </ToggleButton>
        <ToggleButton
          value="stcw"
          sx={{
            flex: 1,
            borderRadius: 32,
            borderColor: "#1E3A8A",
            color: selectedTab === "stcw" ? "#fff" : "#1E3A8A",
            backgroundColor: selectedTab === "stcw" ? "#1E3A8A" : "transparent",
            "&:hover": { backgroundColor: "#0B2357", color: "#fff" },
          }}
        >
          STCW Modular Courses
        </ToggleButton>
      </ToggleButtonGroup>

      <TableContainer component={Paper} sx={{ borderRadius: 2, maxHeight: 400 }}>
        <Table >
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
          <TableBody>
            {getCurrentTable().map((row, index) => (
             
              
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.flagState}</TableCell>
                <TableCell>{row.dateIssued}</TableCell>
                <TableCell>{row.validUntil}</TableCell>
                <TableCell sx={{ color: "#1E3A8A", fontWeight: 600 }}>
                 <IconButton>   <AttachFile sx={{ transform: "rotate( 45deg)" }}/></IconButton> {row.documentName || "No File"}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <IconButton onClick={() => handleOpenDialog(index)}><Edit /></IconButton>
                    <IconButton onClick={() => handleDelete(index)} color="error"><Delete /></IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="outlined" onClick={() => handleOpenDialog()}sx={{border: "1px solid #064575"}}><IconButton color="#FFFFFF"><Add/></IconButton>Add</Button>
        <Button variant="contained" backgroundColor=" #259BC1"
 onClick={handleSave}><IconButton><Save/></IconButton>Save</Button>
      </Box>


      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm"   PaperProps={{
          sx: {
            
        
            backgroundColor: "#f9fbfc",
            overflow: "hidden",
          },
        }}>
        <DialogTitle  sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "700",
            color:" #064575",
            pb: 1,
            pt:0,
            mt:0,
          }}>{editIndex !== null ? "Edit" : "Add"}  seafarer Credentials<IconButton ><Close onClick={handleCloseDialog}/></IconButton></DialogTitle>
        <Divider/><DialogContent>
          <Stack spacing={2} mt={1}>
               <Typography fontFamily="poppins"  mb={0.5} >{selectedTab === "coc" ? "COC Name" : "Course Name"}</Typography>
            <TextField required
              name="name"
              fullWidth
              value={newEntry.name}
              onChange={handleChange}
              
            /><Typography fontFamily="poppins"  mb={0.5} >Flag State</Typography>
            <TextField
            
              name="flagState"
              fullWidth
              value={newEntry.flagState}
              onChange={handleChange}
            /><Typography fontFamily="poppins"  mb={0.5} >Date Issued</Typography>
            <TextField
            
              name="dateIssued"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={newEntry.dateIssued}
              onChange={handleChange}
            /><Typography fontFamily="poppins"  mb={0.5} > Valid Until</Typography>
            <TextField
             
              name="validUntil"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={newEntry.validUntil}
              onChange={handleChange}
            /><Typography fontFamily="poppins"  mb={0.5} >Upload Documents</Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<AttachFile />}
            >
              {newEntry.documentName || "Upload Document"}
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                accept=".pdf,.txt,.doc,.docx,.jpg,.svg,.png"
              />
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleAddOrEditEntry}>
                   {editIndex !== null ? "Update" : "Add"}
                 </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SeafarerCredentials;
