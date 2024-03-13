export default function getStudentIdsSum(arrObj) {
  return arrObj.reduce((sum, student) => sum + student.id, 0);
}
