import React,{useState} from "react";

interface CadastroCompleto {
  etapaAtual: number;
  // Etapa 1 - Dados Pessoais
  etapa1: {
    nomeCompleto: string;
    telefone: string;
    cpf: string;
    estado: string;
    cidade: string;
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    complemento: string;
  };
  
  // Etapa 2 - Dados Adicionais
  etapa2: {
    email: string;
    senha: string;
    confirmarSenha: string;
    dataNascimento: string;
    genero: string;
  };
  
  // Etapa 3 - Dados Específicos
  etapa3: {
    tipoUsuario: 'paciente' | 'profissional';
    // Paciente
    diagnostico?: string;
    responsavel?: string;
    // Profissional
    email?: string;
    especialidade?: string;
    registro?: string;
    experiencia?: string;
  };
  
  timestamp: string;
}


const useCadastroLocal = () => {
  const [dados, setDados] = useState<CadastroCompleto>(() => {
    // Carregar dados salvos ao iniciar
    const saved = localStorage.getItem('cadastroTEA_completo');
    return saved ? JSON.parse(saved) : {
      etapaAtual: 1,
      etapa1: {
        nomeCompleto: '',
        telefone: '',
        cpf: '',
        estado: '',
        cidade: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        complemento: ''
      },
      etapa2: {
        email: '',
        senha: '',
        confirmarSenha: '',
        dataNascimento: '',
        genero: ''
      },
      etapa3: {
        tipoUsuario: 'paciente',
        email: '',
        especialidade: ''
      },
      timestamp: new Date().toISOString()
    };
  });

  const salvarEtapa = (etapa: 1 | 2 | 3 | 'etapaAtual', dadosEtapa: any) => {
    const novosDados = {
      ...dados,
      [`etapa${etapa}`]: dadosEtapa,
      timestamp: new Date().toISOString()
    };
    
    setDados(novosDados);
    localStorage.setItem('cadastroTEA_completo', JSON.stringify(novosDados));
  };

  const limparDados = () => {
    localStorage.removeItem('cadastroTEA_completo');
    setDados({
      etapaAtual: 1,
      etapa1: {
        nomeCompleto: '',
        telefone: '',
        cpf: '',
        estado: '',
        cidade: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        complemento: ''
      },
      etapa2: {
        email: '',
        senha: '',
        confirmarSenha: '',
        dataNascimento: '',
        genero: ''
      },
      etapa3: {
        tipoUsuario: 'paciente',
        email: '',
        especialidade: ''
      },
      timestamp: new Date().toISOString()
    });
  };

  const enviarParaBackend = async () => {
    try {
      const response = await fetch('/api/cadastro/finalizar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });

      if (response.ok) {
        limparDados();
        return { success: true };
      }
      
      throw new Error('Erro ao enviar dados');
    } catch (error) {
      console.error('Erro:', error);
      return { success: false, error };
    }
  };

  return { dados, salvarEtapa, limparDados, enviarParaBackend };
};

export default useCadastroLocal;