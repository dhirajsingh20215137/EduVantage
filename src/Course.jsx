import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Card, Typography,Button,TextField } from "@mui/material";

function Course() {

    let { courseId } = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {


        function callback2(data) {
            console.log(data);
            setCourses(data.courses);
        }

        function callback1(resp) {
            resp.json().then(callback2);
        }

        fetch("http://localhost:3000/admin/courses/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }

        }).then(callback1);


    }, [])

    let course = null;
    for (let i = 0; i < courses.length; i++) {
        if (courses[i]._id == courseId)
            course = courses[i]
    }

    if (!course) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    return (
        <div>
            <CourseCard course={course} />
            <UpdateCard course={course}/>
        </div>

    )

    function UpdateCard(props) {
        const [title,setTitle]=useState("")
        const [description,setDescription]=useState("")
        const [image,setImage] =useState("")
        const course=props.course;
        return <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <Card style={{
                marginTop: 50,
                width: 500,
                padding: 20
            }}>
                <Typography>Update Course details</Typography>
                <TextField
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}

                    fullWidth={true}
                    label="title"
                    variant="outlined" />
                <br />

                <TextField
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}

                    fullWidth={true}
                    label="description"
                    variant="outlined" />
                <br />
                <TextField
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}

                    fullWidth={true}
                    label="Image-link"
                    variant="outlined" />
                <Button
                    onClick={() => {

                        function callback2(data) {
                            alert("course updated!!");
                        }

                        function callback1(resp) {
                            resp.json().then(callback2);
                        }

                        fetch("http://localhost:3000/admin/courses/" + course._id, {
                            method: "PUT",
                            body: JSON.stringify({
                                title: title,
                                description: description,
                                imageLink: image,
                                published: "true"
                            }),
                            headers: {
                                "Content-type": "application/json",
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        }).then(callback1)
                    }}


                > Update course</Button>
            </Card>

        </div>
    }

    function CourseCard(props) {
        const course = props.course;

        return <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200
        }}>
            <Typography textAlign={"center"} variant="h6">{course.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
            <img src={course.imageLink} style={{ width: 200 }}></img>
        </Card>
    }
}

export default Course