import { Link } from "react-router";

export type RefundItemProps = {
  id: string;
  name: string;
  description: string;
  amount: string;
  categoryImg: string;
};

type Props = {
  data: RefundItemProps;
  href: string;
  className?: string;
};

export function RefundItem({ data, href, className }: Props) {
  return (
    <Link
      className={`flex items-center gap-3 hover:bg-green-100/5 cursor-pointer rounded-md p-2 ${className ?? ""}`}
      to={href}
    >
      <img
        className="w-8 h-8"
        src={data.categoryImg}
        alt="Ícone da categoria"
      />

      <div className="flex flex-col flex-1">
        <strong className="text-sm text-gray-100">{data.name}</strong>
        <span className="text-xs text-gray-200">{data.description}</span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$</small>
        {data.amount}
      </span>
    </Link>
  );
}
