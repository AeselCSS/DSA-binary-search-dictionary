const comparator = (dictionaryData: DictionaryData, searchTerm: string): number => {
    const normalizedInflected = dictionaryData.inflected.toLowerCase().trim();
    const normalizedHeadword = dictionaryData.headword.toLowerCase().trim();
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    // Compare the normalized inflected and headword strings with the normalized search term
    const inflectedComparison = normalizedInflected.localeCompare(normalizedSearchTerm);
    const headwordComparison = normalizedHeadword.localeCompare(normalizedSearchTerm);

    // If the inflected or headword comparison is 0, return 0
    if (inflectedComparison === 0 || headwordComparison === 0) {
        return 0;
    }

    // Otherwise, return the comparison result based on the inflected comparison first,
    // and then the headword comparison if the inflected comparison is 0
    return inflectedComparison !== 0 ? inflectedComparison : headwordComparison;
};

export default comparator;