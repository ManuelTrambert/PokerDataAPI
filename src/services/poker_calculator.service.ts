import { Injectable } from '@nestjs/common';
import { listCards } from '../config/cards';
import { calculateEquity } from 'poker-odds'
import { type } from 'os';

@Injectable()
export class PokerCalculatorService {

    async percentageVs(cards, boardL) {
        let board = [];
        let hands = [];

        cards = cards.split(',');
        for (let i = 0; i < cards.length; i += 1) {
            cards[i] = Number(cards[i]);
        }

        if (boardL && boardL.length > 0) {
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

        for (let i = 0; i < cards.length; i += 1) {
            if (i % 2 === 0) {
                const resCardOne = listCards.find((card) => {
                    return card.id === cards[i];
                });

                const resCardSecond = listCards.find((card) => {
                    return card.id === cards[i + 1];
                });

                hands.push([resCardOne.letterName + resCardOne.letterType, resCardSecond.letterName + resCardSecond.letterType]);
            }
        }

        return await calculateEquity(hands, boardCalculator);
    }

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
        if (resCardOne.id !== 8 && resCardSecond.id !== 8) {
            adverse[0] = 'Qh';
        } else if (resCardOne.id !== 9 && resCardSecond.id !== 9) {
            adverse[0] = 'Qs'
        } else {
            adverse[0] = 'Qc'
        }

        if (resCardOne.id !== 26 && resCardSecond.id !== 26) {
            adverse[1] = '8c';
        } else if (resCardOne.id !== 27 && resCardSecond.id !== 27) {
            adverse[1] = '8d'
        } else {
            adverse[1] = '8h'
        }

        const result = await calculateEquity([[resCardOne.letterName + resCardOne.letterType, resCardSecond.letterName + resCardSecond.letterType], adverse], boardCalculator);
        if (resCardOne.letterName === resCardSecond.letterName) {
            result[0].advice = 'Vous pouvez jouer de manière agressive ici votre jeu est assez fort.';
        } else if (resCardOne.letterType === resCardSecond.letterType && resCardOne.id < 20 && resCardSecond.id < 20) {
            result[0].advice = 'Vous pouvez jouer cette main mais avec prudence il est possible que vous ne touchiez rien sur le board et votre adversaire une paire. Jouez de manière réfléchie et n\'engagez pas plus de 10% de votre stack';;
        } else if (resCardOne.id < 16 && resCardSecond.id < 16) {
            result[0].advice = 'Vous avez une belle main ici mais beaucoup de chance de ne rien avoir sur le board. Jouez au maximum 5% de votre stack';;
        } else if ((resCardOne.id < 12 || resCardSecond.id < 12)) {
            result[0].advice = 'Celà pourrait être une belle main mais dépend énormément de ce qu\'il va tomber sur le board. Attendez de voir comment vos adversaires vont jouer. N\'engagez pas plus de 2% de votre stack';
        } else {
            result[0].advice = 'Mis à part si vous avez déjà misé la grosse blind, ou vous êtes au bouton et souhaitez tenter un bluff il faut vous coucher.';
        }
        return result;
    }
}
