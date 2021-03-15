import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  dataForTable: any = [];
  tiles: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/images.json").subscribe(data => {
      this.tiles = data;
    })
  }
  
  addDataInTable(tile) {
    tile.active = !tile.active
    tile.status = (tile.active ? 'compare' : 'remove')
    if (tile.status == 'compare') {
      this.dataForTable.push(tile);
    }
    else {
      var filterdData = [];
      filterdData = this.dataForTable.filter(x => {
        return x.id != tile.id
      })
      this.dataForTable = filterdData;
    }
  }

}
