
import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Breadcrumbs,
  Link,

} from "@mui/material";
import SeafarerCredentials from "./cred";
import SeafarerTable from "./SeafarerTable";
import SeafarerDialog from "./seafarerAdd";
import { seafarerData } from "./data";
import BulkUpload from "./BulkUploadDia";
import Password from "./passwordDialog";
import DeleteDialog from "./DeleteDialog";
import SeafarerStatus from "./SeafarerStatus";
import PagesX from "./pagination";
import SeafarerButton from "./Button";
function MyBoard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
 
  const [seafarers, setSeafarers] = useState(seafarerData);
 const [openStatusDialog, setOpenStatusDialog] = useState(null);
  const [showCredentials, setShowCredentials] = useState(false);
  const [selectedSeafarer, setSelectedSeafarer] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openBulkUpload, setOpenBulkUpload] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
 

 
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
 

  const handleViewCredentials = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setShowCredentials(true);
  };
  const handleBackToList = () => {
    setShowCredentials(false);
    setSelectedSeafarer(null);
  };
  
  const handleEdit = (seafarer) => {
    setEditSeafarer(seafarer);
    setOpenEdit(true);
  };
 const confirmDelete = () => {
  setSeafarers(prev => {
    const filtered = prev.filter(s => s.sno !== selectedSeafarer.sno);
    return filtered.map((item, index) => ({
      ...item,
      sno: index + 1,
    }));
  });
};

  const handleDelete = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setOpenDelete(true);
  };

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
   const [pages, setPages] = useState(1);
   const [rowsPerPage, setRowPerPage] = useState(5);
   const handlePageChange = (event, value) => {
     setPages(value);
   };
   const handleRow = (event) => {
     setRowPerPage(Number(event.target.value));
     setPages(1);
   };
   const total = Math.ceil(seafarers.length / rowsPerPage);
   const paginatedSeafarers = seafarers.slice(
     (pages - 1) * rowsPerPage,
     pages * rowsPerPage
   );

 
  return (
    <Box
      sx={{
        alignItems: "center",
        
        p:2,
        backgroundColor: "#F4FCFF",
        //  minHeight: "100vh",
        overflow: isMobile ? "visible" : "hidden",
        "@media(max-width:900px)": {
         
          p:1.5
        },
      }}
    >
      <Breadcrumbs
        separator=">"
        sx={{
          p: "2px",
          "& .MuiBreadcrumbs-separator": {
            color: "#000",
            fontSize: "18px",
          },
        }}
      >
        <Link
          underline="hover"
          onClick={handleBackToList}
          sx={{
            cursor: "pointer",
            fontFamily: "poppins, sans-serif",
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
              fontFamily: "Poppins, sans-serif",
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
       <SeafarerButton 
       isMobile={isMobile}
       setNewSeafarer={setNewSeafarer}
       setOpenAdd={setOpenAdd}
       setOpenBulkUpload={setOpenBulkUpload}
       />

          <SeafarerTable
            paginatedSeafarers={paginatedSeafarers}
            isMobile={isMobile}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handlePassword={handlePassword}
            handleViewCredentials={handleViewCredentials}
            setOpenStatusDialog={setOpenStatusDialog}
            pages={pages}
            rowsPerPage={rowsPerPage}
          />

         {/*Pagination*/ }
         <PagesX handlePageChange={handlePageChange}
        isMobile={isMobile}  
        handleRow={handleRow}
        total={total}
         pages={pages}
         rowsPerPage={rowsPerPage}
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
           setSeafarers={setSeafarers}
           seafarers={seafarers}
           setOpenAdd={setOpenAdd}
           setOpenEdit={setOpenEdit}
         
           
          />
       
          {/*Bulk Upload Dialog*/}
          <BulkUpload
            openBulkUpload={openBulkUpload}
            isMobile={isMobile}
            closeDialogs={closeDialogs}
            seafarers={seafarers}
            setSeafarers={setSeafarers}
          />
          {/*Password Dialog*/}
          <Password openPassword={openPassword} closeDialogs={closeDialogs} />

             {/*status Dialog*/}
        <SeafarerStatus 
        openStatusDialog={openStatusDialog}
        setOpenStatusDialog={setOpenStatusDialog}
         setSeafarers={setSeafarers}
        />
          {/*Delete Dialog*/}
          <DeleteDialog
            closeDialogs={closeDialogs}
            openDelete={openDelete}
            onConfirm={confirmDelete}
            onClose={closeDialogs}
            selectedSeafarer={selectedSeafarer}
          />
        </>
      ) : (
        <SeafarerCredentials seafarer={selectedSeafarer} />
      )}
    </Box>
  );
}

export default MyBoard;
