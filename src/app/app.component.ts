import { Component }        from '@angular/core';
import { MessageParsed }    from './_lib/MessageParsed';
import { MessagingService } from './_lib/MessagingService';
import { ChatService }      from './chat/chat.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public constructor(private messagingService: MessagingService,
                       private chatService: ChatService) {

        messagingService.queue$.subscribe((message: MessageParsed) => {

            console.log(message);

        });

        chatService.joinChannel('#agaeq14');

    }

}

