import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: "Web Moloka'i",
      description:
        'Sitio web corporativo del restaurante Moloka\'i, enfocado en la promoción de sus servicios, la visualización del menú y la mejora de la experiencia del usuario.',
      image: 'images/molokai.webp',
      route: '/projects/molokai',
      tags: ['React', 'Vite', 'Firebase', 'NodeJS']
    },
    {
      title: 'Auto App',
      description:
        'Plataforma móvil de mantenimiento automotriz, creada para facilitar el seguimiento del estado de los vehículos y la programación de servicios preventivos.',
      image: 'images/auto.webp',
      route: '/projects/unity-vr',
      tags: ['React', 'Expo', 'NodeJS']
    },
    {
      title: "Moloka'i – Business Web Platform",
      description:
        'Plataforma web enfocada en presentación de servicios y experiencia de usuario.',
      image: 'images/molokai.webp',
      route: '/projects/molokai',
      tags: ['React', 'Vite', 'Firebase', 'NodeJS']
    }
  ];
}