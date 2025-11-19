import { Close } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";


export default function YesDialog(){
    // const [open,setOpen]=useState(false);
    // const[result,setResult]=useState("yes");
     
    // const handleOpen=()=>setOpen(true);
    // const handleClose=()=>setOpen(false);
    // const handleYes=()=>{setResult("yes");
    //     setOpen(false);
    // }
    // const handleNo=()=>{setResult("no");
    //     setOpen(false);
    // }
    return(
        <Button variant="outlined" sx={{color:"#259800", backgroundColor:"#f0FEED" ,border:"1px solid #259800",borderRadius:"8px",fontSize:"12px",fontFamily:"poppins,sans-serif",fontWeight:600}}>Yes</Button>
         
         
    )
}