import React from 'react'

function NoisyForegroundDesign() {
  return (
    <div className="noisy-style">
        <style jsx>{`
        
        .noisy-style {
                        position: fixed;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background-image: url('/noisy.gif');
                        z-index: 100;
                        pointer-events: none;
                        mix-blend-mode: difference;
                        opacity: 0.1;
                    }

        `}</style>
    </div>
  )
}

export default NoisyForegroundDesign