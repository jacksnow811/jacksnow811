import {useRef,useState} from "react";
import{ nanoid } from 'nanoid'
import { connect } from "react-redux";
import {createAddPersonAction} from '../../redux/actions/person'

const Person = (props)=>{
    const [nameInputValue,setNameInputValue]=useState('')
    const [ageInputValue,setAgeInputValue]=useState('')

    const addPerson=()=>{
        const name = nameInputValue
        const age = ageInputValue
        const personObj={id:nanoid(),name,age}
        props.jiaYiRen(personObj)
        setNameInputValue('') 
        setAgeInputValue('') 
    }
    return (
        <div>
            <h2>我是Person組件,上面組件求和為{props.he}</h2>
            <input value={nameInputValue} onChange={(e)=>{ setNameInputValue(e.target.value) }} type="text" placeholder="輸入名字"/>
            <input value={ageInputValue} onChange={(e)=>{ setAgeInputValue(e.target.value) }} type="text" placeholder="輸入年齡"/>
            <button onClick={addPerson}>添加</button>
            <ul>
                {
                    props.yiduiren.map((p)=>{
                        return <li key={p.id}>{p.name}--{p.age}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default connect(
    state=>({yiduiren:state.rens,he:state.he}),//映射狀態
    {jiaYiRen:createAddPersonAction}//映射操作狀態的方法
)(Person)
