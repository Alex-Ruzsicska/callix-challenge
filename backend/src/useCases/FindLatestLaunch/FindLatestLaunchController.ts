import { Request, Response } from 'express'
import { FindLatestLaunchUseCase } from './FindLatestLaunchUseCase'

export class FindLatestLaunchController {
  private findLatestLaunchUseCase

  constructor(findLatestLaunchUseCase: FindLatestLaunchUseCase) {
    this.findLatestLaunchUseCase = findLatestLaunchUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const latestLaunch = await this.findLatestLaunchUseCase.execute()

      return response.status(200).send(latestLaunch)
    } catch {
      return response.status(404).json({
        message: 'Latest launch not found.',
      })
    }
  }
}
