import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  imports: [],
  templateUrl: './input-form.html',
  styleUrl: './input-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputForm {
  public readonly label = input<string>('');
  public readonly error = input<string | null>(null);
}
