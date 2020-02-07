// https://gist.github.com/bvaughn/60a883af01716a03a1b3285a1029be0c

import React, { unstable_Profiler as Profiler } from 'react';

const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
}

const App = () => (
    <Profiler id='app' onRender={onRenderCallback}>
        <h1>Hello World</h1>
    </Profiler>
)

export default App
