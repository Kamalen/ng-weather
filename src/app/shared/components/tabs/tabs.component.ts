import { Component, ContentChildren, EventEmitter, Output } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'tabs',
    templateUrl: 'tabs.component.html',
    styleUrl: 'tabs.component.css'
})
export class TabsComponent {
    @ContentChildren(TabComponent) tabList: TabComponent[]

    activeTab?: TabComponent

    closeTab(tab: TabComponent) {
        tab.closed.emit()
        if(this.activeTab === tab) {
            this.activeTab = undefined
        }
    }
}
