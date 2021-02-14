import Task from "./Task";

const ListTask = ({ listTask, filters, setListTask }) => {
  const { completed, inProgress, todo } = filters.status;
  const { alpha } = filters;
  console.log(listTask);
  return (
    <div class="list-task row row-cols-1 row-cols-md-3 g-4">
      {/* si le switch est true alors il trie le tableau */}
      {alpha && listTask.sort((a, b) => (a.name > b.name ? 1 : -1))}
      {/* map les tasks et retourne status est true */}
      {listTask.map((elem) => {
        return (
          ((completed === "Completed") & (elem.status === "Completed") && (
            <div key={elem.id}>
              <Task data={elem} />
            </div>
          )) ||
          ((inProgress === "In Progress") & (elem.status === "In Progress") && (
            <div key={elem.id}>
              <Task data={elem} />
            </div>
          )) ||
          ((todo === "To Do") & (elem.status === "To Do") && (
            <div key={elem.id}>
              <Task data={elem} />
            </div>
          )) ||
          // Si tout les champs des status sont vides
          ((completed === "") & (inProgress === "") & (todo === "") && (
            <div key={elem.id}>
              <Task data={elem} />
            </div>
          ))
        );
      })}
    </div>
  );
};
export default ListTask;

//  {listTask.map((elem) => {
//         newAlpha.push(elem.name);
//         newAlpha.sort();
//         setListTask(newAlpha);
//         return listTask;
//       })}
