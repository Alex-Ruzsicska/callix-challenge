import { useState } from "react"
import { Launch } from "../../types/Launch"
import FindLatestLaunchUseCase from "../../useCases/FindLatestLaunch"

const useLogic = () => {
    const findLatestLaunch = new FindLatestLaunchUseCase()
    const [latestLaunch, setLatestLaunch] = useState<Launch | undefined>()


    findLatestLaunch.execute().then((launch)=>{
        setLatestLaunch(launch)
    })

    return {
        latestLaunch
    }
}

export default useLogic