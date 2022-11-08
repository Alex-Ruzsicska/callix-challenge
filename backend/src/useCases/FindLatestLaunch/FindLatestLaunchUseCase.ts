import { ILaunchesProvider } from '../../providers/launches/ILaunchesProvider'

export class FindLatestLaunchUseCase {
  private launchesProvider: ILaunchesProvider

  constructor(launchesProvider: ILaunchesProvider) {
    this.launchesProvider = launchesProvider
  }

  async execute() {
    const latestLaunch = await this.launchesProvider.findLatest()

    if (!latestLaunch) {
      throw new Error('Latest launch not found.')
    }

    return latestLaunch
  }
}
