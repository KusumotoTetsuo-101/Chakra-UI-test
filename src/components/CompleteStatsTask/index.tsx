import React from "react";
import { useRecoilValue } from "recoil";
import { CompleteTodoListStatsState } from "../../globalStates/selectors/CompleteTodoListStatsState";

const StatsTask: React.FC = () => {
  const totalNum = useRecoilValue(CompleteTodoListStatsState);
  return <div>完了したタスク数 : {totalNum}</div>;
};

export default StatsTask;
