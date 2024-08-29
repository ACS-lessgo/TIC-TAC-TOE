export const WINNING_COMBINATIONS = [
    // Horizontal winning combinations
    [
      { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 } // Top row
    ],
    [
      { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 } // Middle row
    ],
    [
      { row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 } // Bottom row
    ],
  
    // Vertical winning combinations
    [
      { row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 } // Left column
    ],
    [
      { row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 } // Middle column
    ],
    [
      { row: 0, col: 2 }, { row: 1, col: 2 }, { row: 2, col: 2 } // Right column
    ],
  
    // Diagonal winning combinations
    [
      { row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 } // Top-left to bottom-right diagonal
    ],
    [
      { row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 } // Top-right to bottom-left diagonal
    ]
  ];
  