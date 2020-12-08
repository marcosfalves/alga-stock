import React from 'react'

class ClassComponent extends React.Component<{ name: string}> {
    constructor(props: any){
        super(props)
        console.log('constructor reached');
    }

    state = {
        name: 'Mundo'
    }

    componentDidMount(){
        console.log('did mount reached');
    }

    componentDidUpdate(){
        console.log('did update reached');
    }

    render(){
        console.log('render reached');

        return <div>
        
        <div>Olá {this.props.name}!</div>
        <div>Olá {this.state.name}!!. Eu sou um componente baseado em classe!</div>
        <p>name: {this.state.name}</p>
        <button onClick={() => {
            this.setState({ name: 'Daniel'});
        }}>Click me</button>

        </div>
    }
}

export default ClassComponent