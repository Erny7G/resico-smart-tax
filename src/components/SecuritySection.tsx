
import React from 'react';
import { Shield, Lock, FileCheck, Database } from 'lucide-react';

const SecuritySection: React.FC = () => {
  return (
    <section id="seguridad" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Tu Seguridad es Nuestra Prioridad</h2>
          <p className="text-lg text-resico-medium-gray max-w-2xl mx-auto">
            En ImpuestApp, tus datos están protegidos con los más altos estándares de seguridad
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <Lock size={40} className="text-resico-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Información Encriptada</h3>
              <p className="text-resico-medium-gray">
                Protegemos tu información encriptada de extremo a extremo con los más altos estándares de seguridad.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <FileCheck size={40} className="text-resico-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cumplimiento Legal</h3>
              <p className="text-resico-medium-gray">
                Cumplimos con la Ley Federal de Protección de Datos Personales en Posesión de Particulares (México).
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <Database size={40} className="text-resico-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Respaldo Automático</h3>
              <p className="text-resico-medium-gray">
                Realizamos backup automático seguro de toda la información fiscal que nos proporcionas.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <Shield size={40} className="text-resico-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cobertura por Errores</h3>
              <p className="text-resico-medium-gray">
                Si un error de la app genera un problema en tu declaración, estás cubierto hasta un límite de $5,000 MXN.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-resico-black text-lg">
              "Tus datos son tuyos, nunca se venden ni comparten."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
