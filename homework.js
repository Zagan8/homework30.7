var Bank = /** @class */ (function () {
    function Bank(balance) {
        this.balance = balance;
    }
    Bank.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    Bank.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    return Bank;
}());
var acc1 = new Bank(1000);
var withdrawBtn = document.querySelector("#withdraw-btn");
var depositeBtn = document.querySelector("#deposit-btn");
var balanceBtn = document.querySelector("#balance-btn");
var msgDiv = document.querySelector("#msg");
withdrawBtn.addEventListener("click", function () {
    modal.style.display = "block";
    method = false;
});
depositeBtn.addEventListener("click", function () {
    method = true;
    modal.style.display = "block";
});
balanceBtn.addEventListener("click", function () {
    msgDiv.innerText = "Youre balance is " + acc1.balance;
});
var method;
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    modal.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
var enterBtn = document.querySelector("#enter-btn");
var modalInput = document.querySelector("#modal-input");
enterBtn.addEventListener("click", function () {
    if (parseInt(modalInput.value) < 0) {
        alert("The amount is not valid please try again!");
        return;
    }
    if (method) {
        console.log(method);
        acc1.deposit(parseInt(modalInput.value));
        msgDiv.innerText = "you have deposited " + modalInput.value;
        modal.style.display = "none";
        return;
    }
    acc1.withdraw(parseInt(modalInput.value));
    msgDiv.innerText = "you have withdrawed " + modalInput.value;
    modal.style.display = "none";
});
