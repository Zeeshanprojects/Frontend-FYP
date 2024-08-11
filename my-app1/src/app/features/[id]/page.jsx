"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FeatureDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [feature, setFeature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchFeature = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/api/features/${id}`);
        setFeature(response.data);
      } catch (error) {
        console.error('Failed to fetch feature:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeature();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!feature) return <div>Feature not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{feature.name}</h1>
      <p className="text-sm text-muted-foreground">{feature.schema}</p>
      <div className="mt-4 p-4 rounded-lg bg-background shadow-md">
        <pre>{feature.code}</pre>
      </div>
    </div>
  );
}
