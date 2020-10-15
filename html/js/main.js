/* LOGIN/SIGN UP
–––––––––––––––––––––––––––––– */

$('#login').on('submit', event => {
	event.preventDefault();
	
	const email = $('#login #email').val();
	
	const alert = $('#login .alert');
	const alertText = $('#login .alert-copy');
	
	if (!email || !password) {
		alert.show();
		alertText.text('Please fill out all fields.');
	} else {
		alert.hide();
		console.log('Email Address:', email);
	}
});

$('#signup').on('submit', event => {
	event.preventDefault();
	
	const email = $('#signup #email').val();
	const username = $('#signup #username').val();
	const name = $('#signup #name').val();
	const location = $('#signup #location').val();
	
	const alert = $('#signup .alert');
	const alertText = $('#signup .alert-copy');
	
	if (!email || !password || !username || !name || !location) {
		alert.show();
		alertText.text('Please fill out all fields.');
	} else {
		alert.hide();
		console.log('Email Address:', email);
		console.log('Username:', username);
		console.log('Display name', name);
		console.log('Location', location);
	}
});



/* ALERT
–––––––––––––––––––––––––––––– */

$('.alert .close').on('click', () => {
	$('.alert').hide();
});



/* MENU MODAL
–––––––––––––––––––––––––––––– */

const menuButton = $('.menu-button');
const menuClose = $('.menu .close');
const menu = $('.menu');

menuButton.on('click', () => {
	menu.attr('style', 'opacity: 1');
	menu.show();
	return false;
});

menuClose.on('click', () => {
	menu.attr('style', 'opacity: 0');
	menu.hide();
	return false;
});



/* SAVE TO BOARD MODAL
–––––––––––––––––––––––––––––– */

const saveModal = $('.save-modal');

$('.card-image').on('click', () => {
	saveModal.attr('style', 'opacity: 1');
	saveModal.show();
	return false;
});

$('.save-modal .close').on('click', () => {
	saveModal.attr('style', 'opacity: 0');
	saveModal.hide();
	return false;
});

$('#saveToBoard').on('submit', event => {
	event.preventDefault();
	
	const alert = $('#saveToBoard .alert');
	const alertText = $('#saveToBoard .alert-copy');
	
	const board = $('#board').val();
	
	console.log('Board:', board);
	// Code to add image to board through image id
	
	alert.show();
	alertText.html('<strong>Success!</strong> This post has been saved to ' + board + '.');
	setTimeout(() => {
		alert.hide();
		saveModal.attr('style', 'opacity: 0');
		saveModal.hide();
		return false;
	}, 2000);
});



/* SORT BY
–––––––––––––––––––––––––––––– */

const sort = $('#sort');

sort.on('change', () => {
	if (sort.val() === 'Newest First') {
		console.log('Sort By:', sort.val());
		// Code to sort by date	
	} else if (sort.val() === 'Closest First') {
		console.log('Sort By:', sort.val());		
		// Code to sort by proximity/location		
	}
});



/* SEARCH RESULTS
–––––––––––––––––––––––––––––– */

const search = $('#search');
const searchResults = $('.search-results');
const searchPlaceholder = $('.search-instructions');

search.on('keyup', () => {
	if (search.val().length > 0) {
		searchPlaceholder.removeClass('d-flex').addClass('d-none');
		searchResults.show();
	} else {
		searchResults.hide();
		searchPlaceholder.removeClass('d-none').addClass('d-flex');
	}
});



/* IMAGE DROP
–––––––––––––––––––––––––––––– */

function readDisplayImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      $('.file-upload-content').attr('style', 'background-image: url(' + e.target.result + '); background-size: cover; background-position: center center;');
    };
    reader.readAsDataURL(input.files[0]);
    $('.remove-image').show();
  } else {
    removeToPlaceholder();
  }
}

function readReplaceImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      $('.file-upload-content').show().attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
    $('.image-upload-wrap').hide();
    $('.remove-image').show();
  } else {
    removeAndRestart();
  }
}

function removeToPlaceholder() {
	$('.file-upload-content').attr('style', 'background-image: url(https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80); background-size: cover; background-position: center center;');
	$('.remove-image').hide();
}

function removeAndRestart() {
	$('.image-upload-wrap').show();
	$('.file-upload-content').hide();
}



/* ADD POST
–––––––––––––––––––––––––––––– */

$('#add-post').on('submit', event => {
	event.preventDefault();
	console.log('Image:', $('#add-post .file-upload-content').attr('src'));
	console.log('Location:', $('#add-post #location').val());
	console.log('Caption:', $('#add-post #caption').val());
	console.log('Hashtags:', $('#add-post #hashtags').val());
});



/* SHORT DESCRIPTION
–––––––––––––––––––––––––––––– */

const pullCaption = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const cardText = $('.card-text');
const longText = pullCaption.split(' ');
const shortText = longText.slice(0, 10);

const less = '<span class="text">' + shortText.join(' ') + '</span><span class="more" onclick="showMore()"> … more</span>';
const more = '<span class="text">' + longText.join(' ') + '</span><span class="less" onclick="showLess()"> … less</span>';

cardText.html(less);

function showMore() {
	cardText.html(more);
}

function showLess() {
	cardText.html(less);
}