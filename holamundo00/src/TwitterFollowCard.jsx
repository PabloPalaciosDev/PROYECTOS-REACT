//podemos pasar como props(parametros) funciones
//en este caso la funcion formatUserName es una funcion que establece un formato para userName, como una @ al inicio de cada userName
//Tambien podemos enviar elementos como props(parametros)
/*
export function TwitterFollowCard ( {formattedUserName, name, isFollowing} ){
    return (
                //usamos className xa class es una palabra reservada en jsx
        //esta manera de escribir las clases se llama suni
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar' 
                src={`https://unavatar.io/${userName}`} 
                alt="" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCar-infoUsername'>{formattedUserName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
*/
//Lo ideal es que las props(parametros) sean inmutables
//Podemos trabajar con las props en otra variable de ser el caso

//En algunas ocasiones podemos utilizar una prop especial llamada "children" 
//q permite usar como prop el contenido hijo de un contenedor
import { useState } from "react"
export function TwitterFollowCard ( {children, userName, initialIsFollowing} ){
/*----------------Esta es una forma de hacerlo-------------------

    //el useState devuelve un arreglo de 2 posiciones
    const state = useState(false)
    //aqui podemos saber si la luz esta encendida o no (x ejemplo)
    const isFollowing = state[0]
    //este es el interrumptor para cambiar/actualizar el estado para cambiar si la luz esta encendida o no
    const setIsFollowing = state[1]
*/
//------------------esta es la forma mas legible------------
//aqui usamos un concepto de JS llamado "desestruturacion"
//quitamos el isFollowing que teniamos como prop(parametro) para utilizarlo ahora en el manejo de estado de seguir o dejar de seguir
const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

//condicional ternario
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ?'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    return (
        //usamos className xa class es una palabra reservada en jsx
        //esta manera de escribir las clases se llama suni
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar' 
                src={`https://unavatar.io/${userName}`} 
                alt="" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCar-infoUsername'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-folloCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}