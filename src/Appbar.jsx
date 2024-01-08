import { Button, Typography } from "@mui/material"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

function Appbar() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {


        function callback2(data) {
            if (data.username) {
                setUserEmail(data.username)
            }
            console.log(data);
        }
        function callback1(resp) {
            resp.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, [])

    if (userEmail) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4
            }}>
                <div><Typography>Coursera</Typography></div>
                <div style={{ display: "flex" }}>
                    <div >
                        <Button
                            variant="content"
                            onClick={() => {
                                 navigate('/courses')
                            }}>Courses
                        </Button>
                    </div>
                    <div >
                        <Button 
                            variant="content"
                            onClick={() => {
                                 navigate('/addcourse')
                            }}>Add Courses
                        </Button>
                    </div>
                    <div style={{ marginRight: 10 }}>
                        <Button
                            variant="content"
                            onClick={() => {
                                localStorage.setItem("token", null)
                                window.location = "/";
                            }}>Logout
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4
        }}>
            <div><Typography>Coursera</Typography></div>
            <div>
                <Button variant="content"
                    onClick={() => {
                        navigate('/signup')
                    }}>Sign up</Button>
                <Button variant="content"
                    onClick={() => {
                        navigate('/login')
                    }}>sign in</Button>
            </div>
        </div>
    )
}

export default Appbar