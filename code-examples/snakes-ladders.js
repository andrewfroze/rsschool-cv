function minimumRollsRequired(boardSize, numberOfDice, snakesAndLadders) {
  let minRoll = numberOfDice;
  let maxRoll = numberOfDice * 6;
  const visitedCells = new Set([0]);
  let currentPositions = [0];
  let rolls = 0;
  
  while (currentPositions.length > 0) {
    const nextPositions = [];

    for (const position of currentPositions) {
      for (let dice = minRoll; dice <= maxRoll; dice++) {
        let next = position + dice;

        if (next > boardSize) {
          next = position;
        }

        next = snakesAndLadders[next] ?? next;

        if (next === boardSize) {
          return rolls + 1;
        }


        if (!visitedCells.has(next)) {
          visitedCells.add(next);
          nextPositions.push(next);
        }
      }
    }

    currentPositions = nextPositions;
    rolls++;
  }
  
  return -1;
}