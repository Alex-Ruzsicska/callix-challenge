import { SpaceXLaunchesProvider } from '../../providers/launches/SpaceXLaunchesProvider'
import { FindLatestLaunchController } from './FindLatestLaunchController'
import { FindLatestLaunchUseCase } from './FindLatestLaunchUseCase'

const spaceXLaunchesProvider = new SpaceXLaunchesProvider()

const findLatestLaunchUseCase = new FindLatestLaunchUseCase(
  spaceXLaunchesProvider,
)

const findLatestLaunchController = new FindLatestLaunchController(
  findLatestLaunchUseCase,
)

export { findLatestLaunchController, findLatestLaunchUseCase }
