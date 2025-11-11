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
<><DialogActions sx={{ px: 3, pb: 2 }}>
  <Grid>
    {/* {" "} */}
    {editIndex === null ? (
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
</DialogActions><Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
    px: 1,
    flexWrap: "wrap",
    gap: 1,
    // position: "relative",
    "@media(max-width:768px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 1
    }
  }}
>
    <Box
      sx={{
        // position: "absolute",
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        "@media(max-width:768px)": {
          order: 2,
        }
      }}
    >
      <Typography sx={{ fontFamily: "poppins", fontSize: "12px" }}>
        Show
      </Typography>
      <Select
        value={rowsPerPage}
        onChange
        size="small"
        sx={{
          backgroundColor: "#ffff",
          fontSize: "11px",
          height: "26px",
          minWidth: "50px",
          "& .MuiSelect-select": {
            py: "2px",
            px: "6px",
          },
        }}
      >
        {[5, 10, 15, 20].map((n) => (
          <MenuItem key={n} value={n} sx={{ fontSize: "12px" }}>
            {n}
          </MenuItem>
        ))}
        {/* <MenuItem value="custom">custom</MenuItem> */}
      </Select>

      {/* {customPage && (
      <TextField
        type="number"
        placeholder="Enter"
        size="small"
        inputProps={{
          min: 1,
          style: { fontSize: 11, width: 45, padding: "2px 4px" },
        }}
        sx={{
          height: "26px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "6px",
            height: "26px",
            backgroundColor: "#ffff",
          },
        }}
        onChange={(e) => {
          const val = Number(e.target.value);
          if (val > 0) {
            setRowPerPage(val);
            setPage(1);
          }
        }}
      />
    )} */}
      {/* <Typography sx={{ fontSize: "12px", fontFamily: "poppins" }}>
      Row
    </Typography> */}
    </Box>
    <Box sx={{
      display: "flex",
      justifyContent: "center",

      //  mt: 2,
      flexGrow: 1, // 👈 allows wrapping on small screens

      "@media (max-width: 600px)": {
        order: 1,
        width: "100%",
      },
    }}></Box>
    <Pagination
      siblingCount={1}
      boundaryCount={1}
      shape="rounded"
      count={Math.ceil(table.length / rowsPerPage)}
      page={page}
      onChange={handlePageChange}
      showFirstButton={false}
      showLastButton={false}
      renderItem={(item) => {
        if (item.type === "previous" || item.type === "next") {
          return (
            <PaginationItem {...item} slots={{ previous: ArrowBack, next: ArrowForward }} />
          );
        }
        if (item.page === page) {
          return <PaginationItem {...item} />;
        }
        return (
          <PaginationItem {...item} page="." disabled sx={{ pointerEvents: "none", minWidth: "6px", opacity: 0.6 }} />
        );
      } }

      sx={{
        "& .MuiPaginationItem-root": {
          fontSize: "10px",
          margin: "0px 2px",
          color: "#006D90",
          minWidth: "20px",
          height: "20px",
          padding: "0px",
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "#006D90",
          color: "#fff",
        },
        "& .MuiPaginationItem-root.Mui-selected:hover": {
          backgroundColor: "#00c0ebff",
        },
      }} />

    <Button sx={{
      backgroundColor: "#006D90",
      fontSize: "10px",
      height: "26px",
      px: 1.5,
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      "@media (max-width: 768px)": {
        order: 3,
        width: "100%",
        justifyContent: "center"
      }
    }} variant="contained"><Save sx={{ fontSize: "16px" }} />Save & Enroll</Button>
  </Box></>