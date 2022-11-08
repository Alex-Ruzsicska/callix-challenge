import { SpaceXLaunchesProvider } from '../../providers/launches/SpaceXLaunchesProvider'
import { FindNextLaunchController } from './FindNextLaunchController'
import { FindNextLaunchUseCase } from './FindNextLaunchUseCase'

const spaceXLaunchesProvider = new SpaceXLaunchesProvider()

const findNextLaunchUseCase = new FindNextLaunchUseCase(spaceXLaunchesProvider)

const findNextLaunchController = new FindNextLaunchController(
  findNextLaunchUseCase,
)

export { findNextLaunchController, findNextLaunchUseCase }
