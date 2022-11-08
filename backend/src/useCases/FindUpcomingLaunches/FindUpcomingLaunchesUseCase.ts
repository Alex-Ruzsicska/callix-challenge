import { ILaunchesProvider } from '../../providers/launches/ILaunchesProvider'

export class FindUpcomingLaunchesUseCase {
  private launchesProvider: ILaunchesProvider

  constructor(launchesProvider: ILaunchesProvider) {
    this.launchesProvider = launchesProvider
  }

  async execute() {
    const upcomingLaunches = await this.launchesProvider.findUpcoming()

    if (!upcomingLaunches) {
      throw new Error('Upcoming launches not found.')
    }

    return upcomingLaunches
  }
}
