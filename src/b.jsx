import React, { useState } from "react";
import {
  Delete,
  Edit,
  RemoveRedEyeOutlined,
  Search,
  AttachFile,
  Password,
  Close,
  Check,
  Clear,
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
  MenuItem,
} from "@mui/material";
import SeafarerCredentials from "./cred";

function MyBoard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [files, setFiles] = useState({});
  const [seafarers, setSeafarers] = useState([
    {
      sno: "1",
      name: "K R Ashwathy",
      Id: "18051988",
      passport: "passport",
      loaction: "India",
      email: "ash@gmail.com",
      phone: "9791917536",
      ship: "Ms Training Ship1",
      ship1: "(oilTanker)",
      role: "Deck Rating",
    },
  ]);

  const [showCredentials, setShowCredentials] = useState(false);
  const [selectedSeafarer, setSelectedSeafarer] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openBulkUpload, setOpenBulkUpload] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

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
    const file = e.target.files[0];
    console.log("File uploaded:", file);
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

  const closeDialogs = () => {
    setOpenEdit(false);
    setOpenAdd(false);
    setOpenDelete(false);
    setOpenBulkUpload(false);
    setOpenPassword(false);
  };

  const handleEdit = (seafarer) => {
    setEditSeafarer(seafarer);
    setOpenEdit(true);
  };

  const handleAdd = () => {
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

  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" sx={{ cursor: "pointer" }}>
          Seafarer List
        </Link>
      </Breadcrumbs>

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h6" fontWeight="600">
          Seafarer Information
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained" onClick={handleAdd}>
            Add
          </Button>
          <Button
            variant="contained"
            onClick={() => setOpenBulkUpload(true)}
          >
            Bulk Upload
          </Button>
        </Box>
      </Box>

      {/* Search */}
      <Paper
        sx={{
          mb: 2,
          p: 1,
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          width: "100%",
        }}
      >
        <IconButton>
          <Search />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
      </Paper>

      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ borderRadius: "10px", width: "100%", overflowX: "auto" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#baa9a9ff" }}>
              {[
                "S.No",
                "Seafarer Info",
                "Id Info",
                "Ship Name/Type",
                "Role",
                "Documents",
                "Actions",
              ].map((header, idx) => (
                <TableCell key={idx} sx={{ fontWeight: 600 }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {seafarers.map((row) => (
              <TableRow key={row.sno} sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell>{row.sno}</TableCell>
                <TableCell>
                  <Typography>{row.name}</Typography>
                  <Typography>{row.email}</Typography>
                  <Typography>{row.phone}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.Id}</Typography>
                  <Typography>{row.passport}</Typography>
                  <Typography>{row.loaction}</Typography>
                </TableCell>
                <TableCell>
                  {row.ship}
                  <Typography color="text.secondary">{row.ship1}</Typography>
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <IconButton color="primary" component="label">
                    <AttachFile />
                    <input type="file" hidden />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton color="success" onClick={() => handleEdit(row)}>
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => {
                      setSelectedSeafarer(row);
                      setOpenDelete(true);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-start" }}>
        <Pagination count={5} />
      </Box>

      {/* -------------------- Unified Add/Edit Dialog -------------------- */}
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
          {openAdd ? "Add Seafarer Details" : "Edit Seafarer Details"}
        </DialogTitle>

        <DialogContent sx={{ px: 4, py: 3, fontFamily: "Poppins, sans-serif" }}>
          <Grid container spacing={2}>
            {[
              { label: "Seafarer Name*", name: "seafarerName" },
              { label: "Mobile Number*", name: "mobileNumber" },
              { label: "Email ID*", name: "email" },
              { label: "Role*", name: "role", type: "select", options: ["Captain", "Engineer", "Crew"] },
              { label: "Should we email seafarer?*", name: "shouldEmail", type: "select", options: ["Yes", "No"] },
              { label: "Vessel Admin?*", name: "vesselAdmin", type: "select", options: ["Yes", "No"] },
              { label: "Ship Name & Type*", name: "shipName" },
              { label: "ID Type*", name: "idType", type: "select", options: ["Passport", "Seafarer ID"] },
              { label: "ID Number*", name: "idNumber" },
              { label: "Associated Country*", name: "country", type: "select", options: ["India", "USA", "UK"] },
            ].map((field) => (
              <Grid size item xs={12} sm={6} key={field.name}>
                <Typography>{field.label}</Typography>
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
          </Grid>
        </DialogContent>

        <DialogActions sx={{ px: 4, pb: 3 }}>
          <Button variant="outlined" onClick={closeDialogs}>
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
        <DialogTitle align="right">
          <IconButton onClick={closeDialogs}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>
            Do you really want to delete {selectedSeafarer?.name}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setSeafarers((prev) =>
                prev.filter((s) => s.sno !== selectedSeafarer.sno)
              );
              closeDialogs();
            }}
          >
            <Check sx={{ mr: 1 }} />
            Delete
          </Button>
          <Button onClick={closeDialogs}>
            <Clear sx={{ mr: 1 }} />
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default MyBoard;
