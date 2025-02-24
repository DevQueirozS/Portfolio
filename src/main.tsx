import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import AppRoutes from "./routes"; // Importando o gerenciador de rotas
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <MantineProvider>
        <AppRoutes /> 
      </MantineProvider>
    </StrictMode>
  );
} else {
  console.error("Elemento #root não encontrado!");
}
