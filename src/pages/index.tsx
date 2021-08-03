import React, {useCallback, useEffect, useState} from "react";
import styled from '@emotion/styled'
import {fabric} from 'fabric'

const Index = () => {

    const [canvas, getCanvas] = useState(new fabric.Canvas('draw'))

    useEffect(() => {
        fabric.Object.prototype.transparentCorners = false
        getCanvas(new fabric.Canvas('draw', {
            isDrawingMode: true,
            freeDrawingCursor: 'none'
        }))
    }, [])

    // const cursor = new fabric.StaticCanvas("cursor");
    canvas.freeDrawingBrush.width = 20
    canvas.freeDrawingBrush.color = '#000'




    const handleClear = useCallback(() => {
        canvas.clear()
    }, [canvas])

    // const handleDrawLine = useCallback(() => {
    //     const brush = new fabric.BaseBrush( )
    //     brush.color = '#000'
    //     canvas.add(brush)
    // }, [])


    return (
        <>
            <h1>Canvas</h1>
            <button id={'clear'} onClick={handleClear}>Clear</button>
            <div>
                <Canvas id={'draw'} width={1000} height={1000}/>
            </div>
            {/*<canvas id={'cursor'} width="500" height="500"></canvas>*/}
        </>
    )
}

const Canvas = styled.canvas`
  border: 1px solid #000;
`

export default Index