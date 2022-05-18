import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'card-test';
  cards = [
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', title: 'Title 1', subTitle: 'Subtitle 1', description: 'Description 1. some long text goes here. Please enable JavaScript to continue using this application.', border_color:'#333' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', title: 'Title 2', subTitle: 'Subtitle 2', description: 'Description 2', border_color:'#e71010'  },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', title: 'Title 2', subTitle: 'Subtitle 2', description: 'Description 2', border_color:'#f1e40f'  },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', title: 'Title 2', subTitle: 'Subtitle 2', description: 'Description 2', border_color:'#0ebe2b' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', title: 'Title 2', subTitle: 'Subtitle 2', description: 'Description 2', border_color:'#1224e3'  },
  ];

}
