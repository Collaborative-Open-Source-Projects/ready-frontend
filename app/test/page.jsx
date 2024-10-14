'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const ComponentView = () => {

  const searchParams = useSearchParams(); // Use useSearchParams hook
  const filename = searchParams.get('filename');

  if (!filename) {
    return <div>Loading...</div>;
  }

  const ButtonComponent = React.lazy(() =>
      import(`/components/Inputs/Buttons/${filename}.jsx`)
    );

  return (
    <Suspense fallback={<div className="text-gray-500">Loading Component...</div>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6">
        <ButtonComponent filename={filename} />
      </div>
    </Suspense>
  );
};

export default ComponentView;