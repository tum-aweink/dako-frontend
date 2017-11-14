import { Component } from '@angular/core';
import { ChatClientService } from './chat-client.service';
import { ChatPdu } from './chat-pdu';
import { ClientConversationStatus } from './client-conversation-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DaKo-Frontend';

  constructor(private clientService: ChatClientService){
    clientService.messages.subscribe(pdu => {
      console.log("Response from websocket: " + pdu.getPdutype());
    
		});
  }

  sendMsg() {
    console.log('new message from client to websocket: ', 'Test-Andre');
    var pdu : ChatPdu = new ChatPdu();
    pdu.setUserName("Test-Andre");
    pdu.setClientStatus(ClientConversationStatus.REGISTERED);
		this.clientService.messages.next(pdu);
  }
  
  simplefunc(){
    console.log("nothing to show here");
  }

}
