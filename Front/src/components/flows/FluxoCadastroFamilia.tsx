import { useState } from "react";
import api from "../../services/api";
import { Input, Select } from "../ui/FormElements";

interface StepProps {
    formData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const PersonalInfoStep: React.FC<StepProps> = ({ formData, handleChange }) => (
    <div className="space-y-4 animate-fade-in">
      <div className="text-center mb-4"><h2 className="text-xl font-semibold text-gray-800">Tópico 1: Pessoal</h2><p className="text-sm text-gray-500">Informações do responsável</p></div>
      <Input label="Nome completo" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} required />
      <div className="flex flex-col sm:flex-row gap-4"><Input label="Telefone" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 00000-0000" required /><Input label="CPF" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="000.000.000-00" required /></div>
      <h3 className="text-md font-semibold text-gray-700 pt-2 border-t mt-4">Endereço</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><Input label="Estado" name="estado" value={formData.estado} onChange={handleChange} required /><Input label="Cidade" name="cidade" value={formData.cidade} onChange={handleChange} required /><Input label="CEP" name="cep" value={formData.cep} onChange={handleChange} required /><Input label="Logradouro" name="logradouro" value={formData.logradouro} onChange={handleChange} required /><Input label="Número" name="numero" value={formData.numero} onChange={handleChange} required /><Input label="Bairro" name="bairro" value={formData.bairro} onChange={handleChange} required /><Input label="Complemento" name="complemento" value={formData.complemento} onChange={handleChange} className="sm:col-span-2" /></div>
      <div className="flex items-start pt-2"><input type="checkbox" name="souResponsavel" id="souResponsavel" checked={formData.souResponsavel} onChange={handleChange} className="h-4 w-4 mt-1 text-red-600 border-gray-300 rounded focus:ring-red-500" /><label htmlFor="souResponsavel" className="ml-2 block text-sm text-gray-800">Sou o titular responsável pelo paciente</label></div>
    </div>
);

const PatientInfoStep: React.FC<StepProps> = ({ formData, handleChange }) => (
    <div className="space-y-4 animate-fade-in">
        <div className="text-center mb-4"><h2 className="text-xl font-semibold text-gray-800">Tópico 2: Paciente</h2><p className="text-sm text-gray-500">Informações sobre o paciente</p></div>
        <Input label="Nome completo do Paciente" name="nomePaciente" value={formData.nomePaciente} onChange={handleChange} required={!formData.souResponsavel} disabled={formData.souResponsavel} />
        <Input label="CPF do Paciente" name="cpfPaciente" value={formData.cpfPaciente} onChange={handleChange} placeholder="000.000.000-00" required={!formData.souResponsavel} disabled={formData.souResponsavel} />
        <div className="flex flex-col sm:flex-row gap-4">
            <Input label="Data de nascimento do paciente" name="dataNascimentoPaciente" type="date" value={formData.dataNascimentoPaciente} onChange={handleChange} required />
            <Select label="Nível TEA" name="nivelTsaPaciente" value={formData.nivelTsaPaciente} onChange={handleChange} required>
                <option value="N_VEL_1">Nível 1 - Apoio</option>
                <option value="N_VEL_2">Nível 2 - Apoio Substancial</option>
                <option value="N_VEL_3">Nível 3 - Apoio Muito Substancial</option>
            </Select>
        </div>
    </div>
);

const SecurityStep: React.FC<StepProps> = ({ formData, handleChange }) => (
    <div className="space-y-4 animate-fade-in"><div className="text-center mb-4"><h2 className="text-xl font-semibold text-gray-800">Tópico 3: Segurança</h2><p className="text-sm text-gray-500">Dados de acesso à plataforma</p></div><Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required /><Input label="Senha" name="senha" type="password" value={formData.senha} onChange={handleChange} required /><Input label="Confirmar Senha" name="confirmarSenha" type="password" value={formData.confirmarSenha} onChange={handleChange} required /><div className="flex items-start"><input type="checkbox" name="aceitoTermos" id="aceitoTermos" checked={formData.aceitoTermos} onChange={handleChange} className="h-4 w-4 mt-1 text-red-600 border-gray-300 rounded focus:ring-red-500" /><label htmlFor="aceitoTermos" className="ml-2 block text-sm text-gray-800">Aceito os <a href="#" className="text-red-600 underline">termos de serviço</a> e <a href="#" className="text-red-600 underline">política de privacidade</a>.</label></div></div>
);


