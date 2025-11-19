
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
} from "@mui/material";
import {
  AttachFile,
  RemoveRedEyeOutlined,
  LockReset,
  CircleSharp,
  EditRounded,
  Edit,
  Delete,
} from "@mui/icons-material";

export default function SeafarerTable({
  paginatedSeafarers,
  isMobile,
  handleEdit,
  handleDelete,
  handlePassword,
  handleViewCredentials,
  setOpenStatusDialog,
  pages,
  rowsPerPage,
}) 
{
  const headerStyle = {
    textAlign: "left",
    color: "#E4E4E4",
   fontFamily: "poppins, sans-serif",
    fontWeight: "bold",
    whiteSpace:"nowrap",
    fontSize: isMobile ? "13px" : "14px",
  
  };
  const textStyle = {
    textAlign: "left",
    whiteSpace: "nowrap",
   fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? "12px" : "14px",
 
  };
  //   const handleFileUpload = (e, id) => {
  //   const file = e.target.files[0];
  //   console.log("Uploaded file:", file, "for row:", id);
  //   // update state here...
  // };

  // const handleView = (file) => {
  //   window.open(file, "_blank");
  // };

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        flex: 1,
        m: 1,
        p: 0,
        backgroundColor: "#F4FCFF",
        borderRadius: "10px",
         scrollbarWidth:"none",
        // "&::-webkit-scrollbar": { display: "none" },
        maxHeight: 590,
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
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#5C5C5C",
              position: "sticky",
              top: 0,
              zIndex: 2,
            }}
          >
            <TableCell sx={headerStyle}>S.No</TableCell>
            <TableCell sx={headerStyle}>Seafarer Info</TableCell>
            <TableCell sx={headerStyle}>Id Info</TableCell>
            <TableCell sx={headerStyle}>Ship Name/Type</TableCell>
            <TableCell sx={headerStyle}>Role</TableCell>
            <TableCell sx={headerStyle}>Documents</TableCell>
            <TableCell sx={{ ...headerStyle, textAlign: "center" }}>
              Credentials
            </TableCell>
            <TableCell sx={{ ...headerStyle, textAlign: "center" }}>
              Password
            </TableCell>
            <TableCell sx={{ ...headerStyle, textAlign: "center" }}>
              Status
            </TableCell>
            <TableCell sx={{ ...headerStyle, textAlign: "center" }}>
              Actions
            </TableCell>
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
                backgroundColor: "#fff",
              }}
            >
              <TableCell sx={{ textAlign: "left" }}>
                {(pages - 1) * rowsPerPage + index + 1}
              </TableCell>
              <TableCell>
                <Box sx={textStyle}>
                  <Typography sx={textStyle}>{row.name}</Typography>
                  <Typography variant="body2" sx={textStyle}>
                    {row.email}
                  </Typography>
                  <Typography sx={textStyle}>{row.phone}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ textAlign: "left" }}>
                <Typography sx={textStyle}>{row.idNumber}</Typography>
                <Typography sx={textStyle}>{row.IdType}</Typography>
                <Typography sx={textStyle}>{row.location}</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={textStyle}>{row.ship}</Typography>
                <Typography color="text.secondary" sx={textStyle}>
                  {row.ship1}
                </Typography>
              </TableCell>
              <TableCell sx={textStyle}>{row.role}</TableCell>
              <TableCell>
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    justifycontent: "center",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    textAlign: "left",
                    textDecoration: "underline",
                    fontSize: isMobile ? "12px" : "14px",
                 lineHeight: isMobile ? "12px" : "14px",
                    cursor:"pointer",
                    color: "#259BC1",
                  }}  onClick={()=>window.open(row.document,"_blank")}
                >
                  <IconButton
                    component="label"
                    sx={{ textAlign: "left", color: "#259BC1", p: 0 }}  
                  >
                    <AttachFile
                      sx={{
                        p: 0,
                        fontSize: "15px",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </IconButton>{" "}
                  View Attachment
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <IconButton
                  onClick={() => handleViewCredentials(row)}
                  sx={{
                    color: "#259BC1",
                  }}
                >
                  <RemoveRedEyeOutlined />
                </IconButton>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <IconButton
                  onClick={() => handlePassword(row)}
                  sx={{ color: "#259DC1" }}
                >
                  <LockReset/>
                </IconButton>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                   fontFamily: "poppins, sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    fontWeight: 500,
                    gap: 0.5,
                    borderRadius: "38.32px",
                    border: "1.8px solid",
                    borderColor:
                      row.status === "Active" ? "#008339" : "#D10100",
                    color: row.status === "Active" ? "#259800" : "#D10100",
                    backgroundColor:
                      row.status === "Active" ? "#F0FEED" : " #FFEEF0",
                    fontSize: isMobile ? "12px" : "14px",
                    cursor: "pointer",
                  }}
                >
                  <IconButton>
                    <CircleSharp
                      sx={{
                        fontSize: "10px",
                        color: row.status === "Active" ? "#259800" : "#D10100",
                      }}
                    />
                  </IconButton>
                  {row.status || "Active"}
                  <IconButton onClick={() => setOpenStatusDialog(row)}>
                    <EditRounded sx={{ color: "#000", fontSize: "16px" }} />
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell sx={{ textAlign: "left" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <IconButton
                    sx={{
                      border: "2px solid #259BC1",
                      borderRadius: "8px",
                      p: 1,
                      backgroundColor: "#F4FCFF",
                    }}
                    variant="outlined"
                    onClick={() => handleEdit(row)}
                  >
                    <Edit sx={{ color: "#259DC1", fontSize: "16px" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(row)}
                    sx={{
                      border: "2px solid, #f71000ff",
                      color: " #e03a2eff",
                      borderRadius: "8px",
                      p: 1,
                      backgroundColor: "#FFEEF0",
                    }}
                  >
                    <Delete sx={{ fontSize: "16px" }} />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
