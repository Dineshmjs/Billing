import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Action } from '../redux/Action'

function Main() {
    const data = useSelector(state=>state.typeData)
    const dispatch = useDispatch()


    const submitButton = (data) =>{
      dispatch(Action(data))
    }

    return (
        <div>
            Main Page
    <button onClick={()=>submitButton("New Data")}>{data}</button>
        </div>
    )
}

export default Main
