import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div className="">
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h2 className="text-12 font-semibold text-white">{userName}</h2>
              <h3 className="text-12 font-semibold text-white">●● / ●●</h3>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">{1234}</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="" />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt=""
            className="ml-5 "
          />
        </div>
        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="line"
          className="absolute left-0 top-0"
        />
      </Link>

      {/* COPY */}
    </div>
  );
};

export default BankCard;
