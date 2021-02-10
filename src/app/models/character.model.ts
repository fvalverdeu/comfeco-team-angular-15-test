import { ICharacter } from '../interfaces/character.interface';

export class Character {
  id:       number;
  name:     string;
  species:  string;
  gender:   string;
  origin:   string;
  image:    string;

  constructor(data?: ICharacter) {
    this.id = data?.id ? data.id : 0;
    this.name = data?.name ? data.name : '';
    this.species = data?.species ? data.species : '';
    this.gender = data?.gender ? data.gender : '';
    this.origin = data?.origin ? data.origin.name : '';
    this.image = data?.image ? data.image : '';
  }
}
