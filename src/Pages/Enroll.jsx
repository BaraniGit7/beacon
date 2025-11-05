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
    p: 2,
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
    spacing={1}
    sx={{
      p: 1,
      display: "flex",
   
      justifyContent:"space-between"
    }}
  >
    {details.map((enroll) => (
      <Grid
        item
        xs={12}
        sm={6} 
        key={enroll.label}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1.5,
            p: 0.5,
            borderRadius: 1,
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
              "& svg": {
                fontSize: { xs: 18, sm: 20 },
              },
            }}
          >
            {enroll.icon}
          </Box>

          {/* Text Content */}
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "13px",
                color: "#333",
                mb: 0.3,
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
                  fontSize: "13px",
                  lineHeight: "20px",
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
