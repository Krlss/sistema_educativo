import { Router, Request, Response} from 'express'

import * as UserController from '../controllers/User'
import {CreateUserDTO, FilterUsertsDTO, UpdateUserDTO} from '../dto/User.dto'

const UserRouter = Router()

UserRouter.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const result = await UserController.getById(id)
  return res.status(200).send(result)
})
UserRouter.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const payload:UpdateUserDTO = req.body

  const result = await UserController.update(id, payload)
  return res.status(201).send(result)
})
UserRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const result = await UserController.deleteById(id)
  return res.status(204).send({
      success: result
  })
})

UserRouter.post('/', async (req: Request, res: Response) => {
  // create User
  const payload:CreateUserDTO = req.body
  const result = await UserController.create(payload)
  return res.status(200).send(result)
})

UserRouter.get('/', async (req: Request, res: Response) => {
  const filters:FilterUsertsDTO = req.query
  console.log(filters);
  const results = await UserController.getAll(filters)
  console.log("resultados", results)
  return res.status(200).send(results)
})
export default UserRouter;