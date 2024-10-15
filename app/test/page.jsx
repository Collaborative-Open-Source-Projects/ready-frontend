'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const ComponentView = () => {
  return (
    <Suspense fallback={<div className="text-gray-500">Loading Component...</div>}>
      <ButtonLoader />
    </Suspense>
  );
};

const ButtonLoader = () => {
  const searchParams = useSearchParams();
  const filename = searchParams.get('filename');

  if (!filename) {
    return <div>Loading...</div>;
  }

  const ButtonComponent = React.lazy(() =>
    import(`/components/Inputs/Buttons/${filename}.jsx`)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6">
      <Suspense fallback={<div className="text-gray-500">Loading Component...</div>}>
        <ButtonComponent />
      </Suspense>
    </div>
  );
};

export default ComponentView;