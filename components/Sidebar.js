import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria'

const Sidebar = () => {
    const { categorias } = useQuiosco()

  return (
    <>
        <Image 
            width={100} 
            height={100} 
            src='/assets/img/logo.svg' 
            alt='imagen logotipo' 
            className='mx-auto hover:scale-110 hover:rotate-6 transition duration-500'
        />

        <nav className='mt-10'>
            {categorias?.map( categoria => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </nav>
    </>
  )
}

export default Sidebar