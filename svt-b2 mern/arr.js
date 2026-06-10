let courses = ["Java", "HTML", "CSS"];
function addcourse(course) {
    courses.push(course);
    return courses;
}

function searchcourse(course){
    return courses.includes(course);
}
module.exports = {addcourse,searchcourse};

