const Task = ({ data }) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p
              className="card-text"
              style={{ color: data.status === "Completed" && "#0fb900" }}
            >
              {data.status}
            </p>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              // a régler : pouvoir mettre le pourcentage à la fin du style
              style={{
                width: data.progress + "%",
                backgroundColor: data.progress === 100 && "#0fb900",
              }}
              role="progressbar"
              aria-valuenow={data.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {data.progress}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Task;
