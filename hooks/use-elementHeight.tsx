import { useEffect, useState } from "react";

const useElementHeight = ({ element }: { element: HTMLElement }) => {
    const [elementHeight, setElementHeight] = useState<number | null>(null)

    useEffect(() => {
        setElementHeight(element.offsetHeight)
    }, [element.offsetHeight, elementHeight])

    return elementHeight
}

export default useElementHeight;