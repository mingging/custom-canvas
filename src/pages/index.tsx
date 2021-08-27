import React, {useCallback, useEffect, useState} from "react";
import styled from '@emotion/styled'
import {fabric} from 'fabric'



const Index = () => {
    const [canvas, setCanvas] = useState(new fabric.Canvas('canvas', {}))
    const [colors, getColors] = useState('#000')

    useEffect(() => {
        setCanvas(initCanvas())
    }, []);

    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: 800,
            width: 800,
            backgroundColor: 'pink',
            isDrawingMode: true,
        })
    )

    const handleColorChange = (color: string) => {
        canvas.isDrawingMode = true
        canvas.freeDrawingBrush.color = color
        // getColors(color)
    }

    const handleAddText = () => {
        canvas.isDrawingMode = false
        var newText = new fabric.Textbox('Hello Text!.', {
            fontSize: 27,
            top: 10,
            left: 10,
            width: 200
        });
        canvas.add(newText);
        canvas.setActiveObject(newText);
        newText.enterEditing();
        newText.setSelectionStart(newText.text?.length as number);
        newText.setSelectionEnd(newText.text?.length as number);
    }

    useEffect(() => {
        canvas.freeDrawingBrush.width = 15
    }, [canvas])
    
    return(
        <div>
            <ColorBox style={{background: `${colors}`}} />
            <ColorBoxGroup>
                <ColorBox style={{background: 'red'}} onClick={() => handleColorChange('red')} />
                <ColorBox style={{background: 'yellow'}} onClick={() => handleColorChange('yellow')} />
                <ColorBox style={{background: 'blue'}} onClick={() => handleColorChange('blue')} />
                <ColorBox style={{background: 'black'}} onClick={() => handleColorChange('black')} />
            </ColorBoxGroup>


            <button onClick={handleAddText}>Add Text</button>

            <canvas id="canvas" />
        </div>
    )
}

const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 5px;
`

const ColorBoxGroup = styled.div`
  display: flex;
  align-content: center;
`

export default Index