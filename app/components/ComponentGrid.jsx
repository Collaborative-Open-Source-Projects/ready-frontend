'use client';
import React,{ Suspense } from 'react';
import { useRouter } from 'next/navigation';

const ComponentGrid = ({ components }) => {
  const router = useRouter(); 

  const handleComponentClick = (component) => {
    router.push(`${component.link}?filename=${component.filename}`);
  };

  const ButtonComponent = ({ filename }) => {
    const LazyComponent = React.lazy(() =>
      import(`/components/Inputs/Buttons/${filename}.jsx`)
    );
    return (
      <Suspense fallback={<div className="text-gray-500">Loading...</div>}>  
        <LazyComponent className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" />
      </Suspense>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6">
      {components.map((component) => (
        <div
          key={component.id}
          className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-4 flex items-center justify-center"
          style={{ width: '350px', height: '350px' }}
          onClick={() => handleComponentClick(component)}
        >
          <ButtonComponent filename={component.filename} />
        </div>
      ))}
    </div>
  );
};

export default ComponentGrid;