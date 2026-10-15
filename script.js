
const orderForm = document.getElementById("orderForm");
const orderMessage = document.getElementById("orderMessage");

if (orderForm && orderMessage) {
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const game = document.getElementById("game").value;
    const playerId = document.getElementById("playerId").value.trim();
    const packageName = document.getElementById("package").value.trim();
    const amount = Number(document.getElementById("amount").value);

    if (!game || !playerId || !packageName || !amount) {
      orderMessage.textContent = "Please fill in all fields.";
      return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      orderMessage.textContent = "Please enter a valid amount.";
      return;
    }

    const order = {
      game: game,
      playerId: playerId,
      package: packageName,
      amount: amount,
      createdAt: new Date().toISOString(),
      status: "Awaiting payment verification"
    };

    // This is a local preview only.
    // It does not send an order to the store owner.
    orderMessage.textContent =
      "Order details prepared! Game: " + order.game +
      " | Player ID: " + order.playerId +
      " | Package: " + order.package +
      " | Amount: LKR " + order.amount +
      ". Please contact the store to confirm your order.";

    console.log("Order preview:", order);
  });
                                         }
