import { Component, inject } from '@angular/core';
import { GameService } from '../core/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gameService = inject(GameService)
  games$ = this.gameService.getGames()

}
