import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gradientDark to-gradientLight">
      <div className="bg-purple w-[25.625rem] h-[11.5rem] flex items-center justify-center rounded-t-xl">
        <Image
          className="mb-12"
          src="/images/smartwatch.svg"
          alt="smartwatch"
          width={140}
          height={232}
        />
      </div>
      <div className="bg-white w-[25.625rem] h-[23.5rem] rounded-b-xl p-[3rem]">
        <h1 className="flex justify-center font-bold text-xl">
          Avalie o produto
        </h1>
        <h2 className="flex justify-center text-base">
          O que você achou do produto
        </h2>
        <h2 className="flex justify-center text-base text-purple pb-8">
          Smartwatch Amazfit Bip U Pro?
        </h2>
        <div className="flex flex-row items-center justify-center gap-6 pb-8">
          <Image src="images/star.svg" width={32} height={32} alt="star" />
          <Image src="images/star.svg" width={32} height={32} alt="star" />
          <Image src="images/star.svg" width={32} height={32} alt="star" />
          <Image src="images/star.svg" width={32} height={32} alt="star" />
          <Image src="images/star.svg" width={32} height={32} alt="star" />
        </div>
        <Button
          variant={'purple'}
          className="w-[19.625rem] h-[3.5rem] flex justify-between"
        >
          Confirmar <ArrowRightIcon />
        </Button>
      </div>
    </main>
  );
}
