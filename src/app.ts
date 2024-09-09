import './styles/style.css';
import binarySearch from './utility/binarySearch';
import { getSizes, getEntryAt } from './service/dictionary_service';

// DOM elements
const searchForm = document.querySelector('#search-form') as HTMLFormElement;
const searchInput = document.querySelector('#search-input') as HTMLInputElement;
const searchResult = document.querySelector('#search-result') as HTMLDivElement;
const serverRequests = document.querySelector('#server-requests') as HTMLParagraphElement;
const totalTime = document.querySelector('#total-time') as HTMLParagraphElement;

// Variables
let sizes: DictionarySizes;

const resetDOM = () => {
    searchResult.innerHTML = '';
    serverRequests.innerHTML = '';
    totalTime.innerHTML = '';
}

window.addEventListener('load', async () => {
    sizes = await getSizes();
    resetDOM();
});

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    resetDOM();

    const target = searchInput.value;
    console.log(`APP: Searching for: ${target}`);

    let result = await binarySearch(target, sizes)
    console.log(`APP: Result of binary search: ${JSON.stringify(result)}`);
    
    if (result.index === -1) {
        searchResult.insertAdjacentHTML('beforeend', '<H3>Word not found!</H3>');
        serverRequests.insertAdjacentHTML('beforeend', `<p>Number of server requests: ${result.iterations}</p>`);
        totalTime.insertAdjacentHTML('beforeend', `<p>Total time: ${result.totalTime / 1000} seconds</p>`);
    } else {
        const dictionaryData = await getEntryAt(result.index);
        const html = `
            <div>
                <H3>Word found!</H3>
                <p>Inflected: ${dictionaryData.inflected}</p>
                <p>Headword: ${dictionaryData.headword}</p>
                <p>Homograph: ${dictionaryData.homograph}</p>
                <p>Part of speech: ${dictionaryData.partofspeech}</p>
                <p>Id: ${dictionaryData.id}</p>
            </div>
        `;
        searchResult.insertAdjacentHTML('beforeend', html);
        serverRequests.insertAdjacentHTML('beforeend', `<p>Number of server requests: ${result.iterations}</p>`);
        totalTime.insertAdjacentHTML('beforeend', `<p>Total time: ${result.totalTime / 1000} seconds</p>`);
    }
});

