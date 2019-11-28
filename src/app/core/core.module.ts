import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DfHttpIEInterceptor } from '@devfactory/ngx-df/interceptor';

import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxDfCustom } from '@app/shared/ngx-custom.module';
import { WINDOW_PROVIDERS } from './services/window.service';

/**
 * The Core module is used to hold all root-level providers. It should only be imported in the AppModule.
 */
@NgModule({
  /** Place all forRoot() imports here */
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgxDfCustom.forRoot(),
    OverlayModule,
    ReactiveFormsModule,
  ],
  /** Place all services/providers/injection tokens here here */
  providers: [
    // Activate these interceptors depending on your needs.
    // {
    //   multi: true,
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: DfHttpLoaderInterceptor,
    // },
    // {
    //   multi: true,
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: DfHttpErrorInterceptor,
    // },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: DfHttpIEInterceptor,
    },
    WINDOW_PROVIDERS,
    /** Provide your app wide services here */
  ],
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
