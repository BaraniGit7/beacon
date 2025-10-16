
import {
  Box,
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TableHead,
} from "@mui/material";

function BasicTable() {
  const borderColor = "rgba(27, 153, 192, 1)";
  const bgColor = "#ccf8ffff";
  const fam = "Arial";
  const wg = "600";
  const bradius = "2px";
  const borderStyle = `1px solid ${borderColor}`;

  const rows = [
    { id: 1, name: "IMC Ship Management PTE LTD", no: "23" },
    { id: 2, name: "Nittan Kisen kaisha Ltd", no: "4" },
    { id: 3, name: "NSK ship management Private Limated", no: "25" },
    { id: 4, name: "WideShine Management PTE limated", no: "165" },
  ];

  const ships = [
    { id: 1, name: "Nitta kissen Kaisha Ltd", dup: "38", mis: "0", cm: "0" },
    {
      id: 2,
      name: "Nsk Ship Management Private Limated",
      dup: "13",
      mis: "0",
      cm: "0",
    },
    { id: 3, name: "Wideshine Management PTE limated", dup: "0", mis: "0", cm: "0" },
    { id: 4, name: "CMS Demo Company", dup: "138", mis: "0", cm: "5" },
    { id: 5, name: "Mariner Skills Training", dup: "13", mis: "5", cm: "21" },
    { id: 6, name: "MMSL Japan Ltd", dup: "0", mis: "0", cm: "0" },
    { id: 7, name: "sandbox", dup: "0", mis: "7", cm: "15" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box   display= 'grid'>
        <Typography fontWeight="700"  textAlign="center" variant="h6"mb={2} color="primary.main"fontFamily="Arial">
Pending Certificate Approval
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: "14px", zIndex: 4 }}>
          <Table size="small">
            <TableBody sx={{ backgroundColor: bgColor }}>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {/* <TableCell sx={{ border: borderStyle, fontWeight: wg, fontFamily: fam, zIndex: 2, borderRadius: "14px"}}>{row.name}</TableCell> */}
                  <TableCell sx={{ border: borderStyle, fontWeight: wg }}>{row.no}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box  display= 'grid'>
        <Typography fontWeight="700"color="primary.main"textAlign="center"variant="h6"mb={2}gutterBottom>Duplicates and Mismatches </Typography>
        <TableContainer component={Paper} elevation={6} sx={{ borderRadius: bradius, zIndex:1000}}>
          <Table size="small" sx={{ backgroundColor: bgColor }}>
            <TableHead>
              <TableRow >
                <TableCell sx={{ border: borderStyle, fontWeight: wg }}>Company Name</TableCell>
                <TableCell sx={{ border: borderStyle, fontWeight: wg }}>Duplicate </TableCell>
                <TableCell sx={{ border: borderStyle, fontWeight: wg }}>ID Mismatch</TableCell>
                <TableCell sx={{ border: borderStyle, fontWeight: wg }}>Course Mismatch</TableCell>
              </TableRow>
            </TableHead>
            <TableBody> {ships.map((ship) => (
                <TableRow key={ship.id}>
                  <TableCell sx={{  border: borderStyle, fontWeight: wg }}>{ship.name} </TableCell>
                  <TableCell sx={{ border: borderStyle, fontWeight: wg }}> {ship.dup}</TableCell>
                  <TableCell sx={{ border: borderStyle, fontWeight: wg }}>{ship.mis} </TableCell>
                  <TableCell sx={{ border: borderStyle, fontWeight: wg }}>{ship.cm}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default BasicTable;

