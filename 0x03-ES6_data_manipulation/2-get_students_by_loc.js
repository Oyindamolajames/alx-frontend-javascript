export default function getStudentsByLocation(arrObj, city) {
  return arrObj.filter((student) => student.location === city);
}
