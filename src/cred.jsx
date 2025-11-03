import React, { useState } from "react";
import pic from "./assets/pic.png";
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
  Check,
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
  TableContainer,
  Grid,
  MenuItem,
} from "@mui/material";
import { Delete, Edit, AttachFile } from "@mui/icons-material";

function SeafarerCredentials({ seafarer }) {
  if (!seafarer) return null;
  const credentials = [
    { icon: <Person />, label: "Name", value: seafarer.name },
    { icon: <Email />, label: "Email ID", value: seafarer.email },
    { icon: <Phone />, label: "Mobile Number", value: seafarer.phone },
    {
      icon: <DirectionsBoat />,
      label: "Ship Name/Type",
      value: `${seafarer.ship} \n ${seafarer.ship1}`,
    },
    { icon: <Work />, label: "Role", value: seafarer.role },
  ];
  const [selectedTab, setSelectedTab] = useState("coc");
  const [cocTable, setCocTable] = useState([
    {
      id: 1,
      name: "Master National Certificate of Competence",
      flagState: "Poland",
      dateIssued: "10-10-2024",
      validUntil: "12-11-2025",
      document: null,
      documentName: "",
    },
  ]);

  const [stcwTable, setStcwTable] = useState([
    {
      id: 1,
      name: "Basic Safety Training",
      flagState: "Poland",
      dateIssued: "01-10-2023",
      validUntil: "01-10-2023",
      document: null,
      documentName: "",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    index: null,
  });
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
  const handleDelete = (index) => {
    setDeleteDialog({ open: true, index });
  };

  const confirmDelete = (index) => {
    const table = getCurrentTable();
    const updated = table.filter((_, i) => i !== deleteDialog.index);
    setCurrentTable(updated);
    setDeleteDialog({ open: false, index: null });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditIndex(null);
    setDeleteDialog({ open: false, index: null });
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
      setNewEntry((prev) => ({
        ...prev,
        document: file,
        documentName: file.name,
      }));
    }
  };

  const handleAddOrEditEntry = () => {
    if (
      !newEntry.name ||
      !newEntry.flagState ||
      !newEntry.dateIssued ||
      !newEntry.validUntil
    ) {
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
    <Box
      sx={{
        p: 3,
        mx: "auto",
        backgroundColor: "#F4FCFF",
        opacity: 1,
        "@media(max-width:900px)":{
          px:0,
        }
      }}
    >
      <Paper
        elevation={4}
        sx={{  p: 2, borderRadius: 2, backgroundColor: "#ffffffff", mb: 4 ,overflow:"hidden",border:"1px solid #006D90",
           "@media(max-width:900px)":{
          p:3
        }
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: "poppins", fontWeight: 700, color: "#006D90", mb: 2,fontSize:"18px", textAlign: "left" }}
        >
          Credentials
        </Typography>
       <Grid
  container
  spacing={2}
  sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"space-between"
  }}
>
  {credentials.map((item) => (
    <Grid
      item
      xs={6} 
      sm={4}  
      md={3} 
      key={item.label}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          
          gap: 1.5,
         minWidth: 150,

         "@media(max-width:900px)":{
            display: "flex",
          alignItems: "flex-start",
          gap: 1.5,
         minWidth: 150,
         }
        }}
      >
        <Box sx={{ color: "#006D90", mt: 0.3, flexShrink: 0,"& svg": {
              fontSize: { xs: 18, sm: 24 },  }}}>
          {item.icon}
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontWeight: 600,
              fontSize: { xs: "13px", sm: "15px" },
          
            }}
          >
            {item.label}
          </Typography>
          {item.label === "Ship Name/Type" ? (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: 400,
                  fontSize: { xs: "12px", sm: "14px" },
                  color: "#000",
                
                }}
              >
                {seafarer.ship}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: 400,
                  fontSize: { xs: "12px", sm: "14px" },
                  color: "#555",
                  lineHeight: "120%",
                }}
              >
                {seafarer.ship1}
              </Typography>
            </Box>
          ) : (
            <Typography
              sx={{
                fontFamily: "poppins",
                fontWeight: 400,
                fontSize: { xs: "12px", sm: "14px" },
                color: "#000",
                lineHeight: "120%",
              }}
            >
              {item.value}
            </Typography>
          )}
        </Box>
      </Box>
    </Grid>
  ))}
