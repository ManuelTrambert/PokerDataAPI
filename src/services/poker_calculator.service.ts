import {Injectable} from '@nestjs/common';
import {listCards} from '../config/cards';
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

        let adverse = [];
        if (resCardOne.id !== 8  && resCardSecond.id !== 8) {
            adverse[0] = 'Qh';
        } else if (resCardOne.id !== 9 && resCardSecond.id !== 9) {
            adverse[0] = 'Qs'
        } else {
            adverse[0] = 'Qc'
        }

        if (resCardOne.id !== 26  && resCardSecond.id !== 26) {
            adverse[1] = '8c';
        } else if (resCardOne.id !== 27 && resCardSecond.id !== 27) {
            adverse[1] = '8d'
        } else {
            adverse[1] = '8h'
        }

        const result = await calculateEquity([[resCardOne.letterName + resCardOne.letterType, resCardSecond.letterName + resCardSecond.letterType], adverse], boardCalculator);
        return result;
    }
}
