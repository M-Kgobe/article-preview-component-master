const shareBtn = () => {
	const share = document.querySelector(".share");
	const btn = document.querySelector(".btn");

	btn.addEventListener("click", function () {
		share.classList.toggle("share-active");
		btn.classList.toggle("btn-active");
	});
};
const closeBtn = () => {
	const shareMobile = document.querySelector(".share");
	const mobileBtn = document.querySelector(".mobile-btn");

	mobileBtn.addEventListener("click", function () {
        shareMobile.classList.toggle("share-mobile");
        
    });
};

shareBtn();
closeBtn();