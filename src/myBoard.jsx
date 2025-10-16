import React, { useState } from "react";  
import {
  Delete,
  Edit,
  RemoveRedEyeOutlined,
  LoopRounded,
  Search,
  AttachFile,
  Password,
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
  Link
} from "@mui/material";
import SeafarerCredentials from "./cred";

function MyBoard() {
  const [files,setFiles]=useState({});
  const [showCredentials,setShowCredentials] = useState(false);
  const [selectedSeafarer,setSelectedSeafarer] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  const val = [
    { sno: "1", name: "K R ashwathy", Id:"18051988", passport:"passport", loaction:"India", email: "ash@gmail.com", phone:"9791917536", ship: "Ms Training Ship1" , ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "2", name: "Michael", Id:"18051988", passport:"passport", loaction:"India", email:"mick@gmail.com", phone:"9775647536", ship: "Ms Training Ship1" , ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "3", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "4", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "5", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "6", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },
    { sno: "7", name: "Ramachandran Anath",Id:"18051988",passport:"passport",loaction:"India",email:"ramacha@gmail.com",phone:"9791917536", ship: "Ms Training Ship1" ,ship1:"(oilTanker)", role: "Deck Rating" },

  ];

  const headers = [
    "S.No", "Seafarer Info", "Id Info", "Ship Name/Type", "Role", "Documents",
    "Credentials", "Password", "Status", "Actions"
  ];

  const handleChangeFile=(e,rowIndex)=>{
    const selectFile=e.target.files[0];
    setFiles((prev)=>({...prev,[rowIndex]:selectFile}));
  }

  const handleViewCredentials = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setShowCredentials(true);
  };

  const handleBackToList = () => {
    setShowCredentials(false);
    setSelectedSeafarer(null);
  };


  return (
    <Box sx={{ p: 2 }}>

      <Breadcrumbs sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" onClick={handleBackToList} sx={{cursor:"pointer"}}>
          Seafarer List
        </Link>
        {showCredentials && <Typography color="text.primary">Credentials</Typography>}
      </Breadcrumbs>

      {!showCredentials ? (
        <>
          <Box sx={{
            width: isMobile ? "100%" : "fit-content",
            height: "fit-content",
            p: 2,
            backgroundColor: "#8fbdf9ff",
            overflowX: isMobile ? "auto" : "visible",
          }}>
            <Typography variant="h6" fontWeight="600" mb={2} textAlign="left" sx={{ display: "flex", justifyContent: "space-between"}}>
              Seafarer Information
              <Button sx={{ ml: 2 }}>Add</Button>
              <Button sx={{ ml: 1 }}>Bulk Upload</Button>
            </Typography>

            <Paper sx={{ mb: 2, p: 1, display: "flex", alignItems: "center", borderRadius: "8px", border: "1px solid #f48787ff" }}>
              <IconButton>
                <Search />
              </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search or filter..." inputProps={{ "aria-label": "search" }} />
            </Paper>

            <TableContainer component={Paper} elevation={0} sx={{ borderRadius: "10px", backgroundColor: "#8fbdf9ff", maxWidth: isMobile ? "100%" : "fit-content", overflowX: isMobile ? "auto" : "visible"}}>
              <Table size="small" sx={{ borderSpacing: "0px 14px", borderCollapse: "separate" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#baa9a9ff" }}>
                    {headers.map((header, idx) => (
                      <TableCell key={idx} sx={{ fontWeight: 600, minWidth: isMobile ? 120 : "auto" }}>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {val.map((row, index) => (
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
                          <IconButton color={files[index] ? "success" : "primary"} component="span">
                            <AttachFile />
                          </IconButton>
                        </label>
                        {files[index] && (<span style={{ marginLeft: "8px" }}>{files[index].name}</span>)}
                      </TableCell>
                      <TableCell>
                        <IconButton color="secondary" onClick={()=>handleViewCredentials(row)}>
                          <RemoveRedEyeOutlined />
                        </IconButton>
                      </TableCell>
                      <TableCell><IconButton color="warning"><Password /></IconButton></TableCell>
                      <TableCell><IconButton color="info"><LoopRounded /></IconButton></TableCell>
                      <TableCell>
                        <IconButton color="success"><Edit /></IconButton>
                        <IconButton color="error"><Delete /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
          </Box>
           <Box><Pagination count={10}/></Box>
        </>
      ) : (
        <SeafarerCredentials seafarer={selectedSeafarer}/>
      )}
     
    </Box>
  );
}

export default MyBoard;
