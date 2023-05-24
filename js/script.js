AOS.init({
	startEvent: 'DOMContentLoaded',
});

// Появление хэдера при скролле
// Header appearing on scroll
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containShow = () => header.classList.contains('_show-header');

window.addEventListener('scroll', () => {
	const mainMenu = document.querySelector('.main__menu');
	if (mainMenu) {
		const mainMenuOffset = offset(mainMenu).top;
		const mainMenuHeight = mainMenu.offsetHeight;
		if (scrollPosition() >= (mainMenuOffset + mainMenuHeight) && !containShow()) {
			header.classList.add('_show-header');
		} else if (scrollPosition() <= (mainMenuOffset + (mainMenuHeight / 4)) && containShow()) {
			header.classList.remove('_show-header');
			burgerMenu.classList.remove('_menu-open');
			burger.classList.remove('_open');
			logo.classList.remove('_hide-logo');
		}
	}
});

// Открытие бургер-меню
// Opening the burger menu
const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__burger-menu');
burger.addEventListener('click', function () {
	this.classList.toggle('_open');
	burgerMenu.classList.toggle('_menu-open');
	header.classList.toggle('_without-shadow');
});

// Анимация появления элементов при скролле
// Animmation of the appearance of elements when scrolling
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if (scrollY > (animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else if (scrollY < (animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.remove('_active');
			}
		}
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);
}
// Получение позиции элемента от верхней границы страницы
// Get the position of the element from the top of the page
function offset(el) {
	if (el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}

// Плавное перемещение на вверх страницы по нажатию на кнопку Back to top
// Smooth transition to the top of the page on the click of a button
const scrollToTopBtn = document.querySelector('#scroll-to-top');

scrollToTopBtn.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

// Открытие модального окна карточек
// Opening portfolio card modal
const portfolioCards = document.querySelectorAll('.portfolio__cards__item');
const cardModal = document.querySelectorAll('.card-modal');
const cardModalOverlay = document.querySelectorAll('.card-modal-overlay');
const cardModalContent = document.querySelectorAll('.card-modal-content');
const body = document.querySelector('body');

portfolioCards.forEach(function (card) {
	card.addEventListener('click', openCardModal);
	function openCardModal() {
		for (let modal = 0; modal < cardModal.length; modal++) {
			for (let content = 0; content < cardModalContent.length; content++) {
				if (card.classList.contains('poster-card')) {
					cardModal[0].classList.add('_modal_active');
					cardModalContent[0].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				} else if (card.classList.contains('studio-card')) {
					cardModal[1].classList.add('_modal_active');
					cardModalContent[1].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				} else if (card.classList.contains('nardy-card')) {
					cardModal[2].classList.add('_modal_active');
					cardModalContent[2].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				} else if (card.classList.contains('culture-card')) {
					cardModal[3].classList.add('_modal_active');
					cardModalContent[3].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
				else if (card.classList.contains('product-card')) {
					cardModal[4].classList.add('_modal_active');
					cardModalContent[4].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
				else if (card.classList.contains('digitalize-card')) {
					cardModal[5].classList.add('_modal_active');
					cardModalContent[5].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
				else if (card.classList.contains('museum-card')) {
					cardModal[6].classList.add('_modal_active');
					cardModalContent[6].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
				else if (card.classList.contains('halloween-card')) {
					cardModal[7].classList.add('_modal_active');
					cardModalContent[7].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
				else if (card.classList.contains('calling-card')) {
					cardModal[8].classList.add('_modal_active');
					cardModalContent[8].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
				else if (card.classList.contains('recruitment-card')) {
					cardModal[9].classList.add('_modal_active');
					cardModalContent[9].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
				else if (card.classList.contains('practice-card')) {
					cardModal[10].classList.add('_modal_active');
					cardModalContent[10].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
				else if (card.classList.contains('recruitment2-card')) {
					cardModal[11].classList.add('_modal_active');
					cardModalContent[11].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
				else if (card.classList.contains('landing-card')) {
					cardModal[12].classList.add('_modal_active');
					cardModalContent[12].classList.add('_card-modal_active');
					body.classList.add('_hide-overflow');
					break;
				}
			}
			break;
		}
	}
});

// Закрытие модального окна карточек
// Closing portfolio card modal
cardModalOverlay.forEach(function (overlay) {
	cardModal.forEach(function (modal) {
		cardModalContent.forEach(function (content) {
			overlay.addEventListener('click', closeCardModal);
			function closeCardModal(e) {
				if (e.target == overlay) {
					modal.classList.remove('_modal_active');
					content.classList.remove('_card-modal_active');
					body.classList.remove('_hide-overflow');
				}
			}
		});
	});
});

const closeBtn = document.querySelectorAll('.close__modal-btn');
cardModal.forEach(function (modal) {
	cardModalContent.forEach(function (content) {
		closeBtn.forEach(function (close) {
			close.addEventListener('click', closeCardModal);
			function closeCardModal() {
				modal.classList.remove('_modal_active');
				content.classList.remove('_card-modal_active');
				body.classList.remove('_hide-overflow');
			}
		});
	});
});

// Открытие модальных изображений
// Opening gallery image modal
const images = document.querySelectorAll('.popup-image');
const galleryModal = document.querySelector('.gallery-modal');
const modalImg = document.querySelector('.gallery-modal__img');
const galleryModalOverlay = document.querySelector('.gallery-modal__overlay');

if (document.documentElement.clientWidth > 1024) {
	images.forEach(function (img) {
		img.addEventListener('click', () => {
			modalImg.src = img.src;
			galleryModal.classList.add('_gallery-modal_active');
			body.classList.add('_hide-overflow');
		});
	});
}

// Закрытие модальных изображений
// Closing gallery image modal
if (galleryModalOverlay) {
	galleryModalOverlay.addEventListener('click', function closeGalleryModal(e) {
		if (e.target == galleryModalOverlay) {
			galleryModal.classList.remove('_gallery-modal_active')
			body.classList.remove('_hide-overflow');
		}
	});
}

// Открытие плашек на мобильных устройствах
const openDie = document.querySelector('.open-die-list-btn');
const whiteDies = document.querySelector('.portfolio__dies__white');
const dies = document.querySelectorAll('.portfolio__cards__die');
if (openDie) {
	openDie.addEventListener('click', () => {
		dies.forEach(function (die) {
			die.classList.toggle('_show-dies');
		});
		whiteDies.classList.toggle('_portfolio__dies__white-active');
		openDie.classList.toggle('_opened-dies');
	});
}

// Сортировка карточек портфолио
var mixer = mixitup('.portfolio-page__cards', {
	load: {
		filter: '.all_cards',
	}
});