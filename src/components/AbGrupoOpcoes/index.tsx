import React, { useState } from 'react';
import { SectionEstilizado } from './styles';

export interface IAbGrupoOpcoes {
  id: number;
  title?: string;
  body?: string;
  footer?: string;
}

export interface IAbGrupoOpcoesProps {
  opcoes: IAbGrupoOpcoes[];
  defaultValue?: IAbGrupoOpcoes | null;
  onChange?: (opcao: IAbGrupoOpcoes) => void;
}
export const AbGrupoOpcoes = ({
  opcoes,
  onChange,
  defaultValue,
}: IAbGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<IAbGrupoOpcoes | null>(
    defaultValue ?? null
  );

  const handleSelecionado = (option: IAbGrupoOpcoes) => {
    setSelecao(option);
    if (onChange) {
      onChange(option);
    }
  };
  return (
    <>
      {opcoes.map(opcao => (
        <SectionEstilizado
          onClick={() => handleSelecionado(opcao)}
          key={opcao.id}
          selecionado={selecao?.id === opcao.id}
        >
          <header>{opcao.title}</header>
          <div>
            <strong>{opcao.body}</strong>
          </div>

          <footer>{opcao.footer}</footer>
        </SectionEstilizado>
      ))}
    </>
  );
};
