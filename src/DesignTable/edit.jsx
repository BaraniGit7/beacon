<Typography fontFamily="Poppins" fontWeight={500} >
  Upload Document<Typography  display="inline" color="#f80505ff">*</Typography>
</Typography>


{!selectedSeafarer?.Document (
  <><Box
                sx={{
                  border: "2px dashed #B0BEC5",
                  borderRadius: 2,
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "#F9FBFC",
                  "&:hover": { backgroundColor: "#F1F5F9" },
                  transition: "0.2s",
                }}
              >
                <input required
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  hidden
                  id="file-upload"
                  onChange={handleChangeFile} />
                <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                  <DriveFolderUploadRounded
                    sx={{
                    
                      color: "#064575"
                      
                    }} />
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    Drag your file(s) to start uploading
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{py:1}}>OR</Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#064575",
                      color: "#064575",
                      mt: 1,
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                    component="span"
                  >
                    Browse files
                  </Button>

                </label>
              </Box><Box> <Typography variant="caption" display="block" mt={1} color="gray">
        Support .docs, .docx, .pdf, .jpg, .png
      </Typography></Box></>
) : (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #064575",
      borderRadius: 2,
      px: 2,
      py: 1.5,
      mt: 1,
      backgroundColor: "#E8F0FE",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
     
      {newEntry.documentName.endsWith(".pdf") ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
          alt="pdf"
          width={26}
          height={26}
        />
      ) : newEntry.documentName.match(/\.(doc|docx)$/) ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/337/337932.png"
          alt="doc"
          width={26}
          height={26}
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
          fontWeight={600}
       
          fontFamily="Poppins"
          sx={{ wordBreak: "break-all" }}
        >
          {newEntry.documentName}
        </Typography>
        {newEntry.document && (
          <Typography variant="caption" color="gray">
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
      color="error"
    >
      <Close />
    </IconButton>
  </Box>
)}