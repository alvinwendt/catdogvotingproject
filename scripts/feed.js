import { fetchVotes, getVotes } from "./dataAccess.js";

const displayFeedVotes = async () => {
    await fetchVotes();
    const votes = getVotes();
    let html = '';
    for (const vote of votes) {
        html += `
            <li class="vote">
                <img class="votedImg" src="${vote.url}" alt="${vote.animal}">
            </li>
        `
    }
    return html;
}



// ------------ DISPLAY ENTIRE FEED -----------------------------

export const displayFeed = () => {
    let html = `
        <h2>Recent Picks</h2>
        <ul id="feedVotes">
            ${displayFeedVotes()}
        </ul>
    `
    document.getElementById('feed').innerHTML = html;
}