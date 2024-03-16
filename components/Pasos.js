import { useRouter } from "next/router"


const pasos = [
    {paso: 1, nombre: 'Menu', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'},
]

const Pasos = () => {
    const router = useRouter()

    const calculateProgreso = () => {
        switch (true) {
            case router.pathname === '/':
                return 5
                break;
            case router.pathname === '/resumen':
                return 45
                break;
            case router.pathname === '/total':
                return 100
                break;
            default:
                break;
        }

    }

  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map( paso => (
                <button 
                    key={paso.paso}
                    className="text-2xl font-bold transition hover:scale-110"
                    onClick={() => {
                        router.push(paso.url)
                    }}
                >
                    {paso.nombre}
                </button>
            ))}
        </div>

        {/* contenedor y barra de progreso */}
        <div className="bg-gray-100 mb-10">
            <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white transition hover:bg-amber-700 hover:scale-110 duration-500" style={{
                width: `${calculateProgreso()}%`,
            }}>

            </div>
        </div>
    </>
  )
}

export default Pasos