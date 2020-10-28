const { useForm } = require("../../Hooks/useForm");
const {
   renderHook,
   act,
} = require("@testing-library/react-hooks");

describe("Pruebas en el <useForm/>", () => {
   const inicialForm = {
      name: "Gerarodo",
      email: "gerardo@yo.com",
   };

   // ---------------------------------------------------------------
   test("debe de regresar un formulario por defecto", async () => {
      const { result } = renderHook(() =>
         useForm(inicialForm)
      );

      const [
         values,
         handleInpuChange,
         reset,
      ] = result.current;

      expect(values).toEqual(inicialForm);
      expect(typeof handleInpuChange).toBe("function");
      expect(typeof reset).toBe("function");
   });

   // ---------------------------------------------------------------
   test("debe de cambiar el valor del formulario (cambiar name)", () => {
      const { result } = renderHook(() =>
         useForm(inicialForm)
      );

      const [, handleInputChange] = result.current;

      const newData = {
         target: {
            name: "name",
            value: "Yeraldo",
         },
      };

      act(() => {
         handleInputChange(newData);
      });

      const [values] = result.current;
      
      expect(values).toEqual({
         ...inicialForm,
         name: "Yeraldo",
      });
   });

   // ---------------------------------------------------------------
   test("debe de restablecer el formulario con RESET", () => {
      const { result } = renderHook(() =>
         useForm(inicialForm)
      );
      const [, handleInputChange, reset] = result.current;

      act(() => {
         handleInputChange({
            target: {
               name: "name",
               value: "yooodd",
            },
         });
         reset();
      });

      const [values] = result.current;
      expect(values).toEqual(inicialForm);
   });
});
