import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  imageOffsetX = 0;
  imageOffsetY = 0;
  imageScale = 1;

  onImageMouseMove(event: MouseEvent): void {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    const imageStrength = 0.05;
    const maxImageMove = 18;

    this.imageOffsetX = Math.max(
      -maxImageMove,
      Math.min(maxImageMove, -deltaX * imageStrength)
    );
    this.imageOffsetY = Math.max(
      -maxImageMove,
      Math.min(maxImageMove, -deltaY * imageStrength)
    );

    this.imageScale = 1.05;
  }

  onImageMouseLeave(): void {
    this.imageOffsetX = 0;
    this.imageOffsetY = 0;
    this.imageScale = 1;
  }
}