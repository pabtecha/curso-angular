import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje:string = "";
  elemento: any;
  constructor(private chatService: ChatService ) { 
    this.chatService.cargarMensajes().subscribe(
      () => {
        setTimeout( ()=>{
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20 );
      }
      )
    }
    
  ngOnInit() {
      this.elemento = document.getElementById('app-mensajes')
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    
    if(this.mensaje.length === 0){
      return;
    }

    this.chatService.addMensaje(this.mensaje)
    .then(
      () => {
        console.log('Mensaje guardado');
        this.mensaje = "";}
    )
    .catch( (err) => { console.log('Error al guardar ' + err);
    })
  }
}
