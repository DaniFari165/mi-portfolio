import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  imageOffsetX = 0;
  imageOffsetY = 0;
  imageScale = 1;
  imageRotation = 0;

  isDragging = false;

  private dragStartMouseX = 0;
  private dragStartMouseY = 0;
  private dragStartOffsetX = 0;
  private dragStartOffsetY = 0;

  private rotationResetTimeout: ReturnType<typeof setTimeout> | null = null;

  scrollToProjects(): void {
    const section = document.getElementById('proyectos');

    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY + 48;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }

  onImageMouseMove(event: MouseEvent): void {
    if (this.isDragging) return;

    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    const maxMove = 22;
    const moveStrength = 0.05;

    this.imageOffsetX = this.clamp(-deltaX * moveStrength, -maxMove, maxMove);
    this.imageOffsetY = this.clamp(-deltaY * moveStrength, -maxMove, maxMove);
    this.imageScale = 1.05;

    this.applyMotionRotation(event.movementX);
  }

  onImageMouseLeave(): void {
    if (this.isDragging) return;

    this.imageOffsetX = 0;
    this.imageOffsetY = 0;
    this.imageScale = 1;
    this.imageRotation = 0;
    this.clearRotationTimeout();
  }

  onDragStart(event: MouseEvent): void {
    event.preventDefault();

    this.isDragging = true;
    this.imageScale = 1.08;

    this.dragStartMouseX = event.clientX;
    this.dragStartMouseY = event.clientY;
    this.dragStartOffsetX = this.imageOffsetX;
    this.dragStartOffsetY = this.imageOffsetY;

    this.clearRotationTimeout();
  }

  @HostListener('window:mousemove', ['$event'])
  onWindowMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;

    const deltaX = event.clientX - this.dragStartMouseX;
    const deltaY = event.clientY - this.dragStartMouseY;

    this.imageOffsetX = this.dragStartOffsetX + deltaX;
    this.imageOffsetY = this.dragStartOffsetY + deltaY;

    this.applyMotionRotation(event.movementX);
  }

  @HostListener('window:mouseup')
  onWindowMouseUp(): void {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.clearRotationTimeout();
    this.resetImage();
  }

  getImageTransform(): string {
    return `
      translate(${this.imageOffsetX}px, ${this.imageOffsetY}px)
      rotate(${this.imageRotation}deg)
      scale(${this.imageScale})
    `;
  }

  private applyMotionRotation(movementX: number): void {
    const maxRotate = 10;
    const rotateStrength = 0.9;

    this.imageRotation = this.clamp(
      movementX * rotateStrength,
      -maxRotate,
      maxRotate
    );

    this.clearRotationTimeout();

    this.rotationResetTimeout = setTimeout(() => {
      this.imageRotation = 0;
    }, 70);
  }

  private resetImage(): void {
    this.imageOffsetX = 0;
    this.imageOffsetY = 0;
    this.imageScale = 1;
    this.imageRotation = 0;
  }

  private clearRotationTimeout(): void {
    if (this.rotationResetTimeout) {
      clearTimeout(this.rotationResetTimeout);
      this.rotationResetTimeout = null;
    }
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }
}