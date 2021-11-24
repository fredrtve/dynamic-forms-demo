import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/autocomplete';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormsModule, DYNAMIC_FORM_DEFAULT_OPTIONS } from '@fretve/dynamic-forms';
import { AppComponent } from './app.component';
import { FormDefaultOptions } from './form/form-defaults.const';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicFormsModule,
    BrowserAnimationsModule,
    OverlayModule
  ],
  providers: [
    MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
    { provide: DYNAMIC_FORM_DEFAULT_OPTIONS, useValue: FormDefaultOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
