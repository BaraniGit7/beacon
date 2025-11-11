import { Box, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";

export default function PagesX({isMobile,rowsPerPage,handleRow,total,handlePageChange,pages}){
    return(
           <Box
  sx={{
    display: "flex",
  justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
    gap:isMobile? 5 : 2,
    mt: 1,
    mb: 1,
     width: "100%",
        position: "relative",
    
  }}
>
  {/* Left side: "Show" and Select */}
  <Box sx={{  position: "absolute",
          left: isMobile ? "10px" : "20px",
          display: "flex",
          alignItems: "center",
          gap: 1, }}>
    <Typography
      sx={{ fontSize: 13, fontFamily: "Poppins", fontWeight: 400 }}
    >
      Show
    </Typography>

    <Select
      size="small"
      value={rowsPerPage}
      onChange={handleRow}
      sx={{
        backgroundColor: "#fff",
        fontSize: 12,
        height: 26,
        minWidth: 40,
      }}
    >
      {[5, 6, 10, 15, 21].map((n) => (
        <MenuItem key={n} value={n} sx={{ fontSize: 14 }}>
          {n}
        </MenuItem>
      ))}
    </Select>
  </Box>

  {/* Right side: Pagination */}
  <Pagination
    count={total}
    onChange={handlePageChange}
    page={pages}
    size="small"
    shape="rounded"
    sx={{
      
      alignItems:"center",
      "& .MuiPaginationItem-root": {
        color: "#006D90",
        fontSize: isMobile ? 10: 12,
        mx: isMobile?0 : 0.7,
      },
      "& .MuiPaginationItem-root.Mui-selected": {
        backgroundColor: "#006D90",
        color: "#fff",
      },
    }}
  />
</Box>

    )
}