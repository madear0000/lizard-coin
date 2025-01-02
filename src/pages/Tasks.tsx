function Tasks(): JSX.Element {
  return (
    <div className="text-content">
      <h1>Your tasks</h1>
      <h3>Loading tasks...</h3>
      <ul className="list">
        <li className="list-item">
          Subscribe to telegram
          <span>
            <a target="_blank" className="list-btn">
              {" "}
              50{" "}
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Tasks;
