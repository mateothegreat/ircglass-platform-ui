import { Component, Input } from '@angular/core';
import { MessageParsed }    from '../../../../_lib/MessageParsed';

@Component({
    selector: 'app-chat-window-content-message',
    templateUrl: './chat-window-content-message.component.html',
    styleUrls: [ './chat-window-content-message.component.scss' ]
})
export class ChatWindowContentMessageComponent {

    @Input() public message: MessageParsed;

    public constructor() {

    }

}
