'use client';
import React, { useEffect } from 'react';
import ComponentGrid from '@/app/components/ComponentGrid';
import Header from '@/app/components/Header';
import { useRouter, useParams } from 'next/navigation';

const App = () => {
    const router = useRouter();
    const {category, componentType } = useParams();
    
    useEffect(() => {
      const fetchComponents = async () => {
        try {
          const response = await fetch('/components.json');
          const data = await response.json();
  
          if (data[category][componentType]) {
            // console.log(data[category]);
            console.log(data[category][componentType])
          } else {
            console.log(null);
          }
        } catch (error) {
          console.error('Error fetching components:', error);
          console.log(null);
        }
      };
  
      fetchComponents();
    }, [category]);

    return (
        <div>
            <Header />
            {category}
            <br></br>
            {componentType}
            <h1>Hello World</h1>
        </div>
    )
}

export default App;