import {
  Add,
  AdminPanelSettings,
  Close,
  Email,
  MarkAsUnreadSharp,
  MarkEmailRead,
  Person,
  Phone,
  Pin,
  Public,
  Sailing,
  Work,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

export default function AddDialog() {
  const [openAdd, setOpenAdd] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const openDialog = () => setOpenAdd(true);
  const closeDialogs = () => setOpenAdd(false);

  const [newSeafarer, setNewSeafarer] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    shouldEmail: "",
    vesselAdmin: "",
    ship: "",
    IdType: "",
    idNumber: "",
    ticketNumber: "",
  });
  const iconMap = { name: <Person sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />,
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
      ticketNumber: <Public sx={{ color: "#d3d3d3ff", fontSize: "17px" }} />,};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSeafarer((prev) => ({ ...prev, [name]: value }));
  };

  const fields = [
    { label: "Seafarer Name", name: "name", placeholder: "Enter the seafarer name" },
    { label: "Mobile Number", name: "phone", placeholder: "Enter mobile number" },
    { label: "Email ID", name: "email", placeholder: "Enter the email id" },
    {
      label: "Role",
      name: "role",
      type: "select",
      options: ["RainBow Maritime", "Rainbow ColorOut", "RainBow Timein"],
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
      label: "Ship Name & Type",
      name: "ship",
      type: "select",
      options: ["Ship A", "Ship B", "Ship C"],
      placeholder: "Select Ship",
    },
    {
      label: "ID Type",
      name: "IdType",
      type: "select",
      options: ["Passport", "Seafarer ID"],
      placeholder: "Select ID type",
    },
    { label: "ID Number", name: "idNumber", placeholder: "Enter ID number" },
    { label: "Ticket No", name: "ticketNumber", placeholder: "Enter Ticket number" },
  ];

  return (
    <>
      {/* OPEN BUTTON */}
      <Button
        onClick={openDialog}
        startIcon={<Add sx={{fontSize:"12px"}} />}
        sx={{
          textTransform: "none",
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: "12px",
          backgroundColor: "#259BC1",
          color: "#fff",
          borderRadius: "6px",
          px: 1.5,
          "&:hover": { backgroundColor: "#004d6e" },
        }}
      >
        Add Ticket
      </Button>

      {/* DIALOG */}
      <Dialog
        open={openAdd}
        onClose={closeDialogs}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "20px",
            border: "1.5px solid #0069d0",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
          },
        }}
      >
        {/* TITLE */}
        <DialogTitle
          sx={{
            py: 1,
            px: 2,
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "16px",
            color: "#259BC1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          Add Ticket Details
          <IconButton onClick={closeDialogs}>
            <Close
              sx={{
                fontSize: "15px",
                backgroundColor: "#259BC1",
                color: "#ffffff",
                borderRadius: "2px",
              }}
            />
          </IconButton>
        </DialogTitle>

        <Divider />

        {/* CONTENT */}
        <DialogContent
          sx={{
            backgroundColor: "#fff",
            py: 2,
            px: 2,
            maxHeight: isMobile ? "80vh" : "60vh",
            overflowY: "auto",
          }}
        >
          <Grid container spacing={2}    sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  "@media (max-width:600px)": {
                    flexDirection: "column",
                  },
                }}>
            {fields.map((field) => (
              <Grid item xs={12} sm={6} key={field.name}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px",
                    mb: 0.5,
                  }}
                >
                  {field.label}
                  <Box component="span" sx={{ color: "#ff0000" }}>
                    *
                  </Box>
                </Typography>

                {field.type === "select" ? (
                  <TextField
                    select
                    required
                    fullWidth
                    size="small"
                    name={field.name}
                    value={newSeafarer[field.name]}
                    onChange={handleInputChange}
                     InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {iconMap[field.name]}
                        </InputAdornment>
                      ),
                    }}  
                    SelectProps={{
                      displayEmpty: true,
                      renderValue: (selected) =>
                        !selected ? (
                          <span style={{ color: "#9e9e9e" }}>{field.placeholder}</span>
                        ) : (
                          selected
                        ),
                        
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",  width:isMobile? "100%":210,
                            height: 27,
                            paddingLeft: "10px",
                        "& fieldset": { borderColor: "#B0BEC5" },
                        "&:hover fieldset": { borderColor: "#064575" },
                        "&.Mui-focused fieldset": { borderColor: "#064575" },
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "13px",
                        fontFamily: "Poppins",
                      },
                    }}
                  >
                    {field.options.map((opt) => (
                      <MenuItem key={opt} value={opt} sx={{ fontSize: "13px" }}>
                        {opt}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <TextField
                    required
                    fullWidth
                    size="small"
                    name={field.name}
                    value={newSeafarer[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {iconMap[field.name]}
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",width: isMobile?"100%":210,
                            height: 27,
                        "& fieldset": { borderColor: "#B0BEC5" },
                        "&:hover fieldset": { borderColor: "#064575" },
                        "&.Mui-focused fieldset": { borderColor: "#064575" },
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "13px",
                        fontFamily: "Poppins",
                      },
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </DialogContent>

        {/* ACTIONS */}
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={closeDialogs}
            sx={{
              backgroundColor: "#259BC1",
              textTransform: "none",
              fontSize: "13px",
              fontFamily: "Poppins",
              color: "#fff",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#004d6e" },
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
