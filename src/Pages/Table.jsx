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
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useState } from "react";

export default function Tables() {
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("sm"));
 {/* const[table,setTable]*/}  const [table] = useState([
   
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
  const [selectedRows,setSelectedRows]=useState([]);
  const handleCheckBox=((code)=>(
    setSelectedRows((prev)=>
      prev.includes(code)? prev.filter((c)=> c!=code):[...prev,code]
    )
  ))
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const paginatedTable = table.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const headerStyles={
     textAlign: "left",
                  whiteSpace:"nowrap",
                  color: "#E4E4E4",
                  fontSize: "13px",
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "bold",
  }
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
          scrollbarWidth:"none",
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
             sx={headerStyles}
              ></TableCell>
              <TableCell
              sx={headerStyles}
              >
                Course Code
              </TableCell>
              <TableCell
                sx={headerStyles}
                 
              >
                Course Name
              </TableCell>
              <TableCell
                sx={headerStyles}
              >
                Operational Area
              </TableCell>
              <TableCell
                sx={headerStyles}
              >
                Functional Area
              </TableCell>
              <TableCell
                sx={headerStyles}
              >
                Target Audience
              </TableCell>
              <TableCell
               sx={headerStyles}
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
                  checked={selectedRows.includes(tab.coursecode)}  
                  onChange={()=>handleCheckBox(tab.coursecode)} 
                    sx={{
                     transform: "scale(0.8)",
                      color: "green",
                      "&.Mui-checked": {
                        color: "green",
                      },
                    }}
                  />
                </TableCell>

                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins,sans-serif" ,fontWeight:400}}>
                  {tab.coursecode}
                </TableCell>
                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins,sans-serif",fontWeight:400,whiteSpace:"nowrap" }}>
                  {tab.coursename}
                </TableCell>
                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins,sans-serif",fontWeight:400 }}>
                  {tab.opertionalarea}
                </TableCell>
                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins,sans-serif" ,fontWeight:400}}>
                  {tab.functionalarea}
                </TableCell>
                <TableCell sx={{ fontSize: "13px", fontFamily: "poppins,sans-serif",fontWeight:400 }}>
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
                          fontFamily: "poppins,sans-serif",
                          lineHeight: "20px",
                          whiteSpace:"nowrap",fontWeight:400
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
           flexWrap: "nowrap", 
        overflowX: "auto",
        whiteSpace: "nowrap",fontWeight:400,
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
          <Typography sx={{ fontFamily: "poppins,sans-serif", fontSize: "13px",fontWeight:500 }}>
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
            {[2,3,4,5,6, 10, 15, 20].map((n) => (
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
          {/* <Typography sx={{ fontSize: "12px", fontFamily: "poppins,sans-serif" }}>
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
        siblingCount={0}
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
              fontSize: "13px",
            margin: "0px 2px",
      color: "#259BC1",
      minWidth: "22px",
      height: "20px",
       padding: "0px",
            },
             "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "#259BC1", 
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
      justifyContent:isMobile? "center": "flex-end" ,
    }}
  >
    <Button
      variant="contained"
      size="small"
      sx={{
        backgroundColor: "#259BC1",
        fontSize: isMobile?"11px":"14px",
        textTransform: "none",
        borderRadius: "6px",
        px: 1.5,
        height: isMobile?"26px":"35px",
        "&:hover": { backgroundColor: "#00A0C6" },
      }}
    >
      <Save sx={{mr:"4px",fontSize:"18px"}}/>
      Save 
    </Button>
  </Box>
</Box>
    </>
  );
}
