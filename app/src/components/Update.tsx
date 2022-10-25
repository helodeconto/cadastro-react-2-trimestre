import { Dispatch, FormEventHandler, useState, SetStateAction } from "react";

export default function ({ setRoute }: { setRoute: Dispatch<SetStateAction<string>> }) {
    const [_name, setName] = useState("___")
    const [email, setEmail] = useState("___")

    
    const apresentarDados = addEventListener('onload', async() => {
        const token = await fetch(`/api/logged/${localStorage.getItem('token')}`)
    
        const userInfo = await token.json()
        console.log(userInfo)
        setName(userInfo.name)
        console.log("help2")
        setEmail(userInfo.email)
        console.log("help3")
    })

    const alterarDados: FormEventHandler<HTMLFormElement> = async ev => {
        const token = await fetch(`/api/logged/${localStorage.getItem('token')}`)
        ev.preventDefault()
        const { _name, email, password } = ev.target as HTMLFormElement

        if (token.status >= 200 && token.status <= 299) {
            console.log("help")            
            console.log("tá indo")
            const request = await fetch(`/api/user/update`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: _name.value,
                    email: email.value,
                    password: password.value
                })
            })


            if (request.status >= 200 && request.status <= 299) {
            alert("PARABAEINZ!")
            setRoute("teste")
            return
            }
        
            const responseData = await request.json()
            
            if (responseData.error) {
            alert(responseData.error)
            return
            }
        
            alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
            return
        }
    }

    return <>
        <form onSubmit={alterarDados}>
        <h1>Alterar Dados</h1>
        <input name="_name" placeholder= {_name} />
        <input name="email" placeholder={email} />
        <input name="password" type="password" placeholder="password" />
        <button onClick={() => setRoute("teste")}>Voltar</button>
        <button>alterar</button>
        </form>
    </>
}