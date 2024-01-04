

import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Appbar from './Appbar';

function Signup() {
    return (<>
    <Appbar></Appbar>
        
            <Card variant='outlined' style={{
                width:400,
                padding:20
            }}>
                
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                <br /><br/>
                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type="password"/>
                <br /><br></br>
                <Button variant='contained'>Sign up</Button>
            
        </Card>

    </>)
}

export default Signup