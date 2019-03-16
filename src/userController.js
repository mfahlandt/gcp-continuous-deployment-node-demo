const users = [
  {
    id: 1,
    name: 'Jim Doe',
    age: 22,
  },
  {
    id: 2,
    name: 'John Doe',
    age: 26,
  },
  {
    id: 3,
    name: 'Janet Dane',
    age: 29,
  },
];

exports.getAllUsers = getAllUsers;
exports.getSingleUser = getSingleUser;

function getAllUsers(req, res) {
  return res.status(200).json({
    users,
    message: "All the students",
  });
}
// Get a single student
function getSingleUser(req, res) {
  const findStudent = users.find(users => users.id === parseInt(req.params.id, 10));
  if (findStudent) {
    return res.status(200).json({
      student: findStudent,
      message: "A single user record",
    });
  }
  return res.status(404).json({
    message: "user record not found",
  });
}