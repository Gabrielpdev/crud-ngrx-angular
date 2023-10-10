import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieStoreModule } from './store/movies/movie-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';

// UI5 Web Components used
// import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/List';
import '@ui5/webcomponents/dist/CustomListItem';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Popover';
import '@ui5/webcomponents/dist/TextArea';
import '@ui5/webcomponents/dist/StandardListItem';
import '@ui5/webcomponents/dist/Tab';
import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableRow.js';
import '@ui5/webcomponents/dist/TableCell.js';
import '@ui5/webcomponents/dist/TabContainer';
// import '@ui5/webcomponents-base/dist/features/F6Navigation';
// import '@ui5/webcomponents-fiori/dist/ShellBar';
// import '@ui5/webcomponents-fiori/dist/ShellBarItem';
// import '@ui5/webcomponents/dist/Switch';
// import '@ui5/webcomponents-icons/dist/palette.js';
// import '@ui5/webcomponents-fiori/dist/Assets';
// import '@ui5/webcomponents-icons/dist/settings.js';
// import '@ui5/webcomponents-icons/dist/sys-help.js';
// import '@ui5/webcomponents-icons/dist/log.js';
// import '@ui5/webcomponents-icons/dist/account.js';
// import '@ui5/webcomponents-icons/dist/private.js';
// import '@ui5/webcomponents-icons/dist/loan.js';
// import '@ui5/webcomponents-icons/dist/globe.js';
// setTheme('sap_horizon');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    MovieStoreModule,
    CommonModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
