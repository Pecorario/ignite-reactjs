import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() { // Conceito: Componentes
  const [repositories, setRepositories] = useState<Repository[]>([]);
  
  useEffect(() => {
    fetch('https://api.github.com/users/Pecorario/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []); // IMPORTANTE: se passar o array de dependências vazio, o useEffect irá disparar apenas uma vez assim que o componente for exibido em tela

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}