import { useState, useEffect } from 'react';

interface HomeValues {
  quantidadeProfissionais: number;
  quantidadePacientes: number;
  mediaAvaliacoes: number;
}

const useValoresHome = () => {
  const [valores, setValores] = useState<HomeValues>({
    quantidadeProfissionais: 0,
    quantidadePacientes: 0,
    mediaAvaliacoes: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchValores = async () => {
      try {
        setLoading(true);
        // Fetch data from the backend API
        const response = await fetch('http://localhost:25060/api/estatisticas/home');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        
        setValores(data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar os dados');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchValores();
  }, []);

  return { valores, loading, error };
};

export default useValoresHome;
