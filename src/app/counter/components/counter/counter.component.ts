import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h2>{{title}}</h2>
        <p>Contador: {{counter}}</p>
        <button (click)="alterCounterBy(1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="alterCounterBy(-1)">-1</button>  
    `,
})

export class CounterComponent {
    public title: string = 'Counter Component';
    public counter: number = 10;
    alterCounterBy(value: number): void {
        this.counter = this.counter + value;
    }
    resetCounter(): void {
        this.counter = 10;
    }

}