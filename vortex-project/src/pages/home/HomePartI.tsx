import React from "react";
import { Button } from "react-bootstrap";

const PartI: React.FC = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center mt-50 w-50 ml-125 px-3">
            <div className="w-500">
                <h1 className="display-3">Conectando Cuidado Especializado em TEA</h1>
            </div>
            <h3 className="fs-5 ">
                Plataforma que une profissionais especializados no Transtorno do Espectro Autista com famílias,
                oferecendo cuidado integrado, acessível e personalizado.
            </h3>
            <div className="d-flex gap-3">
                <Button variant="danger">Encontrar Profissional</Button>
                <Button variant="light">Sou Profissional</Button>
            </div>
        </div>

    )
}
export default PartI;  // Exportando o componente PartI para ser utilizado em outros arquivos.