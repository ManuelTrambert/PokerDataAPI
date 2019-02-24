const HEART = 13;
const SPADE = 14;
const CLUB = 15;
const DIAMOND = 16;

const AS = 0;
const TWO = 1;
const THREE = 2;
const FOUR = 3;
const FIVE = 4;
const SIX = 5;
const SEVEN = 6;
const EIGHT = 7;
const NINE = 8;
const TEN = 9;
const JACK = 10;
const QUEEN = 11;
const KING = 12;

const listCards = [
    {name: AS, id: 0, type: HEART, letterName: 'A', letterType: 'h'},
    {name: AS, id: 1, type: SPADE, letterName: 'A', letterType: 's'},
    {name: AS, id: 2, type: CLUB, letterName: 'A', letterType: 'c'},
    {name: AS, id: 3, type: DIAMOND, letterName: 'A', letterType: 'd'},
    {name: KING, id: 4, type: HEART, letterName: 'K', letterType: 'h'},
    {name: KING, id: 5, type: SPADE, letterName: 'K', letterType: 's'},
    {name: KING, id: 6, type: CLUB, letterName: 'K', letterType: 'c'},
    {name: KING, id: 7, type: DIAMOND, letterName: 'K', letterType: 'd'},
    {name: QUEEN, id: 8, type: HEART, letterName: 'Q', letterType: 'h'},
    {name: QUEEN, id: 9, type: SPADE, letterName: 'Q', letterType: 's'},
    {name: QUEEN, id: 10, type: CLUB, letterName: 'Q', letterType: 'c'},
    {name: QUEEN, id: 11, type: DIAMOND, letterName: 'Q', letterType: 'd'},
    {name: JACK, id: 12, type: HEART, letterName: 'J', letterType: 'h'},
    {name: JACK, id: 13, type: SPADE, letterName: 'J', letterType: 's'},
    {name: JACK, id: 14, type: CLUB, letterName: 'J', letterType: 'c'},
    {name: JACK, id: 15, type: DIAMOND, letterName: 'J', letterType: 'd'},
    {name: TEN, id: 16, type: HEART, letterName: 'T', letterType: 'h'},
    {name: TEN, id: 17, type: SPADE, letterName: 'T', letterType: 's'},
    {name: TEN, id: 18, type: CLUB, letterName: 'T', letterType: 'c'},
    {name: TEN, id: 19, type: DIAMOND, letterName: 'T', letterType: 'd'},
    {name: NINE, id: 20, type: HEART, letterName: '9', letterType: 'h'},
    {name: NINE, id: 21, type: SPADE, letterName: '9', letterType: 's'},
    {name: NINE, id: 22, type: CLUB, letterName: '9', letterType: 'c'},
    {name: NINE, id: 23, type: DIAMOND, letterName: '9', letterType: 'd'},
    {name: EIGHT, id: 24, type: HEART, letterName: '8', letterType: 'h'},
    {name: EIGHT, id: 25, type: SPADE, letterName: '8', letterType: 's'},
    {name: EIGHT, id: 26, type: CLUB, letterName: '8', letterType: 'c'},
    {name: EIGHT, id: 27, type: DIAMOND, letterName: '8', letterType: 'd'},
    {name: SEVEN, id: 28, type: HEART, letterName: '7', letterType: 'h'},
    {name: SEVEN, id: 29, type: SPADE, letterName: '7', letterType: 's'},
    {name: SEVEN, id: 30, type: CLUB, letterName: '7', letterType: 'c'},
    {name: SEVEN, id: 31, type: DIAMOND, letterName: '7', letterType: 'd'},
    {name: SIX, id: 32, type: HEART, letterName: '6', letterType: 'h'},
    {name: SIX, id: 33, type: SPADE, letterName: '6', letterType: 's'},
    {name: SIX, id: 34, type: CLUB, letterName: '6', letterType: 'c'},
    {name: SIX, id: 35, type: DIAMOND, letterName: '6', letterType: 'd'},
    {name: FIVE, id: 36, type: HEART, letterName: '5', letterType: 'h'},
    {name: FIVE, id: 37, type: SPADE, letterName: '5', letterType: 's'},
    {name: FIVE, id: 38, type: CLUB, letterName: '5', letterType: 'c'},
    {name: FIVE, id: 39, type: DIAMOND, letterName: '5', letterType: 'd'},
    {name: FOUR, id: 40, type: HEART, letterName: '4', letterType: 'h'},
    {name: FOUR, id: 41, type: SPADE, letterName: '4', letterType: 's'},
    {name: FOUR, id: 42, type: CLUB, letterName: '4', letterType: 'c'},
    {name: FOUR, id: 43, type: DIAMOND, letterName: '4', letterType: 'd'},
    {name: THREE, id: 44, type: HEART, letterName: '3', letterType: 'h'},
    {name: THREE, id: 45, type: SPADE, letterName: '3', letterType: 's'},
    {name: THREE, id: 46, type: CLUB, letterName: '3', letterType: 'c'},
    {name: THREE, id: 47, type: DIAMOND, letterName: '3', letterType: 'd'},
    {name: TWO, id: 48, type: HEART, letterName: '2', letterType: 'h'},
    {name: TWO, id: 49, type: SPADE, letterName: '2', letterType: 'S'},
    {name: TWO, id: 50, type: CLUB, letterName: '2', letterType: 'c'},
    {name: TWO, id: 51, type: DIAMOND, letterName: '2', letterType: 'd'},
];

export {listCards};