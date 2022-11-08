import { Launch } from '../../entities/Launch'
import { ILaunchesProvider } from './ILaunchesProvider'

import axios from 'axios'

import SPACE_X_API_BASE_URL from '../../common/spaceXApiBaseUrl'

export class SpaceXLaunchesProvider implements ILaunchesProvider {
  private launchesApiUrl = `${SPACE_X_API_BASE_URL}launches/`

  private normalizeLaunch(data: any) {
    const launch = new Launch({
      id: data?.id,
      date: data?.date_utc,
      name: data?.name,
      imageUrl: data?.links?.patch?.small,
      webcastUrl: data?.links?.webcast,
    })

    const isValidLaunchObject = Launch.validator(launch)

    if (!isValidLaunchObject) {
      throw new Error('Not valid launch object.')
    }

    return launch
  }

  async findLatest(): Promise<Launch> {
    const url = this.launchesApiUrl + 'latest'

    const response = await axios.get(url)
    const data = response.data
    const latestLaunch = this.normalizeLaunch(data)

    return latestLaunch
  }

  async findNext(): Promise<Launch> {
    const url = this.launchesApiUrl + 'next'

    const response = await axios.get(url)
    const data = response.data

    const nextLaunch = this.normalizeLaunch(data)

    return nextLaunch
  }

  async findUpcoming(): Promise<Launch[]> {
    const url = this.launchesApiUrl + 'upcoming'

    const response = await axios.get(url)
    const data = response.data

    const upcomingLaunches = []

    for (const item of data) {
      const launch = this.normalizeLaunch(item)

      upcomingLaunches.push(launch)
    }

    return upcomingLaunches
  }

  async findPast(): Promise<Launch[]> {
    const url = this.launchesApiUrl + 'past'

    const response = await axios.get(url)
    const data = response.data

    const pastLaunches = []

    for (const item of data) {
      const launch = this.normalizeLaunch(item)

      pastLaunches.push(launch)
    }

    return pastLaunches
  }
}
