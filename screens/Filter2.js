import React from 'react'
import { Image, View } from 'react-native';

const Filter2 = ({
    face:{
        bounds:{
            size:{
                width:faceWidth,height:faceheight
            }
        },
        leftEyePosition, rightEyePosition
    }
})=>{
    const glassWidth = faceWidth
    const glassHeight = faceheight/3
return(
    <View style = {{position:"absolute"}}
    >
        <Image
        source = {require('../assets/glasses.png')}

        />
    </View>
)
}
export default Filter2
