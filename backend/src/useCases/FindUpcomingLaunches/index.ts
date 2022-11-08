import { SpaceXLaunchesProvider } from '../../providers/launches/SpaceXLaunchesProvider'
import { FindUpcomingLaunchesController } from './FindUpcomingLaunchesController'
import { FindUpcomingLaunchesUseCase } from './FindUpcomingLaunchesUseCase'

const spaceXLaunchesProvider = new SpaceXLaunchesProvider()

const findUpcomingLaunchesUseCase = new FindUpcomingLaunchesUseCase(
  spaceXLaunchesProvider,
)

const findUpcomingLaunchesController = new FindUpcomingLaunchesController(
  findUpcomingLaunchesUseCase,
)

export { findUpcomingLaunchesController, findUpcomingLaunchesUseCase }
