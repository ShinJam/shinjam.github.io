import { useEffect, useRef, useState } from "react";

export default ({ root , rootMargin, threshold }) => {
    const [entry, updateEntry] = useState({});
    const [node, setNode] = useState(null);

    const observer = useRef(null)

    useEffect(
        () => {
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                ([entry]) => updateEntry(entry),
                {
                    root,
                    rootMargin,
                    threshold
                })

            const { current: currentObserver } = observer;

            if (node) currentObserver.observe(node);

            return () => currentObserver.disconnect();
        },
        [node, root, rootMargin, threshold]
    );

    return [setNode, entry];
};
