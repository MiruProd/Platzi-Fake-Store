import { Directive, input, computed, booleanAttribute } from '@angular/core';

@Directive({
  selector: 'input[appInput]',
  standalone: true,
  host: {
    '[class]': 'hostClasses()',
  },
})
export class InputDirective {
  readonly error = input<string | boolean | null>(false);

  protected readonly hostClasses = computed(() => {
    return ['form-input', this.error() ? 'is-invalid' : ''].filter(Boolean).join(' ');
  });
}
