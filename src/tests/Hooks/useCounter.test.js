// import React from "react";
import { useCounter } from "../../Hooks/useCounter copy";
import {
   renderHook,
   act,
} from "@testing-library/react-hooks";

describe("Pruebas soble el <useCounter/>", () => {
   // ------------------------------------------------------------
   test("debe de retornar los valore por defecto", () => {
      const { result } = renderHook(() => useCounter());

      // console.log(result);

      expect(result.current.counter).toBe(10);
      expect(typeof result.current.increment).toBe(
         "function"
      );
      expect(typeof result.current.decrement).toBe(
         "function"
      );
      expect(typeof result.current.reset).toBe("function");
   });

   // ------------------------------------------------------------
   test("debe de retornar un numero x ", () => {
      const { result } = renderHook(() => useCounter(1000));

      expect(result.current.counter).toBe(1000);
   });

   // ------------------------------------------------------------
   test("debe de incriementar el counter en 1", () => {
      const { result } = renderHook(() => useCounter(100));
      const { increment } = result.current;

      act(() => {
         increment();
      });
      const { counter } = result.current;

      expect(counter).toBe(101);
   });

   // ------------------------------------------------------------
   test("debe de decrementar en 1", () => {
      const { result } = renderHook(() => useCounter(100));
      const { decrement } = result.current;
      act(() => {
         decrement();
      });

      const { counter } = result.current;
      expect(counter).toBe(99);
   });

   // ------------------------------------------------------------
   test("debe de resetear el counter", () => {
      const { result } = renderHook(() => useCounter(200));
      const { increment, reset } = result.current;
      act((e) => {
         increment();
         reset();
      });

      const { counter } = result.current;
      expect(counter).toBe(200);
   });

   // ------------------------------------------------------------
});
