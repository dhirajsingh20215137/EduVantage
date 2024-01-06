import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Card, Typography, Button, TextField, Grid } from "@mui/material";

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
            <Grid container>
                <Grid item lg={8} md={12} sm={12}>
                    <UpdateCard course={course} setCourses={setCourses} courses={courses} />
                </Grid>
                <Grid item lg={4} md={12} sm={12}>
                    <CourseCard course={course} />
                </Grid>


            </Grid>
        </div>

    )

    function UpdateCard(props) {
        const course = props.course;
        const [title, setTitle] = useState(course.title)
        const [description, setDescription] = useState(course.description)
        const [image, setImage] = useState(course.imageLink)

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
                    value={title}
                    fullWidth={true}
                    label="title"
                    variant="outlined" />
                <br />

                <TextField
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    value={description}
                    fullWidth={true}
                    label="description"
                    variant="outlined" />
                <br />
                <TextField
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                    value={image}
                    fullWidth={true}
                    label="Image-link"
                    variant="outlined" />
                <Button variant="contained" size="large"
                    onClick={() => {

                        function callback2(data) {


                            let updatedCourses = [];
                            for (let i = 0; i < props.courses.length; i++) {

                                if (course._id == props.courses[i]._id) {

                                    updatedCourses.push({
                                        _id: course._id,
                                        title: title,
                                        description: description,
                                        imageLink: image
                                    })
                                }
                                else
                                    updatedCourses.push(props.courses[i])
                            }

                            props.setCourses(updatedCourses)

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

        return <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <Card style={{
                margin: 10,
                width: 300,
                minHeight: 200
            }}>
                <Typography textAlign={"center"} variant="h6">{course.title}</Typography>
                <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
                <img src={course.imageLink} style={{ width: 200 }}></img>
            </Card>
        </div>
    }
}

export default Course