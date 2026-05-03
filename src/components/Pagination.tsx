import { Button } from "./Button";
import leftSvg from "../assets/left.svg";
import rightSvg from "../assets/right.svg";

type Props = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex flex-1 justify-center items-center gap-2">
      <Button
        onClick={onPrevious}
        disabled={current === 1}
        variant="iconSmall"
        className="disabled:cursor-default"
      >
        <img src={leftSvg} alt="Ícone de voltar" />
      </Button>
      <span className="text-sm text-gray-200">
        {current}/{total}
      </span>
      <Button
        onClick={onNext}
        disabled={current === total}
        variant="iconSmall"
        className="disabled:cursor-default"
      >
        <img src={rightSvg} alt="Ícone de avançar" />
      </Button>
    </div>
  );
}
