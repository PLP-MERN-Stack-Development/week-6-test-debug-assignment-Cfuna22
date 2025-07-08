import axios from 'axios';

function BugList({ bugs, onRefresh }) {
  const handleUpdate = async (id, status) => {
    await axios.patch(`/api/bugs/${id}`, { status });
    onRefresh();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/bugs/${id}`);
    onRefresh();
  };

  return (
    <div>
      {bugs.length === 0 ? (
        <p>No bugs reported.</p>
      ) : (
        <ul>
          {bugs.map(bug => (
            <li key={bug._id} className="border p-2 my-2">
              <strong>{bug.title}</strong> - {bug.description} [{bug.status}]
              <div className="mt-2">
                <button onClick={() => handleUpdate(bug._id, 'in-progress')} className="mr-2">In Progress</button>
                <button onClick={() => handleUpdate(bug._id, 'resolved')} className="mr-2">Resolved</button>
                <button onClick={() => handleDelete(bug._id)} className="text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BugList;
