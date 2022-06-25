import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    templateUrl:'./search.component.html',
    selector:'search-component'
})

export class SearchComponent {
    searchKey:string="";
    //inStock:boolean = false;

    @Output()
    searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
    inStockChanged:EventEmitter<boolean> = new EventEmitter<boolean>();

    onSearchTextChanged(){
        this.searchTextChanged.emit(this.searchKey);
    }
    // onInStockChanged(){
    //     this.inStockChanged.emit(this.inStock);
    // }
}