import { Box, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";

export default function Pages({setPage,page,rowsPerPage,customPage,handlePageChange,seafarers,setCustompage,setRowPerPage}){
    return(
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
              <Typography sx={{ fontFamily: "poppins", fontSize: "13px" }}>
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
                {[5, 6,10, 15, 20].map((n) => (
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
            defaultPage={1}
              component="div"
              shape="rounded"
              count={Math.ceil(seafarers.length / rowsPerPage)}
              page={page}
              onChange={handlePageChange}
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "10px",
                  margin: "0 2px",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "#006D90",
                  color: "#fff",
                },
                "& .Mui-selected": {
                  backgroundColor: "#0069D0",
                  color: "white",
                },
              }}
            />
          </Box>
    )
}