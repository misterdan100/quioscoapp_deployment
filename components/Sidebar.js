import Image from 'next/image'

const Sidebar = () => {
  return (
    <>
        <Image 
            width={100} 
            height={100} 
            src='/assets/img/logo.svg' 
            alt='imagen logotipo' 
        />
    </>
  )
}

export default Sidebar