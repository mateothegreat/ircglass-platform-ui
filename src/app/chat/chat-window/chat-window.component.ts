import { Component, OnInit } from '@angular/core';
import { ChatService }       from '../chat.service';

@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: [ './chat-window.component.scss' ]
})
export class ChatWindowComponent implements OnInit {

    public constructor(public chatService: ChatService) {

    }

    public ngOnInit() {

    }

}
