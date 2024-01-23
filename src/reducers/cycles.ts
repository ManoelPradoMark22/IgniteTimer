export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action) {
  const actionTypeKey =
    action.type === 'INTERRUPT_CURRENT_CYCLE'
      ? 'interruptedDate'
      : 'finishedDate'
  switch (action.type) {
    case 'ADD_NEW_CYCLE':
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case 'INTERRUPT_CURRENT_CYCLE':
    case 'MARK_CURRENT_CYCLE_AS_FINISHED':
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          return cycle.id === state.activeCycleId
            ? { ...cycle, [actionTypeKey]: new Date() }
            : cycle
        }),
        activeCycleId: null,
      }
    default:
      return state
  }
}
