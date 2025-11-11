import {
  Box,
  Button,
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
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import YesDialog from "./Yes";

export default function TableTicket() {
  const data  = useState([
    {
      sno: "1",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "2",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "3",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "4",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "5",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "6",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "7",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "8",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "9",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "10",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "11",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "12",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "13",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "14",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "15",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "16",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "17",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "18",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "19",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "20",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
    {
      sno: "21",
      TicketDate: "11/07/2025",
      TicketTime: "01.30pm",
      name: "Barani",
      mail: "ash@gmail.com",
      no: "6382772867",
      mari: "Rainbow Maritime",
      Id: "1701524",
      pass: "passport",
      area: "Academic Query",
      Ticketno: "[Ticket #96]",
      ticketalert: "Included in Recommended...",
      ansDate: "11/07/2025",
      ansTime: "3.30pm",
    },
  ]);
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("sm"));
  const [pages, setpages] = useState(1);
  const [rowsPerPage, setRowPerPage] = useState(5);
  const handlePageChange = (event, value) => {
    setpages(value);
  };
  const handleRow = (event) => {
    setRowPerPage(Number(event.target.value));
    setpages(1);
  };
  const total = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (pages - 1) * rowsPerPage,
    pages * rowsPerPage
  );

  return (
    <Box>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          backgroundColor: "#F4FCFF",
          boderRadius: "10px",
         maxHeight: isMobile ? 540 : 600,//0
          overflowY: "auto",
        }}
      >
        <Table
          size="small"
          sx={{
            backgroundColor: "#F4FCFF",
            borderSpacing: "0 14px",
            borderCollapse: "separate",
          }}
        >
          <TableHead sx={{ position: "sticky", zIndex:1 }}>
            <TableRow
              sx={{
                backgroundColor: "#5C5C5C",
                position: "sticky",
                top: 0,
                //zIndex: 2,
              }}
            >
              <TableCell
                sx={{
                  textAlign: "left",
                  color: "#ffff",
                  fontFamily: "poppins",
                  fontSize: isMobile?"12.5px":"13px",
                  fontWeight: 700,
                }}
              >
                S.no
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",
                  color: "#ffff",
                  fontFamily: "poppins",
                 fontSize: isMobile?"12.5px":"13px",
                  fontWeight: 700,
                }}
              >
                Ticket Date
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",
                  color: "#ffff",
                  fontFamily: "poppins",
                fontSize: isMobile?"12.5px":"13px",
                  fontWeight: 700,
                }}
              >
                Seafarer Info
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",
                  color: "#ffff",
                  fontFamily: "poppins",
                fontSize: isMobile?"12.5px":"13px",
                  fontWeight: 700,
                }}
              >
                Id Info
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",
                  color: "#ffff",
                  fontFamily: "poppins",
                fontSize: isMobile?"12.5px":"13px",
                  fontWeight: 700,
                }}
              >
                Area
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",
                  color: "#ffff",
                  fontFamily: "poppins",
                fontSize: isMobile?"12.5px":"13px",
                  fontWeight: 700,
                }}
              >
                Ticket No
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",
                  color: "#ffff",
                  fontFamily: "poppins",
                fontSize: isMobile?"12.5px":"13px",
                  fontWeight: 700,
                }}
              >
                Answered Date
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#ffff",
                  fontFamily: "poppins",
                fontSize: isMobile?"12.5px":"13px",
                  fontWeight: 700,
                }}
              >
                SLA Met?
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ borderRadius: "20.2px", border: "1.06px #E4E4E4" }}>
            {paginatedData.map((tick, index) => (
              <TableRow key={index} sx={{ backgroundColor: "#ffff" }}>
                <TableCell
                  sx={{
                    fontSize: "12px",
                    fontFamily: "poppins",
                    fontWeight: 400,
                  }}
                >
                  {tick.sno}
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.TicketDate}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.TicketTime}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.mail}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.no}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      display: "flex",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.mari}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.Id}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.pass}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "12px",
                    fontFamily: "poppins",
                    fontWeight: 400,
                  }}
                >
                  {tick.area}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "12px",
                    fontFamily: "poppins",
                    fontWeight: 400,
                  }}
                >
                  {tick.Ticketno}
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.ticketalert}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.ansDate}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    {tick.ansTime}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Button
                  size="small"
                    variant="outlined"
                    sx={{
                      color: "#259800",
                      backgroundColor: "#f0FEED",
                      border: "1px solid #259800",
                      borderRadius: "8px",
                      fontSize: "10px",
                      fontFamily: "poppins",
                      fontWeight: 600,
                      zIndex: 0,
                     p:0,
                     minWidth: "35px",  
                    }}
                  >
                    Yes
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile?"flex-start":"center",
          alignItems: "center",
          position: "relative",
          p:isMobile? 1 : 2,
          gap:isMobile?1:2
        }}
      >
        <Box
          sx={{
        left: isMobile ? "auto" : 0,
            position: isMobile ? "static" : "absolute",
            display: "flex",
            alignItems: "center",
             gap: isMobile ? 2 : 1,
        //  mb: isMobile ? 1 : 0,
          }}
        >
          <Typography
            sx={{ fontSize: "13px", fontFamily: "poppins", fontWeight: 400 }}
          >
            Show
          </Typography>
          <Select
         // defaultValue={5}
            size="small"
            value={rowsPerPage}
            onChange={handleRow}
            sx={{
              backgroundColor: "#fff",
              fontSize: "12px",
              height: "26px",
              minWidth: "15px",
              "&.MuiSelect.Select": {
                py: "2px",
                px: "6px",
              },
            }}
          >
            {[5, 10, 15, 21].map((n) => (
              <MenuItem key={n} value={n} sx={{ fontSize: "14px" }}>
                {n}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box > <Pagination
          count={total}
          onChange={handlePageChange}
          page={pages}
          size="small"
          sx={{
        
            "& .MuiPaginationItem-root": {
              color: "#006D90",
              fontSize: "12px",
              margin: "0px 2px"
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#006D90",
              color: "#fff",
            },
          }}
        /></Box>
       
      </Box>
    </Box>
  );
}
