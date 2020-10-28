const {
   renderHook,
} = require("@testing-library/react-hooks");

const { useFetch } = require("../../Hooks/useFetch");

describe("pruebas en el useFetch", () => {
   
   // -----------------------------------------------------
   test("debe de retornarla informacion por defecto", () => {
      const url = `https://www.breakingbadapi.com/api/quotes/1`;
      const { result } = renderHook(() => useFetch(url));
      const { data, loading, error } = result.current;

      expect(data).toBe(null);
      expect(loading).toBe(true);
      expect(error).toBe(null);
   });

   // -----------------------------------------------------
   test("debe tener la info deceada, loading (false), error (null)", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
         useFetch(
            `https://www.breakingbadapi.com/api/quotes/1`
         )
      );
      await waitForNextUpdate();

      const { data, loading, error } = result.current;
      expect(data.length).toBe(1);
      expect(loading).toBe(false);
      expect(error).toBe(null);
   });

   // -----------------------------------------------------
   test("debe de manegar el error ", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
         useFetch("https://reqres.in/apid/users?page=2")
      );
      await waitForNextUpdate();

      const { data, loading, error } = result.current;

      expect(data).toBe(null);
      expect(loading).toBe(false);
      expect(error).toBe("no se pudo cargar la info");
   });
});
