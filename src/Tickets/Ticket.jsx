import { Add, AirplaneTicket, AirplaneTicketRounded, Search } from "@mui/icons-material";
import { Box, Button, InputBase, Paper, Typography } from "@mui/material";


import TableTicket from "./TableTicket";
import AddDialog from "./AddDialog";

export default function Ticket(){
    return(
     <Box sx={{ backgroundColor: "#F4FCFF", width: "100%", p: 1 }}>

         <Typography
  sx={{
    display: "flex",
    alignItems: "center",
    gap: "6px", 
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "Poppins",
   
  }}
>
  <AirplaneTicket sx={{ fontSize: "18px", color: "#259BC1" }} />
  Ticket
</Typography>

            <Box 
            sx={{pt:0.5,display:"flex",
                justifyContent:"space-between",
                alignItems:"center",  
                gap:1.9,mb:1
            }}    >
                <Paper component="form"
                elevation={0}
                sx={{
                    p:"1px",
                    display:"flex",
                    flex:"1 1 auto",
                    maxWidth:"50%",
                    height:"30px",
                       mt: "6px",
                    alignItems:"center",
                    px:1,
                    borderRadius:"5px",
                    gap:"8px",fontFamily:"poppins",
                    border:"1px solid #a9a9a9ff"
                }}
                >
                    <Search sx={{fontSize:"16px"}}/>
                    <InputBase
                    placeholder="search" fullWidth sx={{fontSize:"15px",fontFamily:'poppins'}}/>
                </Paper>
               <AddDialog/>
            </Box>
            <TableTicket/>
        </Box>
    )
}