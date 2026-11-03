
const boxes = document.querySelectorAll('.square');

boxes.forEach(box => {

    box.addEventListener("mouseover", (e) => {

        boxes.forEach(item => {

            if (item !== e.target) {
                item.style.backgroundColor = "#6F4E37";
            } 
            else {
                item.style.backgroundColor = "#E6E6FA";
            }

        });

    });

});
