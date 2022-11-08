import useLogic from "./useLogic";

export default function LatestLaunchView() {
  const { latestLaunch } = useLogic();

  return <>aaaaaaaaaaaa{latestLaunch?.name}</>;
}
