import { Injectable }    from '@angular/core';
import * as faker        from 'faker';
import { MessageParsed } from '../_lib/MessageParsed';
import { ChatWindow }    from './chat-window/chat-window';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    private currentWindowName: string;

    public windows: Array<ChatWindow> = [];

    public constructor() {

    }

    public getWindowByName(name: string): ChatWindow {

        for (let i = 0; i < this.windows.length; i++) {

            if (this.windows[ i ].name === name) {

                return this.windows[ i ];

            }

        }

    }

    public getCurrentWindow(): ChatWindow {

        return this.getWindowByName(this.currentWindowName);

    }

    public receiveMessage(message: MessageParsed) {

        const window = this.getWindowByName(message.target);

        if (window) {

            window.messages.push(message);

        }

    }

    public joinChannel(name: string): any {

        this.windows.push(new ChatWindow({

            name: name,
            title: name

        }));

        const message = new MessageParsed();
        message.identity = 'test';
        message.date = new Date();
        message.message = faker.lorem.words(100);
        message.target = '#agaeq14';

        this.windows[ 0 ].messages = Array(2).fill(message);

        this.switchWindowByName(name);

    }

    public switchWindowByName(name: string): void {

        this.currentWindowName = name;

    }


}
