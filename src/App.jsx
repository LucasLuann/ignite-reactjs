import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    autor: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/75109074?v=4',
      nome: 'Lucas Luann',
      cargo: 'Desenvolvedor Front-End Jr.',
    },
    conteudo: [
      { tipo: 'paragrafo', conteudo: 'Fala galeraa' },
      {
        tipo: 'paragrafo',
        conteudo: 'Subindo mais um projetinho no github...',
      },
      { tipo: 'link', conteudo: 'teste.teste/lucas' },
    ],
    dataPublicacao: new Date('2023-01-20 20:18:00'),
  },
  {
    id: 2,
    autor: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/75109074?v=4',
      nome: 'Lucas Luann',
      cargo: 'Desenvolvedor Front-End Jr.',
    },
    conteudo: [
      { tipo: 'paragrafo', conteudo: 'Fala galeraa' },
      {
        tipo: 'paragrafo',
        conteudo: 'Subindo mais um projetinho no github...',
      },
      { tipo: 'link', conteudo: 'teste.teste/lucas' },
    ],
    dataPublicacao: new Date('2023-01-19 10:18:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                autor={post.autor}
                conteudo={post.conteudo}
                dataPublicacao={post.dataPublicacao}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
