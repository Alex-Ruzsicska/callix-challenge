import { Router } from 'express'

import { findNextLaunchController } from './useCases/FindNextLaunch'
import { findLatestLaunchController } from './useCases/FindLatestLaunch'
import { findPastLaunchesController } from './useCases/FindPastLaunches'
import { findUpcomingLaunchesController } from './useCases/FindUpcomingLaunches'

const router = Router()

router.get('/latest', (request, response) => {
  return findLatestLaunchController.handle(request, response)
})

router.get('/next', (request, response) => {
  return findNextLaunchController.handle(request, response)
})

router.get('/upcoming', (request, response) => {
  return findUpcomingLaunchesController.handle(request, response)
})

router.get('/past', (request, response) => {
  return findPastLaunchesController.handle(request, response)
})

export { router }
