import { TextField, Card, Button } from "@mui/material"
import { useState } from "react"

function AddCourse() {
     const [title,setTitle]=useState("")
     const [description,setDescription]=useState()
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"


        }}>
            <Card style={{
                marginTop:50,
                width: 500,
                padding:20
            }}>
                <TextField


                    fullWidth={true}
                    label="title"
                    variant="outlined" />
                <br />
                
                <TextField


                    fullWidth={true}
                    label="description"
                    variant="outlined" />
                <br />
                <TextField


                    fullWidth={true}
                    label="Image-Link"
                    variant="outlined" />
                <br />
                <br />
                <Button> Add course</Button>
            </Card>

        </div>
    )
}

export default AddCourse