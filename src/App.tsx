import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import CompleteListTask from "./components/CompleteListTask";
import StatsTask from "./components/StatsTask";
import CompleteStatsTask from "./components/CompleteStatsTask";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box maxW={"5xl"} py={6} px={4} mx={"auto"}>
      <Box>
        <AddTask />
      </Box>
      <Box mt={10} px={2}>
        <StatsTask />
        <ListTask />
      </Box>
      <Box mt={10} px={2}>
        <CompleteStatsTask />
        <CompleteListTask />
      </Box>
    </Box>
  );
}

export default App;
