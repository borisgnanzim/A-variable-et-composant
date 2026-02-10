import React from 'react';
import Owl from './Owl';
// Importer l'image du hibou depuis le dossier public/assets
import hibou1 from "../public/assets/owl.png";
import hibou2 from "../public/assets/hibou2.png";
import hibou3 from "../public/assets/hibou3.png";




function MyComponent() {   
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Application - Composant Owl</h1>
      
      <Owl 
        img={hibou1} 
        description="Un beau hibou avec ses grands yeux ronds. Survolez l'image pour voir l'effet!" 
      />
      
      <Owl 
        img={hibou2} 
        description="CE hibou est un excellent chasseur nocturne, très discret et rapide." 
      />
      <Owl 
        img={hibou3} 
        description="Les hiboux sont connus pour leur capacité à tourner leur tête à 270 degrés." 
      />

      <Owl 
      />
      
      
    </div>
  );
}

export default MyComponent;