import {Injectable} from '@nestjs/common';
import {listCards} from '../config/cards';
import {listHands} from '../config/hands';
import {calculateEquity} from 'poker-odds'

@Injectable()
export class PokerCalculatorService {

    async percentageForOneHand(cardOne, cardSecond, boardL) {

        let board = [];
        if (boardL.length > 0) {
            board = boardL.split(',');
        }
        const boardCalculator = [];

        for (let i = 0; i < board.length; i += 1) {
            if (typeof board[i] === 'string') {
                board[i] = Number(board[i]);
            }
            board[i] = listCards.find((card) => {
                return card.id === board[i];
            });
            boardCalculator.push(board[i].letterName + board[i].letterType);
        }
        const resCardOne = listCards.find((card) => {
            return card.id === cardOne;
        });
        const resCardSecond = listCards.find((card) => {
            return card.id === cardSecond;
        });

        const result = await calculateEquity([[resCardOne.letterName + resCardOne.letterType, resCardSecond.letterName + resCardSecond.letterType]], boardCalculator);
        result[0].handChances.forEach((hands) => {
            console.log('Hand : ',hands);
        });
        return result[0].handChances;
    }
}
