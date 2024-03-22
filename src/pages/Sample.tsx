import { useQuery } from '@tanstack/react-query';
import { getCoffee } from '../api/coffee';
import { useState } from 'react';

export function Sample() {
  const [type, setType] = useState<'iced' | 'hot'>('hot');
  const coffees = useQuery({
    queryKey: ['coffee', type],
    queryFn: async () => await getCoffee(type)
  });

  console.log(coffees);
  return (
    <div className="flex size-full flex-col gap-5 overflow-auto">
      샘플페이지
      <h1 className="text-xl">커피 목록</h1>
      <div className="flex gap-10">
        <button
          className="rounded-lg bg-blue-300 px-8 py-2"
          onClick={() => setType('iced')}
        >
          ICE
        </button>
        <button
          className="rounded-lg bg-red-300 px-8 py-2"
          onClick={() => setType('hot')}
        >
          HOT
        </button>
      </div>
      <div className="flex flex-wrap gap-5">
        {coffees.data?.map(coffee => {
          return (
            <div key={coffee.id} className="w-20">
              <img src={coffee.image} className="size-14" />
              <div>{coffee.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
