import { Canvas, painters } from 'headbreaker';
import { useEffect, useRef, useState } from 'react';

type Image_src = {
    image_src: File | string;
    onSolved: () => void;
    boxRef: React.RefObject<null | HTMLDivElement>;
    level: number;
}



export default function DemoPuzzle({image_src, onSolved, boxRef, level}: Image_src) {

  const puzzleRef = useRef<null | HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setContainerSize({ width, height });
      }
    });
    observer.observe(boxRef.current);
    return () => observer.disconnect();

  }, [boxRef]);


  useEffect(() => {
    // if (!image_src) return;
    // const image = new window.Image();
    // console.log(image_src);
    // image.src = image_src; 
    // image.onload = () => setLoadedImage(image);


    (async () => {
      // 0. Чакра файл-лоадер
      // 1. Файл от пользователя
      // 2. ОнЛоад -> Puzzle
      // 4. Создание bitmap с правильной ориентацией
      // 5. Переносим bitmap в canvas чтобы получить dataURL
      // 6. Из canvas переносим в img через dataUrl


      if (image_src instanceof File) {
        
      const blob = image_src;
  
      // создаём bitmap с учётом EXIF-ориентации
      const bitmap = await createImageBitmap(blob, { imageOrientation: "from-image" });
  
      // рисуем bitmap на скрытый canvas, чтобы получить HTMLImageElement
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(bitmap, 0, 0);
  
      // создаём Image с нормализованным src
      const fixedImg = new Image();
      fixedImg.src = canvas.toDataURL(); // или URL.createObjectURL(canvas.toBlob())
      fixedImg.onload = () => setLoadedImage(fixedImg);
      } else {
          const image = new window.Image();
          image.src = image_src; 
          image.onload = () => setLoadedImage(image);
      }
    })();
  }, [image_src]);


 
  useEffect(() => {

    if (!loadedImage) return;
    if (!containerSize.width || !containerSize.height) return;
    if (!puzzleRef.current) return;

    let audio = new Audio('/sounds/connect.wav');
    let audioOnSolved = new Audio('/sounds/spell.mp3');

    const puzzle = puzzleRef.current;


    if (puzzle) puzzle.innerHTML = '';

    const imgW = loadedImage.width;
    const imgH = loadedImage.height;
    const aspect = imgW / imgH;

    let borderFill;

    switch (level) {
      case 1:
        borderFill = 20;
        break;
      case 2:
        borderFill = 12,5;
        break;
      case 3:
        borderFill = 10;
        break;
      case 4:
        borderFill = 7,5;
        break;
      case 5:
        borderFill = 5;
        break;
      default:
        borderFill = 20;
    }

    let pieceSize;

    switch (level) {
      case 1:
        pieceSize = (200 - ((level - 1) * 20));
        break;
      case 2:
        pieceSize = (120 - ((level - 1) * 20));
        break;
      case 3:
        pieceSize = (120 - ((level - 1) * 20));
        break;
      case 4:
        pieceSize = (130 - ((level - 1) * 20));
        break;
      case 5:
        pieceSize = (130 - ((level - 1) * 20));
        break;
      default:
        pieceSize = (200 - ((level - 1) * 20));
    }
    
    const canvas = new Canvas(puzzle as any, {
      width: containerSize.width, height: containerSize.height,
      pieceSize: pieceSize, proximity: 20,
      borderFill: borderFill, strokeWidth: 1.5,
      lineSoftness: 0.12, image: loadedImage,
      maxPiecesCount: {x: 5, y: 5},
      strokeColor: 'black',
      preventOffstageDrag: true,
      fixed: true,
      painter: new painters.Konva(),
  });

  canvas.adjustImagesToPuzzleWidth();  
  // canvas.adjustImagesToPuzzleHeight();
  canvas.autogenerate(
    {
    horizontalPiecesCount: Math.round((2 * level) * aspect),
    verticalPiecesCount: 2 * (level),
  }
);
  canvas.shuffle(1);
  canvas.attachSolvedValidator();


  canvas.onValid(() => {
      audioOnSolved.play();
      setTimeout(() => {
    onSolved();  
    console.log(puzzle);
  }, 1000);
  })
  canvas.draw();

  canvas.onConnect((_piece, figure, _target, targetFigure) => {
      // play sound
      audio.play();
  
      // paint borders on click
      // of conecting and conected figures
      figure.shape.stroke('yellow');
      targetFigure.shape.stroke('yellow');
      canvas.redraw();
  
      setTimeout(() => {
        // restore border colors
        // later
        figure.shape.stroke('black');
        targetFigure.shape.stroke('black');
        canvas.redraw();
      }, 200);
    });
  
    canvas.onDisconnect(() => {
      audio.play();
    });
      

  }, [loadedImage, onSolved, puzzleRef, containerSize])

  return (
    <div ref={puzzleRef} style={{ overflow: "auto" }}></div>
  );
}