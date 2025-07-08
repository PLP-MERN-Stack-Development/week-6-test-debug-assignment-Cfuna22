import { useEffect, useState } from 'react';
import axios from 'axios';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    const res = await axios.get('/api/bugs');
    setBugs(res.data);
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Bug Tracker</h1>
      <BugForm onSuccess={fetchBugs} />
      <BugList bugs={bugs} onRefresh={fetchBugs} />
    </div>
  );
}

export default App;
