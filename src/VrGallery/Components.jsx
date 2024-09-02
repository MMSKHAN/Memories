import React from 'react'
import { Gallery } from './Gallery'
import Textures from './Textures'
import Character from './Character'
import Screen from './Screen'
import Texts from './Texts'
import Screenback from './Screenback'
import Audioplayer from './Avatars/Audioplayer'

function Components() {
  return (
    <>
            
          <Character/>
             <Gallery />
          
             <Audioplayer/>
             <Texts/>
             <Screen/>
             <Screenback/>
            <Textures/>
        
    </>
  )
}

export default Components
