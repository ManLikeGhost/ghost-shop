import bcrypt from "bcryptjs"

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true
  },
  {
    name: 'Ghost Self',
    email: 'ghost@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Edet Ekpo',
    email: 'edet@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users