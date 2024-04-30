import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridItemComponent {
content: any;

}
