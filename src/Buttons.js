

function Buttons(props) {

    function handlePlus() {
        props.setCounter(props.counter + 1);
    }

    function handleMinus() {
        props.setCounter(props.counter - 1);
    }
    return(
    <div>
        <div>
            <button onClick={handlePlus}>плюс</button>
            <button onClick={handleMinus}>минус</button>
        </div>
    </div>
    )
}
export default Buttons