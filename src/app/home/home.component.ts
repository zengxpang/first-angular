import { Component,Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {IHousingLocation} from "../i-housing-location";
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [
  //   CommonModule,
  //   HousingLocationComponent
  // ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  housingLocationList: IHousingLocation[] = [];
  filteredLocationList: IHousingLocation[] = [];

  constructor(private housingService: HousingService) {
    housingService.getAllHousingLocations().then(async (housingLocationList)=>{
      this.housingLocationList = await housingService.getAllHousingLocations()
      this.filteredLocationList = this.housingLocationList;
    })
  }

  filterResults(text: string) {
    console.log(text)
    if(!text){
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList = this.housingLocationList.filter((location) => {
      return location.city.toLowerCase().includes(text.toLowerCase());
    })
  }
}
