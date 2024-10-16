'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Logo = () => {

    const { theme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }

    return (
        <div>
            {theme === "dark" ? (    
                <Image 
                    src="/website_logo_dark.jpg"
                    width={50} 
                    height={100} 
                    alt="Logo"
                />
            ) : (
                <Image 
                    src="/website_logo_light.jpg"
                    width={50} 
                    height={100} 
                    alt="Logo"
                />
            )}
        </div>
    );
}

export default Logo;