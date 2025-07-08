import { useState } from 'react';
import axios from 'axios';

function BugForm({ onSuccess }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/bugs', { title, description });
        setTitle('');
        setDescription('');
        onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border p-1 mr-2" required />
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border p-1 mr-2" required />
            <button type="submit" className="bg-blue-500 text-white px-2 py-1">Submit</button>
        </form>
    );
}

export default BugForm;
