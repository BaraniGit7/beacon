/* eslint-disable no-undef */
import React, { useState } from "react";

import {
 
  Search,
 
  Close,
  Check,
  DriveFolderUploadRounded,
  CloseOutlined,
 
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
  InputBase,
  Paper,
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
  Select,
} from "@mui/material";
import SeafarerCredentials from "./cred";
import SeafarerTable from "./SeafarerTable";
import SeafarerDialog from "./seafarerAdd";
import { seafarerData } from "./data";
import BulkUpload from "./BulkUploadDia";
import Password from "./passwordDialog";
import DeleteDialog from "./DeleteDialog";
import SeafarerStatus from "./SeafarerStatus";
import PagesX from "./Pagination";
function MyBoard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [files, setFiles] = useState([]);
  const [seafarers, setSeafarers] = useState(seafarerData);

  const [showCredentials, setShowCredentials] = useState(false);
  const [selectedSeafarer, setSelectedSeafarer] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openBulkUpload, setOpenBulkUpload] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [bulkSeafarers, setBulkSeafarers] = useState([]);

 
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
  const confirmDelete = () => {
    setSeafarers((prev) => prev.filter((s) => s.sno !== selectedSeafarer.sno));
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
  if (!files.length) {
    alert("Please select files to upload.");
    return;
  }

  const newSeafarers = files.map((file, index) => ({
    sno: Date.now() + index,
    documentName: file.name,
    document: file,
    status: "Active",
  }));

  setSeafarers((prev) => [...prev, ...newSeafarers]);
  onAddFiles?.(newSeafarers); 

  alert(`${files.length} file(s) uploaded successfully!`);
  setFiles([]);
  setBulkSeafarers([]);
  setDuplicateCount(0);
  closeDialogs();
};

  const [pages, setpages] = useState(1);
   const [rowsPerPage, setRowPerPage] = useState(5);
   const handlePageChange = (event, value) => {
     setpages(value);
   };
   const handleRow = (event) => {
     setRowPerPage(Number(event.target.value));
     setpages(1);
   };
   const total = Math.ceil(seafarers.length / rowsPerPage);
   const paginatedSeafarers = seafarers.slice(
     (pages - 1) * rowsPerPage,
     pages * rowsPerPage
   );

  const iconMap = {
    name: <Person sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />,
    phone: <Phone sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />,
    email: <Email sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />,
    role: <Work sx={{ color: "#d8d8d8ff", fontSize: "17px" }} />,
    shouldEmail: (
      <MarkEmailRead sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />
    ),
    vesselAdmin: (
      <AdminPanelSettings sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />
    ),
    ship: <Sailing sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />,
    IdType: <MarkAsUnreadSharp sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />,
    idNumber: <Pin sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />,
    location: <Public sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />,
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        pl: "3px",
        pt: "4px",
        //  width: "100%",
        pr: 0,
        pb: 0,
        backgroundColor: "#F4FCFF",
        //  minHeight: "100vh",
        overflow: isMobile ? "visible" : "hidden",
        "@media(max-width:900px)": {
          pl: 0,
          pt: 0,
        },
      }}
    >
      <Breadcrumbs
        separator=">"
        sx={{
          p: "2px",
          "& .MuiBreadcrumbs-separator": {
            color: "#000",
            fontSize: "20px",
          },
        }}
      >
        <Link
          underline="hover"
          onClick={handleBackToList}
          sx={{
            cursor: "pointer",
            fontFamily: "poppins",
            fontWeight: 600,

            fontSize: "16px",
            color: "#000000ff",
          }}
        >
          Seafarer List
        </Link>
        {showCredentials && (
          <Typography
            color="text.primary"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "16px",
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
              pr: "4px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: isMobile ? "start" : "space-between",

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
                mt: "6px",
                maxWidth: isMobile ? "400px" : "530px",
                height: isMobile ? "26px" : "28px",
                boxShadow: "none",
                border: "1px solid #E0E0E0",
                gap: "8px",
                backgroundColor: "#fff",
              }}
            >
              <IconButton sx={{ color: "#006D90" }}>
                <Search />
              </IconButton>
              <InputBase
                sx={{
                  flex: 1,
                  fontFamily: "poppins",
                  fontSize: isMobile ? "13px" : "15px",
                }}
                placeholder="Search or filter..."
              />
            </Paper>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: isMobile ? 1 : 1.5,
                mt: isMobile ? "1px" : 0,
                justifyContent: isMobile ? "stretch" : "flex-end",
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

                  borderRadius: "8px",
                  border: "1px solid #006D90",
                  height: isMobile ? "30px" : "35px",
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
                  height: isMobile ? "30px" : "35px",

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

          <SeafarerTable
            paginatedSeafarers={paginatedSeafarers}
            isMobile={window.innerWidth < 600}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handlePassword={handlePassword}
            handleViewCredentials={handleViewCredentials}
            setOpenStatusDialog={setOpenStatusDialog}
          />

         {/*Pagination*/ }
         <PagesX handlePageChange={handlePageChange}
        isMobile={isMobile}
        
        handleRow={handleRow}
        total={total}
        
        
         
         pages={pages}
         rowsPerPage={rowsPerPage}
       
         seafarers={seafarers}
         />
          {/*Add-Edit Dialog*/}
          <SeafarerDialog
            openAdd={openAdd}
            openEdit={openEdit}
            closeDialogs={closeDialogs}
            isMobile={isMobile}
            newSeafarer={newSeafarer}
            editSeafarer={editSeafarer}
            setNewSeafarer={setNewSeafarer}
            setEditSeafarer={setEditSeafarer}
            handleInputChange={handleInputChange}
            handleFileChange={handleFileChange}
            handleAddSeafarer={handleAddSeafarer}
            handleEditSeafarer={handleEditSeafarer}
            iconMap={iconMap} 
          />
          {/*status Dialog*/}
        <SeafarerStatus 
        openStatusDialog={openStatusDialog}
        setOpenStatusDialog={setOpenStatusDialog}
        handleStatusChange={handleStatusChange}
        />
          {/*Delete Dialog*/}
          <DeleteDialog
            closeDialogs={closeDialogs}
            openDelete={openDelete}
            onConfirm={confirmDelete}
            onClose={closeDialogs}
            selectedSeafarer={selectedSeafarer}
          />
          {/*Bulk Upload Dialog*/}
          <BulkUpload
            openBulkUpload={openBulkUpload}
            closeDialogs={closeDialogs}
            handleFileAdd={handleFileAdd}
            handleFileRemove={handleFileRemove}
            handleUpload={handleUpload}
            files={files}
            duplicateCount={duplicateCount}
          />
          {/*Password Dialog*/}
          <Password openPassword={openPassword} closeDialogs={closeDialogs} />
        </>
      ) : (
        <SeafarerCredentials seafarer={selectedSeafarer} />
      )}
    </Box>
  );
}

export default MyBoard;
