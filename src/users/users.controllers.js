const allUsers = []
let id = 1

const findAllUsers = () => {
  return allUsers
}

const findUserByID = (id) => {
  const findedUser = allUsers.find((user) => user.id == id)
  return findedUser
}

const createNewUser= (obj) => {
  const newUser= {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday
  }
  allUsers.push(newUser)
  return newUser
}

const findRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * allUsers.length)
  return allUsers[randomIndex]
}

module.exports = {
  findAllUsers,
  findUserByID,
  createNewUser,
  findRandomUser
}