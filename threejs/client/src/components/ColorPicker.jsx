import React from 'react';
import { SketchPicker } from 'react-color';
import { snapshot, useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
    const snap = useSnapshot(state);
    console.log(snap.color);
    return (
        <div className='absolute left-full ml-3'>
            <SketchPicker 
                color={snap.color}
                disableAlpha
                presetColors={[
                    '#ccc',
                    '#EFBD43',
                    '#80C670',
                    '#726DE8',
                    '#353934',
                    '#2CCC34',
                    '#ff8a65',
                    '#7098DA',
                    '#C19277',
                    '#FF96AD',
                    '#512314',
                    '#5F123D',
                    '#ad6c00',
                    '#cb7d00',
                    '#990000'
                ]}
                onChange={(color) => state.color = color.hex}
            />
        </div>
    )
}

export default ColorPicker
