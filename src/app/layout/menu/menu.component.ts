import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menus: any[] = [
    {
      id: 1,
      name: 'Menu 1',
    },
    {
      id: 2,
      name: 'Menu 2',
    },
    {
      id: 3,
      name: 'Menu 3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  redirect(id: number) {
    console.log('id', id);
  }
}
