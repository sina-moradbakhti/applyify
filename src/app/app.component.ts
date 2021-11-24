import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'applyify-web';

  constructor(public dialog: MatDialog) {}
  openSignInDialog(): void {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '300px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
