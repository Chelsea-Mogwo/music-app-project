import React, { useState } from "react"

export default function artistName() {

    const [name, setName] = useState("")

    return (
        <>
          <h1>Arctic Monkeys</h1>
          <h2>Alt</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Sunt laborum ducimus architecto cupiditate voluptates porro 
            error, magnam dolorem nam iusto.</p>
        </>
    )
}