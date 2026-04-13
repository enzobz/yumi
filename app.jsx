import { useState } from "react"

function App() {
    const [tela, setTela] = useState("trilha")

    return (
        <div className="container">
            <h1>ゆみ本語</h1>
            <p>Bem-vindo! | はじめまして！</p>
            {tela === "trilha" ? <Trilha/> : (<h2>Tela da lição</h2>)}
        </div>
    )
}
