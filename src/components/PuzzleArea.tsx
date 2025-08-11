import { useMemo, useRef, useState } from "react";
import Puzzle from "./Puzzle";
import { Box } from "@chakra-ui/react";
import PuzzleSetting from "./PuzzleSetting";


const PuzzleArea = () => {

    const boxRef = useRef<null | HTMLDivElement>(null);

    const [showPuzzle, setShowPuzzle] = useState(false);
    const [showSetting, setShowSetting] = useState(true);
    const [level, setLevel] = useState(1);
    const [image, setImage] = useState<File | string>('/images/HB.jpg');


    const solvedPuzzle = () => {
      
    };
  
    const PuzzleMemd = useMemo(() => {
      if (!image) return null;
      return <Puzzle image_src={image} onSolved={solvedPuzzle} boxRef={boxRef} level={level}/>;
    }, [solvedPuzzle, image, boxRef]);

    const onLevelSet = (v: string) => {
      setLevel(Number(v));
    };

    const onImageSet = (v: File) => {
      setImage(v);
    }

    const onSetSetting = () => {
      setShowSetting(false);
      setShowPuzzle(true);
    }

    
  return (
    <Box width="100%" height="100%" position="relative">
      {showSetting && (
        <PuzzleSetting
          onLevelSet={onLevelSet}
          onImageSet={onImageSet}
          onSetSetting={onSetSetting}
        />
      )}
      {showPuzzle && (
        <Box ref={boxRef} width="100%" height="100%">
          {PuzzleMemd}
        </Box>
      )}
    </Box>
  );
}

export default PuzzleArea
