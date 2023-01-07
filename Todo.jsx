import React from 'react'

export default function Todo() {

    const [inp, setInp] = React.useState("");
    const [items, setItems] = React.useState([]);

    const addItem = () => {
        if(inp) {
            setItems([...items, inp]);
            setInp("")
        }

    }
    const removeItem = (id) =>{
        const updated=items.filter((ele,ind) => {
            return ind !== id;
        })
        setItems(updated)
    }

    const removeAll = () => {
        setItems([])
    }

    return (
        <>
            <div className='main'>
                <div className='log'>

                    <figure>
                        <img className='logo' src="https://www.cultofpedagogy.com/wp-content/uploads/2018/09/Note-taking.png" alt="Noteslogo" />
                        <figcaption><b>Add your list here ✌️</b></figcaption>
                    </figure>

                    <div className='item'>
                        <input type="text" placeholder="✍🏻  Add task" className='search'
                            value={inp} onChange={(e) => setInp(e.target.value)} />
                        <button className='btn' onClick={addItem}>+</button>
                    </div>

                    <div className='all'>
                        {
                            items.map((ele, ind) => {
                                return (
                                    <div className='each'>
                                        <p className='i'><b> - </b> {ele}</p>
                                        <button className='del' onClick={()=>removeItem(ind)}>🗑️</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        <button className='rem-all' onClick={removeAll}>Remove All 🗑️ </button>
                    }
                    
                </div>
            </div>
        </>
    )
}

