import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})

export class SerachComponent implements OnInit, OnDestroy {

  @Output() public onTypying: EventEmitter<string> = new EventEmitter<string>();
  @Input() public value: string = '';
  public debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.onTypying.emit(filter));
  }

  public ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
