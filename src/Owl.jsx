import React from "react";
//vimport img from "./public/assets/owl.png"
export default function Owl({ img, description }) {
    if (!img || !description) {
        return <p>Erreur : les propriétés img et description sont requises</p>;
    }

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <>
            <div>
                <h1>Owl</h1>
                <img 
                    src={img} 
                    alt={description}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }}
                />
                <p>{description}</p>
            </div>
        </>
    );
}