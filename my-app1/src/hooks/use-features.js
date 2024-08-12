import { useState, useCallback } from 'react';

function useFeatures() {
  const [features, setFeatures] = useState([]);

  const toggleFeature = useCallback((feature) => {
    setFeatures((prevFeatures) => {
      const isAlreadyInArray = prevFeatures.some((item) => item.id === feature.id);

      if (isAlreadyInArray) {
        // Remove the feature if it's already in the array
        return prevFeatures.filter((item) => item.id !== feature.id);
      } else {
        // Add the feature if it's not in the array
        return [...prevFeatures, feature];
      }
    });
  }, []);

  return [features, toggleFeature];
}

export default useFeatures;