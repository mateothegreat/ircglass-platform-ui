import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({

    selector: '[bringToFront]',


})
export class BringToFrontDirective {

    @HostListener('click', [ '$event' ]) onClick($event) {

        console.info('clicked: ' + $event);
        this.el.nativeElement.style[ 'z-index' ] = 1000;

    }

    public constructor(private el: ElementRef) {

    }

}

