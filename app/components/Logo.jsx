import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image 
        src="/logo.jpg"
        width={50} 
        height={100} 
        alt="Logo"
      />
    </div>
  );
}

export default Logo;