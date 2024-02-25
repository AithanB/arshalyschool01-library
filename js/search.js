document.addEventListener('DOMContentLoaded', function() {
	let input = document.querySelector('#searchInput');

	input.addEventListener('keydown', function(event) {
			if (event.keyCode === 13) {
					event.preventDefault();
					searchBooks();
			}
	});
});


function searchBooks() {
	let input = document.querySelector('#searchInput').value.toUpperCase();
	let containers = document.querySelectorAll('.book-container');

	containers.forEach(function(container) {
			let bookName = container.querySelector('.book__name').textContent.toUpperCase();
			let author = container.querySelector('.book__author');
			let authorName = author ? author.textContent.toUpperCase() : '';

			var showBook = bookName.includes(input) || authorName.includes(input);
			container.style.display = showBook ? '' : 'none';
	});
}
