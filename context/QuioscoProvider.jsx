import { createContext, useEffect, useState } from "react"
import axios from 'axios'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState({})
    const [ producto, setProducto ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ pedido, setPedido ] = useState([])

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
    const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
        setPedido([...pedido,producto])
        console.log(pedido)
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
        }}
    >
        {children}
    </QuioscoContext.Provider>
  )
}

export default QuioscoContext
export {QuioscoProvider}