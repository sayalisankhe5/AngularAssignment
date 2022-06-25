import { Component, Input, OnInit } from "@angular/core";
import { Products } from "src/app/models/products.model";

@Component({
    templateUrl:'./product_list.component.html',
    selector:'product-list'
})
export class ProductListComponent implements OnInit {
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }
    
    
    initialProducts = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ];

      products = this.initialProducts;

    searchText:string = "";
    stock:string = "false";

    onSearch(searchValue:string){
        this.searchText = searchValue;
        //console.log(this.searchText);
        if(this.searchText)
        {
            this.products = this.products.filter(item => {
                return item.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
            })
        }
        else
        {
this.products = this.initialProducts;
        }
        
    } 

    onInStock(stockFlag:string){
        this.stock = stockFlag;
        //console.log(this.searchText);
        if(this.stock)
        {
            this.products = this.products.filter(item => {
                return item.stocked.toString().match(this.stock);
            })
        }
        else
        {
    this.products = this.initialProducts;
        }
        
    }
}


