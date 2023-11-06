import { useEffect } from "react";

type ModifierKeys =
  | "Alt"
  | "AltGraph"
  | "CapsLock"
  | "Control"
  | "Fn"
  | "FnLock"
  | "Hyper"
  | "Meta"
  | "NumLock"
  | "ScrollLock"
  | "Shift"
  | "Super"
  | "Symbol"
  | "SymbolLock";
type WhitespaceKeys = "Enter" | "Tab" | " ";
type NavigationKeys =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "End"
  | "Home"
  | "PageDown"
  | "PageUp";
type FunctionKeys =
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12"
  | "F13"
  | "F14"
  | "F15"
  | "F16"
  | "F17"
  | "F18"
  | "F19"
  | "F20"
  | "Soft1"
  | "Soft2"
  | "Soft3"
  | "Soft4";
type NumericKeypadKeys =
  | "Decimal"
  | "Key11"
  | "Key12"
  | "Multiply"
  | "Add"
  | "Clear"
  | "Divide"
  | "Subtract"
  | "Separator"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

type UpperAlpha =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";
type LowerAlpha =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

type KeyboardEventKeys =
  | ModifierKeys
  | WhitespaceKeys
  | NavigationKeys
  | FunctionKeys
  | NumericKeypadKeys
  | LowerAlpha
  | UpperAlpha;

export const useKeyPress = (
  targetKey: KeyboardEventKeys,
  onKeyDown: (ev: KeyboardEvent) => void,
  targetElement?: HTMLElement
) => {
  useEffect(() => {
    const target = targetElement ?? window;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        onKeyDown(event);
      }
    };

    target.addEventListener("keydown", handleKeyDown as EventListener);

    return () => {
      target.removeEventListener("keydown", handleKeyDown as EventListener);
    };
  }, [targetKey, onKeyDown, targetElement]);
};
