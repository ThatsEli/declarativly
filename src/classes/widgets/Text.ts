import { Widget } from "../Widget";

export class Text extends Widget {

    element: HTMLParagraphElement;
    
    constructor(private text: string) {
        super();
        this.element = document.createElement('p');
        this.element.textContent = text;
    }

}