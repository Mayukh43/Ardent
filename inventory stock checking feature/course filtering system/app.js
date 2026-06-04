const course = require('./course');

console.log("All Courses:", course.courses);
console.log("Filtered (contains 'Java'):", course.filtercourses("Java"));