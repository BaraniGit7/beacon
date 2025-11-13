import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  IconButton,
  Typography,
  Box,
  Button,
  Paper,
} from "@mui/material";
import {
  CloseOutlined,
  DriveFolderUploadRounded,
  Close,
} from "@mui/icons-material";
import { useState } from "react";

export default function BulkUpload({
  openBulkUpload,
  closeDialogs,
  seafarers,
  setSeafarers,
  isMobile 
}) {
  const [files, setFiles] = useState([]);
  const [bulkSeafarers, setBulkSeafarers] = useState([]);
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

    const newSeafar = files.map((file, index) => ({
      sno: Date.now() + index,
      documentName: file.name,
      document: file,
      status: "Active",
    }));

    setSeafarers((prev) => [...prev, ...newSeafar]);

    alert(`${files.length} file(s) uploaded successfully!`);
    setFiles([]);
    setBulkSeafarers([]);
    setDuplicateCount(0);
    closeDialogs();
  };
  

  return (
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
          color: "#259BC1",
          fontSize: isMobile ? "16px": "18px"
        }}
      >
        Bulk Upload
     
          <CloseOutlined onClick={closeDialogs}
            sx={{
              backgroundColor: "#259BC1",
              color: "#ffffff",
              fontSize: "20px",
              borderRadius: "2px",
            }}
          />
       
      </DialogTitle>

      <Divider />

      <DialogContent
        sx={{
          mt: 2,
          px: isMobile ? 1 : 3,
          overflowY: "auto",
          maxHeight: isMobile ? "70vh" : "auto"
        }}
      >
        {files.length < 5 && (
          <>
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

            <Paper
              variant="outlined"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const dropped = Array.from(e.dataTransfer.files);
                handleFileAdd(dropped);
              }}
              sx={{
                width : isMobile ? "90%":"auto",
                border: "2px dashed #259BC1",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
                mb: 1,
                backgroundColor: "#fafafa",
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { backgroundColor: "#f0f8ff" },
                 display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
              }}
            >
              <DriveFolderUploadRounded
                sx={{ fontSize: 22, color: "#259BC1", mb: 1 }}
              />
              <Typography sx={{ fontFamily:"poppins", fontSize:isMobile ? "12px" : "14px" ,textAlign:"center"}}>
                Drag your file(s) to start uploading
              </Typography>
             <Box
  sx={{
  
    width: "100%",
      maxWidth: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mt: 2,
      mb: 1,
  }}
>
  <Box sx={{ flexGrow: 1, height: "1px", backgroundColor: "#B0BEC5" }} />
  <Typography
    sx={{
      mx:1.5,
      fontFamily: "Poppins",
      fontSize: "10px",
      color: "#9e9e9e",
      fontWeight: 500,
    }}
  >
    OR
  </Typography>
  <Box sx={{ flexGrow: 1, height: "1px", backgroundColor: "#B0BEC5" }} />
</Box>

              <Button
                variant="outlined"
                component="label"
                sx={{
                  fontFamily:"poppins",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 3,
                  borderColor: "#259BC1",
                  color: "#259BC1",
                  fontSize:isMobile?"11px":"13px",
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

            <Typography sx={{ mt: 1, fontSize: "13px", color: "gray" }}>
              Supported formats:
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
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img src={iconSrc} alt={ext} width={26} />
                    <Box>
                      <Typography
                        sx={{
                          wordBreak: "break-all",
                          fontSize:isMobile?"13px":"15px"
                        }}
                      >
                        {file.name}
                      </Typography>
                      <Typography variant="caption" color="gray">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </Typography>
                    </Box>
                  </Box>

                  
                    <Close onClick={() => handleFileRemove(index)} sx={{ color: "#5d5d5d" }} />
                 
                </Paper>
              );
            })}
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ flexDirection: "column", alignItems: "flex-start", p: 2 }}>
        {files.length > 0 && (
          <>
            <Button
              variant="contained"
              sx={{
                alignSelf: "flex-end",
                textTransform: "none",
                borderRadius: 2,
                px: 3,
                bgcolor: "#259BC1",
              }}
              onClick={handleUpload}
            >
              <DriveFolderUploadRounded sx={{ mr: 1 }} /> Upload
            </Button>
        
            <Typography sx={{ mx: 1, fontSize: "13px", color: "gray" }}>
              Total Duplicates: {duplicateCount}
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "gray" }}>
              Successfully added: {files.length}
            </Typography>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
