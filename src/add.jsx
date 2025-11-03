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
      label: selectedTab === "coc" ? "COC Name" : "Course Name",
      name: "name",
      type: "select",
      options:
        selectedTab === "coc"
          ? ["Deck Rating", "Captain", "Engineer", "Crew"]
          : ["Web", "Cloud", "Test", "Security"],
      placeholder:
        selectedTab === "coc" ? "Select COC Name" : "Select Course Name",
    },
    {
      label: "Flag State",
      name: "flagState",
      type: "select",
      options: ["India", "Panama", "Liberia", "Bahamas"],
      placeholder: "Select Flag State",
    },
    {
      label: "Date Issued",
      name: "dateIssued",
      type: "date",
      placeholder: "Select Date Issued",
    },
    {
      label: "Valid Until",
      name: "validUntil",
      type: "date",
      placeholder: "Select Valid Date",
    },
  ].map((field) => (
    <Grid item xs={12} sm={6} key={field.name}>
      {/* ---- Label ---- */}
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "12px",
          mb: 0.5,
        }}
      >
        {field.label} (
        <Box component="span" sx={{ color: "#ff0000ff", display: "inline" }}>
          *
        </Box>
        )
      </Typography>

      {/* ---- Input ---- */}
      {field.type === "select" ? (
        <TextField
          select
          required
          fullWidth
          size="small"
          name={field.name}
          value={newEntry[field.name] || ""}
          onChange={handleChange}
          SelectProps={{
            displayEmpty: true,
            renderValue: (selected) =>
              selected ? (
                selected
              ) : (
                <span style={{ fontSize: "10px", color: "#9e9e9e" }}>
                  {field.placeholder}
                </span>
              ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              width: 210,
              height: 27,
              "& fieldset": {
                borderColor: "#B0BEC5",
              },
              "&:hover fieldset": {
                borderColor: "#064575",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#064575",
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
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {field.options.map((opt) => (
            <MenuItem
              key={opt}
              value={opt}
              sx={{ fontSize: "13px", fontFamily: "Poppins" }}
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
          type={field.type}
          value={newEntry[field.name] || ""}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          placeholder={field.placeholder}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              height: 27,
              width: 210,
              "& fieldset": {
                borderColor: "#B0BEC5",
              },
              "&:hover fieldset": {
                borderColor: "#064575",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#064575",
              },
            },
            "& .MuiInputBase-input": {
              padding: "8px 10px",
              fontSize: "10px",
            },
            "@media (max-width:900px)": {
              width: "100%",
              height: "40px",
            },
          }}
        />
      )}
    </Grid>
  ))}
</Grid>;
<DialogActions sx={{ px: 3, pb: 2 }}>
              <Grid>
                {/* {" "} */}
                {editIndex===null ? (
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
                    onClick={handleAddOrEditEntry}
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
                    onClick={handleAddOrEditEntry}
                    startIcon={<Done />}
                  >
                    Update
                  </Button>
                )}
              </Grid>
            </DialogActions>