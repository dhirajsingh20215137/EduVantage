
import { useState } from 'react';
import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'


function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}> 
            <Typography variant={"h6"}>
                welcome to coursera
            </Typography>
                
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Card variant='outlined' style={{
                    width: 400,
                    padding: 20
                }}>

                    <TextField
                       
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        fullWidth={true}
                        label="Email"
                        variant="outlined" />
                    <br /><br />
                    <TextField
                        
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password" />
                    <br /><br></br>
                    <Button variant='contained'
                        onClick={() => {
                                   function callback2(data)
                                   {    
                                    localStorage.setItem("token",data.token);
                
                                        window.location="/";
                                   }
                                   function callback1(resp)
                                   {
                                       resp.json().then(callback2)
                                   }
                            fetch('http://localhost:3000/admin/signup',
                                {
                                    method: "POST",
                                    body: JSON.stringify({
                                        username: email,
                                        password: password
                                    }),
                                    headers: {
                                        "content-type": "application/json"
                                    }
                                }).then(callback1)
                        }}
                    >Sign up</Button>

                </Card>
            </div>
        </div>)
}

export default Signup