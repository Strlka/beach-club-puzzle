import { Button, HStack } from '@chakra-ui/react'
import LevelSelector from './LevelSelector'
import ImageSelector from './ImageSelector';

interface Props {
    onLevelSet: (value: string) => void;
    onImageSet: (value: File) => void;
    onSetSetting: () => void;
}


const PuzzleSetting = ({onLevelSet, onImageSet, onSetSetting}: Props) => {
  return (
    <HStack justifyContent='center' alignItems='flex-start' paddingX={5} paddingTop='10%' gap={5}>
        <LevelSelector setter={onLevelSet}/>
        <ImageSelector setter={onImageSet}/>
        <Button size="lg" onClick={onSetSetting}>Applay</Button>
    </HStack>
  )
}

export default PuzzleSetting
