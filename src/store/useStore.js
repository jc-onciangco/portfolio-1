import create from 'zustand'
import {works} from '../constants'
const useMenuState = create(set => ({
  isMenuOpen: false,
  openMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen }))
}))

const useRouterState = create(set => ({
  currentRoute: 'Home',
  setRoute: route => set(state => ({ currentRoute: route }))
}))

const useWorksState = create(set => ({
  works: works
}))

export {
    useMenuState,
    useRouterState,
    useWorksState
}