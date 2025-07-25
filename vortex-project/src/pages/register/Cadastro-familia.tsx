import React, { useState } from 'react';

// Lista de estados brasileiros para reutilização
const estadosBrasileiros = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 
  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 
  'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

// Especialidades para diferentes profissões
const especialidadesMedico = [
  { value: '', label: 'Selecione a especialidade' },
  { value: 'pediatra', label: 'Pediatra' },
  { value: 'neurologista', label: 'Neurologista' },
  { value: 'psiquiatra', label: 'Psiquiatra' },
];

const especialidadesPsicologo = [
  { value: '', label: 'Selecione a especialidade' },
  { value: 'psicologo_clinico', label: 'Psicólogo Clínico' },
  { value: 'neuropsicologos', label: 'Neuropsicólogo' },
  { value: 'psicoterapeuta', label: 'Psicoterapeuta' },
];

const CreateAccount: React.FC = () => {
  // Estados principais
  const [userType, setUserType] = useState<'paciente' | 'profissional'>('paciente');
  const [currentStep, setCurrentStep] = useState(1);
  const [isTitularPaciente, setIsTitularPaciente] = useState(false);

  // Dados do formulário
  const [formData, setFormData] = useState({
    nomeCompletoResponsavel: '',
    telefone: '',
    cpf: '',
    estado: '',
    cidade: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
    nomeCompletoPaciente: '',
    dataNascimento: '',
    nivelTEA: '',
    email: '',
    senha: '',
    confimarcaoSenha: '',
  });

  const [professionalData, setProfessionalData] = useState({
    nomeCompleto: '',
    telefone: '',
    cpf: '',
    profissao: '',
    especialidade: '',
    registro: '',
    tipoRegistro: '',
    estadoRegistro: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
    estadoAtendimento: '',
    cidadeAtendimento: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
  });

  // Opções de formulário
  const professions = [
    { value: '', label: 'Selecione sua profissão' },
    { value: 'medico', label: 'Médico' },
    { value: 'psicologo', label: 'Psicólogo' },
    { value: 'terapeuta_ocupacional', label: 'Terapeuta Ocupacional' },
    { value: 'fonoaudiologo', label: 'Fonoaudiólogo' },
    { value: 'pedagogo', label: 'Pedagogo' },
    { value: 'psicopedagogo', label: 'Psicopedagogo' },
    { value: 'fisioterapeuta', label: 'Fisioterapeuta' },
  ];

  const tipoRegistro = [
    { value: '', label: 'Selecione o tipo de registro' },
    { value: 'CRM', label: 'CRM' },
    { value: 'CRP', label: 'CRP' },
    { value: 'CRFa', label: 'CRFa' },
    { value: 'CREFITO', label: 'CREFITO' },
    { value: 'CREA', label: 'CREA' },
  ];

  // Handlers
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProfessionalChange = (field: keyof typeof professionalData, value: string) => {
    setProfessionalData(prev => ({ ...prev, [field]: value }));
  };

  // Navegação
  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => currentStep > 1 && setCurrentStep(prev => prev - 1);

  // Renderização condicional
  const renderEstadoOptions = () => (
    estadosBrasileiros.map(estado => (
      <option key={estado} value={estado}>{estado}</option>
    ))
  );

  // Componentes de formulário
  const renderPacienteStep1 = () => (
    <div className="border border-gray-300 rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">Informações Básicas</h3>
      <input
        type="text"
        placeholder="Nome completo"
        value={formData.nomeCompletoResponsavel}
        onChange={(e) => handleInputChange('nomeCompletoResponsavel', e.target.value)}
        className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
      />
      <div className='flex gap-4'>
        <input
          type="tel"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={(e) => handleInputChange('telefone', e.target.value)}
          className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="CPF"
          value={formData.cpf}
          onChange={(e) => handleInputChange('cpf', e.target.value)}
          className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
        />
      </div>
      <div className='flex gap-4'>
        <select
          value={formData.estado}
          onChange={(e) => handleInputChange('estado', e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg'
        >
          <option value="">Estado</option>
          {renderEstadoOptions()}
        </select>
        <input
          type="text"
          placeholder='Cidade'
          value={formData.cidade}
          onChange={(e) => handleInputChange('cidade', e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg'
        />
      </div>
      <input
        type="text"
        placeholder='CEP'
        value={formData.cep}
        onChange={(e) => handleInputChange('cep', e.target.value)}
        className='w-full mt-3 p-3 border border-gray-300 rounded-lg'
      />
      <div className='flex gap-4 mt-3'>
        <input
          type="text"
          placeholder='Logradouro'
          value={formData.logradouro}
          onChange={(e) => handleInputChange('logradouro', e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg'
        />
        <input
          type="text"
          placeholder='Número'
          value={formData.numero}
          onChange={(e) => handleInputChange('numero', e.target.value)}
          className='w-1/3 p-3 border border-gray-300 rounded-lg'
        />
      </div>
      <div className='flex gap-4 mt-3'>
        <input
          type="text"
          placeholder='Bairro'
          value={formData.bairro}
          onChange={(e) => handleInputChange('bairro', e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg'
        />
        <input
          type="text"
          placeholder='Complemento'
          value={formData.complemento}
          onChange={(e) => handleInputChange('complemento', e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg'
        />
      </div>
    </div>
  );

  const renderProfissionalStep1 = () => (
    <div className="border border-gray-300 rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">Informações Básicas</h3>
      <input
        type="text"
        placeholder="Nome completo"
        value={professionalData.nomeCompleto}
        onChange={(e) => handleProfessionalChange('nomeCompleto', e.target.value)}
        className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
      />
      <div className='flex gap-4'>
        <input
          type="tel"
          placeholder="Telefone"
          value={professionalData.telefone}
          onChange={(e) => handleProfessionalChange('telefone', e.target.value)}
          className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="CPF"
          value={professionalData.cpf}
          onChange={(e) => handleProfessionalChange('cpf', e.target.value)}
          className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );

  const renderPacienteStep2 = () => (
    <div className="border border-gray-300 rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">Informações do Paciente</h3>
      <label className="flex items-center mb-3">
        <input
          type="checkbox"
          checked={isTitularPaciente}
          onChange={(e) => setIsTitularPaciente(e.target.checked)}
          className="mr-2"
        />
        Titular da conta é o paciente
      </label>
      {!isTitularPaciente && (
        <input
          type="text"
          value={formData.nomeCompletoPaciente}
          onChange={(e) => handleInputChange('nomeCompletoPaciente', e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg'
          placeholder='Nome do paciente'
        />
      )}
      <div className='flex gap-4'>
        <input
          type="date"
          value={formData.dataNascimento}
          onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
          className='w-full p-3 mt-3 border border-gray-300 rounded-lg'
        />
        <input
          type="text"
          value={formData.nivelTEA}
          onChange={(e) => handleInputChange('nivelTEA', e.target.value)}
          placeholder='Nível TEA'
          className='w-full mt-3 p-3 border border-gray-300 rounded-lg'
        />
      </div>
    </div>
  );

  const renderProfissionalStep2 = () => {
    // Determinar especialidades com base na profissão
    let especialidades: any[] = [];
    if (professionalData.profissao === 'medico') {
      especialidades = especialidadesMedico;
    } else if (professionalData.profissao === 'psicologo') {
      especialidades = especialidadesPsicologo;
    }

    return (
      <div className="border border-gray-300 rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4">Informações Profissionais</h3>
        <div className='flex gap-4'>
          <select
            value={professionalData.profissao}
            onChange={(e) => handleProfessionalChange('profissao', e.target.value)}
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
          >
            {professions.map(prof => (
              <option key={prof.value} value={prof.value}>{prof.label}</option>
            ))}
          </select>

          {(professionalData.profissao === 'medico' || professionalData.profissao === 'psicologo') && (
            <select
              value={professionalData.especialidade}
              onChange={(e) => handleProfessionalChange('especialidade', e.target.value)}
              className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
            >
              {especialidades.map(esp => (
                <option key={esp.value} value={esp.value}>{esp.label}</option>
              ))}
            </select>
          )}
        </div>

        <div className='flex gap-4'>
          <input
            type="text"
            placeholder='Número do Registro'
            value={professionalData.registro}
            onChange={(e) => handleProfessionalChange('registro', e.target.value)}
            className='w-full mt-3 p-3 border border-gray-300 rounded-lg'
          />
          <select
            value={professionalData.estadoRegistro}
            onChange={(e) => handleProfessionalChange('estadoRegistro', e.target.value)}
            className='w-full p-3 mt-3 border border-gray-300 rounded-lg'
          >
            <option value="">Estado do Registro</option>
            {renderEstadoOptions()}
          </select>
        </div>

        <select
          value={professionalData.tipoRegistro}
          onChange={(e) => handleProfessionalChange('tipoRegistro', e.target.value)}
          className="w-full mb-3 p-3 border border-gray-300 rounded-lg mt-6"
        >
          {tipoRegistro.map(tipo => (
            <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
          ))}
        </select>

        <h3 className='mt-5 text-xl font-bold mb-4'>Informações do local de atendimento</h3>
        <div className='flex gap-4'>
          <select
            value={professionalData.estadoAtendimento}
            onChange={(e) => handleProfessionalChange('estadoAtendimento', e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          >
            <option value="">Estado</option>
            {renderEstadoOptions()}
          </select>
          <input
            type="text"
            placeholder='Cidade'
            value={professionalData.cidadeAtendimento}
            onChange={(e) => handleProfessionalChange('cidadeAtendimento', e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          />
        </div>
        <input
          type="text"
          placeholder='CEP'
          value={professionalData.cep}
          onChange={(e) => handleProfessionalChange('cep', e.target.value)}
          className='w-full mt-3 p-3 border border-gray-300 rounded-lg'
        />
        <div className='flex gap-4 mt-3'>
          <input
            type="text"
            placeholder='Logradouro'
            value={professionalData.logradouro}
            onChange={(e) => handleProfessionalChange('logradouro', e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          />
          <input
            type="text"
            placeholder='Número'
            value={professionalData.numero}
            onChange={(e) => handleProfessionalChange('numero', e.target.value)}
            className='w-1/3 p-3 border border-gray-300 rounded-lg'
          />
        </div>
        <div className='flex gap-4 mt-3'>
          <input
            type="text"
            placeholder='Bairro'
            value={professionalData.bairro}
            onChange={(e) => handleProfessionalChange('bairro', e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          />
          <input
            type="text"
            placeholder='Complemento'
            value={professionalData.complemento}
            onChange={(e) => handleProfessionalChange('complemento', e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          />
        </div>
      </div>
    );
  };

  const renderPacienteStep3 = () => (
    <div className="border border-gray-300 rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">Segurança</h3>
      <p>Preencha as informações de segurança</p>
      <input
        type="email"
        placeholder='Email'
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        className='w-full mt-3 p-3 border border-gray-300 rounded-lg'
      />
      <input
        type="password"
        placeholder='Senha'
        value={formData.senha}
        onChange={(e) => handleInputChange('senha', e.target.value)}
        className='w-full mt-3 p-3 border border-gray-300 rounded-lg'
      />
      <input
        type="password"
        placeholder='Confirme sua senha'
        value={formData.confimarcaoSenha}
        onChange={(e) => handleInputChange('confimarcaoSenha', e.target.value)}
        className='mt-3 w-full p-3 border border-gray-300 rounded-lg'
      />
    </div>
  );

  const renderProfissionalStep3 = () => (
    <div className="border border-gray-300 rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">Informações de segurança</h3>
      <input
        type="email"
        placeholder="Email profissional"
        value={professionalData.email}
        onChange={(e) => handleProfessionalChange('email', e.target.value)}
        className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        placeholder="Senha"
        value={professionalData.senha}
        onChange={(e) => handleProfessionalChange('senha', e.target.value)}
        className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        placeholder="Confirme sua senha"
        value={professionalData.confirmacaoSenha}
        onChange={(e) => handleProfessionalChange('confirmacaoSenha', e.target.value)}
        className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
      />
    </div>
  );

  const renderForm = () => {
    if (userType === 'paciente') {
      switch(currentStep) {
        case 1: return renderPacienteStep1();
        case 2: return renderPacienteStep2();
        case 3: return renderPacienteStep3();
        default: return null;
      }
    } else {
      switch(currentStep) {
        case 1: return renderProfissionalStep1();
        case 2: return renderProfissionalStep2();
        case 3: return renderProfissionalStep3();
        default: return null;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className='absolute top-25 left-1/2 transform -translate-x-1/2 py-6'>
        <h1 className='text-center text-black text-3xl font-bold'>Criar Conta</h1>
        <h2 className='text-center text-black text-lg mt-2'>Junte-se à comunidade Cuidar TEA</h2>
      </div>

      <div className="absolute top-50 left-1/2 transform -translate-x-1/2 py-6">
        <div className="flex">
          <button
            className={`w-80 h-10 flex items-center justify-center transition-colors ${
              userType === 'paciente' 
                ? 'bg-red-500 text-white rounded-lg' 
                : 'bg-white border-2 border-gray-300 text-gray-700 rounded-lg'
            }`}
            onClick={() => setUserType('paciente')}
          >
            <span className="font-bold">PACIENTE</span>
          </button>

          <button
            className={`w-80 h-10 flex items-center justify-center transition-colors ${
              userType === 'profissional' 
                ? 'bg-red-500 text-white rounded-lg' 
                : 'bg-white border-2 border-gray-300 text-gray-700 rounded-lg'
            }`}
            onClick={() => setUserType('profissional')}
          >
            <span className="font-bold">PROFISSIONAL</span>
          </button>
        </div>
      </div>

      <div className="absolute top-64 left-1/2 transform -translate-x-1/2 py-6">
        <div className="flex items-center">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  currentStep >= step ? 'bg-red-500' : 'bg-gray-300'
                }`}>
                  {step}
                </div>
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step ? 'bg-red-500' : 'bg-gray-300'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="absolute top-90 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
        <form className="w-full bg-white p-6 rounded-lg shadow-md">
          {renderForm()}

          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Voltar
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Próxima etapa
              </button>
            ) : (
              <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => {
                  const dadosParaVisualizar = userType === 'paciente'
                    ? { ...formData, tipoUsuario: 'paciente', isTitular: isTitularPaciente }
                    : { ...professionalData, tipoUsuario: 'profissional' };

                  console.log('=== DADOS DO FORMULÁRIO ===');
                  console.log('Tipo de usuário:', userType);
                  console.log('Etapa atual:', currentStep);
                  console.log('Dados completos:', dadosParaVisualizar);
                }}
              >
                Finalizar Cadastro
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;