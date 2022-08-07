import {useRef} from "react";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/actions/count'
import {connect} from "react-redux";

const Count = (props)=>{
    const selectRef = useRef(null);
    const increment=()=>{
        const value=selectRef.current.value
        props.jia(value*1)
    }
    const decrement=()=>{
        const value=selectRef.current.value
        props.jian(value*1)
    }
    const incrementIfOdd=()=>{
        const value=selectRef.current.value
        if(props.count % 2 !==0){
            props.jia(value*1)
        }
    }
    const incrementAsync=()=>{
        const value=selectRef.current.value
        props.jiaAsync(value*1,500)
    }
    return (
        <div>
            <h2>我是Count組件</h2>
            <h4>當前求和為:{props.count},下方組件總人數為:{props.renshu}</h4>
            <select ref={selectRef}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>&nbsp;
            <button onClick={increment}>+</button>&nbsp;
            <button onClick={decrement}>-</button>&nbsp;
            <button onClick={incrementIfOdd}>當前求和為奇數再加</button>&nbsp;
            <button onClick={incrementAsync}>異步加</button>&nbsp;
        </div>
    )
}
export default connect(
    state => ({
        count:state.he,
        renshu:state.rens.length
    }),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
)(Count)
