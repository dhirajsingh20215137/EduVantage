import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Appbar() {
    const navigate = useNavigate();
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
                    }}>Sign in</Button>
            </div>
        </div>
    )
}

export default Appbar