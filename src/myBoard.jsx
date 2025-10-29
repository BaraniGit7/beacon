import React, { useState } from "react";
import pic from "./assets/pic.png";

import {
  Delete,
  Edit,
  RemoveRedEyeOutlined,
  Search,
  AttachFile,
  Close,
  Check,
  DriveFolderUploadRounded,
  CloseOutlined,
  CircleSharp,
  Add,
  CloudUploadOutlined,
  LockReset,
  Person,
  Phone,
  Email,
  Work,
  MarkEmailRead,
  AdminPanelSettings,
  Sailing,
  Public,
  MarkAsUnreadSharp,
  Pin,
  Done,
  EditRounded,
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
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  InputAdornment,
} from "@mui/material";
import SeafarerCredentials from "./cred";

function MyBoard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [files, setFiles] = useState([]);
  const [seafarers, setSeafarers] = useState([
    {
      sno: "1",
      name: "K R Ashwathy",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "ash@gmail.com",
      phone: "9791917536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "2",
      name: "Michael",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "mick@gmail.com",
      phone: "9775647536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "3",
      name: "Ramachandran Anath",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "ramacha@gmail.com",
      phone: "9791917536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "4",
      name: "Ramachandran Anath",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "ramacha@gmail.com",
      phone: "9791917536",
      ship: "Ms Training Ship1",
     ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "5",
      name: "Ramachandran Anath",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "ramacha@gmail.com",
      phone: "9791917536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "6",
      name: "Ramachandran Anath",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "ramacha@gmail.com",
      phone: "9791917536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "7",
      name: "Ramachandran Anath",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "ramacha@gmail.com",
      phone: "9791917536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "8",
      name: "Michael",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "mick@gmail.com",
      phone: "9775647536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "9",
      name: "Michael",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "mick@gmail.com",
      phone: "9775647536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "10",
      name: "Michael",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "mick@gmail.com",
      phone: "9775647536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "11",
      name: "Michael",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "mick@gmail.com",
      phone: "9775647536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "12",
      name: "Michael",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "mick@gmail.com",
      phone: "9775647536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "13",
      name: "Michael",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "mick@gmail.com",
      phone: "9775647536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
    {
      sno: "14",
      name: "Michael",
      idNumber: "18051988",
      IdType: "passport",
      location: "India",
      email: "mick@gmail.com",
      phone: "9775647536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
      status: "Active",
    },
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
    "S.No",
    "Seafarer Info",
    "Id Info",
    "Ship Name/Type",
    "Role",
    "Documents",
    "Credentials",
    "Password",
    "Status",
    "Actions",
  ];
  const [newSeafarer, setNewSeafarer] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    shouldEmail: "",
    vesselAdmin: "",
    ship: "",
    ship1: "",
    IdType: "",
    idNumber: "",
    location: "",
    status: "Active",
  });

  const [editSeafarer, setEditSeafarer] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (openAdd) setNewSeafarer((prev) => ({ ...prev, [name]: value }));
    else if (openEdit) setEditSeafarer((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (openAdd) {
        setNewSeafarer((prev) => ({
          ...prev,
          document: file,
          documentName: file.name,
        }));
      } else if (openEdit) {
        setEditSeafarer((prev) => ({
          ...prev,
          document: file,
          documentName: file.name,
        }));
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
  const handleAdd = () => {
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
      status: "Active",
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
  const handleStatusChange = () => {
    if (!openStatusDialog) return;

    const newStatus = openStatusDialog.status;

    setSeafarers((prev) =>
      prev.map((s) =>
        s.sno === openStatusDialog.sno ? { ...s, status: newStatus } : s
      )
    );

    setOpenStatusDialog(null);
  };

  const [duplicateCount, setDuplicateCount] = useState(0);
  const handleFileAdd = (newFiles) => {
    const allowedFormats = ["xlsx", "pdf", "jpg", "jpeg", "png", "zip"];
    let duplicates = 0;
    let rejected = 0;

    const currentFileNames = [...files, ...bulkSeafarers].map((f) => f.name);
    const batchFileNames = new Set();

    const filtered = newFiles.filter((file) => {
      const ext = file.name.split(".").pop().toLowerCase();
      const isDuplicate =
        currentFileNames.includes(file.name) || batchFileNames.has(file.name);
      const isAllowed = allowedFormats.includes(ext);

      if (isDuplicate) duplicates++;
      if (!isAllowed) rejected++;

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

    setBulkSeafarers((prev) => [...prev, ...newBulk]);
    setFiles((prev) => [...prev, ...filtered].slice(0, 5));
    setDuplicateCount((prev) => prev + duplicates);

    if (rejected > 0) {
      alert(
        `${rejected} file(s) were rejected. Only .xlsx, .pdf, .jpg, .png, .zip are allowed.`
      );
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
    setSeafarers((prev) => [...prev, ...bulkSeafarers]);
    if (onAddFiles) {
      const newSeafarers = files.map((file, index) => ({
        sno: Date.now() + index,
        documentName: file.name,
        document: file,
        status: "Active",
      }));
      onAddFiles(newSeafarers);
    }

    alert(`${files.length} file(s) uploaded successfully!`);
    setFiles([]);
    setBulkSeafarers([]);
    setDuplicateCount(0);
    closeDialogs();
  };
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const paginatedSeafarers = seafarers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const iconMap = {
    name: <Person sx={{ color: "#d3d3d3ff" }} />,
    phone: <Phone sx={{ color: "#d3d3d3ff" }} />,
    email: <Email sx={{ color: "#d3d3d3ff" }} />,
    role: <Work sx={{ color: "#d8d8d8ff" }} />,
    shouldEmail: <MarkEmailRead sx={{ color: "#d3d3d3ff" }} />,
    vesselAdmin: <AdminPanelSettings sx={{ color: "#d3d3d3ff" }} />,
    ship: <Sailing sx={{ color: "#d3d3d3ff" }} />,
    IdType: <MarkAsUnreadSharp sx={{ color: "#d3d3d3ff" }} />,
    idNumber: <Pin sx={{ color: "#d3d3d3ff" }} />,
    location: <Public sx={{ color: "#d3d3d3ff" }} />,
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        pl: 2,
        pt: 2,
        width: "100%",
        pr: 0,
        pb: 0,
        backgroundColor: "#F4FCFF",
        minHeight: "100vh",
        "@media(max-width:900px)":{
          pl:0,
          pt:0
        }
      }}
    >
      <Breadcrumbs
        separator=">"
        sx={{
          mb: 2,
          "& .MuiBreadcrumbs-separator": {
            mx: 1,
            color: "#000",
            fontSize: "20px",
          },
        }}
      >
        <Link
          underline="hover"
          color="inherit"
          onClick={handleBackToList}
          sx={{
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontStyle: "Bold",
            fontSize: "20px",
            color: "#000000ff",
          }}
        >
          Seafarer List
        </Link>
        {showCredentials && (
          <Typography
            color="text.primary"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "100%",
            }}
          >
            Seafarer Credentials
          </Typography>
        )}
      </Breadcrumbs>

      {!showCredentials ? (
        <>
          <Box
            sx={{
              mb: 1,
              pr: 3,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: isMobile ? "start" : "space-between",
              flexWrap: "nowrap",
              gap: isMobile ? 1 : 2,
            }}
          >
            <Paper
              sx={{
                p: "1px",
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                flex: "1 1 auto",
                maxWidth: isMobile ? "400px" : "530px",
                height: isMobile ? "35px" : "40px",
                boxShadow: "none",
                border: "1px solid #E0E0E0",
                gap: "8px",
                backgroundColor: "#fff",
              }}
            >
              <IconButton size="small" sx={{ color: "#006D90" }}>
                <Search />
              </IconButton>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: isMobile ? "13px" : "15px",
                }}
                placeholder="Search or filter..."
              />
            </Paper>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: { xs: 1, sm: 1.5 },
                mt: { xs: 1, sm: 0 },
                justifyContent: { xs: "stretch", sm: "flex-end" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={handleAdd}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "10px" : "12px",
                  lineHeight: "24px",
                  textTransform: "uppercase",
                  backgroundColor: "#006D90",
                  color: "#fff",
                  width: "163px",
                  borderRadius: "8px",
                  border: "1px solid #006D90",
                  height: isMobile ? "35px" : "40px",
                  px: isMobile ? 1 : 2,
                  "&:hover": { backgroundColor: "#005b78" },
                }}
              >
                Add Seafarer
              </Button>

              <Button
                variant="outlined"
                startIcon={<CloudUploadOutlined />}
                onClick={handleBulkUpload}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "10px" : "12px",
                  lineHeight: "24px",
                  textTransform: "uppercase",
                  borderColor: "#006D90",
                  color: "#006D90",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  height: isMobile ? "35px" : "40px",
                  width: "163px",
                  px: isMobile ? 1 : 2,
                  "&:hover": {
                    backgroundColor: "#E3F2F6",
                    borderColor: "#005b78",
                  },
                }}
              >
                Bulk Upload
              </Button>
            </Box>
          </Box>
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              backgroundColor: "#F4FCFF",
              borderRadius: "10px",
              overflowY: "auto",
            }}
          >
            <Table
              size="small"
              sx={{
                backgroundColor: "#F4FCFF",
                borderSpacing: "0px 14px",
                borderCollapse: "separate",
              }}
            >
              <TableHead > 
                <TableRow sx={{ backgroundColor: "#5C5C5C" }}>
                  {headers.map((header, idx) => (
                    <TableCell
                      key={idx}
                      sx={{
                        display:"flex-inline",
                        color: "#E4E4E4",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontStyle: "normal",
                        px: { xs: 0.5, sm: 1 },
                        py: { xs: 0.5, sm: 1 },
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                 
                  borderRadius: "20.2px",
                  border: "1.06px solid #E4E4E4",
                }}
              >
                {paginatedSeafarers.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                       height:"10px",
                      backgroundColor: "#fff",
                      "& td": {
                        px: { xs: 0.5, sm: 1 },
                        py: { xs: 0.5, sm: 1 },
                      },
                    }}
                  >
                    <TableCell>{row.sno}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 0,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
                        >
                          {row.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
                        >
                          {row.email}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
                        >
                          {row.phone}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                      
                          fontSize: { xs: "0.65rem", sm: "0.875rem" },
                        }}
                      >
                        {row.idNumber}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
                      >
                        {row.IdType}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
                      >
                        {row.location}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
                      >
                        {row.ship}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
                      >
                        {row.ship1}
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
                    >
                      {row.role}
                    </TableCell>

                    <TableCell>
                      <IconButton
                        color="primary"
                        component="label"
                        sx={{ p: 0.5, color: "#006D90"}}
                      >
                        <AttachFile fontSize="small" sx={{transform:"rotate(45deg)" }} />
                        <Typography
                          sx={{
                            textDecoration: "underline",
                            fontSize: {
                              xs: "0.65rem",
                              sm: "0.875rem",
                              color: "#006D90",
                            },
                          }}
                        >
                          viewAttachment
                        </Typography>
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleViewCredentials(row)}
                        sx={{
                          p: 0.5,
                          color: "#006D90",
                          width: "54px",
                          height: "25px",
                        }}
                      >
                        <RemoveRedEyeOutlined fontSize="medium" />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handlePassword(row)}
                        sx={{ p: 0.5, color: "#006D90" }}
                      >
                        <LockReset fontSize="medium" />
                      </IconButton>
                    </TableCell>
                    <TableCell align="left">
                      <Box
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          fontStyle: "normal",
                          lineHeight: "140%",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 500,
                          px: 1.5,
                          py: 0.5,
                          gap: 0.8,
                          width: "102px",
                          borderRadius: "38.32px",
                          border: "1px solid",
                          borderColor:
                            row.status === "Active" ? "#008339" : "#D10100",
                          color:
                            row.status === "Active" ? "#259800" : "#D10100",
                          backgroundColor:
                            row.status === "Active" ? "#F0FEED" : " #FFEEF0",
                          fontSize: { xs: "0.7rem", sm: "0.85rem" },
                          textAlign: "center",
                          cursor: "pointer",
                          minWidth: 80,
                        }}
                      >
                        <IconButton sx={{ p: 0.5 }}>
                          <CircleSharp
                            sx={{
                              width: "8.2px",
                              height: "8.2px",
                              color:
                                row.status === "Active" ? "#259800" : "#D10100",
                            }}
                            fontSize="medium"
                          />
                        </IconButton>
                        {row.status || "Active"}
                        <IconButton
                          onClick={() => setOpenStatusDialog(row)}
                          sx={{ p: 0.5 }}
                        >
                          <EditRounded
                            fontSize="small"
                            sx={{ color: "#000" }}
                          />
                        </IconButton>
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      <Stack direction="row" spacing={2}>
                        <IconButton
                          sx={{
                            border: "2px solid #006D90",
                            borderRadius: "8px",
                            p: 1,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "9px",
                            backgroundColor: "#F4FCFF",
                          }}
                          variant="outlined"
                          onClick={() => handleEdit(row)}
                        >
                          <Edit fontSize="small" sx={{ color: "#006D90" }} />
                        </IconButton>
                        <IconButton
                          onClick={() => handleDelete(row)}
                          sx={{
                            border: "2px solid, #f71000ff",
                            color: " #e03a2eff",
                            borderRadius: "8px",
                            p: 1,
                            backgroundColor: "#FFEEF0",
                            ml: "auto",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "9px",
                          }}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                height:812,
                borderRadius: "20px",
                border: "1.5px solid #0069d0",
                overflowY: { sm: "hidden", xs: "visible" },
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
                height: "36px",
               px: "24px",
               py: "12px",
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
              {openAdd ? "Add Seafarer Details" : "Edit Seafarer Details"}
              <IconButton onClick={closeDialogs} sx={{}}>
                <Close
                  sx={{ backgroundColor: " #006D90", color: "#ffffffff",borderRadius:"16px" }}
                />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent
              sx={{
                fontFamily: "Poppins, sans-serif",
                backgroundColor: "#FFFFFF",
                height: "100%",
                overflow: "hidden",
                "@media (max-width:900px)": {
                  height: "90vh",
                  overflowY: "auto",
                  px: 2,
                  py: 1,
                },
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:"space-around",
                  flexWrap: "wrap" ,
                  "@media (max-width:900px)": {
                    flexDirection: "column",
                  },
                }}
              >
                {[
                  {
                    label: "Seafarer Name",
                    name: "name",
                    placeholder: "Enter the seafarer name",
                  },
                  {
                    label: "Mobile Number",
                    name: "phone",
                    placeholder: "Enter mobile numeber",
                  },
                  {
                    label: "Email ID",
                    name: "email",
                    placeholder: "Enter the email id",
                  },
                  {
                    label: "Role",
                    name: "role",
                    type: "select",
                    options: ["Deck Rating", "Captain", "Engineer", "Crew"],
                    placeholder: "Select Role",
                  },
                  {
                    label: "Should we email seafarer?",
                    name: "shouldEmail",
                    type: "select",
                    options: ["Yes", "No"],
                    placeholder: "Select",
                  },
                  {
                    label: "Vessel Admin?",
                    name: "vesselAdmin",
                    type: "select",
                    options: ["Yes", "No"],
                    placeholder: "Select",
                  },
                  {
                    label: "Ship Name & type ",
                    name: "ship",
                      type: "select",
                    options: ["Yes", "No"],
                    placeholder: "Select Ship name",
                  },
                   
                  {
                    label: "ID Type",
                    name: "IdType",
                    type: "select",
                    options: ["Passport", "Seafarer ID"],
                    placeholder: "Select id type",
                  },
                  {
                    label: "ID Number",
                    name: "idNumber",
                    placeholder: "Enter id number",
                  },
                  {
                    label: "Associated Country",
                    name: "location",
                    type: "select",
                    options: ["India", "USA", "UK"],
                    placeholder: "Select country",
                  },
                ].map((field) => (
                  <Grid item xs={12} sm={6}  key={field.name}>
                    <Typography
                      variant="body2"
                      sx={{
                        height: 27,
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize:"18px"
                      }}
                    >
                      {field.label}{" "}
                      {openAdd ? (
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

                    {field.type === "select" ? (
                      <TextField
                        select
                        required
                        fullWidth
                        size="small"
                        name={field.name}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" >
                              {iconMap[field.name]}
                            </InputAdornment>
                          ),
                        }}
                        SelectProps={{
                          displayEmpty: true,
                          renderValue: (selected) => {
                            if (!selected) {
                              return (
                                <span
                                  style={{
                                    color: "#9e9e9e",
                                  }}
                                >
                                  {field.placeholder}
                                </span>
                              );
                            }
                            return selected;
                          },
                        }}
                        value={
                          openAdd
                            ? newSeafarer[field.name] ?? ""
                            : editSeafarer[field.name] ?? ""
                        }
                        onChange={handleInputChange}
                        sx={{
                          width: 314,
                          height: 30,
                          borderRadius: "10px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                           // width:314,
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
                          "@media (max-width:900px)": {
                            width: "100%",
                            height: "40px",
                          },
                        }}
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
                        required
                        size="small"
                        name={field.name}
                        value={
                          openAdd
                            ? newSeafarer[field.name]
                            : editSeafarer[field.name] || ""
                        }
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {iconMap[field.name]}
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          width: 314,
                        //  height: 27,
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
                          "@media (max-width:900px)": {
                            width: "100%",
                            height: "40px",
                          },
                        }}
                      />
                    )}
                  </Grid>
                ))}
            
              <Box sx={{ justifyContent:"space-evenly" }}>
                <Typography
                  sx={{
                    
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize:"18px"
                  }}
                >
                  Upload Documents
                </Typography>

                {(
                  !openAdd
                    ? editSeafarer.documentName
                    : newSeafarer.documentName
                ) ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Poppins",
                      justifyContent: "space-between",
                      border: "1px solid #E7E7E7",
                      borderRadius: 2,
                      mt: "6px",
                      width: "673px",
                      height: "68px",
                      fontSize: isMobile ? "12px" : "14px",
                      backgroundColor: "#F3F3F3",
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
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                        alt="pdf"
                        width={26}
                      />
                      <Box>
                        <Typography
                          fontWeight={400}
                          sx={{
                            wordBreak: "break-all",
                            "@media (max-width:600px)": { fontSize: "0.85rem" },
                          }}
                        >
                          {openAdd
                            ? newSeafarer.documentName
                            : editSeafarer.documentName}
                        </Typography>
                        {(openAdd
                          ? newSeafarer.document
                          : editSeafarer.document) && (
                          <Typography variant="caption" color="gray">
                            {(
                              (openAdd
                                ? newSeafarer.document
                                : editSeafarer.document
                              ).size /
                              1024 /
                              1024
                            ).toFixed(2)}{" "}
                            MB
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <IconButton
                      onClick={() => {
                        if (openAdd)
                          setNewSeafarer((prev) => ({
                            ...prev,
                            document: null,
                            documentName: "",
                          }));
                        else
                          setEditSeafarer((prev) => ({
                            ...prev,
                            document: null,
                            documentName: "",
                          }));
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
                       width: "674px",
                        height: "133px",
                        textAlign: "center",
                        backgroundColor: "#F9FBFC",
                        "&:hover": { backgroundColor: "#F1F5F9" },
                        transition: "0.2s",
                        cursor: "pointer",
                        "@media (max-width:900px)": {
                          width: "100%",
                          height: "120px",
                        },
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
                        <DriveFolderUploadRounded
                          sx={{
                            color: "#006D90",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          Drag your file(s) to start uploading
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          OR
                        </Typography>
                        <Button
                          variant="outlined"
                          sx={{
                            borderColor: "#006D90",
                            color: "#006D90",
                            textTransform: "none",
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
                      mt="2px"
                      height="20px"
                      color="gray"
                    >
                      Support .docs, .docx, .pdf, .jpg, .png
                    </Typography>
                  </>
                )}
              </Box>  </Grid>

            </DialogContent>

            <DialogActions sx={{ px: 4, pb: 3 }}>
              <Grid> {openAdd ? (
               <Button
                  sx={{ backgroundColor: "#006D90", textTransform: "none" }}
                  variant="contained"
                  onClick={handleAddSeafarer}
                  startIcon={<Add />}
                >
                  Add
                </Button>
              ) : (
                <Button
                  sx={{ backgroundColor: "#006D90", textTransform: "none" }}
                  variant="contained"
                  onClick={handleEditSeafarer}
                  startIcon={<Done />}
                >
                  Update
                </Button>
              )}</Grid>
            </DialogActions>
          </Dialog>

          <Dialog
            open={!!openStatusDialog}
            onClose={() => setOpenStatusDialog(null)}
            PaperProps={{
              sx: {
                border: "2px solid #006D90",
                borderRadius: "12px",

                backgroundColor: "#ffffffff",
                "@media (max-width:600px)": {
                  border: "2px solid #006D90",
                  borderRadius: "10px",
                  mx: 2,
                },
              },
            }}
          >
            <DialogTitle
              sx={{
                height: "36px",
                px: "24px",
                py: "12px",
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
              Change Status
              <IconButton onClick={() => setOpenStatusDialog(null)}>
                <Close
                  sx={{ backgroundColor: " #006D90", color: "#fae9e9ff" }}
                  fontSize="small"
                />
              </IconButton>
            </DialogTitle>
            <Divider />
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
                    control={<Radio sx={{ color: "#006D90" }} />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="Inactive"
                    control={<Radio sx={{ color: "#006D90" }} />}
                    label="Inactive"
                  />
                </RadioGroup>
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 2,
                  gap: 1,
                }}
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#006D90", textTransform: "none" }}
                  onClick={handleStatusChange}
                  startIcon={<Check />}
                >
                  Update
                </Button>
              </Box>
            </DialogContent>
          </Dialog>
          <Dialog
            fullWidth
            maxWidth="xs"
            open={openDelete}
            onClose={closeDialogs}
            PaperProps={{
              sx: {
                border: "2px solid #006D90",
                borderRadius: "12px",

                backgroundColor: "#ffffffff",
                "@media (max-width:600px)": {
                  border: "2px solid #006D90",
                  borderRadius: "10px",
                  mx: 2,
                },
              },
            }}
          >
            <DialogTitle align="right">
              <IconButton onClick={closeDialogs}>
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: 500,
                  fontStyle: "medium",
                  fontSize: "22px",
                  alignItems: "center",
                }}
              >
                Do you really want to delete {selectedSeafarer?.name} List?
              </Typography>{" "}
              <img
                src={pic}
                alt="warning"
                style={{ width: "270px", height: "211px" }}
              />
            </DialogContent>

            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<Check />}
                  sx={{
                    backgroundColor: "#006D90",
                    textTransform: "none",
                    borderRadius: "8px",
                    width: "auto",
                    height: "36px",
                    fontSize: "13px",
                    "&:hover": { backgroundColor: "#00506b" },
                    "@media (max-width:600px)": {
                      p: 3,
                    },
                  }}
                  onClick={() => {
                    setSeafarers((prev) =>
                      prev.filter((s) => s.sno !== selectedSeafarer.sno)
                    );
                    closeDialogs();
                  }}
                >
                  Delete This Seafarer
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<Close />}
                  sx={{
                    color: "#006D90",
                    borderColor: "#006D90",
                    textTransform: "none",
                    borderRadius: "8px",
                    width: "auto",
                    height: "36px",

                    fontSize: "13px",
                    "&:hover": {
                      borderColor: "#00506b",
                      color: "#00506b",
                    },
                    "@media (max-width:600px)": {
                      p: 3,
                    },
                  }}
                  onClick={closeDialogs}
                >
                  Cancel This Time
                </Button>
              </Box>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openBulkUpload}
            onClose={closeDialogs}
            fullWidth
            maxWidth="sm"
            PaperProps={{
              sx: {
                borderRadius: 3,
                p: 1,
                "@media (max-width:600px)": {
                  m: 1,
                  maxHeight: "90vh",
                  overflowY: "auto",
                },
              },
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
                fontSize: { xs: "16px", sm: "18px" },
              }}
            >
              Bulk Upload
              <IconButton onClick={closeDialogs}>
                <CloseOutlined />
              </IconButton>
            </DialogTitle>

            <Divider />

            <DialogContent
              sx={{
                mt: 2,
                px: { xs: 1, sm: 3 },
                overflowY: "auto",
                maxHeight: { xs: "70vh", sm: "none" },
              }}
            >
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "#D10100",
                  mb: 2,
                }}
              >
                *Add your documents here and you can upload up to 5 files
              </Typography>

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
                      width: { xs: "90%", sm: "501px" },
                      height: { xs: "auto", sm: "186px" },
                      border: "2px dashed #006d90",
                      borderRadius: 2,
                      p: 2,
                      textAlign: "center",
                      mb: 1,
                      backgroundColor: "#fafafa",
                      cursor: "pointer",
                      transition: "0.2s",
                      "&:hover": { backgroundColor: "#f0f8ff" },
                    }}
                  >
                    <DriveFolderUploadRounded
                      sx={{ fontSize: 48, color: "#006d90", mb: 1 }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 400,
                        mb: 1,
                        fontSize: { xs: "13px", sm: "15px" },
                      }}
                    >
                      Drag your file(s) to start uploading
                    </Typography>
                    <Typography
                      sx={{ mb: 1, fontSize: { xs: "13px", sm: "15px" } }}
                    >
                      OR
                    </Typography>
                    <Button
                      variant="outlined"
                      component="label"
                      sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        px: 3,
                        borderColor: "#006d90",
                        color: "#006d90",
                        fontSize: { xs: "13px", sm: "15px" },
                      }}
                    >
                      Browse Files
                      <input
                        type="file"
                        multiple
                        accept=".xlsx,.pdf,.jpg,.png,.zip"
                        hidden
                        onChange={(e) =>
                          handleFileAdd(Array.from(e.target.files))
                        }
                      />
                    </Button>
                  </Paper>

                  <Typography sx={{ mt: 1, fontSize: "13px", color: "gray" }}>
                    Supported formats:{" "}
                    <strong>.xlsx, .pdf, .jpg, .png, .zip</strong>
                  </Typography>
                </>
              )}

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
                        : "https://cdn-icons-png.flaticon.com/512/136/136523.png";

                    return (
                      <Paper
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          p: 1.5,
                          mt: 2,
                          mb: 1,
                          borderRadius: 2,
                          border: "1px solid #e0e0e0",
                          backgroundColor: "#f9f9f9",
                          flexDirection: "row",
                          gap: { xs: 1, sm: 0 },
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <img src={iconSrc} alt={ext} width={26} />
                          <Box>
                            <Typography
                              fontWeight={400}
                              sx={{
                                wordBreak: "break-all",
                                fontSize: { xs: "13px", sm: "15px" },
                              }}
                            >
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
                <>
                  <Button
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
                  </Button>

                  <Typography sx={{ mx: 1, fontSize: "13px", color: "gray" }}>
                    Total Duplicates count = {duplicateCount}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "gray" }}>
                    Total successfully added count = {files.length}
                  </Typography>
                </>
              )}
            </DialogActions>
          </Dialog>

          <Dialog
            fullWidth
            maxWidth="xs"
            sx={{ borderColor: " #006D90" }}
            open={openPassword}
            onClose={closeDialogs}
          >
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: 400,
                color: "#006D90",
                m: 1,
                fontFamily: "Poppins",
                fontSize: "1.25rem",
                p: 1,
              }}
            >
              SeaFarer Password
              <IconButton sx={{ color: "#006D90" }} onClick={closeDialogs}>
                <Close />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
            >
              <Typography>
                Enter your Password{" "}
                <Typography display="inline" color="#f80000ff">
                  *
                </Typography>
              </Typography>
              <TextField placeholder="New Password" type="password" />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#006D90" }}
                onClick={closeDialogs}
              >
                Update
              </Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <SeafarerCredentials seafarer={selectedSeafarer} />
      )}
    </Box>
  );
}

export default MyBoard;
