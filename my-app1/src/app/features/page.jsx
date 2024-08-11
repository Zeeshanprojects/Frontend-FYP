"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function FeaturesPage() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/features");
        setFeatures(response.data);
      } catch (error) {
        console.error("Failed to fetch features:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatures();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/api/features/${id}`);
      setFeatures(features.filter((feature) => feature._id !== id));
    } catch (error) {
      console.error("Failed to delete feature:", error);
    }
  };

  const handleEdit = (id) => {
    router.push(`/features/${id}/edit`);
  };

  if (loading) return <div>Loading...</div>;
console.log(features);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Features</h1>
      <ul className="space-y-4">
        {features.map((feature) => (
          <li
            key={feature._id}
            className="p-4 rounded-lg bg-background shadow-md"
          >
            <h2 className="text-xl font-semibold">{feature.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Schema: {feature.schema}
            </p>
            <div className="mt-2">
              <h3 className="text-lg font-semibold">Code</h3>
              {Object.keys(feature.code).map((key) => (
                <div key={key} className="mb-2">
                  <h4 className="font-semibold">{key}</h4>
                  <pre className="bg-gray-200 p-2 rounded-lg">
                    <code>{feature.code[key]}</code>
                  </pre>
                </div>
              ))}
            </div>
            <div className="flex mt-4 space-x-2">
              <button
                onClick={() => handleEdit(feature._id)}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(feature._id)}
                className="bg-destructive text-white px-4 py-2 rounded-lg hover:bg-destructive/80"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