</Grid>

      </Paper>

      <ToggleButtonGroup
        value={selectedTab}
        exclusive
        onChange={handleTabChange}
        sx={{
          borderRadius: "50px",
          overflow: "hidden",
          border: "1px solid #006D90",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
          "& .MuiToggleButton-root": {
            textTransform: "none",
            border: "none",
            borderRadius: "50px",
            color: "#006D90",
            boderColor:"#006D90",
            px: 3,
            py: 1,
            fontFamily: "Poppins,",
            fontWeight: 500,
            fontSize: "14px",
            "&.Mui-selected": {
              backgroundColor: "#006D90",
              color: "white",
            },

            "&:focus": {
              outline: "none",
            },
          },
          "@media (max-width:600px)": {
            width: "100%",
            "& .MuiToggleButton-root": {
              fontSize: "12px",
              px: 2,
              py: 1,
            },
          },
        }}
      >
        <ToggleButton
          value="coc"
          sx={{
            flex: 1,
            textTransform: "none",
             fontFamily: "poppins",
            fontWeight: 700,
            fontSize: { xs: "16px", sm: "20px" },
            lineHeight: "100%",
            letterSpacing: "0%",
            border: "none",
            borderRadius: { xs: "32px", sm: "0 32px 32px 0" },
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
             fontFamily: "poppins",
            fontWeight: 700,
            fontSize: { xs: "16px", sm: "20px" },
            lineHeight: "100%",
            letterSpacing: "0%",
            border: "none",
            borderRadius: { xs: "32px", sm: "0 32px 32px 0" },
            py: { xs: 1.5, sm: 2 },
            transition: "all 0.3s ease",
          }}
        >
          STCW Modular Courses
        </ToggleButton>
      </ToggleButtonGroup>
    <TableContainer sx={{
                width:"100%",
                borderRadius:"10px",
                backgroundColor:"#F4FCFF",
                boxShadow:"none",
                overflow:"visible",
                "@media(max-width:900px)":{
                  maxHeight:320,
                  overflowX:"auto",
                  overFlowY:"auto"
                }
    }}> <Table sx={{ borderSpacing: "0px 14px", borderCollapse: "separate" ,
      
    }}>
        <TableHead
          sx={{
            backgroundColor: "#5C5C5C",
            border: "1.06px solid",
            borderCollapse: "separate",
            "@media(max-width:900px)":{
              position:"sticky",
              top:0,
              zIndex:3
            }          }}
        >
          <TableRow>
            <TableCell sx={{  fontFamily: "poppins",color: "#fff", fontWeight: 600 }}>S. No</TableCell>
            <TableCell sx={{ fontFamily: "poppins", color: "#fff", fontWeight: 600 }}>
              {selectedTab === "coc" ? "COC Name" : "Course Name"}
            </TableCell>
            <TableCell sx={{ fontFamily: "poppins", color: "#fff", fontWeight: 600 }}>
              Flag State
            </TableCell>
            <TableCell sx={{ fontFamily: "poppins", color: "#fff", fontWeight: 600 }}>
              Date Issued
            </TableCell>
            <TableCell sx={{ fontFamily: "poppins", color: "#fff", fontWeight: 600 }}>
              Valid Until
            </TableCell>
            <TableCell sx={{ fontFamily: "poppins", color: "#fff", fontWeight: 600 }}>
              Documents
            </TableCell>
            <TableCell sx={{  fontFamily: "poppins",color: "#fff", fontWeight: 600 }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{  backgroundColor: "#ffffff",
    fontFamily: "Poppins, sans-serif",
    "& *": {
      fontFamily: "Poppins, sans-serif !important", 
    },
  }}>
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
              <TableRow key={row.id} sx={{  fontFamily: "poppins",color: "#fff", fontWeight: 600 }}>
                <TableCell >{row.id}</TableCell>
                <TableCell >{row.name}</TableCell>
                <TableCell>{row.flagState}</TableCell>
                <TableCell>{formatDate(row.dateIssued)}</TableCell>
                <TableCell>{formatDate(row.validUntil)}</TableCell>
                <TableCell
                  sx={{
                    color: "#006D90",
                    fontWeight: 600,
                    textDecoration: "underline",
                    textDecorationLine: "solid",
                    textDecorationSkipInk: "true",
                    textDecorationThickness: "0%",
                    fontFamily:"poppins"
                  }}
                >
                  <IconButton>
                    <AttachFile
                      sx={{ transform: "rotate(45deg)", color: "#006D90" }}
                    />
                  </IconButton>
                  {row.documentName || "View Attachment"}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      sx={{
                        border: "2px solid #006D90",
                        backgroundColor: "#F4F8FF",
                       
                        borderRadius: "8px",
                        p: 1,
                      
                      }}
                      onClick={() => handleOpenDialog(index)}
                    >
                      <Edit sx={{ color: "#006D90",fontSize:"16px" }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        border: "2px solid, #f71000ff",
                        color: " #e03a2eff",
                        backgroundColor: "#FFEEF0",
                        borderRadius: "8px",
                        p: 1,
                        
                
                      }}
                      onClick={() => handleDelete(index)}
                      
                    >
                      <Delete sx={{color:"#e03a2eff",fontSize:"16px"}}/>
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
</TableContainer> 
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<Add />}
          onClick={() => handleOpenDialog()}
          sx={{
          fontFamily: "poppins",
            fontWeight: 600,
           // fontStyle: "normal",
            fontSize: "14px",
           // lineHeight: "24px",
            //letterSpacing: "0.025em",
            //textAlign: "center",
            //textTransform: "uppercase",
            color: "#006D90",
            borderColor:"#006D90",
            //width: "88px",
            borderRadius: "8px",
           // borderWidth: "1px",
            //paddingRight: "13px",
           // paddingLeft: "10px",
           // gap: "8px",
           // opacity: 1,

            //transform: "rotate(0deg)",
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#006D90",
            borderRadius: "8px",
         //   borderWidth: "1px",
          //  borderStyle: "solid",
          //  paddingRight: "13px",
           // paddingLeft: "10px",  
            gap: "8px",
            transform: "rotate(0deg)",
           // opacity: 1,
          }}
          startIcon={<Save />}
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="xs"
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
            fontFamily: "Poppins",
            fontSize: "14px",
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
            <Close sx={{ backgroundColor: "#006D90",color:"#ffff", borderRadius:"2px",fontSize:"18px" }} />
          </IconButton>
        </DialogTitle>

        <Divider />

        <DialogContent
        
         
        >
         
            <Grid
  container
  spacing={1}
  sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap",
   
  }}
