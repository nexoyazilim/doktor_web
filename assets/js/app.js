(function () {
	'use strict';

	function selectOne(selector, scope) { return (scope || document).querySelector(selector); }
	function selectAll(selector, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(selector)); }

    document.addEventListener('DOMContentLoaded', initializeApp);
    // Partial yüklemesi sonrası yeniden başlatma desteği
    document.addEventListener('partials:loaded', initializeApp);
    // Opsiyonel global init kancası
    try { window.__initUI = initializeApp; } catch (_) {}

	function initializeApp() {
		updateCurrentYear();
		initializeLanguageSelector();
		initializeAccordions();
		initializeAppointmentForm();
		initializeMobileMenu();
		initializeSubmenus();
		initializeHeroSlider();
		initializeThemeToggle();
		initializeScrollReveal();
	}

	function updateCurrentYear() {
		var yearElement = selectOne('#year');
		if (yearElement) yearElement.textContent = String(new Date().getFullYear());
	}

	function initializeLanguageSelector() {
		var languageSelect = selectOne('#lang-select');
		var savedLanguage = localStorage.getItem('lang') || 'tr';
		if (languageSelect) {
			languageSelect.value = savedLanguage;
			languageSelect.addEventListener('change', function handleLanguageChange() {
				var selectedLanguage = languageSelect.value;
				localStorage.setItem('lang', selectedLanguage);
				loadTranslations(selectedLanguage);
			});
		}
		loadTranslations(savedLanguage);
	}

	function initializeAccordions() {
		selectAll('.accordion-item').forEach(function (item) {
			var headerButton = selectOne('.accordion-header', item);
			var panel = selectOne('.accordion-panel', item);
			if (!headerButton || !panel) return;
			headerButton.setAttribute('aria-expanded', 'false');
			headerButton.addEventListener('click', function toggleAccordion() {
				var isOpen = item.classList.toggle('open');
				headerButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			});
		});
	}

	function initializeAppointmentForm() {
		var formElement = selectOne('#appointment-form');
		if (!formElement) return;
		formElement.addEventListener('submit', function handleSubmit(event) {
			event.preventDefault();
			var formData = new FormData(formElement);
			var fullName = formData.get('name');
			alert('Teşekkürler ' + fullName + '! Talebiniz alındı.');
			formElement.reset();
		});
	}

    function initializeMobileMenu() {
        var toggleButton = selectOne('#mobile-menu-btn');
        var nav = selectOne('#primary-navigation') || selectOne('#menu');
        if (!toggleButton || !nav) return;
		toggleButton.addEventListener('click', function () {
			var isOpen = nav.classList.toggle('open');
			toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
		});
	}

	function initializeSubmenus() {
		// Desteklenen desenler: .has-submenu > a  ve  .mega-menu-item > .mega-menu-link
		var submenuTriggers = selectAll('.has-submenu > a, .mega-menu-item > .mega-menu-link');
		if (!submenuTriggers.length) return;
		submenuTriggers.forEach(function (trigger) {
			trigger.addEventListener('click', function (event) {
				var isDesktop = window.matchMedia('(min-width: 900px)').matches;
				if (isDesktop) return; // desktop'ta hover ile açılır
				event.preventDefault();
				var parentItem = trigger.parentElement;
				var submenu = selectOne('.submenu, .mega-submenu', parentItem);
				if (!submenu) return;
				submenu.classList.toggle('open');
			});
		});
	}

    // Tedaviler ayrı sayfaya taşındı (tedaviler.html). Ana sayfada intercept kaldırıldı.

	// Opsiyonel: Dil seçenekleri aç/kapat
	(function initializeLanguageMenu() {
		var link = selectOne('#languages .selectLanguageLink');
		var modal = selectOne('#languages #languageOptions');
		if (!link || !modal) return;
		link.addEventListener('click', function (e) {
			e.preventDefault();
			modal.classList.toggle('open');
		});
		document.addEventListener('click', function (e) {
			var inside = e.target === modal || modal.contains(e.target) || e.target === link || link.contains(e.target);
			if (!inside) modal.classList.remove('open');
		});
	})();

	function initializeHeroSlider() {
		var slider = selectOne('.hero-slider');
		if (!slider) return;
		var slides = selectAll('.hero-slider .slide');
		var dotsContainer = selectOne('.hero-dots', slider);
		if (!slides.length) return;
		var currentIndex = 0;
		function show(index) {
			slides.forEach(function (s, i) { s.classList.toggle('active', i === index); });
			if (dotsContainer) selectAll('button', dotsContainer).forEach(function (d, i) { d.classList.toggle('active', i === index); });
			currentIndex = index;
		}
		function next() { show((currentIndex + 1) % slides.length); }
		if (dotsContainer) {
			selectAll('button', dotsContainer).forEach(function (dot, i) { dot.addEventListener('click', function () { show(i); }); });
		}
		show(0);
		setInterval(next, 6000);
	}

	function loadTranslations(languageCode) {
		fetch('assets/i18n/' + languageCode + '.json')
			.then(function (response) { return response.json(); })
			.then(function (dictionary) { applyTranslations(dictionary); })
			.catch(function () { /* sessizce geç */ });
	}

	function applyTranslations(dictionary) {
		selectAll('[data-i18n]').forEach(function (element) {
			var i18nKey = element.getAttribute('data-i18n');
			var translated = getValueByPath(dictionary, i18nKey) || element.textContent;
			if (typeof translated === 'string') {
				var tag = element.tagName;
				if (tag === 'INPUT' || tag === 'TEXTAREA') {
					element.setAttribute('placeholder', translated);
				} else {
					element.textContent = translated;
				}
			}
		});
		document.title = getValueByPath(dictionary, 'site.title') || document.title;
	}

	function getValueByPath(object, path) {
		return path.split('.').reduce(function (current, part) {
			return current && current[part] != null ? current[part] : undefined;
		}, object);
	}

	function initializeThemeToggle() {
		var root = document.documentElement;
		var saved = localStorage.getItem('theme') || 'light';
		if (saved === 'dark') root.classList.add('dark');
		var toggle = selectOne('#theme-toggle');
		if (!toggle) return;
		toggle.addEventListener('click', function () {
			var isDark = root.classList.toggle('dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
	}

	function initializeScrollReveal() {
		var elements = selectAll('.reveal');
		if (!elements.length) return;
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });
		elements.forEach(function (el) { observer.observe(el); });
	}
})();
