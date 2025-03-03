import { useState } from "react";

const DragNDrop = () => {
  const [columns, setColumn] = useState({
    column1: [
      { id: 1, content: "Item 1" },
      { id: 2, content: "Item 2" },
      { id: 3, content: "Item 3" },
    ],
    column2: [
      { id: 4, content: "Item 4" },
      { id: 5, content: "Item 5" },
    ],
  });
const [draggedItem ,setDragedItem] = useState(null)
  const handleDragStart = (e:any, item:any, sourceColName: any) => {
    setDragedItem({item,sourceColName})
    e.dataTransfer.effectAllowed = "move";

     // This is needed for Firefox
     e.dataTransfer.setData("text/plain", item.id);
  }
const handleDragOver = (e:any) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
}

const handleDrop = (e:any, targetColName:string) => {
    e.preventDefault();
    if(!draggedItem) return;
    if(targetColName === draggedItem.sourceColName) return;

    const {item,sourceColName} = draggedItem
    const newCols = {...columns};
    newCols[sourceColName] = columns[sourceColName].filter((y) => y.id !== item.id);

    newCols[targetColName] = [...columns[targetColName],item];
    setColumn(newCols);
    setDragedItem(null);
}

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      {Object.keys(columns).map((columnName: string, i) => (
        <div
          key={i}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, columnName)}
          className="w-[300px] h-[400px] flex  flex-col justify-start items-center border border-black"
        >
          <h1>{columnName === "column1" ? "Column 1" : "Column 2"}</h1>
          <div className="w-[80%] flex flex-col items-center gap-7">
            {columns[columnName].map((item: any, i: number) => (
              <div key={i} draggable onDragStart={(e) => handleDragStart(e,item, columnName)} className="w-full cursor-move p-3 border border-black">
                {item.content}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default DragNDrop;
