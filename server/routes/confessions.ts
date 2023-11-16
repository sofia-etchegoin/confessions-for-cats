import { Router } from 'express'

import * as db from '../db/confessions.ts'

const router = Router()

//Get v1 confessions

router.get('/', async (req, res) => {
  try {
    const confessions = await db.getAllConfessions()
    res.json(confessions)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Rats! Somthing went wrong!' })
  }
})

router.patch('/', async (req, res) => {
  try {
    const confession = await db.editConfession(req.body.id, req.body.content)
    res.json(confession)
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: 'Rats! Somthing went wrong!' })
  }
})

export default router
