import { Component } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    constructor(public lista:ListaService) {
 
    }
  

}
