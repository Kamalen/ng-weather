import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: 'tab.component.html',
    styleUrl: 'tab.component.css'
})
export class TabComponent {
    @Input()
    title: string

    @Output()
    closed: EventEmitter<void> = new EventEmitter<void>()

    active: boolean = false

    @ViewChild(TemplateRef)
    public templateRef: TemplateRef<any>
}
