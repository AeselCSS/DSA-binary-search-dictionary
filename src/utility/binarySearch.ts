import comparator from './compare';
import { getEntryAt } from '../service/dictionary_service';

const binarySearch = async (searchTerm: string, sizes: DictionarySizes) => {
    let min = sizes.min;
    let max = sizes.max;
    let iterations = 0;
    const startTime = Date.now();

    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        const dictionaryData = await getEntryAt(mid);
        const compareResult = comparator(dictionaryData, searchTerm);

        if (compareResult === 0) {
            const totalTime = Date.now() - startTime;
            return { index: mid, iterations, totalTime };

        } else if (compareResult < 0) {
            min = mid + 1;

        } else {
            
            max = mid - 1;
        }

        iterations++;
    }

    const totalTime = Date.now() - startTime;
    return { index: -1, iterations, totalTime };
};

export default binarySearch;