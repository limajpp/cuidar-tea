import React, { useState } from 'react';

const CreateAccount: React.FC = () => {
  const [userType, setUserType] = useState<'paciente' | 'profissional'>('paciente');
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Form state for etapa 1
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    telefone: '',
    cpf: '',
    estado: '',
    cidade: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
  });

  // Professional-specific fields
  const [professionalData, setProfessionalData] = useState({
    email: '',
    especialidade: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProfessionalChange = (field: string, value: string) => {
    setProfessionalData(prev => ({ ...prev, [field]: value }));
  };

  const renderForm = () => {
    if (currentStep === 1) {
      return (
        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Informações Básicas</h3>
          <input 
            type="text" 
            placeholder="Nome completo" 
            value={formData.nomeCompleto}
            onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
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
              placeholder={userType === 'paciente' ? "CPF" : "Registro profissional"} 
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
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
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
    } else if (currentStep === 2) {
      return (
        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Informações do Paciente</h3>
            <input type="text" className='w-full p-3 border border-gray-300 rounded-lg' placeholder='Nome do paciente' />
            <div className='flex gap-4'>
            <input 
              type="date" 
              placeholder='Data de nascimento do paciente' 
              value={formData.cidade}
              onChange={(e) => handleInputChange('cidade', e.target.value)}
              className='w-full p-3 mt-3 border border-gray-300 rounded-lg' 
              />
          <input 
            type="text" 
            placeholder='Nível TEA' 
            value={formData.cep}
            onChange={(e) => handleInputChange('cep', e.target.value)}
            className='w-full mt-3 p-3 border border-gray-300 rounded-lg'
            />
            </div>
         
        </div>
      );
    } else if (currentStep === 3) {
      if (userType === 'paciente') {
        return (
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Segurança</h3>
            <p>Preencha as informações de segurança</p>
            <input type="password" placeholder='Senha' className='w-full mt-3 p-3 border border-gray-300 rounded-lg' />
            <input type="password" placeholder='Confirme sua senha' className='mt-3 w-full p-3 border border-gray-300 rounded-lg' />
          </div>
        );
      } else {
        return (
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Informações Profissionais</h3>
            <input 
              type="email" 
              placeholder="Email profissional" 
              value={professionalData.email}
              onChange={(e) => handleProfessionalChange('email', e.target.value)}
              className="w-full mb-3 p-3 border rounded-lg" 
            />
            <input 
              type="text" 
              placeholder="Especialidade" 
              value={professionalData.especialidade}
              onChange={(e) => handleProfessionalChange('especialidade', e.target.value)}
              className="w-full mb-3 p-3 border rounded-lg" 
            />
          </div>
        );
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
          <div
            className={`w-80 h-10 flex items-center justify-center cursor-pointer transition-colors ${userType === 'paciente' ? 'bg-red-500 text-white rounded-lg' : 'bg-white border-2 border-gray-300 text-gray-700 rounded-lg'
              }`}
            onClick={() => setUserType('paciente')}
          >
            <span className="font-bold">PACIENTE</span>
          </div>

          <div
            className={`w-80 h-10 flex items-center justify-center cursor-pointer transition-colors ${userType === 'profissional' ? 'bg-red-500 text-white rounded-lg' : 'bg-white border-2 border-gray-300 text-gray-700 rounded-lg'
              }`}
            onClick={() => setUserType('profissional')}
          >
            <span className="font-bold">PROFISSIONAL</span>
          </div>
        </div>
      </div>

      <div className="absolute top-64 left-1/2 transform -translate-x-1/2 py-6">
        <div className="flex items-center">
          {/* Etapa 1 */}
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${currentStep >= 1 ? 'bg-red-500' : 'bg-gray-300'
              }`}>
              1
            </div>
          </div>

          <div className={`flex w-16 h-1 mx-2 ${currentStep >= 2 ? 'bg-red-500' : 'bg-gray-300'}`}></div>

          {/* Etapa 2 */}
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${currentStep >= 2 ? 'bg-red-500' : 'bg-gray-300'
              }`}>
              2
            </div>
          </div>

          <div className={`w-16 h-1 mx-2 ${currentStep >= 3 ? 'bg-red-500' : 'bg-gray-300'}`}></div>

          {/* Etapa 3 */}
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${currentStep >= 3 ? 'bg-red-500' : 'bg-gray-300'
              }`}>
              3
            </div>
          </div>
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
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
              >
                Voltar
              </button>
            )}
            
            {currentStep < 3 ? (
              <button 
                type="button" 
                onClick={nextStep}
                className="bg-red-500 hover:bg-red-600 text-black font-bold py-2 px-4 rounded-lg"
              >
                Próxima etapa
              </button>
            ) : (
              <button 
                type="button" 
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg"
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
