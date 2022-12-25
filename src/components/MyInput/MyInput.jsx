import React from "react";
import MyButton from "./MyButton/MyButton";

class MyInput extends React.Component {
    constructor (props) {
      super(props)
      this.state = {text: 'Введите текст'}
    
      this.inputChange = this.inputChange.bind(this)
      this.inputSubmit = this.inputSubmit.bind(this)
    
    }
    componentWillMount() {
      console.log('__componentWillmount__')
    }

    componentDidMount(){
      console.log('__componentDidMount__')
    }

    componentWillUnmount() {
      console.log('--componentWillUnmount--')
    }

    inputChange(event) {
      this.setState({text: event.target.value})
    }

    inputSubmit(event){
      console.log('submit')
      alert('Введенный текст:' + this.state.text)
      event.preventDefault();
    }

    shouldComponentUpdate(nextProps, nextState){
     console.log('shouldComponentUpdate')
     return true
    }

    componentWillUpdate(nextProps, nextState) {
      console.log('componentWillupdate');
    }
   
    componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate')
    }

    render() {
      console.log('render')
        return (
          <div>
            <div>
              <form onSubmit={this.inputSubmit}>
                <label>
                  Текст:
                </label>  
                  <input type="text" value={this.state.text} onChange={this.inputChange} />
                <MyButton buttonText={'ТЕКСТ'}/>
              </form>
            </div>
          </div>  
        )
    }
}

export default MyInput