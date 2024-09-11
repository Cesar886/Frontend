import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client' para React 18
import { MantineProvider } from '@mantine/core'; // Asegúrate de tener esto importado
import '@mantine/core/styles.css';
import App from './App';

// Tema personalizado (si es necesario)
const theme = {
  colorScheme: 'light',
};

// Utiliza createRoot para React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
