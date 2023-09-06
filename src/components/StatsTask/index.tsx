import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../globalStates/selectors/todoListStatsState";

const StatsTask: React.FC = () => {
  const totalNum = useRecoilValue(todoListStatsState);
  return <div>タスク数 : {totalNum}</div>;
};

export default StatsTask;
