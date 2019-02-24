const listHands = {
    EQUITY: 0,
    HIGH_CARD: {
        outs: 0,
        probability: 100,
        sameCards: [1]
    },
    PAIR: {
        outs: 0,
        probability: 0,
        sameCards: [2]
    },
    DOUBLE_PAIR: {
        outs: 0,
        probability: 0,
        sameCards: [2, 2]
    },
    BRELAN: {
        outs: 0,
        probability: 0,
        sameCards: [3]
    },
    STRAIGHT: {
        outs: 0,
        probability: 0
    },
    FLUSH: {
        outs: 0,
        probability: 0
    },
    FULL: {
        outs: 0,
        probability: 0,
        sameCards: [3, 2]
    },
    SQUARE: {
        outs: 0,
        probability: 0,
        sameCards: [4]
    },
    STRAIGHT_FLUSH: {
        outs: 0,
        probability: 0
    },
    ROYAL_FLUSH: {
        outs: 0,
        probability: 0
    }
};

export { listHands };