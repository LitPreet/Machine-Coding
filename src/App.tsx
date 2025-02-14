// import Checkbox from './components/CheckboxCoding'
// import InfiniteScroll from './components/InfiniteScroll'
import { useContext, useEffect, useState } from "react";
import TrafficLight from "./components/TrafficLight";
import { RoleTreeInterface, explorer } from "./utils/data";
import Tree from "./components/Tree";
import { useTraverseTree } from "./hooks/use-traverse-tree";
// import UserClass from "./components/ClassBased";
// import React from "react";
// import PropQues from "./components/PropQues";
// import AutoComplete from "./components/AutoComplete";
// import PhoneLogin from "./components/PhoneLogin";
// import UseRef from "./hook/UseRef";
// import Timer from "./components/Timer";
// import InfiniteScroll from "./components/AbortPrevRequest";
// import InfiniteScrolling from "./components/InfiniteScrolling";
// import UseCallback from "./hook/UseCallback";
// import UseMemo from "./hook/UseMemo";
// import UseReducer from "./hook/UseReducer";
import { ThemeContext } from "./context/theme-provider";
// import MainPagination from "./components/MainPagination";
// import ProgressBar from "./components/ProgressBar";
// import PaginationInter from "./components/PaginationInter";
// import StepperForm from "./components/StepperForm";
// import Accordian from "./components/Accordian";
// import DummyStepper from "./components/DummyStepper";
import Stopwatch from "./components/StopWatch";
import InterviewPopup from "./components/InterviewPopup";
import Button from "./components/Button";
import Appy1 from "./outputbased/1";
import Carousel from "./components/Carousel";
import Game from "./components/Game";
import TicTacToe from "./components/Tic-Tac-Toe";
import CommentSection from "./components/nestedComments";
import NestedCheckboxes from "./components/NestedCheckboxes";
import GridLightCells from "./components/gridLightCells";
import TicketApp from "./components/Ticket-app";
function App() {
  const [explorerData, setExplorerData] = useState<RoleTreeInterface>(explorer);
  const { insertNode } = useTraverseTree();
  console.log("i render")
// import React from "react";
// import UserClass from "./components/ClassBased";

  const handleInsertNode = ({
    folderId,
    item,
    isFolder,
  }: {
    folderId: string;
    item: string;
    isFolder: boolean;
  }) => {
    const finalTree = insertNode({tree: explorerData, folderId, item, isFolder });
    setExplorerData(finalTree);
  };
 
  const context = useContext(ThemeContext)
  return (
    <div className={`${context?.theme === 'light' ? 'bg-purple-200' : 'bg-black text-white'}`}>
      <div className="flex gap-4">
      <button onClick={() => context?.setTheme('light')} className="bg-blue-500 p-2 text-white">light</button>
      <button onClick={() => context?.setTheme('dark')} className="bg-black p-2 text-white">dark</button>
      </div>
  
      <div className="flex justify-center h-screen items-center">
        {/* <Button /> */}
        {/* <Appy1 /> */}
      {/* <Checkbox /> */}
      {/* <InfiniteScroll /> */}
      {/* <TrafficLight /> */}
      {/* <Tree explorer={explorerData} handleInsertNode={handleInsertNode}/> */}
      {/* <UserClass name={"preet"}/> */}
      {/* <PropQues type={'div'} text={"hello"}/> */}
      {/* <AutoComplete /> */}
      {/* <PhoneLogin /> */}
      {/* <UseRef /> */}
      {/* <Timer /> */}
      {/* <InfiniteScrolling /> */}
      {/* <div>
      <h1>Loading Progress</h1>
      <ProgressBar />
    </div> */}
    {/* <PaginationInter /> */}
      {/* <UseCallback /> */}
      {/* <StepperForm /> */}
      {/* <DummyStepper /> */}
      {/* <Stopwatch />
      <InterviewPopup /> */}
      {/* <Accordian /> */}
      {/* <UseMemo /> */}
      {/* <MainPagination /> */}
      {/* <UseReducer /> */}
      {/* <Carousel /> */}
      {/* <Game /> */}
      {/* <TicTacToe /> */}
      {/* <CommentSection /> */}
      {/* <NestedCheckboxes /> */}
      {/* <GridLightCells /> */}
      <TicketApp />
      </div>
    </div>
  );
}
// class App extends React.Component{
//   constructor(props:any){
//     super(props);
//     this.state = {
//       count: 0
//     }
//     console.log("parent constructor");
//   }
//   addIncrement(){
//     this.setState((prev) => {
//      return {count: prev.count++}
//     })
//   }
//   componentDidMount(): void {
//     console.log("parent componentDidMount")
// }

//   render(){
//     console.log("parent render");
//     return (
//       <div className="flex justify-center h-screen items-center bg-purple-200">
//           <UserClass name={"preet"}/>
//           <UserClass name={"elon"}/>
//         </div>
//     )
//   }
// }

export default App;
