import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <SEO 
        title="Login"
        description="Acesse sua conta RodTicket para gerenciar seu atendimento via WhatsApp e outras redes sociais."
        keywords="login rodticket, acesso sistema, entrar conta, painel admin, área cliente"
      />
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-medium">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block mb-6">
            <span className="text-2xl font-bold text-primary">Rod<span className="text-teal-dark">Ticket</span></span>
          </Link>
          <h1 className="text-2xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-gray-600 mt-2">Entre na sua conta para acessar o painel</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="******"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                id="remember-me" 
                name="remember-me" 
                type="checkbox" 
                className="h-4 w-4 text-primary focus:ring-primary/50 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Lembrar-me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-primary hover:text-primary-600">
                Esqueceu a senha?
              </a>
            </div>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
            Entrar
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Ainda não tem conta?{' '}
            <Link to="/" className="text-primary hover:text-primary-600 font-medium">
              Registre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
