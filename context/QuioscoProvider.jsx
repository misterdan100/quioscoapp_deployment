import { createContext } from "react"

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
  return (
    <QuioscoContext.Provider
        value={{

        }}
    >
        {children}
    </QuioscoContext.Provider>
  )
}

export default QuioscoContext
export {QuioscoProvider}