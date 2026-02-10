import React from "react";
//vimport img from "./public/assets/owl.png"
export default function Owl({ img, description }) {
    if (!img || !description) {
        return <p>Erreur : les propriétés img et description sont requises</p>;
    }

    return (
        <>
            <div>
                <h1>Owl</h1>
                <img src={img} alt={description} />
                <p>{description}</p>
            </div>
        </>
    );
}