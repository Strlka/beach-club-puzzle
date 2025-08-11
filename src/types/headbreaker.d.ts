declare module 'headbreaker' {
    type Vector = {
        x: number,
        y: number,
    }

    export class Canvas {
        constructor(id: string, options: any);
        draw: any;
        autogenerate: any;
        adjustImagesToPuzzleHeight: any;
        adjustImagesToPuzzleWidth: any;
        sketchPiece: any;
        shuffle: any;
        onValid: any;
        attachSolvedValidator: any;
        onConnect: (cb: (_piece, figure, _target, targetFigure) => any) => void;
        redraw: any;
        onDisconnect: any;
    };

    export const painters = any;
}