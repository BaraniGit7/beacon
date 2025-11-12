import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Divider,
  Grid,
  TextField,
  MenuItem,
  Box,
  Button,
  InputAdornment,
} from "@mui/material";
import {
  Close,
  Add,
  Done,
  DriveFolderUploadRounded,
  Person,
  Phone,
  Email,
  Work,
  MarkEmailRead,
  AdminPanelSettings,
  Sailing,
  MarkAsUnreadSharp,
  Pin,
  Public,
} from "@mui/icons-material";

export default function SeafarerDialog({
  openAdd,
  openEdit,
  closeDialogs,
  isMobile,
  newSeafarer,
  editSeafarer,
 setSeafarers,seafarers,setOpenAdd,setOpenEdit,
 
  setNewSeafarer,
  setEditSeafarer,
}) {
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
  const handleClose = () => {
  closeDialogs();
  setNewSeafarer({
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
    document: null,
    documentName: "",
  });
  setEditSeafarer({});
};
   const commonStyles={ borderRadius: "10px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                            width: isMobile ? "100%" : 210,
                            height: 27,
                            paddingLeft: "10px",
                            "& fieldset": {
                              borderWidth: "1px",
                              borderColor: "#B0BEC5",
                            },
                            "&:hover fieldset": {
                              borderColor: "#006D90",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#006D90",
                            },
                          },
                          "& .MuiInputBase-input": {
                            padding: "8px 10px",
                            fontSize: "0.7rem",
                          },
                          "@media (max-width:900px)": {
                            width: "100%",
                            height: "40px",
                          },

      }
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
   
  
    return(
         <Dialog
            open={openAdd || openEdit}
            onClose={closeDialogs}
            fullWidth
            maxWidth="sm"
            PaperProps={{
              sx: {
                borderRadius: "20px",
                border: "1.5px solid #0069d0",
                overflowY: isMobile ? "visible" : "hidden",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",

                "@media (max-width:900px)": {
                  width: "90%",
                  height: "auto",
                },
              },
            }}
          >
            <DialogTitle
              sx={{
                py: 1,
                fontFamily: "poppins",
                fontWeight: 600,
                fontSize: "16px",
                color: "#006D90",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #E0E0E0",
              }}
            >
              {openAdd ? "Add Seafarer Details" : "Edit Seafarer Details"}
              <IconButton onClick={handleClose} sx={{}}>
                <Close
                  sx={{
                    fontSize: "15px",
                    backgroundColor: " #006D90",
                    color: "#ffffffff",
                    borderRadius: "2px",
                  }}
                />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent 
              sx={{
                py: 1,
                //  px:0,
                fontFamily: "Poppins, sans-serif",
                backgroundColor: "#FFFFFF",
                "@media (max-width:900px)": {
                  height: "90vh",
                  overflowY: "auto",
                  px: 2,
                  py: 1,
                },
              }}
            >
              <Grid
                container
                columnSpacing={1}
                rowSpacing={1}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  "@media (max-width:600px)": {
                    flexDirection: "column",
                  },
                }}
              >
                {[
                  {
                    label: "Seafarer Name",
                    name: "name",
                    placeholder: "Enter the seafarer name",
                  },
                  {
                    label: "Mobile Number",
                    name: "phone",
                    placeholder: "Enter mobile number",
                  },
                  {
                    label: "Email ID",
                    name: "email",
                    placeholder: "Enter the email id",
                  },
                  {
                    label: "Role",
                    name: "role",
                    type: "select",
                    options: ["Deck Rating", "Captain", "Engineer", "Crew"],
                    placeholder: "Select Role",
                  },
                  {
                    label: "Should we email seafarer?",
                    name: "shouldEmail",
                    type: "select",
                    options: ["Yes", "No"],
                    placeholder: "Select",
                  },
                  {
                    label: "Vessel Admin?",
                    name: "vesselAdmin",
                    type: "select",
                    options: ["Yes", "No"],
                    placeholder: "Select",
                  },
                  {
                    label: "Ship Name & type ",
                    name: "ship",
                    type: "select",
                    options: ["Yes", "No"],
                    placeholder: "Select Ship name",
                  },

                  {
                    label: "ID Type",
                    name: "IdType",
                    type: "select",
                    options: ["Passport", "Seafarer ID"],
                    placeholder: "Select id type",
                  },
                  {
                    label: "ID Number",
                    name: "idNumber",
                    placeholder: "Enter id number",
                  },
                  {
                    label: "Associated Country",
                    name: "location",
                    type: "select",
                    options: ["India", "USA", "UK"],
                    placeholder: "Select country",
                  },
                ].map((field) => (
                  <Grid item xs={12} sm={6} key={field.name}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "14px",
                      }}
                    >
                      {field.label}{" "}
                      {openAdd ? (
                        <Box
                          component="span"
                          sx={{ color: "#ff0000ff", display: "inline" }}
                        >
                          *
                        </Box>
                      ) : (
                        ""
                      )}
                    </Typography>

                    {field.type === "select" ? (
                      <TextField
                        select
                        required
                        fullWidth
                        size="small"
                        name={field.name}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {iconMap[field.name]}
                            </InputAdornment>
                          ),
                        }}
                        SelectProps={{
                          displayEmpty: true,
                          renderValue: (selected) => {
                            if (!selected) {
                              return (
                                <span
                                  style={{
                                    fontSize: "10px",
                                    color: "#9e9e9e",
                                  }}
                                >
                                  {field.placeholder}
                                </span>
                              );
                            }
                            return selected;
                          },
                        }}
                        value={
                          openAdd
                            ? newSeafarer[field.name] ?? ""
                            : editSeafarer[field.name] ?? ""
                        }
                        onChange={handleInputChange}
                        
                        sx={commonStyles}
                      >
                        {field.options.map((opt) => (
                          <MenuItem
                            sx={{ fontSize: "13px", fontFamily: "poppins" }}
                            key={opt}
                            value={opt}
                          >
                            {opt}
                          </MenuItem>
                        ))}
                      </TextField>
                    ) : (
                      <TextField
                        fullWidth
                        required
                        size="small"
                        name={field.name}
                        value={
                          openAdd
                            ? newSeafarer[field.name]
                            : editSeafarer[field.name] || ""
                        }
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {iconMap[field.name]}
                            </InputAdornment>
                          ),
                        }}
                     sx={commonStyles}
                      />
                    )}
                  </Grid>
                ))}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "14px",
                      pb: 1,
                    }}
                  >
                    Upload Documents
                  </Typography>

                  {(
                    !openAdd
                      ? editSeafarer.documentName
                      : newSeafarer.documentName
                  ) ? (
                    <Box
                      sx={{
                        display: "flex",
                        // width: "80%",
                        alignItems: "center",
                        fontFamily: "Poppins",
                        justifyContent: "space-between",
                        border: "1px solid #E7E7E7",
                        borderRadius: 2,

                        fontSize: isMobile ? "12px" : "14px",
                        backgroundColor: "#F3F3F3",
                        "@media (max-width:600px)": {
                          width: "100%",
                          height: "auto",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          p: 1,
                        },
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                          alt="pdf"
                          width={26}
                        />
                        <Box>
                          <Typography
                            fontWeight={400}
                            sx={{
                           //   wordBreak: "break-all",
                              fontSize: "14px",
                              width: "475px",
                              "@media (max-width:600px)": {
                                fontSize: "10px",
                                 width: "10%",
                              },
                            }}
                          >
                            {openAdd
                              ? newSeafarer.documentName
                              : editSeafarer.documentName}
                          </Typography>
                          {(openAdd
                            ? newSeafarer.document
                            : editSeafarer.document) && (
                            <Typography variant="caption" color="gray" sx={{fontSize:"12px"}}>
                              {(
                                (openAdd
                                  ? newSeafarer.document
                                  : editSeafarer.document
                                ).size /
                                1024 /
                                1024
                              ).toFixed(2)}
                              MB
                            </Typography>
                          )}
                        </Box>
                      </Box>
                      <IconButton
                        onClick={() => {
                          if (openAdd)
                            setNewSeafarer((prev) => ({
                              ...prev,
                              document: null,
                              documentName: "",
                            }));
                          else
                            setEditSeafarer((prev) => ({
                              ...prev,
                              document: null,
                              documentName: "",
                            }));
                        }}
                      >
                        <Close sx={{fontSize:"16px"}} />
                      </IconButton>
                    </Box>
                  ) : (
                    <>
                      <Box
                        sx={{
                          border: "2px dashed #006D90",
                          display: "flex",
                          py: 0.5,

                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 2,
                          minWidth: "353%",
                          height: "85px",
                          textAlign: "center",
                          backgroundColor: "#F9FBFC",
                          "&:hover": { backgroundColor: "#F1F5F9" },
                          transition: "0.2s",
                          cursor: "pointer",
                          "@media (max-width:600px)": {
                            minWidth: "1%",
                           // width:"90%",
                            height: "120px",
                            overflow:"visible"
                          },
                        }}
                      >
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          hidden
                          id="file-upload"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="file-upload">
                          <DriveFolderUploadRounded
                            sx={{
                              color: "#006D90",
                              fontSize: "20px",
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "9px" }}
                          >
                            Drag your file(s) to start uploading
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "7px", p: "1px" }}
                          >
                            OR
                          </Typography>
                          <Button
                            variant="outlined"
                            sx={{
                              borderColor: "#006D90",
                              color: "#006D90",
                              fontSize: "8px",

                              textTransform: "none",
                            }}
                            component="span"
                          >
                            Browse files
                          </Button>
                        </label>
                      </Box>
                      <Typography variant="caption" color="gray" fontSize="9px">
                        Support .docs, .docx, .pdf, .jpg, .png
                      </Typography>
                    </>
                  )}
                </Box>{" "}
              </Grid>
            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 2 }}>
              <Grid>
                {/* {" "} */}
                {openAdd ? (
                  <Button
                    sx={{
                      backgroundColor: "#006D90",
                      textTransform: "none",
                      fontSize: "10px",
                      "& .MuiButton-startIcon": {
                        marginRight: "4px",
                        "& > *:nth-of-type(1)": {
                          fontSize: "13px",
                        },
                      },
                    }}
                    variant="contained"
                    onClick={handleAddSeafarer}
                    startIcon={<Add />}
                  >
                    Add
                  </Button>
                ) : (
                  <Button
                    sx={{
                      backgroundColor: "#006D90",
                      textTransform: "none",
                      fontSize: "10px",
                      "& .MuiButton-startIcon": {
                        marginRight: "4px",
                        "& > *:nth-of-type(1)": {
                          fontSize: "13px",
                        },
                      },
                    }}
                    variant="contained"
                    onClick={handleEditSeafarer}
                    startIcon={<Done />}
                  >
                    Update
                  </Button>
                )}
              </Grid>
            </DialogActions>
          </Dialog>
    )
}