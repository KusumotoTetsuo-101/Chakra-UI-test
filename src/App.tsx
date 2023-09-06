import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { Box } from "@chakra-ui/react";
import StatsTask from "./components/StatsTask";

function App() {
  return (
    <Box maxW={"5xl"} py={6} px={4}>
      <Box>
        <AddTask />
      </Box>
      <Box mt={4}>
        <StatsTask />
      </Box>
      <Box mt={4}>
        <ListTask />
      </Box>
    </Box>
  );
}

export default App;
