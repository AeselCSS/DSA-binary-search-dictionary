const path = "http://localhost:8080";
const endpoint = `/ordbogen`;

const getSizes = async (): Promise<DictionarySizes> => {
    const result = await fetch(`${path + endpoint}`);
    return await result.json();
    };

const getEntryAt = async (index: number): Promise<DictionaryData> => {
    const result = await fetch(`${path + endpoint}/${index}`);
    return await result.json();
    }

export { getSizes, getEntryAt };