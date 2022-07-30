import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0)
    return (
        <div className="UseState">
            <PageTitle  
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle  title= 'EXERCICIO #01'/>
            <div className="center">
                <span className="txt">{count}</span>
                <div>
                    <button className="btn" 
                    onclick= {() => setCount(count - 1)} >-1</button>
                    <button className="btn" 
                    onclick= {() => setCount(count + 1)} >+1</button>
                    <button className="btn" 
                    onclick= {() => setCount(currect => currect + 1000)} >+1000</button>
                   
                </div>
            </div>
            <SectionTitle  title= 'EXERCICIO #02'/>
        </div>
        
    )
}

export default UseState
