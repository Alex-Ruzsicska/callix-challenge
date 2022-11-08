import { Request, Response } from 'express'
import { FindPastLaunchesUseCase } from './FindPastLaunchesUseCase'

export class FindPastLaunchesController {
  private findPastLaunchesUseCase

  constructor(findPastLaunchesUseCase: FindPastLaunchesUseCase) {
    this.findPastLaunchesUseCase = findPastLaunchesUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const pastLaunches = await this.findPastLaunchesUseCase.execute()

      return response.status(200).send(pastLaunches)
    } catch {
      return response.status(404).json({
        message: 'Past launches not found.',
      })
    }
  }
}
