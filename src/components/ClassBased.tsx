import React from "react";
interface Props {
  name: string;
}
interface State {
//   count: number;
id: string;
name: string;
}
class UserClass extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // console.log(props);

    this.state = {
    //   count: 0,
    id:'',
    name:''
    };
    console.log("constructor called")
  }

  async componentDidMount(): Promise<any> {
      console.log("child componentDidMount")
      const data = await fetch("https://api.restful-api.dev/objects/7");
      const response = await data.json();
      this.setState({
        id: response.id,
        name: response.name,
      })
    //   console.log(response)
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
      console.log('componentDidUpdate', prevProps, prevState, snapshot)
  }
//if we want to establish like useEffect in class based component
// componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
//    if(this.state.id !== prevState.id) {
//     //do something with
//    }
// }
  componentWillUnmount(): void {
      console.log('componentWillUnmount')
  }

  render() {
    // const { name } = this.props;
    const { name,id } = this.state;
    console.log("render called")
    return (
      <div className="bg-red-300">
        <p>id: {id}</p>
        <p>Name: {name}</p>
        {/* <button onClick={() =>  this.setState({ count: this.state.count + 1 })}>add</button> */}
      </div>
    );
  }
}
export default UserClass;
