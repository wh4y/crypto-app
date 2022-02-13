import {useEffect} from "react";


export default (x: number, y: number) => {
    useEffect(() => window.scroll(x, y));
}