import { Card, Typography,Button } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function Courses ()
{  
    const [courses,setCourses]= useState([]);

    useEffect(()=>{

        
        function callback2(data)
        {
             console.log(data)
             setCourses(data.courses);
        }

        function callback1(resp)
        {
            resp.json().then(callback2);
        }
      
     fetch("http://localhost:3000/admin/courses/",{
         method:"GET",
        headers: {
                "Authorization":"Bearer " + localStorage.getItem("token")
                }

     }).then(callback1);


    },[])

    if(!courses.length)
        return <>loading...</>


    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
        }}>
            {/* <h1>Courses</h1> */}
          {courses.map(course => {
             return <Course  course={course} />
          })}
        </div>
      );s


}

   function Course(props)
{   
    const navigate= useNavigate();
      return (
       <Card  style={{
             margin:10,
             width:300,
             minHeight:200
       }}>
           <Typography textAlign={"center"} variant="h6">{props.course.title}</Typography>
           <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
           <img src={props.course.imageLink} style={{width:200}}></img>
           <div  style={{display:"flex",justifyContent:"center",marginTop:20}}>
              <Button variant="contained" size="large"
                 onClick={()=>{
                    navigate("/course/"+props.course._id);
                 }}
                 >Edit</Button>

           </div>
       </Card>
      )
}

export default Courses