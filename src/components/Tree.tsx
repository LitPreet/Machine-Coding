import React, { useState } from "react";
import { RoleTreeInterface } from "../utils/data";

interface TreeProps {
  explorer: RoleTreeInterface;
  handleInsertNode: ({
    folderId,
    item,
    isFolder,
  }: {
    folderId: string;
    item: string;
    isFolder: boolean;
  }) => void;
}

export default function Tree({ explorer, handleInsertNode }: TreeProps) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const handleNewFolder = (e: any, isFolder: boolean) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
  const onAddFolder = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode({
        folderId: explorer.id,
        item: e.target.value,
        isFolder: showInput.isFolder,
      });

      setShowInput({ ...showInput, visible: false });
    }
  };
  if (explorer.isFolder)
    return (
      <div className="">
        <div
          className="bg-gray-500 my-2 w-[300px] flex justify-between items-center"
          onClick={() => setExpand(!expand)}
        >
          <span className="ml-4">📁 {explorer.name}</span>
          <div className="">
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="flex  items-start">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                onKeyDown={onAddFolder}
              />
            </div>
          )}

          {explorer.items.map((item) => (
            <Tree
              key={item.id}
              explorer={item}
              handleInsertNode={handleInsertNode}
            />
          ))}
        </div>
      </div>
    );
  else {
    return <span className="ml-3 flex flex-col">📄 {explorer.name}</span>;
  }
}
