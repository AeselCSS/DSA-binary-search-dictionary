const comparator = (dictionaryData: DictionaryData, searchTerm: string): number => {
    const normalizedInflected = dictionaryData.inflected.toLowerCase().trim();
    const normalizedHeadword = dictionaryData.headword.toLowerCase().trim();
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    const inflectedComparison = normalizedInflected.localeCompare(normalizedSearchTerm);
    const headwordComparison = normalizedHeadword.localeCompare(normalizedSearchTerm);

    if (inflectedComparison === 0 || headwordComparison === 0) {
        return 0;
    }

    return inflectedComparison !== 0 ? inflectedComparison : headwordComparison;
};

export default comparator;