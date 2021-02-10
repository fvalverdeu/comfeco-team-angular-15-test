import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/character.interface';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Character[];

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(): void {
    this.characterService.getAll().subscribe(response => {
      this.characters = response.results.map((item: ICharacter) => new Character(item));
    });
  }
}
