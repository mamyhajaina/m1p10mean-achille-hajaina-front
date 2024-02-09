import { MenuItem } from "./menuItem";

export class Menu {
  static menuClient: MenuItem[] = [
    {
      title: 'Prise Rendez Vous',
      url: '/client/priseRendezVous',
      icon: 'bi bi-journal-text',
    },
    {
      title: 'Historique Rendez Vous',
      url: '/client/historiqueRendezVous',
      icon: 'bi bi-journal-text',
    },
    {
      title: 'Paiement en ligne',
      url: '/client/paiement',
      icon: 'bi bi-journal-text',
    }
  ];

  static menuEmploye: MenuItem[] = [
    {
      title: 'Gestion Rendez Vous',
      url: '/employe/gestionRendezVous',
      icon: 'bi bi-journal-text',
    },
    {
      title: 'Gestion des Tâches',
      url: '/employe/gestionTache',
      icon: 'bi bi-journal-text',
    },
    {
      title: 'Profil et Horaire de travail',
      url: '/employe/profileHoraire',
      icon: 'bi bi-journal-text',
    }
  ];

  static menuManager: MenuItem[] = [
    {
      title: 'Gestion Personnel',
      url: '/manager/ListRepportage',
      icon: 'bi bi-layout-text-window-reverse',
    }
  ];
}
