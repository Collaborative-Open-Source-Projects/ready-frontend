'use client';
import React, { useEffect, useState } from 'react';
import ComponentGrid from '@/app/components/ComponentGrid';
import Header from '@/app/components/Header';
import { useRouter, useParams } from 'next/navigation';
import Footer from '@/app/components/Footer';

const App = () => {
    const router = useRouter();
    const {category, componentType } = useParams();
    const [ components, setComponents] = useState();
    
    useEffect(() => {
      const fetchComponents = async () => {
        try {
          const response = await fetch('/components.json');
          const data = await response.json();
  
          if (data[category][componentType]) {
            console.log(data[category][componentType])
            setComponents(data[category][componentType])
          } else {
            console.log("404 Page-category/element doesn't exist");
          }
        } catch (error) {
          console.error('Error fetching components:', error);
          console.log("Error fetching components");
        }
      };
  
      fetchComponents();
    }, [category]);

    return (
        <div>
            <Header />
            <ComponentGrid components={components} />
            <Footer />
        </div>
    )
}

export default App;