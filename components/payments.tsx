const METHODS = [
  {
    name: 'UPI',
    image: '/images/upi.png',
  },
  {
    name: 'VISA',
    image: '/images/visa.png',
  },
  {
    name: 'Google Pay',
    image: '/images/gpay.png',
  },
  {
    name: 'PhonePe',
    image: '/images/phonepe.png',
  },
  {
    name: 'PayPal',
    image: '/images/paypal.png',
  },
  {
    name: 'Paytm',
    image: '/images/paytm.png',
  },
  {
    name: 'Bank IMPS / NEFT',
    image: '/images/bank.png',
  },
]

export function Payments() {
  return (
    <section
      id="payments"
      className="overflow-hidden bg-background/85 backdrop-blur-md py-12 sm:py-16"
    >
      {/* Heading */}
      <h2 className="text-center font-display text-4xl font-bold text-white sm:text-5xl">
        Payment We Accept
      </h2>

      {/* Payment Slider */}
      <div className="mt-10 overflow-hidden bg-yellow-400 py-4 sm:py-5">
        <div className="payment-track flex w-max items-center">
          {/* First set */}
          <div className="flex shrink-0 items-center gap-12 px-6 sm:gap-16 sm:px-8">
            {METHODS.map((method) => (
              <div
                key={method.name}
                className="flex h-16 min-w-[120px] items-center justify-center sm:min-w-[150px]"
              >
                <img
                  src={method.image}
                  alt={method.name}
                  className="max-h-14 max-w-[150px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless scrolling */}
          <div
            className="flex shrink-0 items-center gap-12 px-6 sm:gap-16 sm:px-8"
            aria-hidden="true"
          >
            {METHODS.map((method) => (
              <div
                key={`duplicate-${method.name}`}
                className="flex h-16 min-w-[120px] items-center justify-center sm:min-w-[150px]"
              >
                <img
                  src={method.image}
                  alt=""
                  className="max-h-14 max-w-[150px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}