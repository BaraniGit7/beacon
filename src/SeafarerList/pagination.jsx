import { Box, MenuItem, Pagination, Select, Typography } from "@mui/material";

export default function PagesX({isMobile,rowsPerPage,handleRow,total,handlePageChange,pages}){
    return(
           <Box
  sx={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", 
    px: isMobile ? 1 : 2,
    mt: 1,
    mb: 1,
    
  }}
>
  {/* Left side: "Show" and Select */}
  <Box sx={{  display: "flex", alignItems: "center", gap: 1  }}>
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
      {[5, 6, 7,8,9,10, 15, 21].map((n) => (
        <MenuItem key={n} value={n} sx={{ fontSize: 14 }}>
          {n}
        </MenuItem>
      ))}
    </Select>
  </Box>

  {/* Right side: Pagination */}
<Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}> <Pagination
    count={total}
    onChange={handlePageChange}
    page={pages}
    size="small"
    shape="rounded"
    sx={{
      
      alignItems:"center",
      "& .MuiPaginationItem-root": {
        color: "#259BC1",
        fontSize: isMobile ? 10: 12,
        mx: isMobile ? 0 : 0.7,
      },
      "& .MuiPaginationItem-root.Mui-selected": {
        backgroundColor: "#259BC1",
        color: "#fff",
      },
    }}
  /></Box>
</Box>

    )
}