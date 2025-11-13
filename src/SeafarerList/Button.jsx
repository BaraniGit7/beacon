import { Add, CloudUploadOutlined, Search } from "@mui/icons-material";
import { Box, Button, IconButton, InputBase, Paper } from "@mui/material";

export default function SeafarerButton({isMobile,setNewSeafarer,setOpenAdd,setOpenBulkUpload}){
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
   
    
    return(
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
              <IconButton >
                <Search sx={{ color: "#006D90",fontSize:"17px" }} />
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
                  "&:hover": { backgroundColor: "#006081ff" },
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
    )
}