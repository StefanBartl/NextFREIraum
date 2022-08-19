import { createUser } from '../../lib/user';

export default async function signup(req, res) {
  try {
    console.log('Try to create user: ', req.body);
    await createUser(req.body)
    res.status(200).send({ done: true })
  } catch (error) {
    console.log('Create user error: ', req.body);
    console.error(error)
    res.status(500).end(error.message)
  }
}