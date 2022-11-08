import { ILaunchesProvider } from '../../providers/launches/ILaunchesProvider'

export class FindPastLaunchesUseCase {
  private launchesProvider: ILaunchesProvider

  constructor(launchesProvider: ILaunchesProvider) {
    this.launchesProvider = launchesProvider
  }

  async execute() {
    const pastLaunches = await this.launchesProvider.findPast()

    if (!pastLaunches) {
      throw new Error('Past launches not found.')
    }

    return pastLaunches
  }
}
