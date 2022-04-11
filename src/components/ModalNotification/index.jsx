import React from 'react'
import { motion , AnimatePresence } from "framer-motion"
import {useMessageState} from '../../store/useStore'
function ModalNotification() {
    const isMessageSent = useMessageState(state => state.isMessageSent)
    return (
        <div className="fixed inset-0 w-full h-screen pointer-events-none z-[50]">
            <AnimatePresence>
                {
                    isMessageSent &&
                    <motion.div 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 50, opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="text-xl absolute top-0 left-2/4 -translate-x-2/4 bg-orange text-white py-4 px-8 rounded-md">Message Sent</div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default ModalNotification