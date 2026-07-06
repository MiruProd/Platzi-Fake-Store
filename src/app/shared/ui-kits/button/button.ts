import { Component, computed, input } from '@angular/core';

type ButtonStyle = 'primary' | 'secondary' | 'accent' | 'outlet';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'button[app-button], a[app-button]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    '[class]': 'hostClasses()',
  },
})
export class Button {
  public readonly variant = input<ButtonStyle>('primary');
  public readonly disabled = input<boolean>(false);
  public readonly size = input<ButtonSize>('md');

  protected readonly hostClasses = computed(() => {
    return [`btn-${this.variant()}`, `btn-${this.size()}`, this.disabled() ? 'is-disabled' : '']
      .filter(Boolean)
      .join(' ');
  });
}
