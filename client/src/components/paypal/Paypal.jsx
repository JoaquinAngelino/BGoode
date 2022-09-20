import React, { useRef, useEffect } from "react";
import { getPrice } from '../Card/favAndCart'

export default function Paypal() {
  const paypal = useRef();


  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Instrument, PRUEBA",
              amount: {
                currency_code: "USD",
                value: getPrice(),
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: (err) => {
        console.log(err);
      },
    }).render(paypal.current)
  },[]);

  return (

    <div ref={paypal}></div>

  );
}