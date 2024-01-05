import { TextField, Card, Button } from "@mui/material"
import { useState } from "react"

function AddCourse() {
     const [title,setTitle]=useState("")
     const [description,setDescription]=useState("")
     const [image,setImage] =useState("")
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
                   onChange={(e)=>{
                       setTitle(e.target.value)
                   }}

                    fullWidth={true}
                    label="title"
                    variant="outlined" />
                <br />
                
                <TextField
                     onChange={(e)=>{
                        setDescription(e.target.value)
                    }}

                    fullWidth={true}
                    label="description"
                    variant="outlined" />
                <br />
                <TextField
                   onChange={(e)=>{
                       setImage(e.target.value)
                   }}

                    fullWidth={true}
                    label="Image-link"
                    variant="outlined" />
                <Button
                 onClick={()=>{
                  
                    function callback2(data)
                    {
                        alert("course added!!");
                    }

                   function callback1(resp)
                   {
                       resp.json().then(callback2);
                   }

                    fetch("http://localhost:3000/admin/courses/",{
                        method: "POST",
                        body: JSON.stringify({
                            title:title,
                            description:description,
                            imageLink:image,
                            published:"true"
                        }),
                        headers: {
                            "Content-type":"application/json",
                            "Authorization":"Bearer " + localStorage.getItem("token")
                        }
                    }).then(callback1)
                 }}
                 
                 
                 > Add course</Button>
            </Card>

        </div>
    )
}

export default AddCourse