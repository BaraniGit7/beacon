
import React from "react";
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
}) {
  return (
    <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              flex:1,
              m:1,
              p:0,
              backgroundColor: "#F4FCFF",
              borderRadius: "10px",
            //  scrollbarWidth:"none",
               // "&::-webkit-scrollbar": { display: "none" },
              maxHeight:470
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
                <TableRow sx={{ backgroundColor: "#5C5C5C",position:"sticky",
                top:0,zIndex:2
                 }}>
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

                          color: "#259BC1",
                        }}
                      >
                        <IconButton
                          color="primary"
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
                          border: "1.8px solid",
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
