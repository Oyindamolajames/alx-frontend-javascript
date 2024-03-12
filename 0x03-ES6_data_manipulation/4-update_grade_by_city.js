export default function updateStudentGradeByCity(arrObj, city, newGrades) {
  return arrObj
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.filter((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: matchingGrade.length > 0 ? matchingGrade[0].grade : 'N/A',
      };
    });
}
