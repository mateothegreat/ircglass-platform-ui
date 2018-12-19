import { Component }   from '@angular/core';
import { ChatService } from '../../chat.service';

@Component({
    selector: 'app-chat-window-content',
    templateUrl: './chat-window-content.component.html',
    styleUrls: [ './chat-window-content.component.scss' ]
})
export class ChatWindowContentComponent {

    public constructor(public chatService: ChatService) {

    }

}
