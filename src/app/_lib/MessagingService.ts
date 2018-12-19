import { Injectable }    from '@angular/core';
import { Subject }       from 'rxjs';
import * as SockJS       from 'sockjs-client';
import * as Stomp        from 'stompjs';
import { environment }   from '../../environments/environment';
import { ChatService }   from '../chat/chat.service';
import { Message }       from './Message';
import { MessageParsed } from './MessageParsed';

@Injectable({
    providedIn: 'root'
})
export class MessagingService {

    private stompClient;

    public isConnected: boolean;
    public queue$: Subject<MessageParsed> = new Subject();

    public constructor(private chatService: ChatService) {

        this.connect();

    }

    public connect() {

        let ws = new SockJS(`${ environment.API_BASE }/socket`);

        this.stompClient = Stomp.over(ws);

        this.stompClient.connect({

            // Authorization: `Bearer ${ AuthenticationService.getToken() }`

        }, this.onConnect, this.onError);

    }

    public onError = (error: string) => {

        console.error(`Error: ${ error }`);

        this.isConnected = false;

        setTimeout(this.connect, 5000);

    };

    private disconnected(error: any): void {

        console.log(error);

        this.isConnected = false;

    }

    public onConnect = () => {

        console.log('stompclient.connect()');

        this.isConnected = true;

        // setTimeout(() => {
        //
        //     if (this.isConnected) {
        //
        //         this.send(new Message('TEST', new Date().toISOString()));
        //         this.send(new Message('DISCONNECT', new Date().toISOString()));
        //
        //     } else {
        //
        //         console.log('Not connected :(');
        //
        //     }
        //
        // }, 3000);

        this.stompClient.subscribe('/chat', (m) => {

            const message: MessageParsed = new MessageParsed(JSON.parse(m.body));

            this.queue$.next(message);

            this.chatService.receiveMessage(message);

        });

        this.stompClient.subscribe('/topic/error', (message) => this.receiveError);

    };

    public send(message: Message): void {

        this.stompClient.send('/app/message', {}, JSON.stringify(message));

    }

    public receive(payload: any): void {

        console.log(payload);
        const message: Message = JSON.parse(payload.body);

        this.queue$.next(new MessageParsed(message));

    }

    public receiveError(payload: any): void {

        console.log(payload);

    }

}
