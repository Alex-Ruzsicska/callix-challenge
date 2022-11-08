import { ILaunchesProvider } from '../../providers/launches/ILaunchesProvider'

export class FindNextLaunchUseCase {
  private launchesProvider: ILaunchesProvider

  constructor(launchesProvider: ILaunchesProvider) {
    this.launchesProvider = launchesProvider
  }

  async execute() {
    const nextLaunch = await this.launchesProvider.findNext()

    if (!nextLaunch) {
      throw new Error('Next launch not found.')
    }

    return nextLaunch
  }
}
