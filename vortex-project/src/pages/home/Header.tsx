import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="relative inset-x-0 top-0 bg-green-200 py-3 w-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-black font-bold text-xl">Cuidar TEA</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a href="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm bg-red-600 hover:bg-red-700 font-medium mr-2">Entrar</a>
                        <a href="/register" className="ml-4 bg-red-600 text-gray px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">Cadastro</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
