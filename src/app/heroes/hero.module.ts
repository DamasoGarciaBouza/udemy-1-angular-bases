import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/components/hero/hero.component";
import { CommonModule } from "@angular/common";
import { ListComponent } from "../dbz/components/list/list.component";

@NgModule({

    declarations: [
        HeroComponent,
    ],
    imports: [
        CommonModule, ListComponent
    ],
    exports: [
        HeroComponent, ListComponent
    ],        

})
export class HeroModule {}