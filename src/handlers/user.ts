import prisma from '../db';
import { comparePasswords, createJWT, hashPassword } from '../modules/auth';

export const createNewUser = async (req, res, next) => {
  try {
    const hash = await hashPassword(req.body.password);
  
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hash,
      }
    })
  
    const token = createJWT(user)
    res.json({token})
  } catch (e) {
    // we have to check the error but for simplicity we are setting the type to input
    e.type = 'input'
    next(e)
  }
}

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  })

  const isValid = await comparePasswords(req.body.password, user.password)

  if (!isValid) {
    res.status(401)
    res.json({message: 'Nope'})
    return
  }

  const token = createJWT(user)
  res.json({token})
}