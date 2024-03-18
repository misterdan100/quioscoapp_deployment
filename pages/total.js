import { useEffect } from 'react'
import useQuiosco from '../hooks/useQuiosco'
import Layout from '../layout/Layout'
import { formatearDinero } from '../helpers'

export default function Total() {
    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()
    const comprobarPedido = () => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3
    }



    useEffect(() => {
        comprobarPedido()
    }, [pedido, nombre])
    
    return (
        <Layout
            pagina={'Datos y Total'}
        >
            <h className="text-4xl font-black">Datos y Confirmar Pedido</h>
            <p className="text-2xl my-10">Confirma tu Pedido a Continuacion</p>

            <form 
                onSubmit={colocarOrden}
            >
                <div>
                    <label htmlFor="nombre" className='block uppercase text-slate-800 font-bold text-xl'>Nombre</label>
                    <input 
                        type="text" 
                        id='nombre' 
                        className='bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md border-2 border-transparent hover:border-amber-500
                        focus:outline-none
                        focus:border-amber-500 transition duration-500'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='mt-10'>
                    <p className='text-2xl'>Total a pagar {''} <span className='font-bold'>{formatearDinero(total)}</span></p>
                </div>

                <div className='mt-5'>
                    <input
                    type='submit'
                        value='Confirmar Pedido'
                        className={`bg-indigo-600 text-center  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white ${comprobarPedido() ? 'bg-indigo-200' : ''} `}
                    disabled={comprobarPedido()} 
                    />
                </div>
            </form>

        </Layout>
    )
}