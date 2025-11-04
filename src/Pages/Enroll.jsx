import {
  DirectionsBoat,
  Email,
  Person,
  Phone,
  Work,
} from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";

export default function EnrollDetails() {
  const details = [
    { icon: <Person />, label: "Name", value: "Ashwathy" },
    { icon: <Email />, label: "Email ID", value: "ash@gmail.com" },
    { icon: <Phone />, label: "Mobile Number", value: "9025343687" },
    {
      icon: <DirectionsBoat />,
      label: "Ship Name/Type",
      value: "Ms Training Ship1 \n (oil Tanker)",
    },
    { icon: <Work />, label: "Role", value: "Deck Rating" },
  ];
  return (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: "#ffff",
        mb: 1.5,
        overflow: "hidden",
        border: "1.5px solid #006D90",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "poppins", fontWeight: 700, color: "#006D90" ,fontSize:"16px"}}
      >
       Seafarer Enrollment Details
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {details.map((enroll) => (
          <Grid item xs={6} sm={4} md={3} key={enroll.label}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.3,
                //minWidth: 150,
              }}
            >
              <Box
                sx={{
                  color: "#006D90",
                  mt: 0.3,
                  flexShrink: 0,
                  "& svg": { fontSize: { xs: 18, sm: 20 } },
                }}
              >
                {enroll.icon} </Box>
             <Box> <Typography sx={{ fontfamily: "poppins", fontWeight: 600,fontSize:"13px" }}>
                {enroll.label}
              </Typography>
              <Typography sx={{fontFamily:"poppins",fontWeight:400,color:"#000",fontSize:"13px"}}>{enroll.value}</Typography>
             
            </Box></Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
