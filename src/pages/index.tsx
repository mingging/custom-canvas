import React, {useCallback, useEffect, useState} from "react";
import styled from '@emotion/styled'
import {fabric} from 'fabric'
import Slider from '@material-ui/core/Slider'



const Index = () => {

    const [canvas, getCanvas] = useState(new fabric.Canvas('draw'))
    const [visible, getVisible] = useState(false)
    const [colors, getColors] = useState('#000')
    const [brushSize, getBrushSize] = useState(1)

    useEffect(() => {
        fabric.Object.prototype.transparentCorners = false
        getCanvas(new fabric.Canvas('draw', {
            isDrawingMode: true,
            freeDrawingCursor: 'none'
        }))
    }, [])

    // const cursor = new fabric.StaticCanvas("cursor");
    canvas.freeDrawingBrush.width = brushSize
    canvas.freeDrawingBrush.color = colors

    // sketch clear
    const handleClear = useCallback(() => {
        canvas.clear()
    }, [canvas])

    // color select
    const handleColor = useCallback(() => {
        if (visible) {
            getVisible(false)
        } else getVisible(true)
    }, [])

    // color change
    const handleColorChange = useCallback((e) => {
        getColors(e.target.value)
    }, [colors])

    // brush size change
    const handleBrushSizeChange = (event: any, newValue: any) => {
        getBrushSize(newValue)
    }

    useEffect(() => {
        canvas.freeDrawingBrush.color = colors
        canvas.freeDrawingBrush.width = brushSize
        // var bigint = parseInt(this.value.replace("#", ""), 16);
        // var r = (bigint >> 16) & 255;
        // var g = (bigint >> 8) & 255;
        // var b = bigint & 255;
        // mousecursor.fill = "rgba(" + [r,g,b,cursorOpacity].join(",") + ")";
    }, [colors, brushSize])


    // const handleDrawLine = useCallback(() => {
    //     const brush = new fabric.BaseBrush( )
    //     brush.color = '#000'
    //     canvas.add(brush)
    // }, [])


    return (
        <div>
            <h1>Canvas</h1>
            <button id={'clear'} onClick={handleClear}>Clear</button>
            {/*<button id={'color'} onClick={handleColor}>Color</button>*/}
            {/*{ visible ? (<SketchPicker />) : ''}*/}
            <input id="color" type="color" value={colors} onChange={handleColorChange}/>
            {/*<SketchPicker color={colors} onChangeComplete={handleChangeComplete}/>*/}
            <Slider value={brushSize} onChange={handleBrushSizeChange} max={100} />
            {brushSize}
            <Canvas id={'draw'} width={1000} height={1000}/>
            {/*<canvas id={'cursor'} width="500" height="500"></canvas>*/}
        </div>
    )
}

const Canvas = styled.canvas`
  border: 1px solid #000;
`

export default Index