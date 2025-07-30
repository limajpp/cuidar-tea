import React from "react";
import { Button } from "react-bootstrap";
import useValoresHome from "../../hooks/valores-home";

const PartI: React.FC = () => {
    const {valores,loading,error} = useValoresHome();
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
            <div className="d-flex justify-content-center gap-4 mt-5 w-100">
                {loading ? (
                    <p>Carregando estatísticas...</p>
                ) : error ? (
                    <p className="text-danger">{error}</p>
                ) : (
                    <div className="flex gap-50 mt-50">
                        <div className="card text-center p-3 shadow" style={{ width: '180px' }}>
                            <h5 style={{ color: 'red' }}>Profissionais+</h5>
                            <p className="display-6" style={{ color: 'red' }}>{valores.quantidadeProfissionais}</p>
                        </div>
                        <div className="card text-center p-3 shadow" style={{ width: '180px' }}>
                            <h5 style={{ color: 'blue' }}>Pacientes+</h5>
                            <p className="display-6" style={{ color: 'blue' }}>{valores.quantidadePacientes}</p>
                        </div>
                        <div className="card text-center p-3 shadow" style={{ width: '180px' }}>
                            <h5 style={{ color: 'purple' }}>Média Avaliações+</h5>
                            <p className="display-6" style={{ color: 'purple' }}>{valores.mediaAvaliacoes}</p>
                        </div>
                    </div>
                )}
                </div>
        </div>

    )
}
export default PartI;  // Exportando o componente PartI para ser utilizado em outros arquivos.