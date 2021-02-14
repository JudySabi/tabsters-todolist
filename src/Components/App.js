import "../assets/css/style.scss";
import { useState } from "react";
import data from "../data.json";

// COMPONENTS
import Header from "./Header";
import Filters from "./Filters";
import ListTask from "./ListTask";
import AverageProgress from "./AverageProgress";
import Alphabetic from "./Alphabetic";

function App() {
  const [listTask, setListTask] = useState(data);
  const [filters, setFilters] = useState({
    status: {
      completed: "",
      inProgress: "",
      todo: "",
    },
    alpha: false,
  });

  return (
    <>
      <Header />
      <Alphabetic filters={filters} setFilters={setFilters} />
      <Filters
        listTask={listTask}
        setListTask={setListTask}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="container">
        <ListTask
          filters={filters}
          listTask={listTask}
          setListTask={setListTask}
        />
      </div>
      <AverageProgress data={data} />
    </>
  );
}

export default App;
