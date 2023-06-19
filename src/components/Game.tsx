import { useRef, useState } from "react";

type handleAddXOrOType = (target: HTMLDivElement, round: number) => void;
type checkWinFunctionType = (refs: HTMLDivElement[]) => boolean;
type resetGameFunctionType = (refs: HTMLDivElement[]) => void;

export default function Game() {
  let [round, setRound] = useState(0); // 0 means x and 1 means o
  let divOneRef = useRef(null);
  let divTwoRef = useRef(null);
  let divThreeRef = useRef(null);
  let divFourRef = useRef(null);
  let divFiveRef = useRef(null);
  let divSixRef = useRef(null);
  let divSevenRef = useRef(null);
  let divEightRef = useRef(null);
  let divNineRef = useRef(null);

  const resetGame: resetGameFunctionType = (refs: HTMLDivElement[]): void => {
    for (let div of refs) {
      div.innerHTML = "";
      div.dataset.disapled = "false";
    }
  };

  const checkWinFunction: checkWinFunctionType = (
    refs: HTMLDivElement[]
  ): boolean => {
    // checking for rows
    if (
      refs[0].innerHTML.trim() !== "" &&
      refs[1].innerHTML.trim() !== "" &&
      refs[2].innerHTML.trim() !== ""
    ) {
      if (
        refs[0].innerHTML === refs[1].innerHTML &&
        refs[0].innerHTML === refs[2].innerHTML
      ) {
        // First Row
        return true;
      }
    }
    if (
      refs[3].innerHTML.trim() !== "" &&
      refs[4].innerHTML.trim() !== "" &&
      refs[5].innerHTML.trim() !== ""
    ) {
      if (
        refs[3].innerHTML === refs[4].innerHTML &&
        refs[4].innerHTML === refs[5].innerHTML
      ) {
        // Second Row
        return true;
      }
    }
    if (
      refs[6].innerHTML.trim() !== "" &&
      refs[7].innerHTML.trim() !== "" &&
      refs[8].innerHTML.trim() !== ""
    ) {
      if (
        refs[6].innerHTML === refs[7].innerHTML &&
        refs[7].innerHTML === refs[8].innerHTML
      ) {
        // third Row
        return true;
      }
    }

    // first column
    if (
      refs[0].innerHTML.trim() !== "" &&
      refs[3].innerHTML.trim() !== "" &&
      refs[6].innerHTML.trim() !== ""
    ) {
      if (
        refs[0].innerHTML.trim() === refs[3].innerHTML.trim() &&
        refs[0].innerHTML.trim() === refs[6].innerHTML.trim()
      ) {
        return true;
      }
    }
    // second column
    if (
      refs[1].innerHTML.trim() !== "" &&
      refs[4].innerHTML.trim() !== "" &&
      refs[7].innerHTML.trim() !== ""
    ) {
      if (
        refs[1].innerHTML.trim() === refs[4].innerHTML.trim() &&
        refs[1].innerHTML.trim() === refs[7].innerHTML.trim()
      ) {
        return true;
      }
    }
    // third column
    if (
      refs[2].innerHTML.trim() !== "" &&
      refs[5].innerHTML.trim() !== "" &&
      refs[8].innerHTML.trim() !== ""
    ) {
      if (
        refs[2].innerHTML.trim() === refs[5].innerHTML.trim() &&
        refs[2].innerHTML.trim() === refs[8].innerHTML.trim()
      ) {
        return true;
      }
    }

    if (
      refs[0].innerHTML.trim() !== "" &&
      refs[4].innerHTML.trim() !== "" &&
      refs[8].innerHTML.trim() !== ""
    ) {
      if (
        refs[0].innerHTML.trim() === refs[4].innerHTML.trim() &&
        refs[0].innerHTML.trim() === refs[8].innerHTML.trim()
      ) {
        return true;
      }
    }

    if (
      refs[2].innerHTML.trim() !== "" &&
      refs[4].innerHTML.trim() !== "" &&
      refs[6].innerHTML.trim() !== ""
    ) {
      if (
        refs[2].innerHTML.trim() === refs[4].innerHTML.trim() &&
        refs[2].innerHTML.trim() === refs[6].innerHTML.trim()
      ) {
        return true;
      }
    }
    return false;
  };

  const handleAddXOrO: handleAddXOrOType = (
    target: HTMLDivElement,
    round: number
  ) => {
    let divs = [
      divOneRef.current!,
      divTwoRef.current!,
      divThreeRef.current!,
      divFourRef.current!,
      divFiveRef.current!,
      divSixRef.current!,
      divSevenRef.current!,
      divEightRef.current!,
      divNineRef.current!,
    ];
    if (target.dataset.disapled === "true") {
      return;
    }
    if (round === 0) {
      // X Round
      target.innerHTML = "X";
      target.dataset.disapled = "true";
      let isWin: boolean = checkWinFunction(divs);
      if (isWin) {
        divs.map((div: HTMLDivElement) => {
          div.dataset.disapled = "true";
        });
        setTimeout(() => {
          alert("X Player Wins!");
          resetGame(divs);
          return;
        }, 300);
      }
      setRound(1);
    } else if (round === 1) {
      // O Round
      target.innerHTML = "O";
      target.dataset.disapled = "true";
      let isWin: boolean = checkWinFunction(divs);
      if (isWin) {
        divs.map((div: HTMLDivElement) => {
          div.dataset.disapled = "true";
        });
        setTimeout(() => {
          alert("O Player Wins!");
          resetGame(divs);
          return;
        }, 300);
      }
      setRound(0);
    }
  };

  return (
    <div className="game">
      <div
        className="box"
        onClick={(e) => handleAddXOrO(e.target as HTMLDivElement, round)}
        ref={divOneRef}
      ></div>
      <div
        className="box"
        onClick={(e) => handleAddXOrO(e.target as HTMLDivElement, round)}
        ref={divTwoRef}
      ></div>
      <div
        className="box"
        onClick={(e) => handleAddXOrO(e.target as HTMLDivElement, round)}
        ref={divThreeRef}
      ></div>
      <div
        className="box"
        onClick={(e) => handleAddXOrO(e.target as HTMLDivElement, round)}
        ref={divFourRef}
      ></div>
      <div
        className="box"
        onClick={(e) => handleAddXOrO(e.target as HTMLDivElement, round)}
        ref={divFiveRef}
      ></div>
      <div
        className="box"
        onClick={(e) => handleAddXOrO(e.target as HTMLDivElement, round)}
        ref={divSixRef}
      ></div>
      <div
        className="box"
        onClick={(e) => handleAddXOrO(e.target as HTMLDivElement, round)}
        ref={divSevenRef}
      ></div>
      <div
        className="box"
        onClick={(e) => handleAddXOrO(e.target as HTMLDivElement, round)}
        ref={divEightRef}
      ></div>
      <div
        className="box"
        onClick={(e) => handleAddXOrO(e.target as HTMLDivElement, round)}
        ref={divNineRef}
      ></div>
    </div>
  );
}
