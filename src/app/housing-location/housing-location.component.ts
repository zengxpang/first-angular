import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IHousingLocation} from "../i-housing-location";

@Component({
  selector: 'app-housing-location',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss']
})
export class HousingLocationComponent {
  // ! 非空断言 告诉TypeScript 编译器此属性的值不能是 null 或 undefined。
  @Input() housingLocation!: IHousingLocation;
}