export default function FluxoCadastroFamilia() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    nomeCompleto: "",
    telefone: "",
    cpf: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    aceitoTermos: false,
    estado: "",
    cidade: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    complemento: "",
    souResponsavel: false,
    nomePaciente: "",
    dataNascimentoPaciente: "",
    nivelTsaPaciente: "N_VEL_1",
    cpfPaciente: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = (target: EventTarget): target is HTMLInputElement => 'checked' in target;
    setFormData(prev => ({ ...prev, [name]: isCheckbox(e.target) && type === 'checkbox' ? e.target.checked : value }));
  };
  
  const handleNext = () => setStep(prev => (prev < 3 ? prev + 1 : prev));
  const handlePrev = () => setStep(prev => (prev > 1 ? prev - 1 : prev));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      handleNext();
      return;
    }

    setIsLoading(true);
    setError(null);
    
    const eTitular = formData.souResponsavel;
    const payload = {
        email: formData.email,
        senha: formData.senha,
        e_titular: eTitular,
        nome_titular: !eTitular ? formData.nomeCompleto : undefined,
        nome_paciente: eTitular ? formData.nomeCompleto : formData.nomePaciente,
        cpf: eTitular ? formData.cpf.replace(/\D/g, '') : formData.cpfPaciente.replace(/\D/g, ''),
        data_nascimento: formData.dataNascimentoPaciente,
        nivel_tea: formData.nivelTsaPaciente,
        telefone: { ddd: formData.telefone.replace(/\D/g, '').substring(0, 2), numero: formData.telefone.replace(/\D/g, '').substring(2), tipo: 'CELULAR' },
        endereco: { cep: formData.cep.replace(/\D/g, ''), logradouro: formData.logradouro, numero: formData.numero, bairro: formData.bairro, cidade: formData.cidade, estado: formData.estado, complemento: formData.complemento },
    };

    try {
        const response = await api.post('/usuarios/criarContaFamilia', payload);
        if (response.status === 201) {
            alert('Conta de Família criada com sucesso!');
        }
    } catch (err: any) {
        if (err.response?.status === 409) { setError(err.response.data.message); }
        else if (err.response?.status === 400) { setError("Dados inválidos. Verifique os campos e tente novamente."); }
        else { setError("Ocorreu um erro inesperado. Tente novamente mais tarde."); }
    } finally {
        setIsLoading(false);
    }
  };

  const StepIndicator = () => (
    <div className="flex justify-center items-center gap-6 mb-6">
      {[1, 2, 3].map(s => (<div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${ step === s ? 'bg-red-600 text-white scale-110' : 'bg-gray-200 text-gray-500' }`} >{s}</div>))}
    </div>
  );

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
      <StepIndicator />
      {error && ( <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative mb-4" role="alert"><span className="block sm:inline">{error}</span></div> )}
      <form onSubmit={handleSubmit}>
        {step === 1 && <PersonalInfoStep formData={formData} handleChange={handleChange} />}
        {step === 2 && <PatientInfoStep formData={formData} handleChange={handleChange} />}
        {step === 3 && <SecurityStep formData={formData} handleChange={handleChange} />}
        <div className="flex justify-between mt-8">
            <button type="button" onClick={handlePrev} disabled={isLoading || step === 1} className={`px-6 py-2 text-sm font-semibold rounded-lg transition-opacity duration-300 ${step === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>Anterior</button>
            <button type="submit" disabled={isLoading} className="px-6 py-2 text-sm font-semibold bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-colors duration-300 flex items-center justify-center disabled:opacity-50 w-36 h-10">{isLoading ? (<svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>) : (step === 3 ? 'Criar conta' : 'Próximo')}</button>
        </div>
      </form>
       <p className="text-xs text-center text-gray-500 mt-6">
        Já tem uma conta? <a href="/login" className="font-semibold text-red-600 hover:underline">Faça login</a>
      </p>
    </div>
  );
}