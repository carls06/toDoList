import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
 
    @Input() terminada = true;
    @ViewChild(IonList) lista:IonList
   


  constructor(public listaser:ListaService,
              private router:Router,
              private alertCtrl:AlertController) {
      
   }

  ngOnInit() {}

  listaSelect(lista:Lista){

    if (this.terminada) {
        
        this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
        this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    
    }
    
  }
  Eliminar(lista:Lista){
      
    this.listaser.borrarLista(lista);
    
    
  }
  async Editar(lista:Lista){
   
    
    const alert = await this.alertCtrl.create({
        header:'Nueva Lista',
        inputs:[
            {
                name:'titulo',
                type:'text',
                value:lista.titulo,
                placeholder:'nombre de la lista'
            }
        ],
        buttons:[
        {
            text:'Cancelar',
            role:'candel',
            handler:()=>{
                console.log('cancelar');
                this.lista.closeSlidingItems();
                
            }
        },
            {
                text:'Editar',
                handler:(data)=>{
                    console.log(data);
                    if (data.titulo.length===0) {
                        return;
                    }
                    
                    lista.titulo=data.titulo;
                    this.listaser.guardarStorage();
                    this.lista.closeSlidingItems();
                }
            }
        ]
    });
    alert.present();
  }
 

}
