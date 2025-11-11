import { ArrowBack, ArrowForward, Save } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  MenuItem,
  Pagination,
  PaginationItem,
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
      coursecode: "MSTS-203",
      coursename: "Procedure for effective Bridge Watchkeeping",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    },
     {
      coursecode: "MSTS-205",
      coursename: "Procedures for effectives Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-206",
      coursename: "Procedures for effective Bridges Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-207",
      coursename: "Procedures for effective Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-208",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }, {
      coursecode: "MSTS-204",
      coursename: "Procedures for effective Bridge Watchkeepings",
      opertionalarea: "Deck Courses",
      functionalarea: "Navigation",
      targetaudience: "operations",
      standards:
        "STCW(Navigation) SIRE(Navigation and Communications) RDBMS(Navigation and Communications) TMSA(Navigational Safety) CDI (Navigational safety)",
    }
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
          maxHeight: 375,
          overflowY: "auto",
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
            <TableRow
              sx={{
                backgroundColor: "#5C5C5C",
                position: "sticky",
                top: 0,
                zIndex: 2,
              }}
            >
              <TableCell
                sx={{
                  textAlign: "left",
                  fontSize: "13px",
                  color: "#E4E4E4",

                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Course Code
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",
                  fontSize: "13px",
                  color: "#E4E4E4",

                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Course Name
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",
                  fontSize: "13px",
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Operational Area
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",
                  fontSize: "13px",
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
                  fontSize: "13px",
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Target Audience
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",

                  color: "#E4E4E4",
                  fontSize: "13px",
                  fontFamily: "poppins",
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
                    
                    sx={{
                     transform: "scale(0.8)",
                      color: "green",
                      "&.Mui-checked": {
                        color: "green",
                      },
                    }}
                  />
                </TableCell>

                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins" }}>
                  {tab.coursecode}
                </TableCell>
                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins" }}>
                  {tab.coursename}
                </TableCell>
                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins" }}>
                  {tab.opertionalarea}
                </TableCell>
                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins" }}>
                  {tab.functionalarea}
                </TableCell>
                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins" }}>
                  {tab.targetaudience}
                </TableCell>
                <TableCell>
                  {tab.standards.split(")").map((std, i) =>
                    std.trim() ? (
                      <Typography
                        key={i}
                        sx={{
                          display: "block",
                          fontSize: "13px",
                          fontFamily: "poppins",
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
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
           flexWrap: "nowrap", // ✅ force single row
        overflowX: "auto", // ✅ scrolls on mobile instead of wrapping
        whiteSpace: "nowrap",
        //  px:1,
       //flexWrap: { xs: "wrap", sm: "nowrap" }, 
          gap:1,
         // position: "relative",
       scrollbarWidth:"none","&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Box
          sx={{
         
           // position: "absolute",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
       //  flex: { xs: "1 1 100%", sm: "unset" },
         // justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography sx={{ fontFamily: "poppins", fontSize: "10px" }}>
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
              minWidth: "50px",
             
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
        <Box sx={{ display: "flex",
    justifyContent: "center",
     //flex: { xs: "1 1 100%", sm: "unset" },
  flexGrow:1,
  mx:1,
  }}>
        <Pagination
        siblingCount={1}
        boundaryCount={0}
          shape="rounded"
          count={Math.ceil(table.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
            showFirstButton={false}
      showLastButton={false}
      renderItem={(item)=>{
        if(item.type==="previous"||item.type==="next"){
          return(
            <PaginationItem {...item} slots={{previous:ArrowBack , next:ArrowForward}}/>
          );
        }
        if(item.page===page){
          return <PaginationItem {...item} />
        }
        return(
          <PaginationItem {...item} />
        )
      }}
       
          sx={{
            "& .MuiPaginationItem-root": {
              fontSize: "10px",
            margin: "0px",
      color: "#006D90",
      minWidth: "22px",
      height: "20px",
       padding: "0px",
            },
             "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "#006D90", 
      color: "#fff",              
    },
    "& .MuiPaginationItem-root.Mui-selected:hover": {
      backgroundColor: "#00c0ebff",
    },}}
        />
      
        </Box>  <Box
    sx={{
      //flex: { xs: "1 1 100%", sm: "unset" },
      display: "flex",
      justifyContent: { xs: "center", sm: "flex-end" },
    }}
  >
    <Button
      variant="contained"
      size="small"
      sx={{
        backgroundColor: "#006D90",
        fontSize: "11px",
        textTransform: "none",
        borderRadius: "6px",
        px: 1.5,
        height: "26px",
        "&:hover": { backgroundColor: "#00A0C6" },
      }}
    >
      Save 
    </Button>
  </Box>
</Box>
    </>
  );
}
