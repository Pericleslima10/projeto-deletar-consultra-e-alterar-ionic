import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'cadastrar',
    loadComponent: () => import('./cadastrar/cadastrar.page').then( m => m.CadastrarPage)
  },
  {
    path: 'consultar',
    loadComponent: () => import('./consultar/consultar.page').then( m => m.ConsultarPage)
  },
  {
    path: 'alterar',
    loadComponent: () => import('./alterar/alterar.page').then( m => m.AlterarPage)
  },
  {
    path: 'quem-somos',
    loadComponent: () => import('./quem-somos/quem-somos.page').then( m => m.QuemSomosPage)
  },
  {
    path: 'alterar',
    loadComponent: () => import('./alterar/alterar.page').then( m => m.AlterarPage)
  },
];
