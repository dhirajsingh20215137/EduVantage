import { Button, Typography } from "@mui/material"

function Appbar()
{
    return (
    <div style={{
        display:"flex",
        justifyContent:"space-between"
    }}>
       <div><Typography>Coursera</Typography></div> 
       <div>
       <Button variant="content">Sign up</Button>
       <Button variant="content">Sign in</Button>
       </div>
    </div>
    )
}

export default Appbar