
/**
 * Converts an array to a Map using a key selector
 * @param array The array to convert
 * @param keySelector Function to select the key from each item
 * @returns A new Map
 */
export function toMap<T, K>(
    array: T[],
    // eslint-disable-next-line no-unused-vars
    keySelector: (item: T) => K
): Map<K, T> {
    return array.reduce((map, item) => {
        map.set(keySelector(item), item);
        return map;
    }, new Map<K, T>());
}
