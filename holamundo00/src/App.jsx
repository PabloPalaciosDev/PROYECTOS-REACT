import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){

//esto es una funcion
//const formatUserName = (userName) => `@${userName}`
//ademas de funciones como la de arriba, podemos enviar elementos como el que tenemos acontinuacion
//const formattedUserName = <span>@midudev</span>
/*
        //una vez creado el componente puede ser reutilizado de esta manera
        //<TwitterFollowCard userName="midudev" name="Pablo Palacios"/>
//--------------------------------------------------------------------------------
        //Para devolver dos componentes iguales sin escribir <React.Fragment></React.Fragment>
        //Podemos hacerlo de la siguiente manera
        //<>
        //<TwitterFollowCard userName="midudev" name="Miguel Angel Duran"/>
        //<TwitterFollowCard userName="pheralb" name="Pablo Palacios"/>
        //<TwitterFollowCard userName="elonmusk" name="Elon Musk"/>
        //</>
//--------------------------------------------------------------------------------
        //podemos agregar propiedas a nivel de contenedor de la siguiente forma
        //tambien podemos usar en vez de React.Fragment, el nombre de una etiqueta html
        //isFollowing={true} esto es igual a isFollowing, ya que estos parametros tienen True x defecto
*/ 
//En este caso eliminamos el prop name para el nombre en el componenten de twitterfollowcard
//y utilizamos el prop especial children q utiliza el contenido del contenedor </TwitterFollowCard> para generar los nombres
//el contenido puede ser cadenas de texto o elementos html, como h1
//en algunas ocasiones podemos pasar todas las props como un objeto, ejemplo
//const midudev = {isFollowing: true, userName: 'midudev' }

//const [name, setName] = useState('midudev')
//al usar useState, debemos recordar que name (primera posicion) es el valor del estado y el setName(segunda posicion) es donde podemos actualizar el estado
//----------RENDERIZADO DE ARREGLOS DE ELEMENTOS--------------
//Lo usamos cuando hacemos un fetch a un API
const users = [
    {
        userName: 'midudev',
        name:'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name:'Pablo H',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name:'Pablo Hdezs',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name:'Tomas',
        isFollowing: false
    }
]
{/*A la hora de renderizar mas de un elemento x medio de un fetch, debemos declarar una llave para que el virtual dom identifique cada elemento x si solo*/}
    return (
        <section className='App'>
            {
                users.map(user =>{
                    const {userName, name, isFollowing} = user
                    return ( 
                        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

        </section>
    )
    return (
        <section className='App'>
        {/*<TwitterFollowCard userName={name}>
            Pablo Palacios
        </TwitterFollowCard>
    */}
    {/*Cuanodo querreamos utilizar un prop para inicializar un estado, podemos llamarlo x ejemplo (en este caso) inicialIsFollowing */}
        <TwitterFollowCard userName="elonmusk" initialIsFollowing={true}>
            Elon Musk
        </TwitterFollowCard>
        <TwitterFollowCard userName='midudev'>
            Pablo Palacios
        </TwitterFollowCard>

        {/* este boton es por un ejemplo de uso de estado
        <button onClick={() => setName('pedromichel')}>Cambiar Nombre</button>*/}
        </section>
    )
}