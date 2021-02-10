import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICharacterResponse } from '../interfaces/character.interface';

@Injectable({
  providedIn: ServicesModule
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICharacterResponse> {
    return this.http.get<ICharacterResponse>(`${environment.api}/api/character`);
  }
}
