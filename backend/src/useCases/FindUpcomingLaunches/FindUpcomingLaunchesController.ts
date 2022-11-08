import { Request, Response } from 'express'
import { FindUpcomingLaunchesUseCase } from './FindUpcomingLaunchesUseCase'

export class FindUpcomingLaunchesController {
  private findUpcomingLaunchesUseCase

  constructor(findUpcomingLaunchesUseCase: FindUpcomingLaunchesUseCase) {
    this.findUpcomingLaunchesUseCase = findUpcomingLaunchesUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const upcomingLaunches = await this.findUpcomingLaunchesUseCase.execute()

      return response.status(200).send(upcomingLaunches)
    } catch {
      return response.status(404).json({
        message: 'Upcoming launches not found.',
      })
    }
  }
}
