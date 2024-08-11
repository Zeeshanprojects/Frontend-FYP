"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function NewFeaturePage() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [schema, setSchema] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:3002/api/features', { name, code, schema });
      router.push('/features');
    } catch (error) {
      console.error('Failed to create feature:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Feature</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full rounded-lg border bg-background shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground">Schema</label>
          <textarea
            value={schema}
            onChange={(e) => setSchema(e.target.value)}
            className="mt-1 p-2 w-full rounded-lg border bg-background shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground">Code</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="mt-1 p-2 w-full rounded-lg border bg-background shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-primary text-primary-foreground p-2"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Feature'}
        </button>
      </form>
    </div>
  );
}