>
  {[
    {
      label: selectedTab === "coc" ? "COC Name" : "Course Name",
      name: "name",
      type: "select",
      options:
        selectedTab === "coc"
          ? ["Deck Rating", "Captain", "Engineer", "Crew"]
          : ["Web", "Cloud", "Test", "Security"],
      placeholder:
        selectedTab === "coc"
          ? "Select COC Name"
          : "Select Course Name",
    },
    {
      label: "Flag State",
      name: "flagState",
      type: "select",
      options: ["India", "Panama", "Liberia", "Bahamas"],
      placeholder: "Select Flag State",
  
    },
    {
      label: "Date Issued",
      name: "dateIssued",
      type: "date",
      placeholder: "Select Date Issued",
    },
    {
      label: "Valid Until",
      name: "validUntil",
      type: "date",
      placeholder: "Select Valid Date",
    },
  ].map((field) => (
    <Grid  key={field.name}>
      {/* ---- Label ---- */}
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "12px",
          mb: 0.5,
        }}
      >
        {field.label}
        { editIndex === null ? (
                             <Box
                               component="span"
                               sx={{ color: "#ff0000ff", display: "inline" }}
                             >
                               *
                             </Box>
                           ) : (
                             ""
                           )}
      </Typography>

      {/* ---- Input ---- */}
      {field.type === "select" ? (
        <TextField
          select
          required
          fullWidth
          size="small"
          name={field.name}
          value={newEntry[field.name] || ""}
          onChange={handleChange}
          SelectProps={{
            displayEmpty: true,
            renderValue: (selected) =>
              selected ? (
                selected
              ) : (
                <span style={{ fontSize: "10px", color: "#9e9e9e"  }}>
                  {field.placeholder}
                </span>
              ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              height:"27px",
              "& fieldset": {
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
              fontSize: "0.7rem",
            },
            "@media (max-width:900px)": {
              width: "100%",
              height: "40px",
            },
          }}
        >
          <MenuItem value="" disabled sx={{fontSize:"12px",fontFamily:"poppins"}} >
            {field.placeholder}
          </MenuItem>
          {field.options.map((opt) => (
            <MenuItem
              key={opt}
              value={opt}
              sx={{ fontSize: "13px", fontFamily: "Poppins" }}
            >
              {opt}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <TextField
          fullWidth
          required
          size="small"
          name={field.name}
          type={field.type}
          value={newEntry[field.name] || ""}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          placeholder={field.placeholder}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
               height:"27px",
              "& fieldset": {
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
              fontSize: "10px",
            },
            "@media (max-width:900px)": {
              width: "100%",
              height: "40px",
            },
          }}
        />
      )}
    </Grid>
  ))}
