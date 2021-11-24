import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { merge, of } from 'rxjs';
import { DemoFormState, DemoGroup } from './form/demo-group.const';
import { LocationApi } from './location-api.service';
import { prettyPrint } from './pretty-print';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("codeView", {read: ElementRef}) codeView?: ElementRef;

  groupConfig = DemoGroup;
  formControl = new FormGroup({});
  formState : DemoFormState;

  constructor(
    private cdRef: ChangeDetectorRef,
    private locationApi: LocationApi
  ) {
    this.formState = {
      locationApi: this.locationApi,
    };
  }

  ngAfterViewInit(): void {
    merge(of(this.formControl.value), this.formControl.valueChanges).subscribe(data => {
      const el =<HTMLElement>(this.codeView!.nativeElement);
      el.innerHTML = prettyPrint(data);
      this.cdRef.detectChanges();
    })
  }

}
