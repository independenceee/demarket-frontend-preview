import { useState, useEffect } from "react";

const useDebounce = function (value: any, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<any>(value);

    useEffect(
        function () {
            const handler = setTimeout(function () {
                return setDebouncedValue(value);
            }, delay);
            return function () {
                return clearInterval(handler);
            };
        },

        [value],
    );

    return debouncedValue;
};

export default useDebounce;
