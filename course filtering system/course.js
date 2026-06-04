let courses = ["Python", "Java", "Js", "React", "Node",];

function filtercourses(keyword) {
    return courses.filter(course => course.includes(keyword));
}

module.exports = { courses, filtercourses };