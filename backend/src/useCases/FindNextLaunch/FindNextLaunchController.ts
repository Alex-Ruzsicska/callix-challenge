import { Request, Response } from 'express'
import { FindNextLaunchUseCase } from './FindNextLaunchUseCase'

export class FindNextLaunchController {
  private findNextLaunchUseCase

  constructor(findNextLaunchUseCase: FindNextLaunchUseCase) {
    this.findNextLaunchUseCase = findNextLaunchUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const nextLaunch = await this.findNextLaunchUseCase.execute()

      return response.status(200).send(nextLaunch)
    } catch {
      return response.status(404).json({
        message: 'Next launch not found.',
      })
    }
  }
}
