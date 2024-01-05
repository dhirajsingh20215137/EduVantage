
import Appbar from "./Appbar"
import Signin from "./Signin"
import Signup from "./signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddCourse from "./AddCourse"
import Courses from "./Courses"
import Course from "./Course"
function App() {
  return (
    <>

      <Router>
        <Appbar></Appbar>
        <Routes>
            <Route path={"/course/:courseId"} element={<Course/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/addcourse" element={<AddCourse/>}/>
            <Route path="/login" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
            
        </Routes>
      </Router>

    </>
  )
}

export default App