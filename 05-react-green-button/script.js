const App = ({initialButtonText, initialClassesList }) => {
    const [buttonText, setVButtonText] = React.useState(initialButtonText)
    const [classesList, setClassesList] = React.useState(initialClassesList)

    const onButtonClick = () => {
        setVButtonText('Hello from React')
        setClassesList('button')
    }
    return (

        <div className="app">
            <button onClick={onButtonClick} className={classesList}>{buttonText}</button>
        </div>
    )
}


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText={"Click me"} initialClassesList=''/>)