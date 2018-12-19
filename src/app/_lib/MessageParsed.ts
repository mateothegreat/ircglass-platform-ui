import { Message } from './Message';

/**
 *
 * {"command":"PONG","message":":tepper.freenode.net PONG tepper.freenode.net :MEOW!"}
 *
 */
export class MessageParsed {

    public date: Date;
    public identity: string;
    public host: string;
    public command: string;
    public target: string;
    public message: string;

    public constructor(message?: Message) {

        if (message) {

            const matches = message.message.match(/:(.*?)@(.*?) (.*?) (.*?) :(.*)$/);

            if (matches && matches.length === 6) {

                this.date = new Date();

                this.identity = matches[ 1 ];
                this.host = matches[ 2 ];
                this.command = matches[ 3 ];
                this.target = matches[ 4 ];
                this.message = matches[ 5 ];

            }

        }

    }

}
