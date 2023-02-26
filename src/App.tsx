import { useCallback, useEffect, useState } from 'react';
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';

const words = ['apple', 'banana', 'orange', 'strawberry', 'pineapple'];

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const inCorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
      if(guessedLetters.includes(letter) || isLoser || isWinner ) return

      setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(!isLoser && !isWinner) return
      if(key !== 'Enter') return

      e.preventDefault()
      setWordToGuess(words[Math.floor(Math.random() * words.length)])
      setGuessedLetters([])
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [isLoser, isWinner])

  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems : "center"
    }}>
      <div style={{ fontSize : "2rem", textAlign : "center" }}> 
        {
          isLoser ? 'You lose. Press Enter to Play Again' : isWinner ? 'You win. Press Enter to Play Again' : 'Guess the word'  
        }
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length}/>
      <HangmanWord reveal={isLoser} guessLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard 
        disabled={isLoser || isWinner}
        activeLetter={
          guessedLetters.filter(letter => wordToGuess.includes(letter))
        } 
        inactiveLetter={inCorrectLetters} addGuessLetter={addGuessedLetter}/>
      </div>
    </div>
  );
}

export default App;
