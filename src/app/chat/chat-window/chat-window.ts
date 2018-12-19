import { MessageParsed } from '../../_lib/MessageParsed';

export class ChatWindow {

    public name: string;
    public title: string;

    public messages: MessageParsed[] = [];

    public constructor(obj: {

        name: string,
        title: string

    }) {

        this.name = obj.name;
        this.title = obj.title;

    }

}
