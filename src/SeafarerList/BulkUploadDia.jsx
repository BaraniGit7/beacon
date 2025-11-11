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
export default function BulkUpload(
   {openBulkUpload,
  closeDialogs,
  handleFileAdd,
  handleFileRemove,
  handleUpload,
  files,
  duplicateCount}
){
    return(
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
                <CloseOutlined
                  sx={{
                    backgroundColor: "#006D90",
                    color: "#ffffff",
                    fontSize: "24px",
                    borderRadius: "16px",
                  }}
                />
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
    )
} 