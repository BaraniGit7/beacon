import { CircleSharp, Delete, Edit, EditRounded } from "@mui/icons-material";
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";

export default function  TableList(){
     const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
 const handleViewCredentials = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setShowCredentials(true);
  };
   const [editSeafarer, setEditSeafarer] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (openAdd) setNewSeafarer((prev) => ({ ...prev, [name]: value }));
    else if (openEdit) setEditSeafarer((prev) => ({ ...prev, [name]: value }));
  };
   const handleEdit = (seafarer) => {
    setEditSeafarer(seafarer);
    setOpenEdit(true);
  };
  const handleDelete = (seafarer) => {
    setSelectedSeafarer(seafarer);
    setOpenDelete(true);
  };
   const [page, setPage] = useState(1);
  const [rowsPerPage,setRowPerPage]=useState(6);
  const[customPage,setCustompage]=useState(false);
 
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const paginatedSeafarers = seafarers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );



return(
  <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              flex:1,
              backgroundColor: "#F4FCFF",
              borderRadius: "10px",
              overflowY: isMobile ? "auto" : "hidden",
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
                <TableRow sx={{ backgroundColor: "#5C5C5C" }}>
                  <TableCell
                    sx={{
                      textAlign: "left",

                      color: "#E4E4E4",

                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",

                      fontSize: isMobile ? "13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
                    
                    S.No
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "left",

                      color: "#E4E4E4",

                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",

                      fontSize: isMobile ? "13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
                    Seafarer Info
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "left",

                      color: "#E4E4E4",

                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",

                      fontSize: isMobile ? "13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
                    Id Info
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "left",

                      color: "#E4E4E4",

                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",

                      fontSize: isMobile ? "13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
                    Ship Name/Type
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "left",

                      color: "#E4E4E4",

                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",

                      fontSize: isMobile ? "13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
                    Role
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "left",

                      color: "#E4E4E4",

                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",

                      fontSize: isMobile ?"13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
                    Documents
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center   ",

                      color: "#E4E4E4",

                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",

                      fontSize: isMobile ?"13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
                    Credentials
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",

                      color: "#E4E4E4",

                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",

                      fontSize: isMobile ? "13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
                    Password
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#E4E4E4",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",

                      fontSize: isMobile ? "13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#E4E4E4",

                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",
                      fontSize: isMobile ? "13px" : "14px",
                      lineHeight: isMobile ? "120%" : "150%",
                      // letterSpacing: "0px",
                    }}
                  >
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
                    <TableCell sx={{ textAlign: "left" }}>{row.sno}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          lineHeight: "12px",
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "poppins",
                            fontWeight: 400,
                            fontSize: isMobile ? "12px" : "14px",
                            lineHeight: isMobile ? "12px" : "16px",
                          }}
                        >
                          {row.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            textAlign: "left",
                            fontFamily: "poppins",
                            fontWeight: 400,
                            fontSize: isMobile ? "12px" : "14px",
                            lineHeight: isMobile ? "12px" : "14px",
                          }}
                        >
                          {row.email}
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "poppins",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: isMobile ? "12px" : "14px",
                            lineHeight: isMobile ? "12px" : "16px",
                          }}
                        >
                          {row.phone}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontFamily: "poppins",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: isMobile ? "12px" : "14px",
                          lineHeight: isMobile ? "12px" : "16px",
                        }}
                      >
                        {row.idNumber}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontFamily: "poppins",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: isMobile ? "12px" : "14px",
                          lineHeight: isMobile ? "12px" : "14px",
                        }}
                      >
                        {row.IdType}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontFamily: "poppins",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: isMobile ? "12px" : "14px",
                          lineHeight: isMobile ? "12px" : "14px",
                        }}
                      >
                        {row.location}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontFamily: "poppins",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: isMobile ? "12px" : "14px",
                          lineHeight: isMobile ? "12px" : "14px",
                        }}
                      >
                        {row.ship}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{
                          textAlign: "left",
                          fontFamily: "poppins",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: isMobile ? "12px" : "14px",
                          lineHeight: isMobile ? "12px" : "14px",
                        }}
                      >
                        {row.ship1}
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "left",
                        fontFamily: "poppins",
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: isMobile ? "12px" : "14px",
                        lineHeight: isMobile ? "12px" : "14px",
                      }}
                    >
                      {row.role}
                    </TableCell>

                    <TableCell>
                      <Typography
                        sx={{
                          justifycontent: "center",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          fontStyle: "normal",
                          textAlign: "left",
                          textDecoration: "underline",
                          fontSize: isMobile ? "12px" : "14px",
                          lineHeight: isMobile ? "12px" : "14px",

                          color: "#006D90",
                        }}
                      >
                        <IconButton
                          color="primary"
                          component="label"
                          sx={{ textAlign: "left", color: "#006D90", p: 0 }}
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
                          color: "#006D90",
                        }}
                      >
                        <RemoveRedEyeOutlined />
                      </IconButton>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <IconButton
                        onClick={() => handlePassword(row)}
                        sx={{ color: "#006D90" }}
                      >
                        <LockReset fontSize="medium" />
                      </IconButton>
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          // textAlign: "left",
                          fontFamily: "poppins",
                          fontStyle: "normal",

                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          fontWeight: 500,

                          gap: 0.5,

                          borderRadius: "38.32px",
                          border: "1px solid",
                          borderColor:
                            row.status === "Active" ? "#008339" : "#D10100",
                          color:
                            row.status === "Active" ? "#259800" : "#D10100",
                          backgroundColor:
                            row.status === "Active" ? "#F0FEED" : " #FFEEF0",
                          fontSize: isMobile ? "11px" : "13px",

                          cursor: "pointer",
                        }}
                      >
                        <IconButton>
                          <CircleSharp
                            sx={{
                              fontSize: "12px",
                              color:
                                row.status === "Active" ? "#259800" : "#D10100",
                            }}
                          />
                        </IconButton>
                        {row.status || "Active"}
                        <IconButton onClick={() => setOpenStatusDialog(row)}>
                          <EditRounded
                            sx={{ color: "#000", fontSize: "16px" }}
                          />
                        </IconButton>
                      </Box>
                    </TableCell>

                    <TableCell sx={{ textAlign: "left" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          gap: 1,
                          direction: "row",
                          lineHeight: "12px",
                        }}
                      >
                        <IconButton
                          sx={{
                            border: "2px solid #006D90",
                            borderRadius: "8px",
                            p: 1,
                            backgroundColor: "#F4FCFF",
                          }}
                          variant="outlined"
                          onClick={() => handleEdit(row)}
                        >
                          <Edit sx={{ color: "#006D90", fontSize: "16px" }} />
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
)
}