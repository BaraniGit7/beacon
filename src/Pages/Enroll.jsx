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
      value: "Ms Training Ship1 (Oil Tanker)",
    },
    { icon: <Work />, label: "Role", value: "Deck Rating" },
  ];

  return (
 <Paper
  elevation={4}
  sx={{
    p: 1.2,
    borderRadius: 2,
    backgroundColor: "#fff",
    mb: 1.5,
    border: "1px solid #006D90",
  }}
>
  <Typography
    variant="h6"
    sx={{
      px: 1.5,
      fontFamily: "Poppins",
      fontWeight: 700,
      color: "#006D90",
      fontSize: "16px",
      mb: 1,
    }}
  >
    Seafarer Enrollment Details
  </Typography>

 <Grid
  container
  spacing={1.5}
  sx={{
    p: { xs: 0.5, sm: 1.5},
      display: "flex",
        justifyContent:"space-between",
                  alignItems: "center",
  }}
>
  {details.map((enroll) => (
    <Grid
      item
      xs={12}
      sm={6}
    
      key={enroll.label}
      sx={{
        display: "flex",
        justifyContent:"space-between",
                  alignItems: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          
          alignItems: "flex-start",
          gap: 1,
          p: { xs: 0.5, sm: 1 },
        //  borderRadius: 1,
          flex: 1, // make it stretch evenly
          backgroundColor: "#fff",
          transition: "background-color 0.2s ease",
          "&:hover": {
            backgroundColor: "#f5fafa",
          },
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            color: "#006D90",
            mt: 0.3,
            flexShrink: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            "& svg": {
              fontSize: { xs: 16, sm: 18 },
            },
          }}
        >
          {enroll.icon}
        </Box>

        {/* Text */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: { xs: "12px", sm: "13px" },
              color: "#333",
              mb: 0.3,
              lineHeight: 1.4,
            }}
          >
            {enroll.label}
          </Typography>

          {enroll.value.split(/\n|(?=\()/).map((line, i) => (
            <Typography
              key={i}
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "#000",
                fontSize: { xs: "11px", sm: "13px" },
                lineHeight: 1.5,
              }}
            >
              {line.trim()}
            </Typography>
          ))}
        </Box>
      </Box>
    </Grid>
  ))}
</Grid>

</Paper>

  );
}
