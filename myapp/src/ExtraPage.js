import React, { useState, useEffect } from 'react';

function ExtraPage() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/extra');
                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                setMessage('Error de conexión');
            }
        };

        fetchMessage();
    }, []);

    return (
        <div>
            <h2>Página Extra</h2>
            <p>{message}</p>
        </div>
    );
}

export default ExtraPage;
