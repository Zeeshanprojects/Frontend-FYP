"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function EditFeaturePage({ params }) {
  const [feature, setFeature] = useState({ name: "", code: {}, schema: "" });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/api/features/${id}`);
        setFeature(response.data);
      } catch (error) {
        console.error("Failed to fetch feature:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeature();
  }, [id]);

  const handleChange = (e) => {
    setFeature({ ...feature, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3002/api/features/${id}`, feature);
      router.push("/features");
    } catch (error) {
      console.error("Failed to update feature:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Feature</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={feature.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-background"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            Schema
          </label>
          <input
            type="text"
            name="schema"
            value={feature.schema}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-background"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            Code
          </label>
          <textarea
            name="code"
            value={JSON.stringify(feature.code, null, 2)}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-background"
            rows="10"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80"
        >
          Update Feature
        </button>
      </form>
    </div>
  );
}
