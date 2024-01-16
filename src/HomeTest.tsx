import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({
  activeCycle: 1,
  setActiveCycle: () => {},
})

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h3>
      NewCycleForm: {activeCycle}
      <button onClick={() => setActiveCycle(2)}></button>
    </h3>
  )
}

function CountDown() {
  const { activeCycle } = useContext(CyclesContext)

  return <h3>CountDown: {activeCycle}</h3>
}

export function HomeTest() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        setActiveCycle,
      }}
    >
      <div>
        <NewCycleForm />
        <CountDown />
      </div>
    </CyclesContext.Provider>
  )
}
