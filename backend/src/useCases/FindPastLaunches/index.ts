import { SpaceXLaunchesProvider } from '../../providers/launches/SpaceXLaunchesProvider'
import { FindPastLaunchesController } from './FindPastLaunchesController'
import { FindPastLaunchesUseCase } from './FindPastLaunchesUseCase'

const spaceXLaunchesProvider = new SpaceXLaunchesProvider()

const findPastLaunchesUseCase = new FindPastLaunchesUseCase(
  spaceXLaunchesProvider,
)

const findPastLaunchesController = new FindPastLaunchesController(
  findPastLaunchesUseCase,
)

export { findPastLaunchesController, findPastLaunchesUseCase }
