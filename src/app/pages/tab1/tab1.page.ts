import { Component } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListaItem } from 'src/app/models/lista-item.model';
//import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

   
  constructor(public lista:ListaService,
    private router:Router,
    private alertCtrl:AlertController) {
     
  }
 async agregarLista(){
   
    
    const alert = await this.alertCtrl.create({
        header:'Nueva Lista',
        inputs:[
            {
                name:'titulo',
                type:'text',
                placeholder:'nombre de la lista'
            }
        ],
        buttons:[
        {
            text:'Cancelar',
            role:'candel',
            handler:()=>{
                console.log('cancelar');
                
            }
        },
            {
                text:'Crear',
                handler:(data)=>{
                    console.log(data);
                    if (data.titulo.length===0) {
                        return;
                    }
                    
                    const idLista= this.lista.crearLista(data.titulo);
                    this.router.navigateByUrl(`/tabs/tab1/agregar/${idLista}`);
                }
            }
        ]
    });
    alert.present();
  }

  

}