</Grid>


           
            <Typography fontFamily="Poppins" fontWeight={500} fontSize="12px"p={0.5}>
              Upload Document
            </Typography>
            {!newEntry.documentName ? (
              <>
                <Box
                  sx={{
                    border: "2px dashed #006D90",
                    borderRadius: 2,
                    p: 1.5,
                  
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
                    <DriveFolderUploadRounded sx={{ color: "#006D90",fontSize:"14px" }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                  
                      sx={{
                       fontSize: "10px" 
                      }}
                    >
                      Drag your file(s) to start uploading
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily:"poppins",fontSize:"10px" }}
                    >
                      OR
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#006D90",
                        color: "#006D90",
                       mt: 1,
                       fontSize:"10px",
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
                  //mt={1}
                  fontSize="10px"
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
               
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  justifyContent: "space-between",
                  border: "1px solid #E7E7E7",
                  borderRadius: 2,
                  mt: "6px",

                  backgroundColor: "#F3F3F3",
                  "@media (max-width:900px)": {
                    width: "100%",
                    height: "auto",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    p: 1,
                    fontSize: "10px",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {newEntry.documentName.endsWith(".pdf") ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                      alt="pdf"
                      width={26}
                    />
                  ) : newEntry.documentName.match(/\.(doc|docx)$/) ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/337/337932.png"
                      alt="doc"
                      width={26}
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
                      fontWeight={500}
                      fontFamily="Poppins"
                      sx={{
                       fontSize:"10px", wordBreak: "break-all",
                        "@media (max-width:600px)": { fontSize: "0.85rem" },
                      }}
                    >
                      {newEntry.documentName}
                    </Typography>
                    {newEntry.document && (
                      <Typography variant="caption" color="gray"sx={{fontSize:"10px"}}>
                        {(newEntry.document.size / 1024 / 1024).toFixed(2)} MB
                      </Typography>
                    )}
                  </Box>
                </Box>

                <IconButton
                  onClick={() =>
                    setNewEntry((prev) => ({
                      ...prev,
                      document: null,
                      documentName: "",
                    }))
                  }
                >
                  <Close sx={{  fontSize:"14px",}} />
                </IconButton>
              </Box>
            )}
            
          
        </DialogContent>

        <DialogActions
          sx={{
            px: 2,
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
                      textTransform: "none",
                      fontSize: "10px",
                      "& .MuiButton-startIcon": {
                        marginRight: "4px",
                        "& > *:nth-of-type(1)": {
                          fontSize: "13px",
                        },
                      },
                      
            }}
            variant="contained"
            onClick={handleAddOrEditEntry}
            startIcon= {editIndex !== null ? <Check  /> : <Add />}
          >
          
           
            {editIndex !== null ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={deleteDialog.open}
        onClose={handleCloseDialog}
        PaperProps={{
          sx:{
            border:"2px solid #006D90",
            borderRadius:"12px",
            backgroundColor:"#ffffff",
            "@media(max-width:600px)":{
                border: "2px solid #006D90",
                  borderRadius: "10px",
                  mx: 2,
            }
          },
        }}
      >
        <DialogTitle align="right">
          <IconButton onClick={handleCloseDialog}>
            <Close sx={{color:"#006D90"}} />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              textAlign:"center",
              gap:2, alignItems: "center",}}>
          <Typography
            sx={{
             
              fontFamily: "poppins",
              fontWeight: 500,
              fontStyle: "medium",
              fontSize: "22px",
              alignItems: "center",
            }}
          >
            Are you Sure Want To Delete This Seafarer List?
          </Typography>
          <img src={pic} alt="warning" width="270px" height="230" />
        </DialogContent>
        <DialogActions>
          <Stack spacing={5} direction="row">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#006D90" }}
              startIcon={<DoneOutlined />}
              onClick={confirmDelete}
            >
              Delete This Row
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#006D90" }}
              startIcon={<Close />}
              onClick={handleCloseDialog}
            >
              Cancel This Time
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SeafarerCredentials;