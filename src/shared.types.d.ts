interface DictionaryData {
    inflected: string;
    headword: string;
    homograph: string;
    partofspeech: string;
    id: string;
}

interface DictionarySizes {
    min: number;
    max: number;
}

interface SearchResult {
    index: number;
    iterations: number;
    totalTime: number;
}