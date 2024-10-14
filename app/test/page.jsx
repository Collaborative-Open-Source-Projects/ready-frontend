'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const ComponentView = () => {

  const searchParams = useSearchParams(); // Use useSearchParams hook
  const filename = searchParams.get('filename');

  if (!filename) {
    return <div>Loading...</div>;
  }

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
          <ButtonComponent filename={filename} />
    </div>
  );
};

export default ComponentView;