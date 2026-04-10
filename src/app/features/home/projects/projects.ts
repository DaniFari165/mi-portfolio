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
      title: "Moloka'i – Business Web Platform",
      description:
        'Plataforma web enfocada en presentación de servicios y experiencia de usuario.',
      image: 'images/molokai.webp',
      route: '/projects/molokai',
      tags: ['React', 'Vite', 'Firebase', 'NodeJS']
    },
    {
      title: 'Proyecto Unity VR',
      description:
        'Experiencia interactiva en realidad virtual desarrollada con Unity.',
      image: 'images/molokai.webp',
      route: '/projects/unity-vr',
      tags: ['Unity', 'C#', 'VR']
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