import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[mwFavorite]'
})

export class FavorireDirective {
    @HostBinding('class.is-favorite') isFavorite;
    @Input() set mwFavorite(value){
      this.isFavorite = value;
    }
}
