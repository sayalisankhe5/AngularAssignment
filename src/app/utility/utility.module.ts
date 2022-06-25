import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { WidgetsModule } from "../widgets/widgets.module";
import { ProductListComponent } from "./components/product_list/product_list.component";
import { SearchComponent } from "./components/search_component/search.component";


 @NgModule({
     declarations:[ProductListComponent,SearchComponent,],
    imports:[WidgetsModule,FormsModule, BrowserModule],
    exports:[ProductListComponent,SearchComponent],

 })

export class UtilityModule {}