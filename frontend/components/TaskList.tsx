type TaskListProps = {
    tasks: { id: number; name: string; description: string }[];
  };
  
  export default function TaskList({ tasks }: TaskListProps) {
    return (
      <div>
        <h2>Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '10px' }}>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
            </div>
          ))
        )}
      </div>
    );
  }
  