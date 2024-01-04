import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

function Signin() {
    return (
        <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                Welcome back! Sign in below
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Card variant='outlined' style={{
                    width: 400,
                    padding: 20
                }}>

                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    <br /><br />
                    <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type="password" />
                    <br /><br></br>
                    <Button variant='contained'>Sign in</Button>

                </Card>
            </div>
        </div>)
}

export default Signin