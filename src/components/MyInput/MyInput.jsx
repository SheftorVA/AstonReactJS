import React from "react";
import MyButton from "./MyButton/MyButton";

class MyInput extends React.Component {
    constructor (props) {
      super(props)
      this.state = {text: 'Введите текст'}
      this.inputText = React.createRef()
    
      //this.inputChange = this.inputChange.bind(this)
      this.inputSubmit = this.inputSubmit.bind(this)
      this.disabled = false
    
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

    // inputChange(event) {
    //   this.setState({text: event.target.value})
    //   // if (this.inputText.current.value === 'реакт'){
    //   //   alert('условие для дизэйбла')
    //   }
    // }

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
      console.log(this.inputText.current.value)
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
                  <input ref={this.inputText} type="text" value={this.state.text} onChange={(event) => {
                    this.setState({text: event.target.value})

                    this.inputText.current.value === 'реакт' 
                    ? this.disabled = true 
                    : this.disabled = false
                    }
                  } 
                />
              <MyButton buttonText={`Disabled: ${this.disabled}`} disabled={this.disabled}/>
              <MyButton buttonText={'Установить фокус в инпут'}  onClick={(event) =>{
                event.preventDefault()
                this.inputText.current.focus();
              }}/>
              </form>
            </div>
          </div>  
        )
    }
}

export default MyInput