import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {HousingService} from "../housing.service";
import {FormControl,FormGroup} from "@angular/forms";
import {IHousingLocation} from "../i-housing-location";

@Component({
  selector: 'app-details',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })

  housingLocation: IHousingLocation | undefined = undefined;
  housingLocationId:string | null = null;

  constructor(private route: ActivatedRoute,private housingService:HousingService) {
    this.housingLocationId = route.snapshot.paramMap.get('id');
    housingService.getHousingLocationById(Number(this.housingLocationId)).then(
      (housingLocation) => {
        this.housingLocation =  housingLocation;
      }
    )

  }



  submitApplication(): void {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }
}
