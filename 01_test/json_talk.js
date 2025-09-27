const course={
    courseName:"javascript",
    courseInstructor:"hitesh",
    coursePrice:"499"
}

// console.log(course.courseInstructor);

const {courseInstructor}=course
console.log(courseInstructor);

const {courseInstructor: courseTeacher}=course    //object destructuring
console.log(courseTeacher);



