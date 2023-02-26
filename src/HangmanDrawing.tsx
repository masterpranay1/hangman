const HEAD = (
  <div style={{
    width : "50px",
    height : "50px",
    borderRadius: "100%",
    border: "10px solid black",
    position: "absolute",
    top : "50px",
    right : "-30px"
  }}/>
)

const BODY = (
  <div style={{
    width : "10px",
    height : "100px",
    position: "absolute",
    background: "black",
    top : "120px",
    right : "0px"
  }}/>
)

const RIGHTARM = (
  <div style={{
    width : "100px",
    height : "10px",
    position: "absolute",
    background: "black",
    top : "150px",
    right : "-100px",
    rotate: "-30deg",
    transformOrigin: "left bottom"
  }}/>
)

const LEFTARM = (
  <div style={{
    width : "100px",
    height : "10px",
    position: "absolute",
    background: "black",
    top : "150px",
    right : "10px",
    rotate: "30deg",
    transformOrigin: "right bottom"
  }}/>
)

const RIGHTLEG = (
  <div style={{
    width : "100px",
    height : "10px",
    position: "absolute",
    background: "black",
    top : "210px",
    right : "-90px",
    rotate: "60deg",
    transformOrigin: "left bottom"
  }}/>
)
const LEFTLEG = (
  <div style={{
    width : "100px",
    height : "10px",
    position: "absolute",
    background: "black",
    top : "210px",
    right : "0px",
    rotate: "-60deg",
    transformOrigin: "right bottom"
  }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG]

type HangmanDrawingProps = {
  numberOfGuesses: number;
}

export function HangmanDrawing({ numberOfGuesses } : HangmanDrawingProps) {
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: "absolute",
          top : "0",
          right: "0"
        }}
      />
      <div
        style={{
          height: '10px',
          width: '200px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div style={{ height: '10px', width: '250px', background: 'black' }} />
    </div>
  );
}
