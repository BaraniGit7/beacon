import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Tables() {
  const [table, setTable] = useState([
    {
      coursecode: "MSTS-200",
      coursename: "Introduction to Bridge Equipment",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    },
    {
      coursecode: "MSTS-201",
      coursename: "Navigational AIds and safe navigation ",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    },
    {
      coursecode: "MSTS-202",
      coursename: "Foundations of bridge WatchKeeping",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    },
    {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    },
  ]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowPerPage] = useState(4);
  const [customPage, setCustompage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const paginatedTable = table.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          backgroundColor: "#F4FCFF",
          borderRadius: "10px",
        }}
      >
        <Table
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
                }}
              ></TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Course Code
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Course Name
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Operational Area
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Functional Area
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Target Audience
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Standards
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{ borderRadius: "20.2px", border: "1.08px solid #E4E4E4" }}
          >
            {paginatedTable.map((tab, index) => (
              <TableRow key={index} sx={{ backgroundColor: "#ffff" }}>
              <TableCell align="center">
  <Checkbox
    defaultChecked
    sx={{
      color: "green",
      "&.Mui-checked": {
        color: "green",
      },
    }}
  />
</TableCell>

                <TableCell>{tab.coursecode}</TableCell>
                <TableCell>{tab.coursename}</TableCell>
                <TableCell>{tab.opertionalarea}</TableCell>
                <TableCell>{tab.functionalarea}</TableCell>
                <TableCell>{tab.targetaudience}</TableCell>
                <TableCell>
                  {tab.standards.split(")").map((std, i) =>
                    std.trim() ? (
                      <Typography
                        key={i}
                        sx={{
                          display: "block",
                          fontSize: "13px",
                          fontFamily: "Inter, sans-serif",
                          lineHeight: "20px",
                        }}
                      >
                        {std.trim() + ")"}
                      </Typography>
                    ) : null
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            left: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography sx={{ fontFamily: "poppins", fontSize: "12px" }}>
            Show
          </Typography>
          <Select
            value={customPage ? "custom" : rowsPerPage}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "custom") {
                setCustompage(true);
              } else {
                setCustompage(false);
                setRowPerPage(Number(val));
                setPage(1);
              }
            }}
            size="small"
            sx={{
              backgroundColor: "#ffff",
              fontSize: "11px",
              height: "26px",
              minWidth: "15px",
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

          {customPage && (
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
          )}
          <Typography sx={{ fontSize: "12px", fontFamily: "poppins" }}>
            Row
          </Typography>
        </Box>
        <Pagination
          shape="rounded"
          count={Math.ceil(table.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              fontSize: "10px",
              margin: "0 2px",
            },
            "& .Mui-selected": {
              backgroundColor: "#0069D0",
              color: "white",
            },
          }}
        /><Box sx={{  right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            gap: 1,}}><Button variant="contained">Save & Enroll Courses</Button></Box>
      </Box>
    </>
  );
}
