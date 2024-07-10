import React, { useState } from 'react'
import fontFamiles from "../../../data/fontFamilies.json"

export default function Home() {

    const [color, setColor] = useState("")
    const [fontFamily, setFontFamily] = useState("")

    return (
        <main className='py-5' style={{ backgroundColor: color }}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center' style={{ fontFamily }}>Home Page</h1>
                        <input type="color" onChange={e => setColor(e.target.value)} />
                        <br />
                        <select onChange={e => setFontFamily(e.target.value)}>
                            {fontFamiles.map((item, i) => {
                                return <option key={i} value={item.value}>{item.name}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </main>
    )
}
