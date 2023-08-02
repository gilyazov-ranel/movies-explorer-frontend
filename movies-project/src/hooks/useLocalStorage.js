import { useEffect, useState } from "react";

function useLocalStorage(initValue, key) {

    function getValue() {
        const storage = localStorage.getItem(key);
        try {
            return JSON.parse(storage);
          } catch (err) {

            console.log('Error: ', err.message);
          }
        return initValue;
    }
    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[key, value]);

    return [value, setValue];

}

export { useLocalStorage };