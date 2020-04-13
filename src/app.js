class App extends React.Component{
    
    clickAlert(){
        alert('works')
    }
    
    render() {
        return (
        <button onClick={()=>this.clickAlert() }> Boton</button>
        )}    
}


ReactDOM.render(
    <App/>,
    document.getElementById("app")
);