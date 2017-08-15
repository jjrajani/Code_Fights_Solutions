function electionsWinners(votes, k) {
    let maxIndex = 0, possibleWinners = 0, result = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === votes[maxIndex]) {
            possibleWinners++;
        }
        if (votes[i] > votes[maxIndex]) {
            maxIndex = i;
            possibleWinners = 1;
        }
    }

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] + k > votes[maxIndex]) {
            result++;
        }
        if (votes[i] + k === votes[maxIndex] && maxIndex === i && possibleWinners === 1) {
            result++;
        }
    }
    return result;
}
