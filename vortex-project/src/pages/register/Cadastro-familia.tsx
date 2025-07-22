import React, { useState } from 'react';

const CreateAccount: React.FC = () => {
  const [userType, setUserType] = useState('paciente');
  const [currentStep, setCurrentStep] = useState(1);

  const renderForm = () => {
    if (userType === 'paciente') {
      return (
        <div className=" border border-gray-300 rounded-lg ">
          <h3 className="text-xl font-bold mb-4">Cadastro de Paciente</h3>
          <input type="text" placeholder="Nome do paciente" className="w-150 mb-3 p-3 border rounded-lg" />
          <input type="email" placeholder="Email do paciente" className="w-150 mb-3 p-3 border rounded-lg" />
          <input type="date" placeholder="Data de nascimento" className="w-150 mb-3 p-3 border rounded-lg" />
        </div>
      );
    } else {
      return (
        <div className="border border-gray-300 rounded-lg ">
          <h3 className="text-xl font-bold mb-4">Cadastro de Profissional</h3>
          <input type="text" placeholder="Nome do profissional" className="w-full mb-3 p-3 border rounded-lg" />
          <input type="email" placeholder="Email profissional" className="w-full mb-3 p-3 border rounded-lg" />
          <input type="text" placeholder="Especialidade" className="w-full mb-3 p-3 border rounded-lg" />
        </div>
      );
    }
  };

  return (
    <>
      <div className='absolute top-25 left-1/2 transform -translate-x-1/2 py-6"' >
        <h1 className='bg-blue-500 text-center text-white text-3xl font-bold'>Criar Conta</h1>
        <h2 className='bg-orange-500 text-center text-white text-lg mt-2'>Junte-se à comunidade Cuidar TEA</h2>
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
            <span className="text-xs mt-1"></span>
          </div>


          <div className={`flex w-16 h-1 mx-2 ${currentStep >= 2 ? 'bg-red-500' : 'bg-gray-300'}`}></div>


          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${currentStep >= 2 ? 'bg-red-500' : 'bg-gray-300'
              }`}>
              2
            </div>
            <span className="text-xs mt-1"></span>
          </div>


          <div className={`w-16 h-1 mx-2 ${currentStep >= 3 ? 'bg-red-500' : 'bg-gray-300'}`}></div>


          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${currentStep >= 3 ? 'bg-red-500' : 'bg-gray-300'
              }`}>
              3
            </div>
            <span className="text-xs mt-1"></span>
          </div>
        </div>
      </div>

      <div className="bg-red-500 w-165 top-90  absolute left-150  ">
          <form action="" method="post" className="w-full">
            {renderForm()}
            <button type="submit" className="w-60 bg-red-500 text-white py-3 px-4 rounded-lg mt-4">
              Cadastrar
            </button>
          </form>
        
      </div>
    </>
  );
};

export default CreateAccount;

// Don't forget to include styles for input fields in your Tailwind CSS setup
