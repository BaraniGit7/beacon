import React from "react";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Box,
  Button,
} from "@mui/material";

const SeafarerForm = ({
  openAdd,
  newSeafarer,
  editSeafarer,
  handleInputChange,
  handleFileChange,
}) => {
  const fields = [
    { label: "Seafarer Name*", name: "seafarerName" },
    { label: "Mobile Number*", name: "mobileNumber" },
    { label: "Email ID*", name: "email" },
    {
      label: "Role*",
      name: "role",
      type: "select",
      options: ["Captain", "Engineer", "Crew"],
    },
    {
      label: "Should we email seafarer?*",
      name: "shouldEmail",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      label: "Want to make as Vessel Admin?*",
      name: "vesselAdmin",
      type: "select",
      options: ["Yes", "No"],
    },
    { label: "Ship Name & Type*", name: "shipName" },
    {
      label: "ID Type*",
      name: "idType",
      type: "select",
      options: ["Passport", "Seafarer ID"],
    },
    { label: "ID Number*", name: "idNumber" },
    {
      label: "Associated Country*",
      name: "country",
      type: "select",
      options: ["India", "USA", "UK"],
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={12} sm={6} key={field.name}>
            <Typography
              variant="body2"
              sx={{ mb: 0.5, fontWeight: 500, color: "#064575" }}
            >
              {field.label}
            </Typography>

            {field.type === "select" ? (
              <TextField
                select
                fullWidth
                size="small"
                name={field.name}
                value={
                  openAdd
                    ? newSeafarer[field.name]
                    : editSeafarer[field.name] || ""
                }
                onChange={handleInputChange}
              >
                {field.options.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </TextField>
            ) : (
              <TextField
                fullWidth
                size="small"
                name={field.name}
                value={
                  openAdd
                    ? newSeafarer[field.name]
                    : editSeafarer[field.name] || ""
                }
                onChange={handleInputChange}
              />
            )}
          </Grid>
        ))}

        {/* Upload Section */}
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ mb: 1, fontWeight: 500, color: "#064575" }}
          >
            Upload Document
          </Typography>
          <Box
            sx={{
              border: "2px dashed #c3cfd9",
              borderRadius: "12px",
              p: 3,
              textAlign: "center",
              color: "#6b7280",
              backgroundColor: "#f9fbfc",
            }}
          >
            <Typography variant="body2">
              Drag your files to start uploading
            </Typography>
            <Button
              variant="outlined"
              component="label"
              sx={{
                mt: 1,
                borderColor: "#064575",
                color: "#064575",
                textTransform: "none",
              }}
            >
              Browse File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            <Typography
              variant="caption"
              display="block"
              sx={{ mt: 1, color: "#9ca3af" }}
            >
              Support .docs, .docx, .pdf, .jpg, .png
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SeafarerForm;
