import { Button, Stack } from '@chakra-ui/react'
import LevelSelector from './LevelSelector'
import ImageSelector from './ImageSelector';

interface Props {
    onLevelSet: (value: string) => void;
    onImageSet: (value: File) => void;
    onSetSetting: () => void;
}


const PuzzleSetting = ({onLevelSet, onImageSet, onSetSetting}: Props) => {
  return (
    <Stack 
      direction={{base: 'column', md: 'row'}}
      justifyContent='center' 
      alignItems={{ base: 'center', md: 'flex-start' }}  
      paddingX={5} 
      paddingTop='10%' 
      gap={5}
    >
        <LevelSelector setter={onLevelSet}/>
        <ImageSelector setter={onImageSet}/>
        <Button size="lg" onClick={onSetSetting} width={{base: "240px", md: 'auto'}}>Applay</Button>
    </Stack>
  )
}

export default PuzzleSetting
