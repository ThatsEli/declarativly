// import { Widget, State } from "./classes/Widget";

import { VirtualDOM, Node } from "./classes/VirtualDOM";

// export * from "./classes/widgets/Widgets";
// export { State } from './classes/Widget';



export class Declarativly {

    // public static state: State;

    // private static rootWidget: Widget;
    // private static rootWidgetFunction: Function;
    // private static element: HTMLElement;

    // public static init(element: HTMLElement, state: State, callback: Function): void {
    //     this.element = element;
    //     this.state = state;
    //     this.rootWidgetFunction = callback;
    //     this.computeRootWidget();
    //     this.element.appendChild(this.rootWidget.render());
    // }

    public static init(rootElement: HTMLElement): void {

        let start: Node = { type: 'div', props: [], children: [
            { type: 'p', props: [], children: [ 'test' ] }
        ]};
        let end: Node = { type: 'div', props: [], children: [
            { type: 'p', props: [], children: [ 'It works!' ] }
        ]};

        // VirtualDOM.updateElement(rootElement, start);
        VirtualDOM.updateDOM(rootElement, start);

        setTimeout(()=> {
            VirtualDOM.updateDOM(rootElement, end);
            console.log('Update');
        }, 5000);
    }

    // public static updateState(callback: Function): void {
    //     callback(this.state);
    //     this.reRender();
    // }

    // private static computeRootWidget(): void {
    //     this.rootWidget = this.rootWidgetFunction(this.state, this.updateState);
    // }

    // public static reRender(): void {     
    //     this.rootWidget.reRender(this.rootWidgetFunction(this.state));
    // }

    
      

}
