import create from 'zustand'
import {works,graphicDesigns} from '../constants'
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

const useGraphicDesignsState = create(set => ({
  graphicDesigns: graphicDesigns
}))

const useMessageState = create(set => ({
  isMessageSent: false,
  setIsMessageSent: () => set(state => ({isMessageSent: !state.isMessageSent}))
}))

export {
    useMenuState,
    useRouterState,
    useWorksState,
    useGraphicDesignsState,
    useMessageState
}