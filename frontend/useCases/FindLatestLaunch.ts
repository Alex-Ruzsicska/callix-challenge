import spaceXApi from "../services/spaceXApi";
import normalizeLaunch, { Launch } from "../types/Launch";

export default class FindLatestLaunchUseCase {

    async execute() : Promise<Launch | undefined> {
        const response = await spaceXApi.get('latest');

        const latestLaunch = normalizeLaunch(response.data)
        return latestLaunch
    }
}