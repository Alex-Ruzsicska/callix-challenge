import { Launch } from '../../entities/Launch'

export interface ILaunchesProvider {
  findNext(): Promise<Launch>
  findUpcoming(): Promise<Launch[]>
  findLatest(): Promise<Launch>
  findPast(): Promise<Launch[]>
}
