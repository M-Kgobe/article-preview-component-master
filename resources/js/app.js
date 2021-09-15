const shareBtn = () => {
	const share = document.querySelector(".share");
	const btn = document.querySelector(".btn");

	btn.addEventListener("click", function () {
		share.classList.toggle("share-active");
		btn.classList.toggle('btn-active')

	});
};
const closeBtn = () => {
	const mobileBtn = document.querySelector('#mobile-btn')
	const share = document.querySelector('.share')
	const btn = document.querySelector(".btn");
	
	mobileBtn.addEventListener('click', function () {
		share.classList.add('share-close')
		btn.classList.remove('btn-active')
	})
};
shareBtn()
closeBtn()