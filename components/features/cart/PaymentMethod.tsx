export default function PaymentMethod() {
  const paymentMethods = [
    {
      id: 1,
      name: "Bank Transfer",
      value: "bank-transfer",
    },
    {
      id: 2,
      name: "Cash on Delivery",
      value: "cash-on-delivery",
    },
  ];

  return (
    <div className="space-y-4">
      {paymentMethods.map((method) => (
        <label
          key={method.id}
          className="flex items-center gap-3 rounded border border-gray-300 px-4 py-3"
        >
          <input
            type="radio"
            name="payment-method"
            value={method.value}
            className="checked:border-neutral-1000 checked:bg-neutral-1000 h-4 w-4 appearance-none rounded-full border border-gray-300"
          />
          <span className="text-2xl font-medium">{method.name}</span>
        </label>
      ))}
    </div>
  );
}
