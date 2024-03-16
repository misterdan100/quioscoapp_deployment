import { createContext, useEffect, useState } from "react"
import axios from 'axios'
import { toast } from 'react-toastify'


const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState({})
    const [ producto, setProducto ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ pedido, setPedido ] = useState([])
    const [ nombre, setNombre ] = useState('')
    const [ total, setTotal ] = useState(0)

    const obtenerCategorias = async () => {
        const {data} = await axios('/api/categorias')
        setCategorias(data)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }
    // excluye las 2 primeras propiedades y hace una copia del objeto sin ellas
    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)) {
            // Actualizar cantidad
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)

            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente!')
        } else {
            setPedido([...pedido,producto])
            toast.success('Agregado al Pedido!')
        }

        setModal(false)
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

  return (
    <QuioscoContext.Provider
        value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleChangeModal,
            handleSetProducto,
            modal,
            producto,
            handleAgregarPedido,
            pedido,
            handleEditarCantidad,
            handleEliminarProducto,
            nombre,
            setNombre
        }}
    >
        {children}
    </QuioscoContext.Provider>
  )
}

export default QuioscoContext
export {QuioscoProvider}