import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is test', 'data:image/jpeg;base64,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')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}