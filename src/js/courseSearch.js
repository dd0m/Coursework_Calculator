
// Search Courses Function


let searchable = [
    'HMLS',
    'CPST',
    'MATH',
    'KINE',
    'BIOLOGY',
    'HISTORY'
];

const searchInput = document.getElementById('search');
const searchCourses = document.querySelector('.courses');
const resultsCourses = document.querySelector('.results');


searchInput.addEventListener('keyup', () => {
     let results = [];
     let input = searchInput.value;
     if (input.length) {
         results = searchable.filter((item) => {
             return item.toLowerCase().includes(input.toLowerCase());
         });
     }


     renderResults(results);
});

function renderResults(results) {
    if(!results.length) {
        return searchCourses.classList.remove('show');
    }

    let content = results
        .map((item) => {
        return `<li>${item}</li>`
        })
        .join('');

    searchCourses.classList.add('show');
    resultsCourses.innerHTML = `<ul>${content}</ul>`;
}