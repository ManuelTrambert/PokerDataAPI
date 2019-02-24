import {Module} from '@nestjs/common';
import {PokerCalculatorController} from '../controllers/poker_calculator.controller';
import {PokerCalculatorService} from '../services/poker_calculator.service';

@Module({
    imports: [],
    providers: [PokerCalculatorService],
    controllers: [PokerCalculatorController],
})
export class PokerCalculatorModule {
}
