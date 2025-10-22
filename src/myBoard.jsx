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
  CloseRounded,
  CheckBox,
  Circle,
  CircleSharp,
  EditSharp,
  EditOutlined,
  Add,
  Upload,
  CloudUpload,
  CloudUploadOutlined,
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
  Menu,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import SeafarerCredentials from "./cred";

function MyBoard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  const [files, setFiles] = useState([]);
  const [seafarers, setSeafarers] = useState([
    { sno: "1", name: "K R Ashwathy", idNumber:"18051988", IdType:"passport", location:"India", email: "ash@gmail.com", phone:"9791917536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating",status: "Active" },
    { sno: "2", name: "Michael",idNumber:"18051988", IdType:"passport", location:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
    { sno: "3", name: "Ramachandran Anath",idNumber:"18051988",IdType:"passport",location:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
    { sno: "4", name: "Ramachandran Anath",idNumber:"18051988",IdType:"passport",location:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
    { sno: "5", name: "Ramachandran Anath",idNumber:"18051988",IdType:"passport",location:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
    { sno: "6", name: "Ramachandran Anath",idNumber:"18051988",IdType:"passport",location:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
    { sno: "7", name: "Ramachandran Anath",idNumber:"18051988",IdType:"passport",location:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
     { sno: "8", name: "Michael",idNumber:"18051988", IdType:"passport", location:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
       { sno: "9", name: "Michael",idNumber:"18051988", IdType:"passport", location:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating" ,status: "Active" },
         { sno: "10", name: "Michael",idNumber:"18051988", IdType:"passport", location:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
           { sno: "11", name: "Michael",idNumber:"18051988", IdType:"passport", location:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
             { sno: "12", name: "Michael",idNumber:"18051988", IdType:"passport", location:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating" ,status: "Active" }, 
              { sno: "13", name: "Michael",idNumber:"18051988", IdType:"passport", location:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating" ,status: "Active" },
          { sno: "14", name: "Michael",idNumber:"18051988", IdType:"passport", location:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1", ship1:"(oilTanker)", role: "Deck Rating",status: "Active"  },
          

            ]);

  const [showCredentials, setShowCredentials] = useState(false);
  const [selectedSeafarer, setSelectedSeafarer] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openBulkUpload, setOpenBulkUpload] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
const [bulkSeafarers, setBulkSeafarers] = useState([]); 

  const headers = [
    "S.No", "Seafarer Info", "Id Info", "Ship Name/Type", "Role", "Documents",
    "Credentials", "Password", "Status", "Actions"
  ];
   const [newSeafarer, setNewSeafarer] = useState({
      name: "",
      phone: "",
      email: "",
      role: "",
      shouldEmail: "",
      vesselAdmin: "",
      ship: "",
      ship1:"",
      IdType: "",
      idNumber: "",
      location: "",
      status:"Active"
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
 const file = e.target.files[0];
   if (file) {
    if (openAdd) {
      setNewSeafarer(prev => ({ ...prev, document: file, documentName: file.name }));
    } else if (openEdit) {
      setEditSeafarer(prev => ({ ...prev, document: file, documentName: file.name }));
    }
  }
   
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
    setEditSeafarer(seafarer);
    setOpenEdit(true);
  };

  const handleDelete = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setOpenDelete(true);
  };

  const handleAdd = () =>  {
    setNewSeafarer({
      name: "",
      phone: "",
      email: "",
      role: "",
      shouldEmail: "",
      vesselAdmin: "",
      ship: "",
      IdType: "",
      idNumber: "",
      location: "",
      status:"Active"
      
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
  setDuplicateCount(0);
  setFiles([]);
};
const [openStatusDialog, setOpenStatusDialog] = useState(null);
const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setSeafarers((prev) =>
      prev.map((s) =>
        s.sno === openStatusDialog.sno ? { ...s, status: newStatus } : s
      )
    );
    setOpenStatusDialog(null);
  };
  
  const [duplicateCount, setDuplicateCount] = useState(0);
const handleFileAdd = (newFiles) => {
  const allowedFormats = ["xlsx","pdf","jpg","jpeg","png","zip"];
  let duplicates = 0;
  let rejected = 0;

  const currentFileNames = [...files, ...bulkSeafarers].map(f => f.name);
  const batchFileNames = new Set(); 

  const filtered = newFiles.filter(file => {
    const ext = file.name.split(".").pop().toLowerCase();
    const isDuplicate =
      currentFileNames.includes(file.name) || batchFileNames.has(file.name);
    const isAllowed = allowedFormats.includes(ext);

    if (isDuplicate) duplicates++;
    if (!isAllowed) rejected++;

    // Add to batch set if allowed and not duplicate
    if (!isDuplicate && isAllowed) batchFileNames.add(file.name);

    return !isDuplicate && isAllowed;
  });

  const newBulk = filtered.map((file, index) => ({
    sno: (seafarers.length + bulkSeafarers.length + index + 1).toString(),
    name: file.name.split(".")[0],
    documentName: file.name,
    document: file,
    status: "Active",
    phone: "",
    email: "",
    role: "",
    ship: "",
    ship1: "",
    IdType: "",
    idNumber: "",
    location: "",
  }));

  setBulkSeafarers(prev => [...prev, ...newBulk]);
  setFiles(prev => [...prev, ...filtered].slice(0, 5));
  setDuplicateCount(prev => prev + duplicates);

  if (rejected > 0) {
    alert(`${rejected} file(s) were rejected. Only .xlsx, .pdf, .jpg, .png, .zip are allowed.`);
  }
};


  const handleFileRemove = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };
  const handleUpload = () => {
    if (files.length === 0) {
      alert("Please select files to upload.");
      return;
    }
     setSeafarers(prev => [...prev, ...bulkSeafarers]); 

    // Add uploaded files to seafarer list
    if (onAddFiles) {
      const newSeafarers = files.map((file, index) => ({
        sno: Date.now() + index,
        documentName: file.name,
        document: file,
        status: "Active",
      }));
      onAddFiles(newSeafarers); // callback to parent
    }

    alert(`${files.length} file(s) uploaded successfully!`);

    // Reset and close
    setFiles([]);
            setBulkSeafarers([]);
    setDuplicateCount(0);
    closeDialogs();
  };
  const [page, setPage] = useState(1);
const rowsPerPage = 7;

// Slice seafarers for the current page
const paginatedSeafarers = seafarers.slice(
  (page - 1) * rowsPerPage,
  page * rowsPerPage
);

// Pagination change handler
const handlePageChange = (event, value) => {
  setPage(value);
};


  return (
    <Box sx={{ p: 2, width: "100%" , backgroundColor: "#F4FCFF",minHeight: "100vh"}}>
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" onClick={handleBackToList} sx={{ cursor: "pointer" }}>
          Seafarer List
        </Link>
        {showCredentials && <Typography color="text.primary">Credentials</Typography>}
      </Breadcrumbs>

      {!showCredentials ? (
        <>
          {/* Header */}
         
          {/* Search */}
          <Box
  sx={{
    mb: 2,
    p: 1,
    display: "flex",
    flexDirection: { xs: "column", sm: "row" }, // Column on mobile, row on desktop
    alignItems: { xs: "stretch", sm: "center" },
    borderRadius: "8px",
    width: "100%",
    gap: 1, // Space between search and buttons on mobile
    justifyContent: "space-between",
  }}
>
  {/* Search */}
  <Paper
    sx={{
      p: 1,
      display: "flex",
      alignItems: "center",
      borderRadius: "8px",
      width: { xs: "100%", sm: "70%" }, // Full width on mobile
    }}
  >
    <IconButton><Search /></IconButton>
    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search or filter..." />
  </Paper>

  {/* Buttons on the right (desktop) or below (mobile) */}
  <Box
    sx={{
      display: "flex",
      gap: 1,
      mt: { xs: 1, sm: 0 }, // Add top margin on mobile
      justifyContent: { xs: "flex-start", sm: "flex-end" },
    }}
  >
    <Button variant="contained" sx={{fontFamily:"poppins",fontWeight:"600",backgroundColor:"#006D90",fontStyle:"semiBold",border:"1px"}} onClick={handleAdd}><IconButton  sx={{color:"#fffefeff"}}><Add sx={{color:"#ffffffff"}} /></IconButton>Add Seafarer</Button>
    <Button variant="outlined" sx={{fontFamily:"poppins",fontWeight:"600",backgroundColor:"#ffffffff",color:"#006D90",fontStyle:"semiBold",borderColor:"#006D90"}} onClick={handleBulkUpload}><IconButton  sx={{color:"#006D90"}}><CloudUploadOutlined sx={{color:"#006D90"}}/></IconButton> Bulk Upload</Button>
  </Box>
</Box>


          {/* Table */}
        <TableContainer

  component={Paper}
  elevation={0}
  sx={{
  backgroundColor:"#F4FCFF",
    borderRadius: "10px",
    width: "100%",
    overflowX: "auto",
  }}
>
  <Table
    size="small"
    sx={{
        backgroundColor:"#F4FCFF",
      borderSpacing: "0px 14px",
      borderCollapse: "separate",
      minWidth: 650, // ensures horizontal scroll on small screens
    }}
  >
    <TableHead>
      <TableRow sx={{ backgroundColor: "#5C5C5C" }}>
        {headers.map((header, idx) => (
          <TableCell
            key={idx}
            sx={{
              color:"#E4E4E4",
             
               fontFamily: "Inter, sans-serif",
    fontWeight: 700,           // bold
    fontStyle: "normal",       // MUI uses "normal" instead of "Bold"
    fontSize: "14.9px",
    
              minWidth: 120,
              px: { xs: 0.5, sm: 1 }, // smaller padding on mobile
              py: { xs: 0.5, sm: 1 },
            }}
          >
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody  sx={{
   
    borderRadius: "20.2px",
    border: "1.06px solid #E4E4E4",
   
  
  }}>
      {paginatedSeafarers.map((row, index) => (
        <TableRow
          key={index}
          sx={{
            

            backgroundColor: "#fff",
            "& td": { px: { xs: 0.5, sm: 1 }, py: { xs: 0.5, sm: 1 } },
          }}
        >
          <TableCell>{row.sno}</TableCell>

          {/* Name / Email / Phone stacked */}
          <TableCell 
 
>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3,
   
    // leading-trim is not standard CSS, so we ignore it
  }}>
              <Typography variant="body2" >{row.name}</Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}>{row.email}</Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}>{row.phone}</Typography>
            </Box>
          </TableCell>

          {/* ID Info */}
          <TableCell>
            <Typography sx={{ pt: "4px", fontSize: { xs: "0.65rem", sm: "0.875rem" } }}>{row.idNumber}</Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}>{row.IdType}</Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}>{row.location}</Typography>
          </TableCell>

          <TableCell>
            {row.ship}
            <Typography color="text.secondary" sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}>{row.ship1}</Typography>
          </TableCell>

          <TableCell sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}>{row.role}</TableCell>

          {/* Attachment */}
          <TableCell>
            <IconButton color="primary" component="label" sx={{ p: 0.5 }}>
              <AttachFile fontSize="small" />
              <Typography sx={{ textDecoration: "underline", fontSize: { xs: "0.65rem", sm: "0.875rem" } }}>viewAttachment</Typography>
            </IconButton>
          </TableCell>

          {/* View / Password / Status / Edit/Delete */}
          <TableCell>
            <IconButton color="secondary" onClick={() => handleViewCredentials(row)} sx={{ p: 0.5 }}>
              <RemoveRedEyeOutlined fontSize="small" />
            </IconButton>
          </TableCell>
          <TableCell>
            <IconButton color="warning" onClick={() => handlePassword(row)} sx={{ p: 0.5 }}>
              <Password fontSize="small" />
            </IconButton>
          </TableCell>

   {/* ✅ Status Box inside Table Cell */}
      <TableCell align="center">
        <Box
          sx={{
           
            
  fontFamily: 'Inter, sans-serif',
  fontWeight: 500,       // Medium
  fontStyle: 'normal',   // Corrected from 'Medium'
  fontSize: '12.77px',
  lineHeight: '140%',


            display: "inline-block",
            px: 1.5,
            py: 0.5,
            borderRadius: "12px",
            border: "1px solid",
            borderColor:  row.status === "Active" ? "green" : "red",
            color: row.status === "Active" ? "green" : "red",
            fontWeight: 600,
            fontSize: { xs: "0.7rem", sm: "0.85rem" },
            textAlign: "center",
            cursor: "pointer",
            minWidth: 80,
          }}
          onClick={() => setOpenStatusDialog(row)}
        >
           <IconButton   sx={{ p: 0.5, }}>
              <CircleSharp sx={{width:"8.2px",height:"8.2px",color: row.status === "Active" ? "green" : "red"}} fontSize="small" />
            </IconButton>
          {row.status || "Active"}<IconButton   sx={{ p: 0.5 }}>
              <EditSharp fontSize="small" />
            </IconButton>
        </Box>
      </TableCell>


          <TableCell>
        <Stack direction="row" spacing={2}  >  <IconButton sx={{ border: "2px solid #6fa9e2ff",
    borderRadius: "8px",
    p: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",gap:"9px"}}  variant="outlined" onClick={() => handleEdit(row)} >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton color="error" onClick={() => handleDelete(row)}   sx={{ 
              border: "2px solid, #f71000ff",
            color:" #e03a2eff",
           borderRadius: "8px",
    p: 1,ml:"auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",gap:"9px" }}>
              <Delete fontSize="small" />
            </IconButton></Stack>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


          <Box sx={{
    display: "flex",
    justifyContent: "center",  
    alignItems: "center",      
    mt: 2,                      
  }} >
           <Pagination
  count={Math.ceil(seafarers.length / rowsPerPage)}
  page={page}
  onChange={handlePageChange}
/>
          </Box>

<Dialog
        open={openAdd || openEdit}
        onClose={closeDialogs}
      
         maxWidth={false}
  PaperProps={{
    sx: {
      width: 772,
      height: 812,
      borderRadius: "20px",
      border: "1.5px solid #0069d0",
     // overflowY: isMobile ? "hidden":"visible",
      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
      p: 0,
      "@media (max-width:900px)": {
        width: "90%",
        height: "auto",
      },
    },
  }}
      >
        <DialogTitle
        sx={{
       height:"36px",
       px:"24px",
       py:"12px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      fontSize: "1.25rem",
      color: "#006D90",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #E0E0E0",
    }}
        >
          {openAdd ? "Add Seafarer Details" : "Edit Seafarer Details"}<IconButton  onClick={closeDialogs}><Close sx={{  backgroundColor:" #006D90" ,color:"#fae9e9ff"}}/></IconButton>
        </DialogTitle>
          <Divider/>
        <DialogContent sx={{
      px: 4,
      py:"7px",
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "#FFFFFF",
      height: "100%",
    }}>
         <Grid container spacing={2}>
            {[
              { label: "Seafarer Name", name: "name" },
              { label: "Mobile Number", name: "phone" },
              { label: "Email ID", name: "email" },
              { label: "Role", name: "role", type: "select", options: ["Deck Rating","Captain", "Engineer", "Crew"] },
              { label: "Should we email seafarer?", name: "shouldEmail", type: "select", options: ["Yes", "No"] },
              { label: "Vessel Admin?", name: "vesselAdmin", type: "select", options: ["Yes", "No"] },
              { label: "Ship Name & Type*", name: "ship" },
              { label: "ID Type*", name: "IdType", type: "select", options: ["Passport", "Seafarer ID"] },
              { label: "ID Number*", name: "idNumber" },
              { label: "Associated Country*", name: "location", type: "select", options: ["India", "USA", "UK"] },
            ].map((field) => (
              <Grid  size={6}item xs={12} sm={6} md={6} key={field.name}>
                <Typography  variant="body2" 
             sx={{
   
    height: 27,
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,

    
   
  
  
  }}>{field.label}<Typography sx={{color:"#ff0000ff",display:"inline"}}>*</Typography></Typography>
                {field.type === "select" ? (
                  <TextField
                sx={{
    width: 314,
    height: 30,
    borderRadius: "10px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      height: 30,
      paddingLeft: "10px",
      "& fieldset": {
        borderWidth: "1px",
        borderColor: "#B0BEC5",
      },
      "&:hover fieldset": {
        borderColor: "#064575", 
      },
      "&.Mui-focused fieldset": {
        borderColor: "#064575", 
      },
    },
    "& .MuiInputBase-input": {
      padding: "8px 10px",
      fontSize: "0.85rem",
    },
  }}
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
                      <MenuItem  key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <TextField 
                    sx={{
    width: 314,
    height: 27,
    borderRadius: "10px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      height: 27,
      paddingLeft: "10px",
      "& fieldset": {
        borderWidth: "1px",
        borderColor: "#B0BEC5", 
      },
      "&:hover fieldset": {
        borderColor: "#064575",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#064575", 
      },
    },
    "& .MuiInputBase-input": {
      padding: "8px 10px",
      fontSize: "0.85rem",
    },
  }}
                    
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
            ))} </Grid>

       
           {/* Upload Section */}
<Box >
  
  <Typography sx={{
    width:"164px",
    height:"27px",
      fontFamily: "Poppins",
      fontWeight: 400,
      mt:"4px",
     // fontSize: "18px",
    
   
    }}>Upload Documents</Typography>
  {(!openAdd ? editSeafarer.documentName : newSeafarer.documentName) ? (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #E7E7E7",
        borderRadius: 2,
        mt:"6px",
       width:"673px",
       height:"68px",
        backgroundColor: "#F3F3F3",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {((openAdd ? newSeafarer.documentName : editSeafarer.documentName).endsWith(".pdf")) ? (
          <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="pdf" width={26} />
        ) : ((openAdd ? newSeafarer.documentName : editSeafarer.documentName).match(/\.(doc|docx)$/)) ? (
          <img src="https://cdn-icons-png.flaticon.com/512/337/337932.png" alt="doc" width={26} />
        ) : (
          <img src="https://cdn-icons-png.flaticon.com/512/136/136524.png" alt="img" width={26} />
        )}

        <Box>
          <Typography fontWeight={400} sx={{ wordBreak: "break-all" }}>
            {openAdd ? newSeafarer.documentName : editSeafarer.documentName}
          </Typography>
          {(openAdd ? newSeafarer.document : editSeafarer.document) && (
            <Typography variant="caption" color="gray">
              {((openAdd ? newSeafarer.document : editSeafarer.document).size / 1024 / 1024).toFixed(2)} MB
            </Typography>
          )}
        </Box>
      </Box>

      <IconButton
        onClick={() => {
          if (openAdd) setNewSeafarer(prev => ({ ...prev, document: null, documentName: "" }));
          else setEditSeafarer(prev => ({ ...prev, document: null, documentName: "" }));
        }}
      >
        <Close />
      </IconButton>
    </Box>
  ) : (
    <>
      <Box
        sx={{
          border: "2px dashed #006D90",
          gap: "9px",
          borderRadius: 2,
         width:"674px",
         height:"133px",
          textAlign: "center",
          backgroundColor: "#F9FBFC",
          "&:hover": { backgroundColor: "#F1F5F9" },
          transition: "0.2s",
          cursor: "pointer",
        }}
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          hidden
          id="file-upload"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload">
          <DriveFolderUploadRounded sx={{ color: "#006D90",width:"30px",height:"30px"}} />
          <Typography variant="body2" color="text.secondary" >
            Drag your file(s) to start uploading
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            OR
          </Typography>
          <Button
            variant="outlined"
            sx={{ borderColor: "#006D90", color: "#006D90", textTransform: "none", }}
            component="span"
          >
            Browse files
          </Button>
        </label>
      </Box>
      <Typography variant="caption" display="block" mt="2px" height="20px" color="gray">
        Support .docs, .docx, .pdf, .jpg, .png
      </Typography>
    </>
  )}
</Box>

         


       
        </DialogContent>

        <DialogActions sx={{ px: 4, pb: 3 }}>

          {openAdd ? (
            <Button  sx={{backgroundColor: "#006D90"}} variant="contained" onClick={handleAddSeafarer}>
              + Add
            </Button>
          ) : (
            <Button sx={{backgroundColor: "#006D90"}} variant="contained" onClick={handleEditSeafarer}>
              Save Changes
            </Button>
          )}
        </DialogActions>
      </Dialog>

 <Dialog
  open={!!openStatusDialog}
  onClose={() => setOpenStatusDialog(null)}
>
  <DialogTitle sx={{  height:"36px",
       px:"24px",
       py:"12px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      fontSize: "1.25rem",
      color: "#006D90",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #E0E0E0",}}>Change Status<IconButton onClick={() => setOpenStatusDialog(null)}><Close  sx={{  backgroundColor:" #006D90" ,color:"#fae9e9ff"}} fontSize="small" /></IconButton></DialogTitle><Divider/>
  <DialogContent sx={{ minWidth: 250 }}>
    <FormControl>
      <RadioGroup
        value={openStatusDialog?.status || ""}
        onChange={(e) =>
          setOpenStatusDialog((prev) => ({
            ...prev,
            status: e.target.value,
          }))
        }
      >
        <FormControlLabel
          value="Active"
          control={<Radio sx={{color:"#006D90"}} />}
          label="Active"
        />
        <FormControlLabel
          value="Inactive"
          control={<Radio sx={{color:"#006D90"}}/>}
          label="Inactive"
        />
      </RadioGroup>
    </FormControl>

    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 1 }}>
  

      {/* Update button */}
      <Button
        variant="contained"
       sx={{backgroundColor:"#006D90",textTransform:"none"}} 
        onClick={handleStatusChange}
        
      >
        Update
      </Button>
    </Box>
  </DialogContent>
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

{/* Bulk Upload Dialog */}
<Dialog
  open={openBulkUpload}
  onClose={closeDialogs}
  fullWidth
  maxWidth="sm"
  PaperProps={{
    sx: { borderRadius: 3, p: 1 },
  }}
>
  <DialogTitle
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "Poppins",
      fontWeight: 600,
      color: "#006d90",
    }}
  >
    Bulk Upload
    <IconButton onClick={closeDialogs}>
      <CloseOutlined />
    </IconButton>
  </DialogTitle>

  <Divider />

  <DialogContent sx={{ mt: 2 }}>
    <Typography
      sx={{
        fontStyle: "italic",
        fontSize: "16px",
        color: "#D10100",
        mb: 2,
      }}
    >
      *Add your documents here and you can upload up to 5 files
    </Typography>

    {/* Upload Zone — hide after 5 files */}
    {files.length < 5 && (
      <>
        <Paper
          variant="outlined"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const dropped = Array.from(e.dataTransfer.files);
            handleFileAdd(dropped);
          }}
          sx={{
            width:"501px",
            height:"186px",
            border: "2px dashed #006d90",
            borderRadius: 2,
           p:1,
            textAlign: "center",
            mb: 1,
            backgroundColor: "#fafafa",
            cursor: "pointer",
            transition: "0.2s",
            "&:hover": { backgroundColor: "#f0f8ff" },
          }}
        >
          <DriveFolderUploadRounded sx={{ fontSize: 48, color: "#006d90" }} />
          <Typography sx={{ fontWeight: 400, mb: 1 }}>
            Drag your file(s) to start uploading
          </Typography>
          <Typography sx={{ mb: 1 }}>OR</Typography>
          <Button
            variant="outlined"
            component="label"
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 3,
              borderColor: "#006d90",
              color: "#006d90",
            }}
          >
            Browse Files
            <input
              type="file"
              multiple
              accept=".xlsx,.pdf,.jpg,.png,.zip"
              hidden
              onChange={(e) => handleFileAdd(Array.from(e.target.files))}
            />
          </Button>
        </Paper>

        {/* Supported formats */}
        <Typography sx={{ mt: 1, fontSize: "13px", color: "gray" }}>
          Supported formats: <strong>.xlsx, .pdf, .jpg, .png, .zip</strong>
        </Typography>
      </>
    )}

    {/* Uploaded Files List */}
    {files.length > 0 && (
      <Box>
        {files.map((file, index) => {
          const ext = file.name.split(".").pop().toLowerCase();
          const iconSrc =
            ext === "pdf"
              ? "https://cdn-icons-png.flaticon.com/512/337/337946.png"
              : ["doc", "docx"].includes(ext)
              ? "https://cdn-icons-png.flaticon.com/512/337/337932.png"
              : ["jpg", "jpeg", "png"].includes(ext)
              ? "https://cdn-icons-png.flaticon.com/512/136/136524.png"
              : "https://cdn-icons-png.flaticon.com/512/136/136523.png"; // generic icon for zip

          return (
            <Paper
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1.5,
                mt:2,
                mb: 1,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={iconSrc} alt={ext} width={26} />
                <Box>
                  <Typography fontWeight={400} sx={{ wordBreak: "break-all" }}>
                    {file.name}
                  </Typography>
                  <Typography variant="caption" color="gray">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </Typography>
                </Box>
              </Box>

              <IconButton onClick={() => handleFileRemove(index)}>
                <Close sx={{ color: "#D10100" }} />
              </IconButton>
            </Paper>
          );
        })}
      </Box>
    )}
  </DialogContent>
 
  <DialogActions
    sx={{
      flexDirection: "column",
      alignItems: "flex-start",
      p: 2,
    }}
  >
    {files.length > 0 && (
 
    <><Button
                  variant="contained"
                  sx={{
                    alignSelf: "flex-end",
                    textTransform: "none",
                    borderRadius: 2,
                    px: 3,
                    bgcolor: "#006d90",
                  }}
                  onClick={handleUpload}
                >
                  <DriveFolderUploadRounded sx={{ mr: 1 }} /> Upload
                </Button></>
 )}
  {files.length > 0 && (
    <><Typography sx={{ mx: 1, fontSize: "13px", color: "gray" }}>
                  Total Duplicates count = {duplicateCount}
                </Typography><Typography sx={{ fontSize: "13px", color: "gray" }}>
                    Total successfully added count = {files.length}
                  </Typography></>)}
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
