class Bank {
  constructor(public balance: number) {}
  withdraw(amount): void {
    this.balance -= amount;
  }
  deposit(amount): void {
    this.balance += amount;
  }
}

const acc1: Bank = new Bank(1000);

const withdrawBtn = document.querySelector("#withdraw-btn");
const depositeBtn = document.querySelector("#deposit-btn");
const balanceBtn = document.querySelector("#balance-btn");
const msgDiv: any = document.querySelector("#msg");

withdrawBtn.addEventListener("click", () => {
  modal.style.display = "block";
  method = false;
});
depositeBtn.addEventListener("click", () => {
  method = true;
  modal.style.display = "block";
});
balanceBtn.addEventListener("click", () => {
  msgDiv.innerText = `Youre balance is ${acc1.balance}`;
});

let method: Boolean;

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const enterBtn = document.querySelector(`#enter-btn`);
const modalInput: any = document.querySelector(`#modal-input`);
enterBtn.addEventListener("click", () => {
  if (parseInt(modalInput.value) < 0) {
    alert("The amount is not valid please try again!");
    return;
  }
  if (method) {
    console.log(method);
    acc1.deposit(parseInt(modalInput.value));
    msgDiv.innerText = `you have deposited ${modalInput.value}`;
    modal.style.display = "none";
    return;
  }
  acc1.withdraw(parseInt(modalInput.value));
  msgDiv.innerText = `you have withdrawed ${modalInput.value}`;
  modal.style.display = "none";
});
