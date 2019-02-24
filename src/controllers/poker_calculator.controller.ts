import {Controller, Get, Query, UseGuards} from '@nestjs/common';
import {PokerCalculatorService} from '../services/poker_calculator.service';
import {AuthGuard} from '@nestjs/passport';

@Controller('PokerCalculator')
export class PokerCalculatorController {
    constructor(private readonly pokerCalculatorService: PokerCalculatorService) {
    }

    @Get('/percent')
    @UseGuards(AuthGuard('bearer'))
    getPercentToAmeliorate(@Query('idS') idS, @Query('idF') idF, @Query('board') board) {
        return this.pokerCalculatorService.percentageForOneHand(Number(idS), Number(idF), board);
    }
}
