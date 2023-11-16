import { Router } from 'express'

import * as db from '../db/confessions.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const confessions = await db.getAllConfessions()

    res.json({ confessions: confessions.map((confession) => confession.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
