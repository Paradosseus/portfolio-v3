'use client'

import TypewriterComponent from "typewriter-effect"

type StringProp = {
    value: string
}


const TypewriterEffect = ({value}: StringProp) => {
    return (
        <>
            <TypewriterComponent
                options={{
                    strings: [`${value}`],
                    autoStart: true,
                    pauseFor: 2000,
                    loop: true,
                    delay: 'natural',
                    deleteSpeed: 'natural'
                    
                }}
            />
        </>
    )
}


export default TypewriterEffect;