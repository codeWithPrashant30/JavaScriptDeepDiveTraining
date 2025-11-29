export const StudentList = ({ students }) => {
  return (
    <ul style={{listStyle:"none"}}>
      {students.map((student, index) => {
        return (
          <li style={{"border":"1px solid black"}} key={index}>
            id: {student.id} <br />
            name: {student.name} <br />
            age: {student.age}
          </li>
        );
      })}
    </ul>
  );
};
