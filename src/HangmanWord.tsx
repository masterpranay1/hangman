type HangmanWordProps = {
  wordToGuess: string;
  guessLetters: string[];
  reveal?: boolean;
}

export function HangmanWord({ wordToGuess, guessLetters, reveal = false} : HangmanWordProps) {
  const word = wordToGuess;
  const guessedLetters = guessLetters;
  return (
    <div style={{
      display: "flex",
      gap: ".25em",
      fontSize: "6rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontFamily: "monospace",

    }}>
      {
        word.split("").map((letter, index) => (
          <span style={{ borderBottom: ".1em solid black" }} key={index}>
            <span style={{
              visibility: guessedLetters.includes(letter) ||  reveal ? 'visible' : 'hidden',
              color: !guessLetters.includes(letter) && reveal ? 'red' : 'black'
            }}>
              {letter}
            </span>
          </span>
        ))
      }
    </div>
  )
}