import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/Header"; // Import the Header component

export default function Home() {
  return (
    <>
      <Header /> {/* Use the Header component */}
      <main>
        <Hero 
          title={'Test Title'} 
          description={'We getting outta the hood now'} 
          imageUrl={'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        />
      </main>
      {/* The Footer component will go here once you've created it */}
    </>
  );
}
