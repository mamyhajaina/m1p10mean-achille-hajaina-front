import { MenuItem } from "./menuItem";

export class Menu {
  static menuClient: MenuItem[] = [
    {
      title: 'Enregistrement',
      url: '/utilisateur/EnregistrementAppel',
      icon: 'bi bi-journal-text',
    },
    {
      title: 'List Plaints',
      url: '/utilisateur/listeAppel',
      icon: 'bi bi-layout-text-window-reverse',
    }
  ];

  static menuManager: MenuItem[] = [
    {
      title: 'Liste Repportage',
      url: '/manager/ListRepportage',
      icon: 'bi bi-layout-text-window-reverse',
    },
    {
      title: 'Notification',
      url: '/manager/notification',
      icon: 'bi bi-bell',
    },
    {
      title: 'Statistique',
      url: '/manager/statistique',
      icon: 'bi bi-bar-chart',
    }
  ];
}
