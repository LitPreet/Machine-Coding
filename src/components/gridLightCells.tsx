import React, { useState } from "react";

function Cell({ filled, onClick,isDisabled }: { filled: boolean; onClick: () => void, isDisabled:boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`${
        filled ? "bg-green-400" : "bg-transparent"
      } border border-black w-12 h-12`}
    ></button>
  );
}

const GridLightCells = () => {
  const [order, setOrder] = useState<number[]>([]);
  const [deactivating, setDeactivating] = useState<boolean>(false);
  const config = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  const deactivateCells = () => {
    setDeactivating(true)
    const timer = setInterval(() => {
      setOrder((prev:number[]) => {
        const newOrder = prev.slice();
        console.log(newOrder, 'a')
        newOrder.pop();
        if(newOrder.length === 0){
            clearInterval(timer);
            setDeactivating(false); 
        } 
        return newOrder;
      })
    },300)
  };
  const activateCells = (index: number) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };
  
  return (
    <div>
      <div className={`grid grid-cols-${config[0].length} gap-4`}>
        {config.flat(1).map((value: number, index: number) => {
          return value ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || deactivating}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
};

export default GridLightCells;
