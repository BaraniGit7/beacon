  <Dialog open={openAdd} onClose={closeDialogs} fullWidth maxWidth="sm"> <DialogTitle>Add Seafarer</DialogTitle>
  <Divider />
  <DialogContent sx={{  px: 2, py: 2 }}>
    <Grid container spacing={2}>
      <Grid size={6} item xs={12} sm={6} md={6} >
        <Typography >Name</Typography>
        <TextField fullWidth placeholder="Enter your Seafarer Name" id="add-name" />
      </Grid>
       <Grid  size={6}item xs={12} sm={6} md={6}> <Typography >Mobile Number</Typography>
        <TextField fullWidth pl="Phone" id="add-phone" />
      </Grid>
      <Grid size={6} item xs={12} sm={6} md={6}> <Typography >Email</Typography>
        <TextField fullWidth label="Email" id="add-email" />
      </Grid>
      <Grid size={6} item xs={12} sm={6} md={6}> <Typography >Id</Typography>
        <TextField fullWidth label="Id" id="add-Id" />
      </Grid>
      <Grid  size={6}item xs={12} sm={6} md={6}> <Typography >Passport</Typography>
        <TextField fullWidth label="Passport" id="add-passport" />
      </Grid>
      <Grid size={6} item xs={12} sm={6} md={6}> <Typography >Location</Typography>
        <TextField fullWidth label="Location" id="add-location" />
      </Grid>
     
      <Grid size={6}item xs={12} sm={6} md={6}> <Typography >Role</Typography>
        <TextField fullWidth label="Role" id="add-role" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}> <Typography >Ship Name</Typography>
        <TextField fullWidth label="Ship Name" id="add-ship" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}> <Typography >ShipName1</Typography>
        <TextField fullWidth label="Ship Name1" id="add-ship1" />
      </Grid>
    </Grid>
  </DialogContent>
  <DialogActions>
    <Button onClick={closeDialogs}>Cancel</Button>
    <Button
      variant="contained"
      onClick={() => {
        const newSeafarer = {
          sno: (seafarers.length + 1).toString(),
          name: document.getElementById("add-name").value,
          email: document.getElementById("add-email").value,
          phone: document.getElementById("add-phone").value,
          role: document.getElementById("add-role").value,
          ship: document.getElementById("add-ship").value,
          ship1: document.getElementById("add-ship1").value,
          Id: document.getElementById("add-Id").value,
          passport: document.getElementById("add-passport").value,
          location: document.getElementById("add-location").value,
        };
        addSeafarer(newSeafarer);
      }}
    >
      Add
    </Button>
  </DialogActions>
</Dialog>
